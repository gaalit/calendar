import React from "react";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import AvatarImg from "../src/assets/avatar.jpeg";
import "../src/App.css";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export default function DrawerLeft({ classes }) {
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      {/* TOP IMAGE and name */}
      <div className={classes.topInfo}>
        <Avatar alt="Remy Sharp" src={AvatarImg} className={classes.large} />
        <Typography variant="h5">John Doe</Typography>
        <Typography variant="h7">HCP Role</Typography>
      </div>

      <Divider />
      <div className={classes.topInfo}>
        <Button
          className={classes.buttonFormating}
          variant="contained"
          color="primary"
        >
          Patient Overview
        </Button>
        <Button
          className={classes.buttonFormating}
          variant="contained"
          color="secondary"
        >
          Input Availability
        </Button>
        <Button
          className={classes.buttonFormating}
          variant="contained"
          color="primary"
          disableRipple
          style={{ background: "purple" }}
        >
          Cencel/Reschedule
        </Button>
      </div>
    </Drawer>
  );
}
