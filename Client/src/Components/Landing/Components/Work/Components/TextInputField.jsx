import {
    TextField,
    InputLabel,
    Grid
  } from "@mui/material";
  
  import { useField } from "formik";
  
  const TextInputField = (props) => {
    const [field, meta] = useField(props.fieldName);

    return (
      <Grid item xs={props.size} sx={{width: "100%"}}>
        <InputLabel>{props.displayName}</InputLabel>
        <TextField {...field} error={meta.touched && (meta.error ? true : false)} label={meta.touched ? meta.error : ""} name={props.fieldName} size="small" sx={{ width: "100%" }} multiline rows={props.rows} />
      </Grid>
    );
  };
  
  export default TextInputField;