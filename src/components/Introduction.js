import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";
import avatar from "../images/avatar.png";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(20),
        margin: theme.spacing(1),
        pointerEvents: "none",
    },
    title: {
        color: "#8d2100",
        fontSize: "1.5rem",
        userSelect: "none"
    },
    subtitle: {
        color: "#000000",
        textTransform: "uppercase",
        fontSize: "1rem",
        userSelect: "none"
    },
    typedContainer: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1,
    },
}));

const Introduction = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Konrad Bakowski" draggable={false}/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Konrad Bąkowski"]} typeSpeed={40}/>
            </Typography>

            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={[
                        "Backend Developer",
                        "Frontend Developer",
                        "Fullstack Developer",
                    ]}
                    typeSpeed={45}
                    backSpeed={45}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Introduction;
