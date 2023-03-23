import './App.css';
import Header from './MyComponents/Header.jsx';
import Todos from './MyComponents/Todos.jsx';
import Footer from './MyComponents/Footer.jsx';
import About from './MyComponents/About.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let sno;
  let initTodo;
  let initComp;
  let compsno;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  if (localStorage.getItem("comptodos") === null) {
    initComp = [];
  }
  else {
    initComp = JSON.parse(localStorage.getItem("comptodos"));
  }
  const addToDo = (title, desc,time) => {
    console.log('Adding: ', title, "\n", desc);
    if (todos.length == 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      time:Date().substring(0,25).toLocaleString(),
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const addComp=(todo)=>{
    if (comptodos.length == 0) {
      compsno = 1;
    }
    else {
      compsno = comptodos[comptodos.length - 1].compsno + 1;
    }
    const mycompTodo = {
      sno: compsno,
      title: todo.title,
      time:Date().substring(0,25).toLocaleString(),
    }
    setCompTodos([...comptodos, mycompTodo]);
    console.log(mycompTodo);
    onDelete(todo)

  }
  const onDelete = (todo) => {
    console.log("Pressed Delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const onDeleteComp = (todo) => {
    console.log("Pressed Delete of comptodo", todo);
    setCompTodos(comptodos.filter((e) => {
      return e !==todo
    }));
    localStorage.setItem("comptodos", JSON.stringify(comptodos));

  }
  
  let myVariable = "My First React APP :)";
  const [todos, setTodos] = useState(initTodo);
  const [comptodos, setCompTodos] = useState(initComp);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(()=>{
    localStorage.setItem("comptodos", JSON.stringify(comptodos));
  }, [comptodos]);
  return (
    <>
      <Router>
      <Header title="TodoApp" searchBar={true} />
      <Routes>
          <Route exact path="/todolist" element=
              {<Todos todos={todos} comptodos={comptodos} onDelete={onDelete} addToDo={addToDo} addComp={addComp} onDeleteComp={onDeleteComp}/>}>
          </Route>

          <Route exact path="/todolist/about" element={<About/>} >
          </Route> 
          
      </Routes> 
      
      <Footer />
      </Router>
    </>
  );
}

export default App;
