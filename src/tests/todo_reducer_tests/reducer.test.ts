import {v1} from "uuid";
import {FilterValuesType, TodoListType} from "../../App";
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
    todolistsReducer
} from "./todolistsReducer";

test("remove todolist", () => {
    const todoListId_1 = v1()
    const todoListId_2 = v1()
    const startValue: TodoListType[] = [
        {id: todoListId_1, title: 'what to learn', filter: 'all'},
        {id: todoListId_2, title: 'what to buy', filter: 'active'}
    ]
    const action = RemoveTodolistAC(todoListId_2)

    const endValue = todolistsReducer(startValue, action)

    expect(endValue.length).toBe(1)
})
test("add todolist", () => {
    const todoListId_1 = v1()
    const todoListId_2 = v1()
    const startValue: TodoListType[] = [
        {id: todoListId_1, title: 'what to learn', filter: 'all'},
        {id: todoListId_2, title: 'what to buy', filter: 'active'}
    ]

    const newTitle = 'what to eat'
    const action = AddTodolistAC(newTitle)

    const endValue = todolistsReducer(startValue, action)

    expect(endValue.length).toBe(3)
    expect(endValue[2].title).toBe('what to eat')
    expect(endValue[2].filter).toBe('all')
})
test("change todolist title", () => {
    const todoListId_1 = v1()
    const todoListId_2 = v1()
    const startValue: TodoListType[] = [
        {id: todoListId_1, title: 'what to learn', filter: 'all'},
        {id: todoListId_2, title: 'what to buy', filter: 'active'}
    ]

    const title = 'work tasks'
    const action = ChangeTodolistTitleAC(title, todoListId_2)

    const endValue = todolistsReducer(startValue, action)

    expect(endValue.length).toBe(2)
    expect(endValue[1].title).toBe('work tasks')
    expect(startValue.length).toBe(2)
})
test("change todolist filter", () => {
    const todoListId_1 = v1()
    const todoListId_2 = v1()
    const startValue: TodoListType[] = [
        {id: todoListId_1, title: 'what to learn', filter: 'all'},
        {id: todoListId_2, title: 'what to buy', filter: 'active'}
    ]

    const newFilter: FilterValuesType = 'completed'
    const action = ChangeTodolistFilterAC(newFilter, todoListId_2)

    const endValue = todolistsReducer(startValue, action)

    expect(endValue.length).toBe(2)
    expect(endValue[1].filter).toBe('completed')
    expect(endValue[0].filter).toBe('all')
    expect(startValue.length).toBe(2)
})