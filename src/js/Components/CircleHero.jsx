import { useState, useRef } from "react";
import "../../scss/main.scss";
import "../../scss/Components/circleHero.scss";
import { useParallax, useParallaxController } from "react-scroll-parallax";

export const CircleHero = () => {
  // const { ref } = useParallax({ speed: 10 });

  return (
    <div className="circle-hero">
      <section className="circle-hero__nav">
        <div className="container">
          <div className="nav__left-column">
            <p className="left-column__logo">
              Circle <span>Testing</span>
            </p>
          </div>

          <div className="nav__right-column">
            <ul className="right-column__menu-list">
              <li className="menu-list__list-element">Contact</li>
              <li className="menu-list__list-element">Prices</li>
              <li className="menu-list__list-element">About us</li>
              <li className="menu-list__list-element">Hiring</li>
              <li className="menu-list__list-element">More</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="circle-hero__image-section">
        <div className="image-section__title">
          <h1 className="title__main-title">
            Lorem ipsum <br />
            dolor amet
          </h1>
          <h3>Lorem ipsum placeholder dolor amet</h3>
        </div>
      </section>

      {/* SELF ROTATING */}
      {/* <div className="image-container">
          <div className="image-container__main-image rotate"></div>
        </div> */}

      {/* Parallax effect WiP */}
      <RotatingCircle />
    </div>
  );
};

const RotatingCircle = () => {
  const { ref } = useParallax({ rotate: [0, 160] });

  return (
    <div className="image-container" ref={ref}>
      <ImageCircle />
    </div>
  );
};

const ImageCircle = () => {
  const parallaxController = useParallaxController();

  return (
    // <img
    //   src="../../images/CircleMain.jpg"
    //   onLoad={() => parallaxController.update()}
    //   className="image-img-object"
    // />

    <div
      className="image-container__main-image"
      onLoad={() => parallaxController.update()}
    ></div>
  );
};
