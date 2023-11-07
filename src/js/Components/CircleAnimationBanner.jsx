import "../../scss/main.scss";
import "../../scss/Components/circleAnimationBanner.scss";
import { useInView } from "react-intersection-observer";

//
// 2. ADD ANY CHILDREN HERE?
//

export const CircleAnimationBanner = ({ imagePath }) => {
  const { ref, inView, entry } = useInView({ threshold: 0.6 });

  return (
    <div
      className={
        inView == true
          ? `circle-animation-container circle-animation-container--animation`
          : `circle-animation-container`
      }
      ref={ref}
      style={{
        background: `url(${imagePath})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="circle-container">
        <div
          className={
            inView == true
              ? "reverse-circle reverse-circle1 reverse-circle1--animation"
              : "reverse-circle reverse-circle1"
          }
          style={{ borderColor: "red", background: "red" }}
        ></div>
        <div
          className={
            inView == true
              ? "reverse-circle reverse-circle2 reverse-circle2--animation"
              : "reverse-circle reverse-circle2"
          }
        ></div>
        <div
          className={
            inView == true
              ? "reverse-circle reverse-circle3 reverse-circle3--animation"
              : "reverse-circle reverse-circle3"
          }
        ></div>
      </div>
    </div>
  );
};
