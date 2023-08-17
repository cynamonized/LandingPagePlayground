import { useState } from "react";
import "../../scss/main.scss";
import "../../scss/Components/circleHero.scss";

export const CircleHero = () => {
  return (
    <>
      <div className="circle-hero">
        <section className="circle-hero__nav">
          <div className="container">
            <div className="nav__left-column">
              <p className="left-column__logo">
                Circle <span>Dracula</span>
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

        {/* <div className="main-image rotate"></div> */}

        <div className="image-container">
          <div className="image-container__main-image rotate"></div>
        </div>
      </div>
    </>
  );
};
