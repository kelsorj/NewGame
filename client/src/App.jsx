// Main App Component
import { useState } from 'react';
import { useWebSocket } from './hooks/useWebSocket';
import { GameDisplay } from './components/GameDisplay';
import { CommandInput } from './components/CommandInput';
import { PlayerStatus } from './components/PlayerStatus';
import './App.css';

const WS_URL = 'ws://localhost:3001';

function App() {
    const [playerName, setPlayerName] = useState('');
    const [hasJoined, setHasJoined] = useState(false);

    const {
        isConnected,
        messages,
        playerState,
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

    return (
        <div className="app">
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
                    <div className="sidebar">
                        <PlayerStatus playerState={playerState} />

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
                )}
            </div>
        </div>
    );
}

export default App;
