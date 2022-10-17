import { Box, Typography } from "@mui/material";
import {GetAgeAsNumber} from "../../../../../Utils/GetAgeAsNumber";

export default function Location() {
  return (
    <Box sx={{p: "7%"}}>
      <Box sx={{display: "flex", justifyContent: "space-between", margin: "2% 5%"}}>
        <Typography sx={{color: "var(--white-text)"}}>Country:</Typography>
        <Typography sx={{color: "var(--white-text)"}}>Australia</Typography>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-between", margin: "2% 5%"}}>
        <Typography sx={{color: "var(--white-text)"}}>City:</Typography>
        <Typography sx={{color: "var(--white-text)"}}>Sydney</Typography>
      </Box>
      <Box sx={{display: "flex", justifyContent: "space-between", margin: "2% 5%"}}>
        <Typography sx={{color: "var(--white-text)"}}>Age:</Typography>
        <Typography sx={{color: "var(--white-text)"}}>{GetAgeAsNumber(new Date("December 13, 2000"))}</Typography>
      </Box>
      <Box sx={{margin: "5%", borderBottom: "1px solid var(--grey-text)"}}></Box>
    </Box>
  );
}
