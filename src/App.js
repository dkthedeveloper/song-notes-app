import './App.css';
import Header from './Components/UI/Header';
import AudioRecorder from './Components/UI/AudioRecorder';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <AudioRecorder/>
      </main>
    </div>
  );
}

export default App;
