import { useContext, useState } from "react"
import { videoStore } from "../Data/video/VideoContext";


export function NewVideoForm(){
    const [, videoDispatch] = useContext(videoStore)
    const [title, setTitle] = useState("");
    const [duration, setDuretion] = useState("");
    const [url, setUrl] = useState("");
    const [cover, setCover] = useState("");

    function save(){
         const newVideo = {
            title,
            duration,
            url,
            cover
        };
        videoDispatch({
            type: "add",
            value: newVideo
        })
 
        reset();
    }
    function reset(){
        setCover("");
        setTitle("");
        setDuretion("");
        setUrl("");
    }

    return(
        <div className="form">
            <label>Titulo: </label>
            <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)}/>
            
            <label>Duração: </label>
            <input type="text" value={duration} onChange={(event)=> setDuretion(event.target.value)}/>
            
            <label>Video: </label>
            <input type="text" value={url} onChange={(event)=> setUrl(event.target.value)}/>
            
            <label>Capa: </label>
            <input type="text" value={cover} onChange={(event)=> setCover(event.target.value)}/>
      
            <button onClick={save}>Salvar</button>
        </div>
    )
}