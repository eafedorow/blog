import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/test/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Render test', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('Increment', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('Decrement', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
