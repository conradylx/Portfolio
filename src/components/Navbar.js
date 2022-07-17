import React, {useState} from "react";
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: "#222",
        margin: 0,
    },
    arrow: {
        color: "tomato",
    },
    content: {
        display: "flex",
        justifyContent: "flex-end",
    },
    title: {
        color: "white",
        "&:hover": {
            cursor: "pointer",
            color: "#dfffd7",
        },
    },
    menuSliderContainer: {
        width: 250,
        background: "#fff8ed",
        height: "100%",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(8),
        fontFamily: 'Taviraj',
        fontSize: "2vw"
    },
    listItem: {
        color: "black",
    },
}));

const menuItems = [
    {listIcon: <Home/>, listText: "Home", listPath: "/"},
    {listIcon: <AssignmentInd/>, listText: "Resume", listPath: "/resume"},
    {listIcon: <Apps/>, listText: "Github", listPath: "/github"},
    {listIcon: <ContactMail/>, listText: "Contact", listPath: "/contact"},
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const sideList = () => (
        <Box className={classes.menuSliderContainer} component="div">
            <Divider/>
            <List>
                {menuItems.map((item, i) => (
                    <ListItem
                        button
                        key={i}
                        className={classes.listItem}
                        onClick={() => setOpen(false)}
                        component={Link}
                        to={item.listPath}
                    >
                        <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={item.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <React.Fragment>
            <Box component="nav">
                <AppBar position="static" className={classes.appbar}>
                    <Toolbar className={classes.content} >
                        <Typography variant="h5" className={classes.title} onClick={() => setOpen(true)}>
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
                {sideList()}
            </Drawer>
        </React.Fragment>
    );
};

export default Navbar;
