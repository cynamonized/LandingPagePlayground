import "../scss/main.scss";
import "../scss/Components/compMerger.scss";
import { CircleHero } from "./Components/CircleHero";
import { CircleAnimationBanner } from "./Components/CircleAnimationBanner";
import { CircleMockupBoth } from "./Components/CircleMockupBoth";
import { PhoneMockCenterDuo } from "./Components/PhoneMockCenter";
import { PhoneMockLeftDuo } from "./Components/PhoneMockLeft";
import { BasicNav } from "./Components/BasicNav";
import { Motionhero } from "./Components/MotionHero";
import { WindowTest } from "./Components/WindowTestLEGACY";
import {
  colorMainDark,
  colorMainDarkTransparent,
} from "./Settings/mediHomeScssVariables";

// Temp input props
const menuElements = [
  { name: "Contact", link: "#" },
  { name: "Prices", link: "#" },
  { name: "About us", link: "#" },
  { name: "Hiring", link: "#" },
  { name: "More", link: "#" },
];

const firstName = "Test";
const lastName = "Page";

// //////////////////////////////////////////////////
// 2. OPTION WITH NO PICTURE? - PRACTICALLY IT'S DONE
// //////////////////////////////////////////////////

function App() {
  return (
    <>
      <Motionhero
        menuList={menuElements}
        firstName={firstName}
        secondName={lastName}
        mainColor={"#ffc400"}
        backgroundColor={colorMainDark}
      />

      {/* <CircleHero
        selfRotating={false}
        firstName={"Circle"}
        secondName={"Testing"}
        menuList={menuElements}
        circlePath={"/images/CircleMain.png"}
        mainColor={"#ffc400"}
        title={"Lorem ipsum dolor amet"}
        subtitle={"Lorem ipsum placeholder dolor amet"}
      /> */}

      {/* <CircleAnimationBanner imagePath={"/images/Careers_middle_1.png"} /> */}

      {/* Without background it will still make circles */}
      {/* <CircleAnimationBanner imagePath={"none"} /> */}

      {/* <div
        style={{
          marginBottom: "150px",
          display: "flex",
          flexDirection: "column",
          gap: "100px",
        }}
      >
        <CircleMockupBoth
          circlePath={"/images/CircleMainMobile.png"}
          mainTitle={"Technology Report 2023"}
          subtitle={"This is subtitle"}
          mainColor={"#CC0000"}
          backgroundColor={"#0d1522"}
          blockColor={"#1b0d49"}
        />
        <PhoneMockCenterDuo
          circlePath={"/images/CircleMainMobile.png"}
          mainTitle={"Technology Report 2023"}
          subtitle={"This is subtitle"}
          mainColor={"#CC0000"}
          backgroundColor={"#0d1522"}
          blockColor={"#1b0d49"}
        />
        <PhoneMockLeftDuo
          circlePath={"/images/CircleMainMobile.png"}
          mainTitle={"Technology Report 2023"}
          subtitle={"This is subtitle"}
          mainColor={"#CC0000"}
          backgroundColor={"#0d1522"}
          blockColor={"#1b0d49"}
        />
      </div> */}
    </>
  );
}

export default App;
