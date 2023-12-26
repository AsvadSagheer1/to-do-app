import Button from './components/Button';
import Input from './components/Input';
import './App.css'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [editIndex, setEditIndex] = useState(-1)


  const handleClick = (params, x) => {
    const temp = [...todos]
    if (isEdit) {
      temp[editIndex] = { name: input, markDone: false };
      setTodos(temp)
      setInput("")
      setIsEdit(false)
      setEditIndex(-1)
    } else {
      if (input !== "") {
        temp.push({ name: input, markDone: false })
        setTodos(temp)
        setInput("")
      } else {
        alert("Type something in the box!")
      }
    }
  }

  const deleteAll = () => {
    setTodos([])
  }

  const handleDelete = (index) => {
    const temp = [...todos]
    temp.splice(index, 1)
    setTodos(temp)
  }

  const handleEdit = (index) => {
    const { name } = todos[index]
    setIsEdit(true);
    setInput(name)
    setEditIndex(index)
  }

  const handleMarkDone = (index) => {
    const allTodos = [...todos]
    const todo = allTodos[index]
    todo.markDone = true
    setTodos(allTodos)
  }

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("allTodos", JSON.stringify(todos));
    }, 50);
  }, [todos])

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("allTodos")))
  }, [])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='container-fluid text-center my-5 row justify-content-center'>
      <div className="col-md-6 py-5 px-4 bg-light rounded" style={{ maxWidth: "400px" }}>
        <div className="input-group mb-3">
          <Input
            className="form-control fw-medium"
            value={input}
            onChange={(e) => {
              handleInput(e)
            }}
            placeholder="&#x2b; Add a new task"
            aria-describedby="button-addon2" />
          <Button id="button-addon2" onClick={handleClick}>
            {isEdit ? "Edit Todo" : "Add Todo"}
          </Button>
        </div>
        <Button btnClass="mx-2 my-2" onClick={deleteAll}>
          Remove All Todos
        </Button>
        {todos.map((item, i) =>
          <>
            <br />
            <Input style={{ height: "22px", width: "22px" }} className="form-check-input my-2 mx-2" type="checkbox" value={item.markDone} isChecked={item.markDone ? "checked" : null} isDisabled={item.markDone ? "disabled" : null} onClick={() => handleMarkDone(i)} />
            <p className={item.markDone ? "text-decoration-line-through" : ""} style={{ display: "inline-block", minWidth: "200px", maxWidth: "200px" }} key={i}>{item.name}</p>
            <Button btnClass="btn-sm mx-2 my-2" onClick={() => handleDelete(i)}><FontAwesomeIcon icon={faTrash} /></Button>
            <Button btnClass="btn-sm mx-2 my-2" isDisabled={item.markDone ? "disabled" : ""} onClick={() => handleEdit(i)}><FontAwesomeIcon icon={faPenToSquare} /></Button>
          </>
        )
        }
      </div>
    </div >
  )
}

export default App;
