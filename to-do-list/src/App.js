import "./App.css";

import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdataTodo";
import Todo from "./components/Todo";

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
            <UpdateTodo
            updateData={updateData}
            changeTask={changeTask}
            UpdateTask={UpdateTask}
            cancelUpdate={cancelUpdate}
            />

            {/* end update task */}
          </>

          // jika user tidak mau update data maka
        ) : (
          <>
            {/* add Todo */}
            <AddTodo
              setNewTask={setNewTask}
              newTask={newTask}
              addTask={addTask}
            />
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
     <Todo
     todo={todo}
    completedTask={completedTask}
     setUpdateData={setUpdateData}
      deleteTask={deleteTask}
     />
    </>
  );
}

export default App;
