import Header from './Components/UI/Header';
import AudioRecorder from './Components/UI/AudioRecorder';
import TextArea from './Components/UI/TextArea';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <TextArea/>
      <AudioRecorder/>
      </main>
    </div>
  );
}

export default App;
