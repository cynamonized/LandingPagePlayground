import "../../scss/main.scss";
import "../../scss/Components/circleHero.scss";
import {
  useParallax,
  useParallaxController,
  ParallaxProvider,
} from "react-scroll-parallax";
import { lineBreaking } from "../Utilities/linebreaking";

export const CircleHero = ({
  selfRotating,
  menuList,
  firstName,
  secondName,
  circlePath,
  mainColor,
  title,
  subtitle,
}) => {
  return (
    <ParallaxProvider>
      <div className="circle-hero">
        <section className="circle-hero__nav">
          <div className="container">
            <div className="nav__left-column">
              <p className="left-column__logo">
                {`${firstName}`}{" "}
                <span style={{ color: mainColor }}>{`${secondName}`}</span>
              </p>
            </div>

            <div className="nav__right-column">
              <ul className="right-column__menu-list">
                {menuList.map((element) => {
                  return (
                    <a href={element.link} key={element.name}>
                      <li className="menu-list__list-element">
                        {element.name}
                      </li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className="circle-hero__image-section">
          <div className="image-section__title">
            <h1 className="title__main-title">{title}</h1>
            <h3>{subtitle}</h3>
          </div>
        </section>

        {selfRotating == true ? (
          <SelfRotatingCircle circlePath={circlePath} />
        ) : (
          <ParallaxCircle circlePath={circlePath} />
        )}
      </div>
    </ParallaxProvider>
  );
};

export const SelfRotatingCircle = ({ circlePath }) => {
  return (
    <div className="image-container">
      {/* <div className="image-container__main-image rotate"></div> */}

      <img
        src={circlePath}
        onLoad={() => parallaxController.update()}
        className="image-img-object rotate"
      />
    </div>
  );
};

export const ParallaxCircle = ({ circlePath }) => {
  const { ref } = useParallax({ rotate: [0, 160] });
  return (
    <div className="image-container" ref={ref}>
      <ImageCircle circlePath={circlePath} />
    </div>
  );
};

export const ImageCircle = ({ circlePath }) => {
  const parallaxController = useParallaxController();
  return (
    <img
      src={circlePath}
      onLoad={() => parallaxController.update()}
      className="image-img-object"
    />

    // <div
    //   className="image-container__main-image"
    //   onLoad={() => parallaxController.update()}
    // ></div>
  );
};
