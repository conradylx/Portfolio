import React, {useRef} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import emailjs from '@emailjs/browser';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";
import Footer from "./Footer";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    contactContainer: {
        background: "#1b1d2d",
        height: "100vh",
    },
    heading: {
        color: "tan",
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: "1rem",
    },
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    input: {
        color: "#fff",
    },
    button: {
        marginTop: "1rem",
        color: "tan",
        borderColor: "tan",
    },
    field: {
        margin: "1rem 0rem",
    },
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "&.Mui-focused fieldset": {
                color: "#fff",
                borderColor: "tan",
            },
        },
    },
})(TextField);

const Contact = () => {
    const classes = useStyles();
    const history = useHistory();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_81c55pa', 'template_el36ovw', form.current, 'vFyuilDE4Fis_xmqf')
            .then((result) => {
                history.push(`/`)
            }, (error) => {
                console.log("Error occured. Let me know about it");
            });
    };
    return (
        <>
            <Box component="div" className={classes.contactContainer}>
                <Grid container justify="center">
                    <form ref={form} onSubmit={sendEmail}>
                        <Box className={classes.form}>
                            <Typography variant="h5" className={classes.heading}>
                                Feel free to Contact me...
                            </Typography>
                            <InputField
                                fullWidth={true}
                                label="Name"
                                name="name"
                                variant="outlined"
                                inputProps={{className: classes.input}}
                            />
                            <InputField
                                fullWidth={true}
                                label="Email"
                                name="email"
                                variant="outlined"
                                inputProps={{className: classes.input}}
                                className={classes.field}
                            />
                            <InputField
                                fullWidth={true}
                                label="Message"
                                name="message"
                                variant="outlined"
                                multiline
                                rows={4}
                                inputProps={{className: classes.input}}
                            />
                            <Button
                                variant="outlined"
                                fullWidth={true}
                                endIcon={<Send/>}
                                className={classes.button}
                                type="submit"
                            >
                                Contact Me
                            </Button>
                        </Box>
                    </form>
                </Grid>
            </Box>
            <Footer/>
        </>
    );
};

export default Contact;
