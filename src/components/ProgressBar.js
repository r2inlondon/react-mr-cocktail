import React from "react";
import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress, id } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile, id]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
