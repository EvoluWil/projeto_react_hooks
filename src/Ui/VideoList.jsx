import { useContext, useMemo } from "react";
import { videoStore } from "../Data/video/VideoContext";
import { Video } from "./Video"

export function VideoList(){

    const [videoState, videoDispatch] = useContext(videoStore);
    const videoList = useMemo(()=>{
        function onClick(video){
            videoDispatch({
                type: "select",
                value: video
            })
        }
        return videoState.videos.map(item => (
            <Video key={item.url} onClick={onClick} video={item}/>
        ));    

    }, [videoState.video, videoDispatch])


    return(
        <ul className="list">

            {videoList}

        </ul>


    )
}