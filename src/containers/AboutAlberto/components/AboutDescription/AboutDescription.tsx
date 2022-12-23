import vars from "../../../../styles/variables.scss";
import { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./AboutDescription.scss";
import { getTranslatedLabel } from "../../../../common/labels/utils";
import FloatingScrollButton from "../../../../components/FloatingScrollButton/FloatingScrollButton";
import { useRef } from "react";
import useOnScreen from "../../../../hooks/useOnScreen/useOnScreen";

export interface AboutDescriptionProps {
  goToSection: React.MutableRefObject<HTMLDivElement | null>;
}
const AboutDescription = ({ goToSection }: AboutDescriptionProps) => {
  const descRef = useRef(null);
  const isVisible = useOnScreen(descRef);
  const isDarkTheme = useSelector(
    (state: RootState) => state.session.theme === "dark"
  );
  const isTablet = useMediaQuery(`(min-width:${vars["breakpoint-md"]})`);
  const boxList = [
    {
      backgroundColor: "#20a7d8",
      label: getTranslatedLabel("aboutAlberto.profileCard.name"),
    },
    {
      backgroundColor: "#CD921E",
      label: getTranslatedLabel("aboutAlberto.aboutDescription.feDev"),
    },
    {
      backgroundColor: "#c10528",
      label: getTranslatedLabel("aboutAlberto.aboutDescription.swEng"),
    },
  ];

  return (
    <Box
      className="aboutDescription"
      id="about-description"
      sx={{
        width: "100%",
        height: isTablet ? "100vh" : "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <div className="aboutDescription_textAnimation">
        <p>Hello 👋 I'm</p>
        <div className="aboutDescription_textAnimation_animation">
          {boxList.map((b) => (
            <Box
              ref={descRef}
              sx={{
                backgroundColor: b.backgroundColor,
                textAlign: "center",
                width: "fit-content",
              }}
            >
              {b.label}
            </Box>
          ))}
        </div>
      </div>
      <Typography
        sx={{
          width: isTablet ? "60%" : "70%",
          height: "fit-content",
          fontFamily: "Nunito, sans-serif",
          //   marginTop: "20%",
          color: isDarkTheme ? vars["color-white"] : vars["color-black"],
          ...(!isTablet ? { marginBottom: "20%" } : null),
        }}
      >
        {getTranslatedLabel("aboutAlberto.aboutDescription.aboutDesc")}
      </Typography>
      {isTablet && isVisible && <FloatingScrollButton goToSection={goToSection} />}
    </Box>
  );
};

export default AboutDescription;
