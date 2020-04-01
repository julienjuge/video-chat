import {
  Input,
  Avatar,
  Button,
  Drawer,
  Row,
  Col,
  Spin,
  Comment,
  message,
  Badge
} from "antd";
import Participant from "./Participant";
import React from "react";
import { UserOutlined, SendOutlined, InboxOutlined } from "@ant-design/icons";
import VideoCall from "../helpers/simple-peer";
import create from "@ant-design/icons/lib/components/IconFont";
import { getDisplayStream } from "../helpers/media-access";
import moment from "moment";
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
      stream4: React.createRef(),
      userList: [],
      visible: false,
      messageList: [],
      messageTextArea: "",
      unreadMessage: 0
    };
  }
  videoCall = new VideoCall();

  showDrawer = () => {
    this.setState({
      visible: true,
      unreadMessage: 0
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentDidMount() {
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({ socket });
    const { roomId, username } = this.props;
    this.getUserMedia().then(() => {
      socket.emit("join", { roomId: roomId, username: username });
    });
    socket.on("init", () => {
      component.setState({ initiator: true });
    });
    socket.on("ready", data => {
      component.enter(roomId);
    });
    socket.on("messageReceived", data => {
      let messageList = this.state.messageList;
      messageList.push(data);
      this.setState({ messageList: messageList });
      if (data.user !== this.props.username) {
        message.success(data.user + " send a new message");
        this.setState({ unreadMessage: this.state.unreadMessage + 1 });
      }
    });
    socket.on("desc", data => {
      const desc = data.desc;
      let userList = this.state.userList;
      if (!userList.includes(data.user)) {
        let username = data.user;
        if (data.user === this.props.username) username = data.user + "(moi)";

        userList.push(username);
        this.setState({ userList: userList });
      }
      if (desc.type === "offer" && component.state.initiator) return;
      if (desc.type === "answer" && !component.state.initiator) return;

      if (component.state.connecting) component.call(desc);
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

  sendMessage = (e, message) => {
    if (this.state.socket) {
      const messageSignal = {
        user: this.props.username,
        room: this.props.roomId,
        message: message,
        date: Date.now()
      };
      this.state.socket.emit("messageSignal", messageSignal);
      this.setState({ messageTextArea: "" });
    }
  };

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
        user: this.props.username,
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
    this.setState({ audioEnabled: bool });
  };

  generateParticipant = index => {
    return (
      <Col span={6}>
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
      </Col>
    );
  };

  buildParticipants = () => {
    const { streams } = this.state;
    streams.map((stream, index) => {
      if (this.state[`stream${index}`].current !== null)
        this.state[`stream${index}`].current.srcObject = stream;
      else this.buildParticipants();
    });
  };

  generateHeaderDrawer = () => {
    return this.state.userList.map(user => (
      <div key={user}>
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        {" " + user}
      </div>
    ));
  };

  generateContentDrawer = () => {
    return this.state.messageList.map(message => (
      <Comment
        key={message.date}
        author={message.user}
        avatar={
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
        }
        content={<p>{message.message}</p>}
        datetime={
          <span>{moment(message.date).format("DD/MM/YYYY HH:mm:ss")}</span>
        }
      />
    ));
  };

  generateFooterDrawer = () => {
    return (
      <div>
        <Row>
          <Col span={20}>
            <Input
              placeholder="Please enter a message"
              value={this.state.messageTextArea}
              onPressEnter={e => this.sendMessage(e, e.target.value)}
              onChange={e => this.setState({ messageTextArea: e.target.value })}
            />
          </Col>
          <Col span={4}>
            <Button
              style={{ marginLeft: "20px" }}
              icon={<SendOutlined />}
              shape="circle"
              type="primary"
              onClick={e => this.sendMessage(e, this.state.messageTextArea)}
            />
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    const { username, roomId } = this.props;
    const {
      connecting,
      waiting,
      localStream,
      audioEnabled,
      videoEnabled,
      userList,
      unreadMessage
    } = this.state;
    return (
      <div className="room">
        <Row>
          <Col span={11}>
            {connecting && <Spin tip="Establishing connection..." />}
            {waiting && <Spin tip="Waiting for someone..." />}
          </Col>
          <Col span={2}>
            <h2>Salle: {roomId}</h2>
          </Col>
          <Col span={8} />
          <Col span={3}>
            <div>
              {unreadMessage > 0 ? (
                <Badge count={unreadMessage}>
                  <InboxOutlined
                    style={{ fontSize: "40px", color: "#1890ff" }}
                    color="primary"
                    disabled={userList.length === 0}
                    onClick={this.showDrawer}
                  />
                </Badge>
              ) : (
                <InboxOutlined
                  style={{ fontSize: "40px", color: "#1890ff" }}
                  color="primary"
                  disabled={userList.length === 0}
                  onClick={this.showDrawer}
                />
              )}

              <Drawer
                title={this.generateHeaderDrawer()}
                width={450}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                footer={this.generateFooterDrawer()}
              >
                {this.generateContentDrawer()}
              </Drawer>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={1} />
          {this.generateParticipant(0)}
          <Col span={1} />
          {this.generateParticipant(1)}
          <Col span={1} />
          {this.generateParticipant(2)}
          <Col span={3} />
        </Row>

        <Row>
          <Col span={1} />
          {this.generateParticipant(3)}
          <Col span={1} />
          {this.generateParticipant(4)}
          <Col span={1} />
          <Col span={6}>
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
          </Col>
          <Col span={3} />
        </Row>
      </div>
    );
  }
}

export default Room;
