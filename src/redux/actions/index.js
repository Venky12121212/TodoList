import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    MARK_COMPLETED,
    UPDATE_TODO
} from './actionTypes'

export const addNewTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload:{
            id : Date.now(),
            title: todo?.title,
            description: todo?.description
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload:{
            id: id
        },
        isEdit: true,
    }
}

export const updateTodo = (id, todo) => {
    return {
        type: UPDATE_TODO,
        payload:{
            todoId: id,
            todoTitle: todo?.title,
            todoDescription: todo?.description,
        },
    };
};

export const markTodoCompleted = (id) => {
    return {
      type: MARK_COMPLETED,
      payload:{
        selectedTodoId: id
      }
    };
}