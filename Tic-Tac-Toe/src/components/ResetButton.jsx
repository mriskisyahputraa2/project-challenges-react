function ResetButton({ resetBoard }) {
    return (<>
        <button
            onClick={resetBoard}
            className="flex mx-auto mt-5 bg-blue-500 hover:bg-blue-600 hover:text-white px-5 py-2 rounded-lg">Reset</button>
    </>)
}
export default ResetButton