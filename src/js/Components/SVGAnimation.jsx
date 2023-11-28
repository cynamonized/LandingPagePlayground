import "../../scss/main.scss";
import "../../scss/Components/SVGAnimation.scss";

export const SVGShape = () => {
  return (
    <div className="full-container">
      <div className="shapes-container">
        <svg id="shapes-svg" viewBox="0 0 400 400" width="400" height="400">
          <rect className="rectangle" width="400" height="400" />

          <path
            id="Blue"
            className="shape cls-1"
            d="m84.29,161.77c16.5-28.5,56-1,86-18s33-45,76.5-41.5c82.5,13.5,19.5,181.5-27,190-58.5,8.5-152-102-135.5-130.5Z"
          />

          <path
            id="Light_blue"
            className="shape cls-2"
            d="m103.29,166.77c25.13-21.29,50.03-1.08,84-7s17-90,89-65c101.78,43.31-40.21,215.69-99.48,206.8-57.95-11.67-98.65-113.51-73.52-134.8Z"
          />

          <path
            id="Red"
            className="shape cls-3"
            d="m91.29,151.77c25.13-21.29,52.89-13.78,86.86-19.7,33.97-5.92,36.14-53.3,91.14-36.3,90,27-3.73,201.89-63,193-57.95-11.67-140.13-115.71-115-137Z"
          />

          <path
            id="Yellow"
            className="shape cls-4"
            d="m96.29,129.77c25.13-21.29,50.03-11.08,84-17s53-25,95-16c120,34-48,233-98.48,218.8-57.95-11.67-105.65-164.51-80.52-185.8Z"
          />

          <path
            id="Purple"
            className="shape cls-5"
            d="m87.29,142.77c25.13-21.29,64.03-2.08,98-8s38-65,93-48c70,26-4.73,226.89-64,218-57.95-11.67-152.13-140.71-127-162Z"
          />

          <path
            id="Green"
            className="shape cls-6"
            d="m98.11,132.09c25.13-21.29,53.07,17.9,87.04,11.98,33.97-5.92,30.64-68.8,85.64-51.8,101.78,43.31-29.71,217.19-88.98,208.3-57.95-11.67-108.83-147.19-83.71-168.47Z"
          />
        </svg>
      </div>
    </div>
  );
};
