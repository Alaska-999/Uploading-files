import './App.css';
import React, {useState} from "react";
import axios from "axios";

function App() {
    //состояние отвечает за то перенесен ли файл в область загрузки или нет
    const [drag, setDrag] = useState(false)

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        console.log(files)
        //отправление файлов на сервер
        // const formData = new FormData()
        // formData.append('file', files[0])
        // formData.append('userId', 1)
        // axios.post('url', formData)
        setDrag(false)
    }

    return (
        <div className="app">
            {drag
                ? <div
                    className='drop-area'
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >
                    Release file to upload
            </div>
                : <div
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                >
                    Drag file to upload
                </div>
            }
        </div>
    );
}

export default App;
