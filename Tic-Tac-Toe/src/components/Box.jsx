import React from 'react';
import './css/Box.css'

function Box({ value, onClick }) {
    const style = value === "X" ? "box x" : "box o";

    return (
        // <div className='bg-slate-100 w-20 h-20 leading-[5rem] text-6xl font-bold font-fredoka text-center drop-shadow-[0_0px_8px_#888] hover:drop-shadow-[0_0px_15px_#888] m-4 rounded-lg'>
        //     <div>

        //     </div>
        // </div>
        <button className={style} onClick={onClick}>{value}</button>

    )
}

export default Box