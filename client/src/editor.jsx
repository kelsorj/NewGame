import React from 'react';
import ReactDOM from 'react-dom/client';
import MapEditorPage from './MapEditorPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('editor-root')).render(
    <React.StrictMode>
        <MapEditorPage />
    </React.StrictMode>
);

