// useWebSocket Hook - Custom hook for WebSocket connection
import { useState, useEffect, useCallback, useRef } from 'react';

export const useWebSocket = (url) => {
    const [isConnected, setIsConnected] = useState(false);
    const [messages, setMessages] = useState([]);
    const savedState = typeof window !== 'undefined' ? localStorage.getItem('playerState') : null;
    const [playerState, setPlayerState] = useState(savedState ? JSON.parse(savedState) : null);
    const [playerId, setPlayerId] = useState(null);
    const wsRef = useRef(null);
    const reconnectTimeoutRef = useRef(null);

    const connect = useCallback(() => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            return;
        }

        const ws = new WebSocket(url);

        ws.onopen = () => {
            console.log('WebSocket connected');
            setIsConnected(true);
            setMessages(prev => [...prev, {
                type: 'system',
                text: '✓ Connected to Middle Earth server'
            }]);
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                handleMessage(data);
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };

        ws.onclose = () => {
            console.log('WebSocket disconnected');
            setIsConnected(false);
            setMessages(prev => [...prev, {
                type: 'system',
                text: '✗ Disconnected from server. Reconnecting...'
            }]);

            // Attempt to reconnect after 3 seconds
            reconnectTimeoutRef.current = setTimeout(() => {
                connect();
            }, 3000);
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        wsRef.current = ws;
    }, [url]);

    const handleMessage = (data) => {
        switch (data.type) {
            case 'connected':
                setMessages(prev => [...prev, { type: 'system', text: data.message }]);
                break;

            case 'joined':
                setPlayerId(data.playerId);
                // Attempt to load saved state from server
                fetch(`http://localhost:3001/load/${data.playerId}`)
                    .then(res => {
                        if (!res.ok) throw new Error('No saved state');
                        return res.json();
                    })
                    .then(json => {
                        if (json.state) {
                            setPlayerState(json.state);
                            localStorage.setItem('playerState', JSON.stringify(json.state));
                        } else {
                            setPlayerState(data.playerState);
                            localStorage.setItem('playerState', JSON.stringify(data.playerState));
                        }
                    })
                    .catch(() => {
                        // No saved state, use the state from the server
                        setPlayerState(data.playerState);
                        localStorage.setItem('playerState', JSON.stringify(data.playerState));
                    });
                setMessages(prev => [...prev, {
                    type: 'system',
                    text: data.message
                }]);
                break;

            case 'game_output':
                setMessages(prev => [...prev, {
                    type: 'game',
                    text: data.message
                }]);
                if (data.playerState) {
                    setPlayerState(data.playerState);
                    // Persist to localStorage after each update
                    localStorage.setItem('playerState', JSON.stringify(data.playerState));
                }
                break;

            case 'room_event':
                setMessages(prev => [...prev, {
                    type: 'event',
                    text: `[${data.message}]`
                }]);
                break;

            case 'error':
                setMessages(prev => [...prev, {
                    type: 'error',
                    text: `ERROR: ${data.message}`
                }]);
                break;

            default:
                console.log('Unknown message type:', data.type);
        }
    };

    const sendMessage = useCallback((type, payload) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify({ type, ...payload }));
        } else {
            setMessages(prev => [...prev, {
                type: 'error',
                text: 'Not connected to server'
            }]);
        }
    }, []);

    const joinedNameRef = useRef('');

    const joinGame = useCallback((playerName) => {
        joinedNameRef.current = playerName;
        sendMessage('join', { playerName });
    }, [sendMessage]);

    const sendCommand = useCallback((command) => {
        if (command.trim()) {
            setMessages(prev => [...prev, {
                type: 'command',
                text: `> ${command}`
            }]);
            sendMessage('command', { command });
        }
    }, [sendMessage]);

    const clearMessages = useCallback(() => {
        setMessages([]);
    }, []);

    useEffect(() => {
        connect();

        return () => {
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [connect]);

    return {
        isConnected,
        messages,
        playerState,
        playerId,
        joinGame,
        sendCommand,
        clearMessages
    };
};
