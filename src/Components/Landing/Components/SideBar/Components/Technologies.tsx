import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function Technologies() {
    const [alignment, setAlignment] = useState("skilled");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="technologies">
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
    </div>
  );
}
