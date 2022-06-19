import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";

describe('InfoPanel', () => {

    test('Active button', async() => {
        render(<App/>)
        const activeButton = screen.getByTestId('button-active')
        expect(await screen.findAllByTestId('completed-task')).toHaveLength(1)
        fireEvent.click(activeButton)
        expect(await screen.queryByTestId('completed-task')).not.toBeInTheDOM()
        expect(await screen.findAllByTestId('uncompleted-task')).toHaveLength(2)
        const uncompletedTask = await screen.findAllByTestId('uncompleted-task')
        for(let i = 0 ; i < uncompletedTask.length; i++) {
            fireEvent.click(uncompletedTask[i])
        }
        expect(await screen.queryByTestId('uncompleted-task')).toBeNull()
    })

    test('Completed button', async() => {
        render(<App/>)
        const completedButton = screen.getByTestId('button-completed')
        expect(await screen.findAllByTestId('completed-task')).toHaveLength(1)
        fireEvent.click(completedButton)
        expect(await screen.findAllByTestId('completed-task')).toHaveLength(1)
        expect(screen.queryByTestId('uncompleted-task')).toBeNull()
    })

    test('Clear button', async() => {
        render(<App/>)
        const clearCompletedButton = screen.getByTestId('clear-completed-button')
        expect(await screen.findAllByTestId('completed-task')).toHaveLength(1)
        fireEvent.click(clearCompletedButton)
        expect(screen.queryByTestId('completed-task')).toBeNull()
    })

})