import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe('Control panel', () => {

    test('Input event', () => {
        render(<App/>)
        const input = screen.getByPlaceholderText(/what needs to be done?/i)
        expect(input).toContainHTML('')
        fireEvent.input(input, {
            target: {value: 'New task'}
        })
        expect(input).toContainHTML('New task')
    })

    test('Creating task', async() => {
        render(<App/>)

        const input = screen.getByPlaceholderText(/what needs to be done?/i)
        userEvent.type(input, 'new task')
        expect(input).toContainHTML('new task')

        expect(await screen.findAllByTestId('todo-item')).toHaveLength(3)
        userEvent.type(input, '{enter}')

        expect(await screen.findAllByTestId('todo-item')).toHaveLength(4)
        expect(input).toContainHTML('')
    })

})