// Main App Component
import { useState } from 'react';
import { useWebSocket } from './hooks/useWebSocket';
import { GameDisplay } from './components/GameDisplay';
import { CommandInput } from './components/CommandInput';
import { PlayerStatus } from './components/PlayerStatus';
import { WorldMap } from './components/WorldMap';
import { MapEditor } from './components/MapEditor';
import './App.css';

const WS_URL = 'ws://localhost:3001';

function App() {
    const [playerName, setPlayerName] = useState('');
    const [hasJoined, setHasJoined] = useState(false);
    const [showEditor, setShowEditor] = useState(false);

    const {
        isConnected,
        messages,
        playerState,
        activePlayers,
        joinGame,
        sendCommand
    } = useWebSocket(WS_URL);

    const handleJoin = (e) => {
        e.preventDefault();
        if (playerName.trim() && isConnected) {
            joinGame(playerName.trim());
            setHasJoined(true);
        }
    };

    const handleCommand = (command) => {
        sendCommand(command);
    };

    // Show editor if URL has ?editor=true or if showEditor is true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('editor') === 'true' || showEditor) {
        return (
            <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '10px', background: '#1a1a2e', borderBottom: '2px solid #4a9eff', position: 'relative', zIndex: 1000 }}>
                    <button 
                        onClick={() => {
                            setShowEditor(false);
                            window.history.pushState({}, '', '/');
                        }}
                        style={{ padding: '10px 20px', cursor: 'pointer', marginRight: '10px' }}
                    >
                        ← Back to Game
                    </button>
                    <strong>World Map Editor</strong>
                </div>
                <MapEditor />
            </div>
        );
    }

    return (
        <div className="app">
            <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
                <button
                    onClick={() => {
                        setShowEditor(true);
                        window.history.pushState({}, '', '?editor=true');
                    }}
                    style={{
                        padding: '8px 16px',
                        background: '#4a9eff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                    }}
                    title="Open Map Editor"
                >
                    🗺️ Editor
                </button>
            </div>
            <div className="game-container">
                <div className="main-panel">
                    <div className="header">
                        <h1 className="title">🏔️  MIDDLE EARTH ADVENTURE 🏔️</h1>
                        <div className="connection-status">
                            {isConnected ? (
                                <span className="status-connected">● Connected</span>
                            ) : (
                                <span className="status-disconnected">● Disconnected</span>
                            )}
                        </div>
                    </div>

                    {!hasJoined ? (
                        <div className="join-screen">
                            <div className="join-container">
                                <div className="ascii-art">
                                    <pre>{`
    ___________
   /           \\
  |  WELCOME TO |
  |   MIDDLE    |
  |    EARTH    |
   \\___________ /
        | |
        | |
       /   \\
`}</pre>
                                </div>

                                <p className="join-description">
                                    Embark on an epic adventure through Middle Earth!<br />
                                    Explore mysterious lands, battle fearsome enemies,<br />
                                    solve ancient puzzles, and collect legendary treasures.
                                </p>

                                <form onSubmit={handleJoin} className="join-form">
                                    <input
                                        type="text"
                                        value={playerName}
                                        onChange={(e) => setPlayerName(e.target.value)}
                                        placeholder="Enter your name, adventurer..."
                                        className="join-input"
                                        maxLength={20}
                                        autoFocus
                                        disabled={!isConnected}
                                    />
                                    <button
                                        type="submit"
                                        className="join-button"
                                        disabled={!isConnected || !playerName.trim()}
                                    >
                                        Begin Adventure
                                    </button>
                                </form>

                                {!isConnected && (
                                    <div className="connection-warning">
                                        ⚠️  Connecting to server...
                                    </div>
                                )}

                                <div className="join-tips">
                                    <strong>Quick Tips:</strong>
                                    <ul>
                                        <li>Type 'help' for a list of commands</li>
                                        <li>Use arrow keys to navigate command history</li>
                                        <li>Multiple players can explore together!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <GameDisplay messages={messages} />
                            <CommandInput
                                onCommand={handleCommand}
                                disabled={!isConnected || !hasJoined}
                            />
                        </>
                    )}
                </div>

                {hasJoined && (
                    <>
                        <div className="left-sidebar">
                            <PlayerStatus playerState={playerState} activePlayers={activePlayers} />

                            <div className="help-panel">
                                <div className="help-header">💡 Quick Commands</div>
                                <div className="help-commands">
                                    <div><code>look</code> - Examine surroundings</div>
                                    <div><code>go [dir]</code> - Move direction</div>
                                    <div><code>take [item]</code> - Pick up item</div>
                                    <div><code>inventory</code> - View items</div>
                                    <div><code>attack [enemy]</code> - Fight</div>
                                    <div><code>use [item]</code> - Use/equip</div>
                                    <div><code>help</code> - Full command list</div>
                                </div>
                            </div>
                        </div>

                        <div className="right-sidebar">
                            <WorldMap playerState={playerState} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
