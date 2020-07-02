import React, { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import { db } from "../services/firebase";
import {toast} from 'react-toastify'


function Todo() {
  const [taks, setTask] = useState([]);
  const addOrEditTodo = async (todoObject) => {
   if(todoObject === ''){
       toast('You have to add a task', {
           type: 'info',
           autoClose: 2500,
       })
   }else{
       await db.collection("todos").doc().set(todoObject);
       toast('New Todo added sucessfully',{
           type: 'success',
           autoClose: 1500,
       })
   }
   

  };
  const getTodo = async () => {
    db.collection("todos").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setTask(docs);
    });
  };
  const onDeleteTodo = async (id) => {
      if(window.confirm('are you sure you want to delete this Todo')){
          await db.collection('todos').doc(id).delete();
          toast('Todo removed sucessfully',{
            type: 'error',
            autoClose: 1500,
        })
      }
  }
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <>
      {taks.map((tak) => {
        return (
          <ul className="list-group" key={tak.id}>
            <li className="list-group-item d-flex justify-content-between col-12">{tak.value}
            <div></div>
            <i className="fas fa-times text-danger" onClick={()=> onDeleteTodo(tak.id)}></i></li> 

          </ul>
        );
      })}
      <NewTodo addOrEditTodo={addOrEditTodo}/>
    </>
  );
}

export default Todo;
