import Box from "./Box"
// import './Board.css'

function Board({ board, onClick }) {
    return (
        <>
            <div className="flex justify-center flex-wrap w-full sm:w-1/4 mx-auto ">
                {board.map((value, idx) => {
                    return <>
                        {/* jika button sudah ditekan maka value === null tidak bisa menggantikan value  */}
                        <Box value={value} onClick={() => value === null && onClick(idx)} />
                    </>
                })}
            </div>
            {/* <div className="board">
                {board.map((value, idx) => {
                    return <>
                        <Box value={value} onClick={() => onClick(idx)} />
                    </>
                })}
            </div> */}
        </>
    )
}

export default Board
