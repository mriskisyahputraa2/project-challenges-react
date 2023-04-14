function UpdateTodo(props) {
    return (<>
        <div>
            <input
                value={props.updateData && props.updateData.title}
                onChange={(e) => props.changeTask(e)}
                className=" rounded-lg p-2 mb-3 w-[22rem] mr-2"
                type="text"
                placeholder="Update Task..."
            />
            <button
                onClick={props.UpdateTask}
                className="bg-green-500 hover:bg-green-600 hover:text-white p-2 rounded-lg mr-2">
                Update
            </button>
            <button
                onClick={props.cancelUpdate}
                className="bg-yellow-500 hover:bg-yellow-600 hover:text-white p-2 rounded-lg">
                Cancel
            </button>
        </div>
    </>)
}

export default UpdateTodo