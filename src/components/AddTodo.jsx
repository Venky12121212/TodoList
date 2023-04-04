import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo, updateTodo } from '../redux/actions'
import { Grid, Button } from '@material-ui/core'

export const AddTodo = () => {
    const [value, setValue] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isEdit = useSelector((state) => state.todoReducer.isEdit);
  const editTodo = useSelector((state) => state.todoReducer.editTodo);

  useEffect(() => {
    editTodo && setValue(() => editTodo);
  }, [editTodo]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!value?.title) {
      setError((error) => ({
        ...error,
        title: 'Please enter todo title',
      }));
      return;
    }
    if (!value?.description) {
      setError((error) => ({
        ...error,
        description: 'Please enter todo description'
      }));
      return;
    }

    if (isEdit) {
      dispatch(updateTodo(editTodo.id, value));
    }
    else {
      dispatch(addNewTodo(value));
    }
    setValue({title: '', description: ''});
    document.getElementById("todoForm").reset();
  };

  const changeEvent = (e) => {
    setValue(
      {
        ...value,
        [e.target.name]: e.target.value,
      },
    );
    if (e?.target?.name === "title") {
      setError({
        title: "",
      });
    }
    if (e?.target?.name === "description") {
      setError({
        description: ""
      });
    }
  };

    return (
      <>
        <Grid container direction="row">
          <form className="MainForm" id="todoForm" onSubmit={onSubmit}>
            <Grid item className="eachField" xs={3}>
              <label className="eachLabel">Name</label>
              <input
                type="text"
                name="title"
                className="eachInput"
                defaultValue={value?.title}
                onChange={(e) => changeEvent(e)}
              />
              <span className="textError">{error?.title}</span>
            </Grid>
            <Grid item className="eachField" xs={3}>
              <label className="eachLabel">Description</label>
              <input
                type="text"
                name="description"
                className="eachInput"
                defaultValue={value?.description}
                onChange={(e) => changeEvent(e)}
              />
              <span className="textError">{error?.description}</span>
            </Grid>
            
              <button type="submit" variant="contained"> {isEdit ? 'Update Todo' : 'Create Todo' }</button>
          </form>
        </Grid>
      </>
    );
}