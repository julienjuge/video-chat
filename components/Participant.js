import {
  AudioMutedOutlined,
  AudioOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "antd";
import { Rnd } from "react-rnd";

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
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [widthLocal, setWidthLocal] = useState(270);
  const [heightLocal, setHeighLocal] = useState(270);
  const [xLocal, setXLocal] = useState(1);
  const [yLocal, setYLocal] = useState(1);
  useEffect(() => {
    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
    };
  }, [participant]);

  const getAudioButtons = () => {
    console.log("audio buttons");
    if (isLocal === true) {
      if (audioEnabled) {
        return (
          <Button
            onClick={e => setAudioEnabled(false)}
            style={{ position: "relative" }}
            type="primary"
            shape="circle"
            icon={<AudioMutedOutlined />}
          />
        );
      } else {
        return (
          <Button
            onClick={e => setAudioEnabled(true)}
            style={{ position: "relative", color: "red" }}
            type="primary"
            shape="circle"
            icon={<AudioOutlined />}
          />
        );
      }
    }
    return <div></div>;
  };

  const getVideoButtons = () => {
    if (isLocal === true) {
      if (videoEnabled) {
        return (
          <Button
            onClick={e => {
              disableVideo();
            }}
            style={{ position: "relative" }}
            type="primary"
            shape="circle"
            icon={<VideoCameraOutlined />}
          />
        );
      } else {
        return (
          <Button
            onClick={e => {
              enableVideo();
            }}
            style={{ position: "relative", color: "red" }}
            type="primary"
            shape="circle"
            icon={<VideoCameraOutlined />}
          />
        );
      }
    }
    return <div></div>;
  };
  if (isLocal) {
    return (
      <Rnd
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 1px #ddd",
          background: "#f0f0f0"
        }}
        size={{ width: widthLocal, height: heightLocal }}
        position={{ x: xLocal, y: yLocal }}
        onDragStop={(e, d) => {
          setXLocal(d.x);
          setYLocal(d.y);
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setWidthLocal(ref.offsetWidth);
          setHeighLocal(ref.offsetHeight);
          console.log(position);
        }}
      >
        <div
          className="participant"
          style={{ marginRight: 0, width: "99%", height: "99%" }}
        >
          <h3>
            {name}
            {isLocal ? " (moi)" : ""}
          </h3>
          {video}

          {getAudioButtons()}
          {getVideoButtons()}
        </div>
      </Rnd>
    );
  } else {
    return (
      <div
        className="participant"
        style={isLocal ? { width: "100%" } : { width: "30%" }}
      >
        <h3>
          {name}
          {isLocal ? "(moi)" : ""}
        </h3>
        {video}
        {getAudioButtons()}
        {getVideoButtons()}
      </div>
    );
  }
};

export default Participant;
