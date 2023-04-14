import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function App() {
  // task (todo list) state
  const [todo, setTodo] = useState([]);

  // temp task / tugas data sementara
  const [newTask, setNewTask] = useState(""); // digunakan untuk menyimpan data sementara yang ditambahkan user

  const [updateData, setUpdateData] = useState(""); // digunakan untuk menahan data yang sedang di update

  // Add Task / menambahkan tugas
  const addTask = () => {
    // jika newTask sudah diisi
    if (newTask) {
      let num = todo.length + 1; // maka + id nya data nya simpan dalam num
      let newEntry = { id: num, title: newTask, status: false }; // then data masuk, id menjadi num, title menjadi newTask and status menjadi false supaya datanya tidak ke complate
      setTodo([...todo, newEntry]); // newEntry sudah ada data, dan data tsb disimpan oleh v-todo didalam setTodo
      setNewTask(""); // jika sudah tampil hilangkan data yang dimasukkan didalamn input
    }
  };

  // Delete Task / Hapus Data
  const deleteTask = (id) => {
    let newTasks = todo.filter((task) => task.id !== id); // jadi intinya ini akan menghapus task yang ada di todo berdasarkan id nya dan
    setTodo(newTasks); // data didalam setTodo akan di hapus oleh kondisi yg ada didalam newTasks
  };

  // Mark task as done or completed / menandai tugas sudah complit
  const completedTask = (id) => {
    let newTask = todo.map((task) => {
      // mengambil data array dari todo
      if (task.id === id) {
        // jika task.id sama dengan id dari array
        return { ...task, status: !task.status }; // maka kembalikan object task menjadi complate jika status true menjadi false begitu pun sebalikanya
      }
      return task;
    });
    setTodo(newTask);
  };

  // Cancel Update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for Update
  const changeTask = (e) => {
    // menyimpan objek data untuk digunakan mengupdate data
    let newEntry = {
      id: updateData.id, // sesuai dengan id
      title: e.target.value, // title sesuai dengan yang di ketikkan oleh user todo
      status: updateData.status ? true : false, // jika data nya true maka akan true begitupun sebaliknya
    };
    setUpdateData(newEntry);
  };

  // Update task
  const UpdateTask = () => {
    let filterRecords = [...todo].filter((task) => task.id !== updateData.id); // mengmbil semua data dari todo dan mengfilter task id tidak sama dengan update id maka
    let updateObject = [...filterRecords, updateData]; // updateObject nya darai data todo yang sudah tersimpan di filterRecords dari v-updateData
    setTodo(updateObject); // data updateObject di simpat ke setTodo
    setUpdateData(""); // jika berhasil maka input akan kosong dengan tanda ''
  };

  return (
    <>
      {/* judul */}
      <div className="App">
        <h1 className="text-center font-roboto text-7xl font-extrabold text-amber-300 drop-shadow-lg my-12 uppercase">
          To Do List
        </h1>
        {/* end judul */}


        {/* jika user ingin update data maka */}
        {updateData && updateData ? (
          <>
          {/* akan manampilkan input update data beserta data yang mau di update */}
            {/* update task */}
            <div>
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className=" rounded-lg p-2 mb-3 w-[22rem] mr-2"
                type="text"
                placeholder="Update Task..."
              />
              <button
                onClick={UpdateTask}
                className="bg-green-500 hover:bg-green-600 hover:text-white p-2 rounded-lg mr-2">
                Update
              </button>
              <button 
                onClick={cancelUpdate}
                className="bg-yellow-500 hover:bg-yellow-600 hover:text-white p-2 rounded-lg">
                Cancel
              </button>
            </div>

            {/* end update task */}
          </>

          // jika user tidak mau update data maka
        ) : (
          <>

          {/* akan menampilkan input add data ke user  */}
            {/* Add Task */}
            <div>
              <input
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                className=" rounded-lg p-2 mb-3 w-[24rem] mr-2"
                type="text"
                placeholder="Add Task..."
              />
              <button
                onClick={addTask}
                className="bg-green-500 hover:bg-green-600 hover:text-white px-10 py-2 rounded-lg ">
                Add
              </button>
            </div>
            {/* end add task */}
          </>
        )}


        {/* Display Todos */}
      </div>
      {todo && todo.length ? (
        ""
      ) : (
        <p className="text-center text-slate-900 text-bold font-roboto">
          No Task....
        </p>
      )}
      <div>
        <div>
          {todo &&
            todo
              .sort((a, b) => (a.id > b.id ? 1 : -1)) // sort digunakan mengurutkan data pada array sebelum di tampilkan supaya id data tidak ambur radur
              .map((task, index) => {
                // melooping array
                return (
                  <React.Fragment key={task.id}>
                    <div className="flex flex-wrap bg-emerald-700 shadow-lg shadow-indigo-500/40 rounded-xl mb-3 px-4 py-3 text-left text-lg relative max-w-lg mx-auto">
                      {/* jika status nya sama dengan done maka coret text nya */}
                      <div className={task.status ? "done" : ""}>
                        <span className=" inline-block border-solid border-2 rounded-full border-slate-300 w-[25px] h-[25px] text-white text-center mr-[8px] mb-2 text-sm">
                          {index + 1}
                        </span>
                        <span className="taskText text-white ">
                          {task.title}
                        </span>
                      </div>
                      {/* end bagian data */}

                      {/* bagian button */}
                      <div className="ml-auto cursor-pointer">
                        {/* button complete */}
                        <span
                          onClick={(e) => completedTask(task.id)}
                          className="Completed / Not Completed mr-2 text-green-500 hover:text-green-600">
                          <FontAwesomeIcon
                            icon={faCircleCheck}></FontAwesomeIcon>
                        </span>
                        {/* end button complete */}

                        {/* button edit */}
                        {task.status ? null : ( // jika task status complete maka hilangkan icons edit jadikan null
                          <span
                            onClick={() =>
                              setUpdateData({
                                id: task.id,
                                title: task.title,
                                status: task.status ? true : false,
                              })
                            }
                            className="Edit mr-2 text-yellow-500 hover:text-yellow-600">
                            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                          </span>
                        )}
                        {/* end button edit */}

                        {/* button delete */}
                        <span
                          onClick={() => deleteTask(task.id)}
                          className="Delete mr-2 text-red-500 hover:text-red-600">
                          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                        </span>
                        {/* end button delete */}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default App;
