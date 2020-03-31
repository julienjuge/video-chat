import Participant from "./Participant";
import React from "react";
import VideoCall from "../helpers/simple-peer";
import create from "@ant-design/icons/lib/components/IconFont";
import { getDisplayStream } from "../helpers/media-access";

const io = require("socket.io-client");
const socket = io(process.env.reactAppSignalingServer);

class Room extends React.Component {
  constructor() {
    super();
    this.state = {
      localStream: {},
      remoteStreamUrl: "",
      streamUrl: "",
      initiator: false,
      peer: {},
      full: false,
      connecting: false,
      waiting: true,
      peerIds: [],
      audioEnabled: false,
      videoEnabled: true
    };
  }
  videoCall = new VideoCall();
  componentDidMount() {
    console.log(process.env.REACT_APP_SIGNALING_SERVER);
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({ socket });
    const { roomId } = this.props;
    this.getUserMedia().then(() => {
      socket.emit("join", { roomId: roomId });
    });
    socket.on("init", () => {
      component.setState({ initiator: true });
    });
    socket.on("ready", () => {
      console.log("c'est ok on rentre dans " + roomId);
      component.enter(roomId);
    });
    socket.on("desc", data => {
      console.log(data);
      console.log(data.type === "offer" && component.state.initiator);
      console.log(data.type === "answer" && !component.state.initiator);
      if (data.type === "offer" && component.state.initiator) return;
      if (data.type === "answer" && !component.state.initiator) return;
      console.log("ok on appelle");
      if (component.state.connecting) component.call(data);
    });
    socket.on("disconnected", () => {
      console.log("il est parti");
      component.setState({ initiator: true });
    });
    socket.on("full", () => {
      console.log("c'est plein");
      component.setState({ full: true });
    });
  }
  getUserMedia(cb) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
      const op = {
        video: {
          width: { min: 160, ideal: 640, max: 1280 },
          height: { min: 120, ideal: 360, max: 720 }
        },
        audio: true
      };
      navigator.getUserMedia(
        op,
        stream => {
          this.setState({ streamUrl: stream, localStream: stream });
          this.localVideo.srcObject = stream;
          resolve();
        },
        () => {}
      );
    });
  }
  getDisplay() {
    getDisplayStream().then(stream => {
      stream.oninactive = () => {
        this.state.peer.removeStream(this.state.localStream);
        this.getUserMedia().then(() => {
          this.state.peer.addStream(this.state.localStream);
        });
      };
      this.setState({ streamUrl: stream, localStream: stream });
      this.localVideo.srcObject = stream;
      this.state.peer.addStream(stream);
    });
  }
  enter = roomId => {
    console.log("enter in " + roomId);
    this.setState({ connecting: true });
    const peer = this.videoCall.init(
      this.state.localStream,
      this.state.initiator
    );
    this.setState({ peer });
    this.state.peerIds.push(peer._id);

    peer.on("signal", data => {
      console.log("signal peer");
      const signal = {
        room: roomId,
        desc: data
      };
      this.state.socket.emit("signal", signal);
    });
    peer.on("stream", stream => {
      console.log("stream peer");
      this.remoteVideo.srcObject = stream;
      this.setState({ connecting: false, waiting: false });
    });
    peer.on("error", function(err) {
      console.log(err);
    });
  };
  call = otherId => {
    console.log("callllllll");
    this.videoCall.connect(otherId);
  };
  renderFull = () => {
    if (this.state.full) {
      return "The room is full";
    }
  };

  disableVideo = () => {
    const videoTrack = localStream.getVideoTracks()[0];

    if (localStream) {
      videoTrack.enabled = false;
      this.setState({ videoEnabled: false });
    }
  };

  enableVideo = () => {
    const videoTrack = localStream.getVideoTracks()[0];

    if (localStream) {
      videoTrack.enabled = true;
      this.setState({ videoEnabled: true });
    }
  };

  setAudioEnabled = bool => {
    this.setState({ audioEnabled: bool });
  };

  render() {
    console.log(this.state.peerIds);
    const { username, roomId } = this.props;
    const {
      connecting,
      waiting,
      localStream,
      audioEnabled,
      videoEnabled
    } = this.state;
    return (
      <div className="room">
        <h2>Salle: {roomId}</h2>
        {connecting && (
          <div>
            <p>Establishing connection...</p>
          </div>
        )}
        {waiting && (
          <div>
            <p>Waiting for someone...</p>
          </div>
        )}

        <Participant
          isLocal={false}
          video={
            <div>
              <video
                autoPlay
                id="remoteVideo"
                ref={video => (this.remoteVideo = video)}
              />
            </div>
          }
        />

        <div className="local-participant">
          {localStream !== undefined ? (
            <Participant
              isLocal={true}
              key={"fneoisfnoes"}
              name={username}
              video={
                <div>
                  <video
                    autoPlay
                    id="localVideo"
                    muted
                    ref={video => (this.localVideo = video)}
                  />
                </div>
              }
              setAudioEnabled={this.setAudioEnabled}
              audioEnabled={audioEnabled}
              disableVideo={this.disableVideo}
              enableVideo={this.enableVideo}
              videoEnabled={videoEnabled}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default Room;
