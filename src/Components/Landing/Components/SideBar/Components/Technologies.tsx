import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Skill from "./Skill";

// Create a custom theme
const theme = createTheme({
  palette: {
    neutral: {
      main: "rgb(242, 194, 4)",
      contrastText: "#fff",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

// Skills list containing things that I am competent in
const skilled = [
  "React",
  "Typescript",
  "Node",
  "Python",
  "C# / .NET",
  "Tensorflow",
];
// Learning list containing things that I am learning
const learning = ["Microsoft Azure", "Solidity", "React Native"];

export default function Technologies() {
  const [alignment, setAlignment] = useState<string>("skilled");
  const [skillsList, setSkillsList] = useState<string[]>(skilled);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
      // Set the alignment for the toggle button
      // and set the skills list.
    setAlignment(newAlignment);
    if (newAlignment === "skilled") {
      setSkillsList(skilled);
    } else if (newAlignment === "learning") {
      setSkillsList(learning);
    }
  };

  return (
    <div className="technologies">
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="skilled">Skilled</ToggleButton>
          <ToggleButton value="learning">Leaning</ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
     <div className="skills-container">
     {skillsList?.map((skill) => (
        <Skill skill={skill}/>
      ))}
     </div>
    </div>
  );
}
