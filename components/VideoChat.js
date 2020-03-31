import React, { useCallback, useEffect, useState } from "react";

import Lobby from "./Lobby";
import Room from "./Room";
import shortId from "shortid";

const VideoChat = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState(shortId.generate());
  const [submit, setSubmit] = useState(false);

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit = () => setSubmit(true);

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (submit) {
    render = (
      <Room username={username} roomId={roomName} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat;
