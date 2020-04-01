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
      videoEnabled: true,
      streams: [],
      stream0: React.createRef(),
      stream1: React.createRef(),
      stream2: React.createRef(),
      stream3: React.createRef(),
      stream4: React.createRef()
    };
  }
  videoCall = new VideoCall();
  componentDidMount() {
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
      component.enter(roomId);
    });
    socket.on("desc", data => {
      if (data.type === "offer" && component.state.initiator) return;
      if (data.type === "answer" && !component.state.initiator) return;

      if (component.state.connecting) component.call(data);
    });
    socket.on("disconnected", () => {
      component.setState({ initiator: true });
    });
    socket.on("full", () => {
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
    this.setState({ connecting: true });
    const peer = this.videoCall.init(
      this.state.localStream,
      this.state.initiator
    );
    this.setState({ peer });
    this.state.peerIds.push(peer._id);

    peer.on("signal", data => {
      const signal = {
        room: roomId,
        desc: data
      };
      this.state.socket.emit("signal", signal);
    });
    peer.on("stream", stream => {
      let newStreams = this.state.streams;
      if (this.state[`stream${newStreams.length}`].current !== null)
        this.state[`stream${newStreams.length}`].current.srcObject = stream;
      newStreams.push(stream);
      this.setState({
        connecting: false,
        waiting: false,
        streams: newStreams
      });
    });
    peer.on("error", function(err) {
      console.log(err);
    });
  };
  call = otherId => {
    this.videoCall.connect(otherId);
  };
  renderFull = () => {
    if (this.state.full) {
      return "The room is full";
    }
  };

  disableVideo = () => {
    const videoTrack = this.state.localStream.getVideoTracks()[0];

    if (videoTrack) {
      videoTrack.enabled = false;
      this.setState({ videoEnabled: false });
    }
  };

  enableVideo = () => {
    const videoTrack = this.state.localStream.getVideoTracks()[0];

    if (videoTrack) {
      videoTrack.enabled = true;
      this.setState({ videoEnabled: true });
    }
  };

  setAudioEnabled = bool => {
    console.log(bool);
    this.setState({ audioEnabled: bool });
  };

  generateParticipants = () => {
    const streams = [0, 1, 2, 3, 4];
    console.log("génération des " + streams.length + " participants");

    return streams.map((stream, index) => {
      return (
        <Participant
          key={index}
          isLocal={false}
          video={
            <div>
              <video
                autoPlay
                id={"stream" + index}
                ref={this.state[`stream${index}`]}
              />
            </div>
          }
        />
      );
    });
  };

  buildParticipants = () => {
    console.log("build");
    const { streams } = this.state;
    streams.map((stream, index) => {
      console.log(stream);
      console.log(this.state["stream" + index]);
      if (this.state[`stream${index}`].current !== null)
        this.state[`stream${index}`].current.srcObject = stream;
      else this.buildParticipants();
    });
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
        {this.generateParticipants()}
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
