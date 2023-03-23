import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import AddToDoComponent from './AddToDoComponent.jsx'

export default function Todos(props) {

  return (

    <div style={{ "display": "flex", "width": "100%", "minHeight": "100vh" }}>
      <section className='DisplayTodoItems' style={{ "width": "65%", "height": "50%"}}>
        <div className='container'>
          <h3 className='text-center my-3'>
            Todos List
          </h3>
          {props.todos.length == 0 ? "No Todos to display" :
            <div style={{ "display": "grid", "gridTemplateColumns": "auto auto auto" }}>
              {props.todos.map((todo) => {
                return (<Todo todo={todo} key={todo.sno} onDelete={() => props.onDelete(todo)}  onComplete={()=>props.addComp(todo)} />)
              })}
            </div>
          }


        </div>
      </section>
      <AddToDoComponent addToDo={props.addToDo} comptodos={props.comptodos} onDeleteComp={props.onDeleteComp} />
    </div>

  )
}
