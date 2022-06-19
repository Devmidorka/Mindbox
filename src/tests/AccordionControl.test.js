import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";

describe('Accordion control', () => {

    test('Accordion event', () => {
        render(<App />)
        const btn = screen.getByTestId('toggle-button')
        expect(screen.queryByTestId('todo-list')).toBeInTheDOM()
        fireEvent.click(btn)
        expect(screen.queryByTestId('todo-list')).toBeNull()
    })

})