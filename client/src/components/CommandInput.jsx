// CommandInput Component - Input for game commands
import { useState, useRef, useEffect } from 'react';

export const CommandInput = ({ onCommand, disabled }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);

    useEffect(() => {
        // Auto-focus input
        if (inputRef.current && !disabled) {
            inputRef.current.focus();
        }
    }, [disabled]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim() && !disabled) {
            onCommand(input.trim());

            // Add to history
            setHistory(prev => [...prev, input.trim()]);
            setHistoryIndex(-1);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        // Arrow up - previous command
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            }
        }

        // Arrow down - next command
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(history[history.length - 1 - newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="command-input-form">
            <span className="prompt">&gt;</span>
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={disabled ? "Join the game first..." : "Enter command..."}
                disabled={disabled}
                className="command-input"
                autoComplete="off"
                spellCheck="false"
            />
        </form>
    );
};
