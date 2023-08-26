import "../../scss/main.scss";
import "../../scss/Components/circleAnimationBanner.scss";

export const CircleAnimationBanner = () => {
  return (
    <div className="circle-animation-container">
      <div className="circle-container">
        <div className="reverse-circle reverse-circle1"></div>
        <div className="reverse-circle reverse-circle2"></div>
        <div className="reverse-circle reverse-circle3"></div>
      </div>
    </div>
  );
};
