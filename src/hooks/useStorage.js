import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { projectStorage } from "../firebase/firebase";
import { useParams } from "react-router";
import { startAddImage } from "../firebase/firebaseFunctions";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const storageRef = projectStorage.ref(`images/${file.name}`);

    storageRef.put(file).on(
      "state_change",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        dispatch(startAddImage({ id, url }));
      }
    );
  }, [file, id, dispatch]);

  return { progress, error, url, id };
};

export default useStorage;
