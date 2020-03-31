module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VideoChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoChat */ "./components/VideoChat.js");
var _jsxFileName = "/Users/julienjuge/DEVPERSO/video-chat/components/App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const App = () => {
  return __jsx("div", {
    className: "app",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Petit live")), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_VideoChat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Fait avec", " ", __jsx("span", {
    role: "img",
    "aria-label": "React",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "\u269B"), " ", "par ", __jsx("a", {
    href: "https://julien-juge.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Julien J."))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Lobby.js":
/*!*****************************!*\
  !*** ./components/Lobby.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/julienjuge/DEVPERSO/video-chat/components/Lobby.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Entrez dans la salle"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Pseudo:"), __jsx("input", {
    type: "text",
    id: "field",
    value: username,
    onChange: handleUsernameChange,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "room",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Salle:"), __jsx("input", {
    type: "text",
    id: "room",
    value: roomName,
    onChange: handleRoomNameChange,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (Lobby);

/***/ }),

/***/ "./components/Participant.js":
/*!***********************************!*\
  !*** ./components/Participant.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rnd */ "react-rnd");
/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rnd__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Participant = ({
  participant,
  isLocal,
  video,
  name,
  setAudioEnabled,
  audioEnabled,
  disableVideo,
  enableVideo,
  videoEnabled
}) => {
  const {
    0: videoTracks,
    1: setVideoTracks
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: audioTracks,
    1: setAudioTracks
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: widthLocal,
    1: setWidthLocal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(270);
  const {
    0: heightLocal,
    1: setHeighLocal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(270);
  const {
    0: xLocal,
    1: setXLocal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: yLocal,
    1: setYLocal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
    };
  }, [participant]);

  const getAudioButtons = () => {
    console.log("audio buttons");

    if (isLocal === true) {
      if (audioEnabled) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: e => setAudioEnabled(false),
          style: {
            position: "relative"
          },
          type: "primary",
          shape: "circle",
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["AudioMutedOutlined"], null)
        });
      } else {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: e => setAudioEnabled(true),
          style: {
            position: "relative",
            color: "red"
          },
          type: "primary",
          shape: "circle",
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["AudioOutlined"], null)
        });
      }
    }

    return __jsx("div", null);
  };

  const getVideoButtons = () => {
    if (isLocal === true) {
      if (videoEnabled) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: e => {
            disableVideo();
          },
          style: {
            position: "relative"
          },
          type: "primary",
          shape: "circle",
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["VideoCameraOutlined"], null)
        });
      } else {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: e => {
            enableVideo();
          },
          style: {
            position: "relative",
            color: "red"
          },
          type: "primary",
          shape: "circle",
          icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["VideoCameraOutlined"], null)
        });
      }
    }

    return __jsx("div", null);
  };

  if (isLocal) {
    return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_3__["Rnd"], {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        background: "#f0f0f0"
      },
      size: {
        width: widthLocal,
        height: heightLocal
      },
      position: {
        x: xLocal,
        y: yLocal
      },
      onDragStop: (e, d) => {
        setXLocal(d.x);
        setYLocal(d.y);
      },
      onResizeStop: (e, direction, ref, delta, position) => {
        setWidthLocal(ref.offsetWidth);
        setHeighLocal(ref.offsetHeight);
        console.log(position);
      }
    }, __jsx("div", {
      className: "participant",
      style: {
        marginRight: 0,
        width: "99%",
        height: "99%"
      }
    }, __jsx("h3", null, name, isLocal ? " (moi)" : ""), video, getAudioButtons(), getVideoButtons()));
  } else {
    return __jsx("div", {
      className: "participant",
      style: isLocal ? {
        width: "100%"
      } : {
        width: "30%"
      }
    }, __jsx("h3", null, name, isLocal ? "(moi)" : ""), video, getAudioButtons(), getVideoButtons());
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Participant);

/***/ }),

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Participant */ "./components/Participant.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_simple_peer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/simple-peer */ "./helpers/simple-peer.js");
/* harmony import */ var _ant_design_icons_lib_components_IconFont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/lib/components/IconFont */ "@ant-design/icons/lib/components/IconFont");
/* harmony import */ var _ant_design_icons_lib_components_IconFont__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_components_IconFont__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_media_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/media-access */ "./helpers/media-access.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const io = __webpack_require__(/*! socket.io-client */ "socket.io-client");

const socket = io("http://localhost:3000");

class Room extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "videoCall", new _helpers_simple_peer__WEBPACK_IMPORTED_MODULE_2__["default"]());

    _defineProperty(this, "enter", roomId => {
      console.log("enter in " + roomId);
      this.setState({
        connecting: true
      });
      const peer = this.videoCall.init(this.state.localStream, this.state.initiator);
      this.setState({
        peer
      });
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
        this.setState({
          connecting: false,
          waiting: false
        });
      });
      peer.on("error", function (err) {
        console.log(err);
      });
    });

    _defineProperty(this, "call", otherId => {
      console.log("callllllll");
      this.videoCall.connect(otherId);
    });

    _defineProperty(this, "renderFull", () => {
      if (this.state.full) {
        return "The room is full";
      }
    });

    _defineProperty(this, "disableVideo", () => {
      const videoTrack = localStream.getVideoTracks()[0];

      if (localStream) {
        videoTrack.enabled = false;
        this.setState({
          videoEnabled: false
        });
      }
    });

    _defineProperty(this, "enableVideo", () => {
      const videoTrack = localStream.getVideoTracks()[0];

      if (localStream) {
        videoTrack.enabled = true;
        this.setState({
          videoEnabled: true
        });
      }
    });

    _defineProperty(this, "setAudioEnabled", bool => {
      this.setState({
        audioEnabled: bool
      });
    });

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

  componentDidMount() {
    const socket = io(process.env.REACT_APP_SIGNALING_SERVER);
    const component = this;
    this.setState({
      socket
    });
    const {
      roomId
    } = this.props;
    this.getUserMedia().then(() => {
      socket.emit("join", {
        roomId: roomId
      });
    });
    socket.on("init", () => {
      component.setState({
        initiator: true
      });
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
      component.setState({
        initiator: true
      });
    });
    socket.on("full", () => {
      console.log("c'est plein");
      component.setState({
        full: true
      });
    });
  }

  getUserMedia(cb) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      const op = {
        video: {
          width: {
            min: 160,
            ideal: 640,
            max: 1280
          },
          height: {
            min: 120,
            ideal: 360,
            max: 720
          }
        },
        audio: true
      };
      navigator.getUserMedia(op, stream => {
        this.setState({
          streamUrl: stream,
          localStream: stream
        });
        this.localVideo.srcObject = stream;
        resolve();
      }, () => {});
    });
  }

  getDisplay() {
    Object(_helpers_media_access__WEBPACK_IMPORTED_MODULE_4__["getDisplayStream"])().then(stream => {
      stream.oninactive = () => {
        this.state.peer.removeStream(this.state.localStream);
        this.getUserMedia().then(() => {
          this.state.peer.addStream(this.state.localStream);
        });
      };

      this.setState({
        streamUrl: stream,
        localStream: stream
      });
      this.localVideo.srcObject = stream;
      this.state.peer.addStream(stream);
    });
  }

  render() {
    console.log(this.state.peerIds);
    const {
      username,
      roomId
    } = this.props;
    const {
      connecting,
      waiting,
      localStream,
      audioEnabled,
      videoEnabled
    } = this.state;
    return __jsx("div", {
      className: "room"
    }, __jsx("h2", null, "Salle: ", roomId), connecting && __jsx("div", null, __jsx("p", null, "Establishing connection...")), waiting && __jsx("div", null, __jsx("p", null, "Waiting for someone...")), __jsx(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"], {
      isLocal: false,
      video: __jsx("div", null, __jsx("video", {
        autoPlay: true,
        id: "remoteVideo",
        ref: video => this.remoteVideo = video
      }))
    }), __jsx("div", {
      className: "local-participant"
    }, localStream !== undefined ? __jsx(_Participant__WEBPACK_IMPORTED_MODULE_0__["default"], {
      isLocal: true,
      key: "fneoisfnoes",
      name: username,
      video: __jsx("div", null, __jsx("video", {
        autoPlay: true,
        id: "localVideo",
        muted: true,
        ref: video => this.localVideo = video
      })),
      setAudioEnabled: this.setAudioEnabled,
      audioEnabled: audioEnabled,
      disableVideo: this.disableVideo,
      enableVideo: this.enableVideo,
      videoEnabled: videoEnabled
    }) : ""));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./components/VideoChat.js":
/*!*********************************!*\
  !*** ./components/VideoChat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lobby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lobby */ "./components/Lobby.js");
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Room */ "./components/Room.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const VideoChat = () => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: roomName,
    1: setRoomName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate());
  const {
    0: submit,
    1: setSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleUsernameChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    setUsername(event.target.value);
  }, []);
  const handleRoomNameChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = () => setSubmit(true);

  const handleLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(event => {
    setToken(null);
  }, []);
  let render;

  if (submit) {
    render = __jsx(_Room__WEBPACK_IMPORTED_MODULE_2__["default"], {
      username: username,
      roomId: roomName,
      handleLogout: handleLogout
    });
  } else {
    render = __jsx(_Lobby__WEBPACK_IMPORTED_MODULE_1__["default"], {
      username: username,
      roomName: roomName,
      handleUsernameChange: handleUsernameChange,
      handleRoomNameChange: handleRoomNameChange,
      handleSubmit: handleSubmit
    });
  }

  return render;
};

/* harmony default export */ __webpack_exports__["default"] = (VideoChat);

/***/ }),

/***/ "./helpers/media-access.js":
/*!*********************************!*\
  !*** ./helpers/media-access.js ***!
  \*********************************/
/*! exports provided: getDisplayStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayStream", function() { return getDisplayStream; });
async function getDisplayStream() {
  return navigator.mediaDevices.getDisplayMedia();
}

/***/ }),

/***/ "./helpers/simple-peer.js":
/*!********************************!*\
  !*** ./helpers/simple-peer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoCall; });
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-peer */ "simple-peer");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class VideoCall {
  constructor() {
    _defineProperty(this, "peer", null);

    _defineProperty(this, "init", (stream, initiator) => {
      console.log("on instancie le peer avec initiator = " + initiator);
      this.peer = new simple_peer__WEBPACK_IMPORTED_MODULE_0___default.a({
        initiator: initiator,
        stream: stream,
        trickle: false,
        reconnectTimer: 1000,
        iceTransportPolicy: "relay",
        config: {
          iceServers: [{
            urls: "stun:stun4.l.google.com:19302".split(",")
          }, {
            urls: "turn:numb.viagenie.ca".split(","),
            username: "julien.juge@live.fr",
            credential: "Vasedote11"
          }]
        }
      });
      return this.peer;
    });

    _defineProperty(this, "connect", otherId => {
      console.log("connnnnnect");
      this.peer.signal(otherId);
    });
  }

}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
var _jsxFileName = "/Users/julienjuge/DEVPERSO/video-chat/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const MyApp = props => {
  const {
    pageProps
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@ant-design/icons/lib/components/IconFont":
/*!************************************************************!*\
  !*** external "@ant-design/icons/lib/components/IconFont" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/components/IconFont");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-rnd":
/*!****************************!*\
  !*** external "react-rnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rnd");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "simple-peer":
/*!******************************!*\
  !*** external "simple-peer" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-peer");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map