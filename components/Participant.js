import {
  AudioMutedOutlined,
  AudioOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";

import { Button, Row, Col } from "antd";
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
            style={{ position: "relative", backgroundColor: "red" }}
            type="primary"
            shape="circle"
            icon={<VideoCameraOutlined />}
          />
        );
      }
    }
    return <div></div>;
  };
  return (
    <div className="participant" style={{ width: "100%", height: "300px" }}>
      <h3>
        {name}
        {isLocal ? "(moi)" : ""}
      </h3>
      {video}
      {isLocal && (
        <Row>
          <Col span={12} />
          <Col span={1}>{getVideoButtons()}</Col>
          <Col span={10} />
        </Row>
      )}
    </div>
  );
};

export default Participant;
