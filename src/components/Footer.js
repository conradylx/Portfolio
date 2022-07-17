import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: "1rem",
        backgroundColor: "#23252d",
        width: "100%",
    },
    paragraph: {
        textAlign: "center",
        textTransform: "uppercase",
        color: "white",
        fontSize: ".8rem",
        fontWeight: "bold",
}
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <p className={classes.paragraph}>Have a nice day!</p>
        </div>
    )
};

export default Footer;