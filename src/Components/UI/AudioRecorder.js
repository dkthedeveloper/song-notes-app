import { React, useState, useEffect } from "react";
import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";

import "./AudioRecorder.css";

const AudioRecorder = (props) => {
  const [isRecording, changeRecState] = useState(false);
  const [recordings, addRecording] = useState([]);

  const useRecorderPermission = (recordingType: RecordRTC.Options["type"]) => {
    const [recorder, setRecorder] = useState(null);
    useEffect(() => {
      getPermissionInitializeRecorder();
    }, []);
    const getPermissionInitializeRecorder = async () => {
      let stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      let recorder = new RecordRTCPromisesHandler(stream, {
        type: recordingType,
      });
      setRecorder(recorder);
    };
    return recorder;
  };

  const addRecordingHandler = (url) => {
    let recording = {
      id: Math.random().toString(),
      url: url,
    };
    addRecording([...recordings, recording]);
  };

  const recorder = useRecorderPermission("audio");
  const startRecording = async () => {
    recorder.startRecording();
    changeRecState(true);
  };

  const stopRecording = async () => {
    await recorder.stopRecording();
    let blob = await recorder.getBlob().then((blob) => {
      console.log(blob);
      return blob;
    });
    addRecordingHandler(URL.createObjectURL(blob));
    changeRecState(false);
    setTimeout(() => {
      console.log(recordings); // This is where you can send the recordings to the server
    }, 3000);
  };

  const deleteRecording = (id) => {
    let updatedRecordings = recordings.filter(
      (recording) => recording.id !== id
    );
    addRecording(updatedRecordings);
  };

  return (
    <div className="audio-recorder">
      <audio id="recorder" muted={true}></audio>
      <div className="holder">
        <div data-role="controls">
          <button
            className={isRecording ? "stop" : "record"}
            onClick={
              !isRecording ? () => startRecording() : () => stopRecording()
            }
          >
            Record
          </button>
        </div>
      </div>
      <ul className="recordings">
        {recordings.map((recording) => (
          <li key={recording.id} id={recording.id}>
            <audio controls src={recording.url} />
            <a
              className="download-link"
              href={recording.url}
              download="filename.mp3"
            >
              Download
            </a>
            <a
              className="delete-button"
              onClick={() => deleteRecording(recording.id)}
            >
              Delete
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioRecorder;
