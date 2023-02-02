import { React, useState } from "react";
import vmsg from 'vmsg';
import { record } from "vmsg";
import './AudioRecorder.css';

const AudioRecorder = (props) => {

    const [isRecording, changeRecState] = useState(false);
    const [isLoading, changeLoadState] = useState(false);
    const [recordings, addRecording] = useState([]);

    const recorder = new vmsg.Recorder({
        wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
    });

    /*const addRecordingHandler = (recording) => {
        addRecording((prevRecordings) => {
            return recordings.concat(recording)
        })
    }*/


    const recordAudio = async () => {
        changeLoadState(true);
        

        if (isRecording) {
           const blob = await recorder.stopRecording();
           changeLoadState(false);
           changeRecState(false);
           recordings.concat(URL.createObjectURL(blob));
        }  else {
                try {
                    await recorder.initAudio();
                    await recorder.initWorker();
                    recorder.startRecording();
                    changeLoadState(false);
                    changeRecState(true);
                } catch (e) {
                    console.error(e);
                    changeLoadState(false)
                }
        }
    };

    /*/*const stopRecord = () => {
        recorder.stopRecording()
        changeRecState(false)
    }

    const addRecordingHandler = (recording) => {
        addRecording((prevRecordings) => {
            return [recording, ...prevRecordings]
        })
    }*/



    return  (
        <div>
        <div className="holder">
            <div data-role='controls'>
                <button className={isRecording ? 'stop' : 'record'} onClick={recordAudio} >Record</button>   
            </div>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
                    {recordings.map((url) =>
                    <li id={url}>
                    <audio src={url} controls />
                    </li>)}
                </ul>
        </div>
    )
}

export default AudioRecorder;