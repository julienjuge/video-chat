webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Room.js":
/*!****************************!*\
  !*** ./components/Room.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Participant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Participant */ "./components/Participant.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_simple_peer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/simple-peer */ "./helpers/simple-peer.js");
/* harmony import */ var _ant_design_icons_lib_components_IconFont__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/components/IconFont */ "./node_modules/@ant-design/icons/lib/components/IconFont.js");
/* harmony import */ var _ant_design_icons_lib_components_IconFont__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_components_IconFont__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers_media_access__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/media-access */ "./helpers/media-access.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var socket = io("http://localhost:3000");

var Room = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Room, _React$Component);

  var _super = _createSuper(Room);

  function Room() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Room);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "videoCall", new _helpers_simple_peer__WEBPACK_IMPORTED_MODULE_9__["default"]());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "enter", function (roomId) {
      console.log("enter in " + roomId);

      _this.setState({
        connecting: true
      });

      var peer = _this.videoCall.init(_this.state.localStream, _this.state.initiator);

      _this.setState({
        peer: peer
      });

      _this.state.peerIds.push(peer._id);

      peer.on("signal", function (data) {
        console.log("signal peer");
        var signal = {
          room: roomId,
          desc: data
        };

        _this.state.socket.emit("signal", signal);
      });
      peer.on("stream", function (stream) {
        console.log("stream peer");
        _this.remoteVideo.srcObject = stream;

        _this.setState({
          connecting: false,
          waiting: false
        });
      });
      peer.on("error", function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "call", function (otherId) {
      console.log("callllllll");

      _this.videoCall.connect(otherId);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderFull", function () {
      if (_this.state.full) {
        return "The room is full";
      }
    });

    _this.state = {
      localStream: {},
      remoteStreamUrl: "",
      streamUrl: "",
      initiator: false,
      peer: {},
      full: false,
      connecting: false,
      waiting: true,
      peerIds: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Room, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var socket = io(process.env.REACT_APP_SIGNALING_SERVER);
      var component = this;
      this.setState({
        socket: socket
      });
      var roomId = this.props.match.params.roomId;
      this.getUserMedia().then(function () {
        socket.emit("join", {
          roomId: roomId
        });
      });
      socket.on("init", function () {
        component.setState({
          initiator: true
        });
      });
      socket.on("ready", function () {
        console.log("c'est ok on rentre dans " + roomId);
        component.enter(roomId);
      });
      socket.on("desc", function (data) {
        console.log(data);
        console.log(data.type === "offer" && component.state.initiator);
        console.log(data.type === "answer" && !component.state.initiator);
        if (data.type === "offer" && component.state.initiator) return;
        if (data.type === "answer" && !component.state.initiator) return;
        console.log("ok on appelle");
        if (component.state.connecting) component.call(data);
      });
      socket.on("disconnected", function () {
        console.log("il est parti");
        component.setState({
          initiator: true
        });
      });
      socket.on("full", function () {
        console.log("c'est plein");
        component.setState({
          full: true
        });
      });
    }
  }, {
    key: "getUserMedia",
    value: function getUserMedia(cb) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        navigator.getUserMedia = navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        var op = {
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
        navigator.getUserMedia(op, function (stream) {
          _this2.setState({
            streamUrl: stream,
            localStream: stream
          });

          _this2.localVideo.srcObject = stream;
          resolve();
        }, function () {});
      });
    }
  }, {
    key: "getDisplay",
    value: function getDisplay() {
      var _this3 = this;

      Object(_helpers_media_access__WEBPACK_IMPORTED_MODULE_11__["getDisplayStream"])().then(function (stream) {
        stream.oninactive = function () {
          _this3.state.peer.removeStream(_this3.state.localStream);

          _this3.getUserMedia().then(function () {
            _this3.state.peer.addStream(_this3.state.localStream);
          });
        };

        _this3.setState({
          streamUrl: stream,
          localStream: stream
        });

        _this3.localVideo.srcObject = stream;

        _this3.state.peer.addStream(stream);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      console.log(this.state.peerIds);
      return __jsx("div", {
        className: "room"
      }, __jsx("h2", null, "Salle: ", roomId), connecting && __jsx("div", null, __jsx("p", null, "Establishing connection...")), waiting && __jsx("div", null, __jsx("p", null, "Waiting for someone...")), __jsx("button", {
        onClick: handleLogout
      }, "D\xE9connectation :-D"), remoteStream !== undefined ? __jsx(_Participant__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isLocal: false,
        key: remoteStream,
        video: __jsx("div", null, __jsx("video", {
          autoPlay: true,
          id: "localVideo",
          muted: true,
          ref: function ref(video) {
            return _this4.localVideo = video;
          }
        }))
      }) : "", __jsx("div", {
        className: "local-participant"
      }, localStream !== undefined ? __jsx(_Participant__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({
        isLocal: true,
        key: localStream.id,
        name: username,
        video: __jsx("div", null, __jsx("video", {
          ref: videoRef,
          autoPlay: true,
          muted: !audioEnabled
        })),
        setAudioEnabled: setAudioEnabled,
        audioEnabled: audioEnabled,
        disableVideo: disableVideo,
        enableVideo: enableVideo,
        videoEnabled: videoEnabled
      }, "videoEnabled", videoEnabled)) : ""));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Room);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=_app.js.a0ee0fb53f3aaf934b7d.hot-update.js.map