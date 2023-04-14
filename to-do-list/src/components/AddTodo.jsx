function AddTodo({ newTask, addTask, setNewTask }) {
  return (
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
  );
}

export default AddTodo;
