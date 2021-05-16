import './App.css';
import {VideoList} from "./Ui/VideoList";
import {NewVideoForm} from "./Ui/NewVideoForm";
import {VideoPlayer} from "./Ui/VideoPlayer";
import {VideoContext} from "./Data/video/VideoContext";
function App() {
  return (
    <div className="App">
      <VideoContext>
        <VideoList/>
        <VideoPlayer/>
        <NewVideoForm/>
      </VideoContext>
    </div>
  );
}

export default App;
