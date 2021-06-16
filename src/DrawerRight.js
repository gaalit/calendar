import React from "react";
import TimeSlot from "./TimeSlot";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "date-fns";

export default function DrawerRight(props) {
  const dateObj = props.selectedDate;

  let myDate =
    dateObj.getUTCFullYear() +
    "/" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getUTCDate();

  return (
    <Drawer
      className={props.classes.drawerRight}
      variant="permanent"
      classes={{
        paper: props.classes.drawerPaper,
      }}
      anchor="right"
    >
      {/* TOP bar */}
      <div className={props.classes.topInfo}>
        <AppBar
          className={props.classes.appBar}
          style={{ background: "#52b788" }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Date Selected: {myDate}
            </Typography>
          </Toolbar>
        </AppBar>

        <TimeSlot classes={props.classes} />
      </div>
    </Drawer>
  );
}
