function AddTodo(props) {
    return (<>

        {/* akan menampilkan input add data ke user  */}
        {/* Add Task */}
        <div>
            <input
                onChange={(e) => props.setNewTask(e.target.value)}
                value={props.newTask}
                className=" rounded-lg p-2 mb-3 w-[24rem] mr-2"
                type="text"
                placeholder="Add Task..."
            />
            <button
                onClick={props.addTask}
                className="bg-green-500 hover:bg-green-600 hover:text-white px-10 py-2 rounded-lg ">
                Add
            </button>
        </div>
        {/* end add task */}
    </>)
}

export default AddTodo