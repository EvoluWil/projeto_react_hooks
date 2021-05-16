import { createContext, useReducer } from "react";
import { videoInitialState, videoReducer } from "./videoReducer";



export const videoStore = createContext(videoInitialState)
const {Provider} = videoStore;

export function VideoContext(props){

    const [state, dispatch] = useReducer(videoReducer, videoInitialState);
    return(
        <Provider value={[state, dispatch]}>
            {props.children}
        </Provider>
    )
}