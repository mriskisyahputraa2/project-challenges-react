import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function App() {

  // task (todo list) state
  const [todo, setTodo] = useState([
    {"id":2, "title": "Task 2", "status": false},
    {"id":1, "title": "Task 1", "status": false}, // jika true berarti tugas selesai dan jika false sebaliknya
  ]);


  // temp task / tugas data sementara 
  const [newTask, setNewTask] = useState(''); // digunakan untuk menyimpan data sementara yang ditambahkan user

  const [updateData, setUpdateData] = useState(''); // digunakan untuk menahan data yang sedang di update 


  // Add Task / menambahkan tugas
  const addTask = () => {
    // jika newTask sudah diisi
    if(newTask) {
      let num = todo.length + 1; // maka + id nya data nya simpan dalam num
      let newEntry = {id: num, title: newTask, status: false}; // then data masuk, id menjadi num, title menjadi newTask and status menjadi false supaya datanya tidak ke complate
      setTodo([...todo, newEntry]); // newEntry sudah ada data, dan data tsb disimpan oleh v-todo didalam setTodo
      setNewTask(''); // jika sudah tampil hilangkan data yang dimasukkan didalamn input
    }
  } 


  // Delete Task / Hapus Data
  const deleteTask = (id) => {
    let newTasks = todo.filter(task => task.id !== id); // jadi intinya ini akan menghapus task yang ada di todo berdasarkan id nya dan
    setTodo(newTasks); // data didalam setTodo akan di hapus oleh kondisi yg ada didalam newTasks
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
    {/* judul */}
      <div className='App'>
        <h1 className='text-center font-roboto text-7xl font-extrabold text-amber-300 drop-shadow-lg my-12 uppercase'>To Do List</h1>
    {/* end judul */}


      {/* update task */}
        <div className='flex flex-nowrap justify-center my-4 max-w-screen'>
        <input 
        className='p-2 rounded-lg mr-1'
        placeholder='Edit Task...'
        type='text'/>
        <div>
          <button 
          className='bg-green-600 hover:bg-green-700 rounded-md p-2 text-white mr-1'
          >Update</button>
          <button 
          className='bg-yellow-600 hover:bg-yellow-700 rounded-md p-2 text-white'
          >Cancel</button>
        </div>
      </div>
    {/* end change task */}


      {/* Add Task */}
      <div className='flex flex-nowrap justify-center my-4 relative'>
        <input 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Add Task...'
        className='p-2 rounded-lg mr-7 '
        type='text'/>
        <div>
          <button 
          onClick={addTask}
          className='bg-green-600 hover:bg-green-700 rounded-md p-2 text-white'
          >Add Task</button>
        </div>
      </div>
    {/* end add task */}


      {/* Display Todos */}
      </div>
        {todo && todo.length ? '' : <p className='text-center text-slate-900 text-bold font-roboto'>No Task....</p>}
      <div>
        <div>
          {todo && todo
          .sort((a,b) => a.id > b.id ? 1 : -1) // sort digunakan mengurutkan data pada array sebelum di tampilkan supaya id data tidak ambur radur
          .map((task, index) => { // melooping array
            return (
              <React.Fragment key={task.id}>
                  <div className='flex flex-wrap bg-emerald-700 shadow-lg shadow-indigo-500/40 rounded-xl mb-3 px-4 py-3 text-left text-lg relative max-w-lg mx-auto'>

                    {/* jika status nya sama dengan done maka coret text nya */}    
                    <div className={task.status ? 'done' : ''}>
                      <span className=' inline-block border-solid border-2 rounded-full border-slate-300 w-[25px] h-[25px] text-white text-center mr-[8px] mb-2 text-sm'>{index + 1}</span>
                      <span className='taskText text-white '>{task.title}</span>
                    </div>
                    {/* end bagian data */}


                    {/* bagian button */}
                    <div className='ml-auto cursor-pointer'>

                      {/* button complete */}
                      <span className='Completed / Not Completed mr-2 text-green-500 hover:text-green-600'>
                        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                      </span>
                      {/* end button complete */}


                      {/* button edit */}
                      <span className='Edit mr-2 text-yellow-500 hover:text-yellow-600'>
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                      </span>
                      {/* end button edit */}


                      {/* button delete */}
                      <span
                      onClick={() => deleteTask(task.id)}
                      className='Delete mr-2 text-red-500 hover:text-red-600'>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                      </span>
                      {/* end button delete */}

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