// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chainPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/chainPulse/i);
    expect(titleElement).toBeInTheDocument();
});
