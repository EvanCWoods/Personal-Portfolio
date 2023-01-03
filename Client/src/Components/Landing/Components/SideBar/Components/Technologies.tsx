import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Skill from "./Skill";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}


// Skills list containing things that I am competent in
const skilled = [
  "React",
  "Typescript",
  "Node",
  "Python",
  "C# / .NET",
  "Microsoft Azure",
];
// Learning list containing things that I am learning
const learning = [
  "Google Cloud",
  "Tensorflow", "Solidity", "React Native"
];

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
    <Box>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
        </Box>
      </ThemeProvider>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {skillsList?.map((skill) => (
          <Skill skill={skill} />
        ))}
      </Box>
    </Box>
  );
}
