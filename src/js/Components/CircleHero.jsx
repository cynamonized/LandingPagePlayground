import "../../scss/main.scss";
import "../../scss/Components/circleHero.scss";
import {
  useParallax,
  useParallaxController,
  ParallaxProvider,
} from "react-scroll-parallax";

export const CircleHero = ({
  selfRotating,
  menuList,
  firstName,
  secondName,
  circlePath,
}) => {
  return (
    <ParallaxProvider>
      <div className="circle-hero">
        <section className="circle-hero__nav">
          <div className="container">
            <div className="nav__left-column">
              <p className="left-column__logo">
                {`${firstName}`} <span>{`${secondName}`}</span>
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
            <h1 className="title__main-title">
              Lorem ipsum <br />
              dolor amet
            </h1>
            <h3>Lorem ipsum placeholder dolor amet</h3>
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

const ParallaxCircle = ({ circlePath }) => {
  const { ref } = useParallax({ rotate: [0, 160] });
  return (
    <div className="image-container" ref={ref}>
      <ImageCircle circlePath={circlePath} />
    </div>
  );
};

const ImageCircle = ({ circlePath }) => {
  const parallaxController = useParallaxController();
  return (
    <img
      src={circlePath}
      // src="/images/CircleMain.jpg"
      onLoad={() => parallaxController.update()}
      className="image-img-object"
    />

    // <div
    //   className="image-container__main-image"
    //   onLoad={() => parallaxController.update()}
    // ></div>
  );
};
