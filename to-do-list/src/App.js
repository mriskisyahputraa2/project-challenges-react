import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function App() {

  // task (todo list) state
  const [todo, setTodo] = useState([
    {"id":1, "title": "Task 1", "status": false}, // jika true berarti tugas selesai dan jika false sebaliknya
    {"id":2, "title": "Task 2", "status": false},
  ]);


  // temp task / tugas data sementara 
  const [newTask, setNewTask] = useState(''); // digunakan untuk menyimpan data sementara yang ditambahkan user
  const [updateData, setUpdateData] = useState(''); // digunakan untuk menahan data yang sedang di update 


  // Add Task / menambahkan tugas
  const addTask = () => {
    
  } 


  // Delete Task / Hapus Data
  const deleteTask = (id) => {
    
  }
  
  
  // Mark task as done or completed / menandai tugas sudah complit
  const completedTask = (id) => {

  }


  // Cancel Update
  const cancelUpdate = () => {

  }

  // Change task for Update 
  const changeTask = (e) => {

  }

  // Update task
  const UpdateTask = () => {

  }

  return (
    <>
      <div className='App'>
        <h1 className='text-center text-3xl font-roboto font-medium text-white my-12'>To Do List</h1>


      {/* Display Todos */}
      </div>
        {todo && todo.length ? '' : <p className='text-center text-green-500 text-bold'>No Task....</p>}
      <div>
        <div>
          {todo && todo.map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                  <div className='flex flex-wrap bg-emerald-700 shadow-lg shadow-indigo-500/40 rounded-xl mb-3 px-4 py-3 text-left text-lg relative mx-auto max-w-sm'>

                    {/* jika status nya sama dengan done maka coret text nya */}    
                    <div className={task.status ? 'done' : ''}>
                      <span className=' inline-block border-solid border-2 rounded-full border-slate-300 w-[25px] h-[25px] text-white text-center mr-[8px] mb-2 text-sm'>{index + 1}</span>
                      <span className='taskText text-white '>{task.title}</span>
                    </div>

                    <div className='ml-auto cursor-pointer'>
                      <span className='mr-2 text-green-500 hover:text-green-600'>
                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                      </span>
                      <span className='mr-2 text-yellow-500 hover:text-yellow-600'>
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </span>
                      <span className='mr-2 text-red-500 hover:text-red-600'>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                      </span>
                    </div>
                  </div>

              </React.Fragment>
            )
          })}
        </div>
      </div>

    </>
  );
}

export default App;