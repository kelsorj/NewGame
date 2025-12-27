// PlayerStatus Component - Shows player stats
import { formatItem } from '../utils/formatItem.js';

export const PlayerStatus = ({ playerState, activePlayers = 0 }) => {
    if (!playerState) {
        return (
            <div className="player-status">
                <div className="status-header">⚔️  MIDDLE EARTH ADVENTURE</div>
                <div className="status-message">Not in game</div>
            </div>
        );
    }

    const hpPercentage = (playerState.hp / playerState.maxHp) * 100;
    const getHpColor = () => {
        if (hpPercentage > 60) return '#4ade80';
        if (hpPercentage > 30) return '#facc15';
        return '#f87171';
    };

    return (
        <div className="player-status">
            <div className="status-header">
                <span>⚔️  {playerState.name}</span>
                <span className="online-count">👥 {activePlayers} Online</span>
            </div>

            <div className="stat-group">
                <div className="stat-row">
                    <span className="stat-label">❤️  HP:</span>
                    <div className="hp-bar-container">
                        <div
                            className="hp-bar"
                            style={{
                                width: `${hpPercentage}%`,
                                backgroundColor: getHpColor()
                            }}
                        />
                        <span className="hp-text">{playerState.hp}/{playerState.maxHp}</span>
                    </div>
                </div>

                <div className="stat-row">
                    <span className="stat-label">⚔️  ATK:</span>
                    <span className="stat-value">{playerState.attack}</span>
                </div>

                <div className="stat-row">
                    <span className="stat-label">🛡️  DEF:</span>
                    <span className="stat-value">{playerState.defense}</span>
                </div>

                <div className="stat-row">
                    <span className="stat-label">📈 LVL:</span>
                    <span className="stat-value">{playerState.level}</span>
                </div>

                <div className="stat-row">
                    <span className="stat-label">💰 Gold:</span>
                    <span className="stat-value">{playerState.gold}</span>
                </div>
            </div>

            <div className="inventory-summary">
                <div className="inventory-header">🎒 Inventory ({playerState.inventory.length})</div>
                {playerState.inventory.length > 0 ? (
                    <div className="inventory-list">
                        {playerState.inventory.slice(0, 5).map((item, idx) => (
                            <div key={idx} className="inventory-item">• {formatItem(item)}</div>
                        ))}
                        {playerState.inventory.length > 5 && (
                            <div className="inventory-item">... and {playerState.inventory.length - 5} more</div>
                        )}
                    </div>
                ) : (
                    <div className="inventory-empty">Empty</div>
                )}
            </div>

            {playerState.equipment && Object.keys(playerState.equipment).length > 0 && (
                <div className="equipment-summary">
                    <div className="equipment-header">⚔️  Equipped</div>
                    {playerState.equipment.weapon && (
                        <div className="equipment-item">🗡️  {formatItem(playerState.equipment.weapon)}</div>
                    )}
                    {playerState.equipment.armor && (
                        <div className="equipment-item">🛡️  {formatItem(playerState.equipment.armor)}</div>
                    )}
                </div>
            )}
        </div>
    );
};
