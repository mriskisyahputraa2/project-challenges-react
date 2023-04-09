import './css/ScoreBoard.css'
function ScoreBoard({ scores, xPlaying }) {
    const { xScore, oScore } = scores;

    return (<>
        <div className="flex items-center justify-center flex-row w-[20rem] mx-auto text-[1.5em] bg-gray-300 my-6 rounded-lg font-bold drop-shadow-[0_0_8px_#888]">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
            <span className={`score y-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
        </div>

    </>)
}
export default ScoreBoard