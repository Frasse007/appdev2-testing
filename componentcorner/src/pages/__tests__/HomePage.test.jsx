import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

describe ('HomePage', () => {
    test('Should render without crashing', () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        )
    });

    test('Checks that main content is displayed', () => {
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        );
        expect(screen.getByText('Welcome to Component Corner!')).toBeInTheDocument()
        expect(screen.getByText('Why Shop With Us?')).toBeInTheDocument()
    })
});