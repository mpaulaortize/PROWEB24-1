/*import './Form.css'
import { useState } from 'react'

export function Form(){

    const {inputState, setInputState} = useState()
    const {task, setTask} = useState([])

    const inputChange = (event) => {
        console.log(event.target.value)
    }

    const createTask = (taskName) => {

        setTask(t => [...t, inputState])
        setInputState("")
    }
        
    return(
        <>
            <h2>Manage your task</h2>
            <form>
                <div className='add-container'>
                    <input type="text" placeholder='Escribe tu tarea' onChange={inputChange} />
                    <Button/>
                </div>
                <TaskCard name='Task 1' bgColor='#FF8A09'/>
            </form>
        </>

    )
}

export function Button(){
   
    return(
        <button onClick={createTask}>+</button>
    )
}

export function TaskCard(props){
    
    const {name, bgColor, state} = props

    return(
        <>
            <div className='task-card-container' style={{backgroundColor: bgColor}}>
                <p>{name}</p>
                <div className='card-state'>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}*/

import React, { useState, useEffect, useReducer } from "react";
import "./Form.css";

function taskReducer(tasks, action) {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [
        ...tasks,
        { id: crypto.randomUUID(), name: action.payload, completed: false },
      ];
    case "TOGGLE_TASK_COMPLETED":
      return tasks.map((task, index) =>
        index === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE_TASK":
      return tasks.filter((_, index) => index !== action.payload);
    case "DELETE_COMPLETED_TASKS":
      return tasks.filter((task) => !task.completed);
    default:
      return tasks;
  }
}

export function Form() {
  const [taskName, setTaskName] = useState("");
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useState("all");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      dispatch({ type: "SET_TASKS", payload: storedTasks });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTaskName(inputValue);
    setIsInputEmpty(inputValue === "");
  };

  const addTask = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: taskName });
      setTaskName("");
      setIsInputEmpty(true);
    }
  };

  const toggleTaskCompleted = (index) => {
    dispatch({ type: "TOGGLE_TASK_COMPLETED", payload: index });
  };

  const deleteTask = (index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch({ type: "DELETE_TASK", payload: index });
    }
  };

  const deleteCompletedTasks = (event) => {
    event.preventDefault();
    if (tasks.some((task) => task.completed)) {
      if (
        window.confirm("Are you sure you want to delete all completed tasks?")
      ) {
        dispatch({ type: "DELETE_COMPLETED_TASKS" });
      }
    } else {
      alert("No completed tasks to delete.");
    }
  };

  const countPendingTasks = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  return (
    <>
      <h2 className="tittle">Small steps everyday</h2>
      <form>
        <div className="add-container">
          <input
            type="text"
            placeholder="Add task"
            value={taskName}
            onChange={handleInputChange}
          />
          <button
            className={`add-button ${isInputEmpty ? "inactive" : "active"}`}
            onClick={addTask}
            disabled={isInputEmpty}
          >
            +
          </button>
        </div>
        {tasks
          .filter((task) => {
            if (filter === "completed") {
              return task.completed;
            } else if (filter === "pending") {
              return !task.completed;
            } else {
              return true;
            }
          })
          .map((task, index) => (
            <TaskCard
              key={index}
              name={task.name}
              completed={task.completed}
              toggleTaskCompleted={() => toggleTaskCompleted(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        <div className="line"></div>
        <div className="filter-conunter">
          <Counter count={countPendingTasks()} />
          <FilterButtons setFilter={setFilter} />
          <button className="ckecked-botton" onClick={deleteCompletedTasks}>
            Delete checked
          </button>
        </div>
      </form>
    </>
  );
}

export function Button(props) {
  const { addTask } = props;

  return <button onClick={addTask}>+</button>;
}

// Form.js
export function TaskCard(props) {
  const { name, completed, toggleTaskCompleted, deleteTask } = props;

  return (
    <div className={`task-card-container ${completed ? "completed" : ""}`}>
      <label className="checkbox-label">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={completed}
          onChange={toggleTaskCompleted}
        />
        <span className="checkmark"></span>
      </label>
      <span className="task-name">{name}</span>
      <button className="button-delete" onClick={deleteTask}>
        Delete Task
      </button>
    </div>
  );
}

function Counter({ count }) {
  return <p>{count} item(s) left</p>;
}

function FilterButtons({ setFilter }) {
  const handleFilterClick = (event, filter) => {
    event.preventDefault();
    setFilter(filter);
  };

  return (
    <div className="filter-button">
      <button onClick={(event) => handleFilterClick(event, "all")}>All</button>
      <button onClick={(event) => handleFilterClick(event, "completed")}>
        Completed
      </button>
      <button onClick={(event) => handleFilterClick(event, "pending")}>
        Pending
      </button>
    </div>
  );
}
