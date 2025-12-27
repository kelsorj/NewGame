// GameDisplay Component - Displays game messages
import { useEffect, useRef } from 'react';

export const GameDisplay = ({ messages }) => {
    const displayRef = useRef(null);

    useEffect(() => {
        // Auto-scroll to bottom when new messages arrive
        if (displayRef.current) {
            displayRef.current.scrollTop = displayRef.current.scrollHeight;
        }
    }, [messages]);

    const getMessageClass = (type) => {
        switch (type) {
            case 'system':
                return 'message-system';
            case 'command':
                return 'message-command';
            case 'game':
                return 'message-game';
            case 'event':
                return 'message-event';
            case 'error':
                return 'message-error';
            default:
                return 'message-default';
        }
    };

    return (
        <div className="game-display" ref={displayRef}>
            {messages.map((message, index) => (
                <div key={index} className={`message ${getMessageClass(message.type)}`}>
                    {message.text}
                </div>
            ))}
        </div>
    );
};
