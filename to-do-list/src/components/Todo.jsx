import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faPen,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
function Todo({ todo, completedTask, setUpdateData, deleteTask }) {
    return (<>
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
    </>)
}

export default Todo