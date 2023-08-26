import { useState, useRef, useEffect } from "react";
import "../../scss/main.scss";
import "../../scss/Components/circleMockup.scss";
import {
  useParallax,
  useParallaxController,
  ParallaxProvider,
} from "react-scroll-parallax";
import "../../scss/Components/circleHero.scss";
import { ParallaxCircle, ImageCircle } from "./CircleHero";
import CircleIMG from "/images/CircleMainMobile.png";
import BLogo from "/images/logo.svg";
import iPhoneMockup from "/images/iphonmockup.svg";

export const CircleMockup = ({
  circlePath,
  mainTitle,
  subTitle,
  mainColor,
}) => {
  const [scrollElement, setScrollElement] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setScrollElement(ref.current);
  }, []);

  return (
    <div className="mockup-container">
      <div className="container__iphone">
        <img src={iPhoneMockup} className="iphone__image" />
        <div className="iphone__body" ref={ref}>
          <ParallaxProvider scrollContainer={scrollElement}>
            <div className="iphone__top-placeholder">
              <div className="top-placeholder__main-block">
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
              </div>
            </div>
            <div className="iphone__circle-section">
              <ParallaxPhone circlePath={circlePath} />
              <div className="circle-section__content">
                <h2 className="content__title">Technology Report 2023</h2>
                <h4 className="content__subtitle">This a subtitle</h4>
                <p className="content__CTA">LEARN MORE</p>

                <img src={BLogo} className="content__logo" />
              </div>
            </div>
            <div className="iphone__bottom-placeholder">
              <div className="bottom-placeholder__main-block">
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
                <div className="main-block__row"></div>
              </div>
            </div>
          </ParallaxProvider>
        </div>
      </div>
    </div>
  );
};

const ParallaxPhone = ({ circlePath }) => {
  const { ref } = useParallax({ rotate: [0, 160] });
  return (
    <div className="circle-section__circle-mobile-container" ref={ref}>
      <ParallaxPhoneCircle circlePath={circlePath} />
    </div>
  );
};

const ParallaxPhoneCircle = ({ circlePath }) => {
  const parallaxController = useParallaxController();

  return (
    <img
      // src={circlePath}
      src={CircleIMG}
      onLoad={() => parallaxController.update()}
      className="circle-mobile-container__image"
    />
  );
};
