import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { TimeService } from "../Data/Services/TimerServices";
import { videoStore } from "../Data/video/VideoContext";

export function VideoPlayer(){
    const [videoState] = useContext(videoStore)
    const video = videoState.selectedVideo;
    const progressTimer = useRef();
    const videoRef = useRef(); 
    const [isPlaying, setPlay] = useState(false)
    const [progress, setProgress] = useState(0)

    const totalTime = useMemo(()=>TimeService.formatTime(video.duration), [video])

    useEffect(()=>{
        const videoElement = videoRef.current;
        videoElement.addEventListener("play", play);
        videoElement.addEventListener("pause", pause);
        videoElement.addEventListener("seeked", onProgress);
        setTime(0)
        pause();
        return ()=>{
            videoElement.removeEventListener("play", play);
            videoElement.removeEventListener("pause", pause);
            videoElement.removeEventListener("seeked", onProgress);
        }
    }, [video]);

    useEffect(()=>{
        clearInterval(progressTimer.current)
        if(isPlaying){
           progressTimer.current = setInterval(onProgress, 1000)
        }
    }, [isPlaying])

    function play(){
        videoRef.current.play();
        setPlay(true)
    }   
    function pause(){
        videoRef.current.pause();
        setPlay(false)
    }
    function onProgress(){
       setProgress (videoRef.current.currentTime);
        
    }
    function onChangeProgress(event){
        setTime(event.target.value);
    }
    function setTime(time){
        videoRef.current.currentTime = time;
        onProgress();
    }

    return(
        <div className="video-player">
            <video src={video.url} ref={videoRef}></video>
            {video.url &&(
                <>
                    <div className="controls">
                        <button onClick={isPlaying ? pause : play}>{isPlaying ? "||" : "I>"}</button>
                        <span> {TimeService.formatTime(Math.round(progress))} / {totalTime}</span>
                        <input type="range" value={progress} onChange={onChangeProgress} min={0} max={video.duration} step={.1} />
                    </div>
                    <h2>{video.title}</h2>            
                </>
            )}
        </div>
    )
}