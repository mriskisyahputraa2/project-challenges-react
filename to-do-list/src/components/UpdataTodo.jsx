function UpdateTodo({ updateData, changeTask, UpdateTask, cancelUpdate }) {
  return (
    <>
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
    </>
  );
}

export default UpdateTodo;
