import { useState, useRef, useEffect } from "react";
import "../../scss/main.scss";
import "../../scss/Components/PhoneMockDuo.scss";
import {
  useParallax,
  useParallaxController,
  ParallaxProvider,
} from "react-scroll-parallax";
import BLogo from "/images/logo.svg";
import iPhoneMockup from "/images/iphonmockup.svg";

export const PhoneMockLeftDuo = ({
  circlePath,
  mainTitle,
  subtitle,
  mainColor,
  backgroundColor,
  blockColor,
}) => {
  const [scrollElement, setScrollElement] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setScrollElement(ref.current);
  }, []);

  return (
    <div className="mockup-container-duo">
      <div className="container__iphone">
        <img src={iPhoneMockup} className="iphone__image" />
        <div
          className="iphone__body"
          ref={ref}
          style={{ background: backgroundColor }}
        >
          <ParallaxProvider scrollContainer={scrollElement}>
            <div className="iphone__top-placeholder">
              <div className="top-placeholder__main-block">
                <div
                  className="main-block__row"
                  style={{ background: blockColor }}
                ></div>
                <div
                  className="main-block__row"
                  style={{ background: blockColor }}
                ></div>
                <div
                  className="main-block__row"
                  style={{ background: blockColor }}
                ></div>
              </div>
            </div>
            <div className="iphone__circle-section-left">
              <ParallaxPhone circlePath={circlePath} />
              <div className="circle-section__content">
                <img src={BLogo} className="content__logo" />
                <h2 className="content__title">{mainTitle}</h2>
                <h4 className="content__subtitle">{subtitle}</h4>
                <p
                  className="content__CTA"
                  style={{ background: `${mainColor}` }}
                >
                  LEARN MORE
                </p>
              </div>
            </div>
            <div className="iphone__bottom-placeholder">
              <div className="bottom-placeholder__main-block">
                <div
                  className="main-block__row"
                  style={{ background: blockColor }}
                ></div>
                <div
                  className="main-block__row"
                  style={{ background: blockColor }}
                ></div>
                <div
                  className="main-block__row"
                  style={{ background: blockColor }}
                ></div>
                <div
                  className="main-block__row"
                  style={{ background: blockColor }}
                ></div>
              </div>
            </div>
          </ParallaxProvider>
        </div>
      </div>
    </div>
  );
};

const ParallaxPhone = ({ circlePath }) => {
  return (
    <div className="circle-section__circle-mobile-container">
      <ParallaxPhoneCircle circlePath={circlePath} />
    </div>
  );
};

const ParallaxPhoneCircle = ({ circlePath }) => {
  const parallaxController = useParallaxController();
  const { ref } = useParallax({ rotate: [0, 160] });
  return (
    <img
      src={circlePath}
      onLoad={() => parallaxController.update()}
      className="circle-mobile-container__image"
      ref={ref}
    />
  );
};
