import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#1b1d2d",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "o auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
        [theme.breakpoints.between("sm", "md")]: {
            padding: ".2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#fff #fff transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #fff #fff",
            },
        },
        [theme.breakpoints.between("sm", "md")]: {
            width: "44%",
            margin: ".5rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #fff #fff",
            },
        },
        [theme.breakpoints.down("xs")]: {
            width: "40%",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #fff #fff",
            },
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "#000",
        background: "#fff",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
        [theme.breakpoints.between("sm", "md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    },
    heading: {
        color: "#fff",
        padding: "3rem 0",
        textTransform: "uppercase",
        fontFamily: 'Playfair Display, serif',
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.7rem",
        },
    },
    subHeading: {
        color: "#fff",
        padding: 0,
        textTransform: "uppercase",
        [theme.breakpoints.down("xs")]: {
            fontSize: ".8rem"
        },
    },
    paragraph: {
        color: "white",
        padding: "4rem 5rem",
        border: "2px tomato dashed",
        margin: "0 5rem",
        fontSize: "1.2rem",
        [theme.breakpoints.down("xs")]: {
            border: "1px tomato dashed",
            margin: "0 2rem",
            fontSize: ".8rem"
        },
        [theme.breakpoints.between("sm", "md")]: {
            padding: "2rem 3rem",
            border: "2px tomato dashed",
            margin: "0 4rem",
        },
    },
    body1: {
        color: "tomato",
        [theme.breakpoints.down("xs")]: {
            marginTop: ".2rem",
            fontSize: ".8rem",
            lineHeight: "normal",
        },
    },
    body2: {
        color: "#ff5252",
        [theme.breakpoints.down("xs")]: {
            marginTop: ".2rem",
            fontSize: ".8rem",
            lineHeight: "normal",
        },
    },
    subtitle1: {
        color: "tan",
        [theme.breakpoints.down("xs")]: {
            marginTop: ".6rem",
            fontSize: ".8rem",
            lineHeight: "normal",
        },
    },
    skillset: {
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            fontSize: ".8rem",
            margin: "-2rem -4rem",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "1rem",
        },
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    UP-TO-DATE SKILLS
                </Typography>
                <Typography
                    variant="body2"
                    align="center"
                    className={classes.paragraph}
                >
                    <p className={classes.skillset}>
                        🖖🏻 Greetings! <br/><br/>
                        I'm always picking up new things and perfecting the basics.
                        Currently, I'm going into React and Flask as the priority is to build websites in very easily
                        way. I'm also trying to break into blockchain development.<br/><br/>
                        Anyway, there are my current skills:<br/>
                        🧠 Core languages: HTML, CSS, JavaScript, Python, Bash<br/>
                        🦾 Frameworks & Libraries: Django, Flask, React + including some TypeScript, Selenium<br/>
                        👾 Version control & collaboration: Git, GitHub, Gitlab<br/>
                        🖥️ Database: Postgres, MongoDb<br/>
                        🎨 Design: Figma
                    </p>
                </Typography>
            </Box>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience Timeline
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2023
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Fullstack Python developer
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            Cloudware, Warsaw, Poland
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body2}>
                            Technology stack
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Python, Django/DRF, Angular, Postgres, Redis, Docker, Celery, Selenium
                        </Typography>
                    </Box>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Fullstack Python Developer
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            ISpot Poland, Warsaw, Poland
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body2}>
                            Technology stack
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Python, Flask, React, Typescript, MongoDB, Redis
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2021
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Cobol developer
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body1}>
                            Asseco, Warsaw, Poland
                        </Typography>
                        <Typography variant="body1" align="center" className={classes.body2}>
                            Technology stack
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Cobol, JCL, CICS, IBM DB2
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2018
                    </Typography>
                </Box>
            </Box>
            <Footer/>
        </>
    );
};

export default Resume;
