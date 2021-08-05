import React, { useState, useEffect } from 'react'
import { ZiggeoRecorder } from 'react-ziggeo'

function WebCamUpload() {
    const [recorder, setRecorder] = useState(null);

    useEffect(() => {
        if (recorder) {
            // DO stuff here
            recorder.on("any_event", function (rec) { }, recorder);
            recorder.get("attribute_name");
        }
    }, [recorder]);

    const handleRecorderRecording = (embedding) => {
        console.log('Recorder onRecording');
    };

    const handleRecorderUploading = (embedding) => {
        console.log('Recorder uploading');
    };


    return (
        <div>
            <ZiggeoRecorder
                // apiKey={API_KEY}
                // video={VIDEO_TOKEN}
                height={180}
                width={320}
                onRecording={handleRecorderRecording}
                onUploading={handleRecorderUploading}
                onRef={ref => (setRecorder(ref))}
            />
        </div >
    )
}

export default WebCamUpload;








