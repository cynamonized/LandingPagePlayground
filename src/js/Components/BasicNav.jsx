import "../../scss/main.scss";
import "../../scss/Components/basicNAv.scss";

export const BasicNav = ({ menuList, firstName, secondName, mainColor }) => {
  return (
    <>
      <nav className="nav-merged nav-hero">
        <div className="nav-merged__container container">
          <div className="container__left-column">
            <p className="left-column__logo">
              {`${firstName}`}{" "}
              <span style={{ color: mainColor }}>{`${secondName}`}</span>
            </p>
          </div>

          <div className="container__right-column">
            <ul className="right-column__menu-list">
              {menuList.map((element) => {
                return (
                  <a href={element.link} key={element.name}>
                    <li className="menu-list__list-element">{element.name}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
