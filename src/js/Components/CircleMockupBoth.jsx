import { useState, useRef, useEffect } from "react";
import "../../scss/main.scss";
import "../../scss/Components/circleBoth.scss";
import { PhoneMockCenterDuo } from "./PhoneMockCenter";
import { PhoneMockLeftDuo } from "./PhoneMockLeft";

export const CircleMockupBoth = ({
  circlePath,
  mainTitle,
  subtitle,
  mainColor,
}) => {
  const [scrollElement, setScrollElement] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setScrollElement(ref.current);
  }, []);

  return (
    <div className="mockup-container-both">
      <div className="mockup-container__title-section">
        <div className="title-section__main">
          Scroll over two phones to see the ads
        </div>
        <div className="title-section__secondary">
          Mockup preview works for desktop devices only
        </div>
      </div>

      <div className="mockup-container__phones">
        <PhoneMockCenterDuo
          circlePath={circlePath}
          mainTitle={mainTitle}
          subtitle={subtitle}
          mainColor={mainColor}
        />
        <PhoneMockLeftDuo
          circlePath={circlePath}
          mainTitle={mainTitle}
          subtitle={subtitle}
          mainColor={mainColor}
        />
      </div>
    </div>
  );
};
