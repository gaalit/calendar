import DrawerLeft from "./DrawerLeft";
import DrawerRight from "./DrawerRight";
import Months from "./Months";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: "#d6d6d6",
    color: "#000",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },

  topInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  buttonFormating: {
    margin: "10px",
    textTransform: "none",
  },
  calendarFormating: {
    margin: "7.5% 0 0 40%",
  },
  timeSelectorFormatting: {
    marginTop: "80px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  media: {
    height: 140,
  },

  selectedTimeSlot: {
    background: "#d6d6d6",
    marginTop: "20px",
    maxWidth: 345,
  },

  radioText: {
    color: "#3f50b5",
    fontSize: "10px",
  },
  selectedTimeOnCard: {
    marginTop: "10px",
    color: "#52b788",
    fontWeight: "bold",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Please Select Available Date:
          </Typography>
        </Toolbar>
      </AppBar>
      <Months classes={classes} />
      <DrawerLeft classes={classes} />
    </div>
  );
}
