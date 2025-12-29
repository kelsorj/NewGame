import { MapEditor3DCanvas } from './MapEditor3DCanvas';

export const MapEditor = () => {
    return (
        <div>
            <div style={{ padding: '10px', background: '#1a1a2e', borderBottom: '2px solid #4a9eff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong>3D Canvas Map Editor</strong>
            </div>
            <MapEditor3DCanvas />
        </div>
    );
};

