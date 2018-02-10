export default class VideoRecorder {
    constructor() {
        this._chunks = [];
        this._recorder = {};
        this._blob = null;
        this._hasVideoAccess = false;
    }

    startRecording() {
        return navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                var videoCaptureStream = stream;
                this._recorder = new MediaRecorder(stream);

                this._recorder.ondataavailable = (e) => {
                    this._chunks.push(e.data);
                    if (this._recorder.state == 'inactive') {
                        // Audio track
                        videoCaptureStream.getTracks()[0].stop();
                        // Video track
                        videoCaptureStream.getTracks()[1].stop();
                    }
                }
                this._recorder.start(500);
                this._hasVideoAccess = true;
            });
    }

    stopRecording() {
        this._recorder.stop();
    }

    get hasVideoAccess() {
        return this._hasVideoAccess;
    }

    get recordingBlob() {
        if (this._blob === null) {
            this._blob = new Blob(this._chunks, { type: VideoRecorder.codec() });
        }
        return this._blob;
    }

    get recordingBlobURL() {
        return URL.createObjectURL(this.recordingBlob);
    }

    static codec() {
        // TODO: device detection to determine proper type
        return 'video/webm';
    }
}