import { Grid, Divider, Typography, Paper, Button, Modal, Box } from "@mui/material";
import { Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import TextInputField from "./Contact/Components/TextInputField";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 100,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "20px",
};

const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required("Required"),
    LastName: Yup.string().required("Required"),
    Email: Yup.string().required("Required"),
    Phone: Yup.string().required("Required"),
    Message: Yup.string().required("Required"),
});

const handleSubmit = async (values: any) => {
    const response = await fetch("/", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    const json = await response.json();
    return await json;
};


export default function ContactModal(props: {
    open: boolean;
    setOpen: Function;
}) {

    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <Modal open={props.open} onClose={handleClose}>
            <Formik
                initialValues={{
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Phone: "",
                    Message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values: any) => {
                    handleSubmit(values);
                    props.setOpen(true);
                }}
            >
                <Form>
                    <Grid container sx={{ mb: "100px" }}>
                        <Grid item xs={1} md={3}></Grid>
                        <Grid item xs={10} md={6}>
                            <Paper elevation={2} sx={{ pb: "30px" }} id="contact-form">
                                <Grid container spacing={1} sx={{ px: "5%" }}>
                                    <Typography variant="h4" sx={{ mt: "2%", width: "100%" }}>
                                        Contact Us
                                    </Typography>
                                    <TextInputField
                                        displayName="First Name"
                                        fieldName="FirstName"
                                        size={6}
                                    />
                                    <TextInputField
                                        displayName="Last Name"
                                        fieldName="LastName"
                                        size={6}
                                    />
                                    <Grid item xs={12} md={12} lg={12} sx={{ my: 2 }}>
                                        <Divider />
                                    </Grid>
                                    <TextInputField
                                        displayName="Email"
                                        fieldName="Email"
                                        size={6}
                                    />
                                    <TextInputField
                                        displayName="Phone number"
                                        fieldName="Phone"
                                        size={6}
                                    />
                                    <TextInputField
                                        displayName="Tell me about the problem you want to solve"
                                        fieldName="Message"
                                        size={12}
                                        mutliline={true}
                                        rows={5}
                                        maxRows={10}
                                    />
                                    <Grid item xs={10}></Grid>
                                    <Grid
                                        item
                                        xs={2}
                                        sx={{ display: "flex", justifyContent: "center", mt: "15px" }}
                                    >
                                        <Button
                                            variant="contained"
                                            type="submit"
                                        >
                                            Send
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={1} md={3}></Grid>
                    </Grid>
                </Form>
            </Formik>
        </Modal>
    )
}