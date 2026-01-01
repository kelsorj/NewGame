import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        // Since we don't know exactly what's in App, we'll just check if it renders.
        // A more specific test would be check for specific text, but this is a smoke test.
        expect(true).toBe(true);
    });
});
