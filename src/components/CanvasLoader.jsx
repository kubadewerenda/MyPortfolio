import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const CanvasLoader=({ onLoaded })=>{
  const {progress,active,loaded}=useProgress();

  useEffect(() => {
    if (loaded===active && active>0){
      if (onLoaded){
        onLoaded(true);
      }
    }
  },[loaded,active,onLoaded]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
    </Html>
  );
};

export default CanvasLoader;
