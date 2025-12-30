import { MapEditor3DCanvas } from './MapEditor3DCanvas';

export const MapEditor = ({ onBackToGame }) => {
    return (
        <div>
            <MapEditor3DCanvas onBackToGame={onBackToGame} />
        </div>
    );
};

