import {fireEvent, render, screen} from "@testing-library/react";
import App from "../App";

describe('TodoItem', () => {

    test('Change task state', async() => {
        render(<App/>)

        expect(await screen.findAllByTestId('completed-task')).toHaveLength(1)
        const uncompletedTask = await screen.findAllByTestId('uncompleted-task')
        for(let i = 0 ; i < uncompletedTask.length; i++){
            fireEvent.click(uncompletedTask[i])
        }
        expect(await screen.findAllByTestId('completed-task')).toHaveLength(3)
        expect(await screen.queryByTestId('uncompleted-task')).toBeNull()
    })

})