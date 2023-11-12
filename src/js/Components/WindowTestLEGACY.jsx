import React, { useEffect, useRef } from "react";

// INTERESTING MANUAL WAY - LEGACY
// https://stackoverflow.com/questions/58222004/how-to-get-parent-width-height-in-react-using-hooks

export const WindowTest = (props) => {
  const stageCanvasRef = useRef(null);

  // useEffect will run on stageCanvasRef value assignment
  useEffect(() => {
    // The 'current' property contains info of the reference:
    // align, title, ... , width, height, etc.
    if (stageCanvasRef.current) {
      let height = stageCanvasRef.current.offsetHeight;
      let width = stageCanvasRef.current.offsetWidth;
    }
  }, [stageCanvasRef]);

  return (
    <div className="stage-canvas" ref={stageCanvasRef}>
      <Stage
        width={window.innerWidth * 0.5}
        height={window.innerHeight * 0.5}
        onWheel={handleWheel}
        scaleX={stage.stageScale}
        scaleY={stage.stageScale}
        x={stage.stageX}
        y={stage.stageY}
        draggable
      />
    </div>
  );
};
