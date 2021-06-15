import React from "react";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

import "date-fns";

import DateFnsUtils from "@date-io/date-fns";

export default function DrawerRight(props) {
  const dateObj = props.selectedDate;

  let myDate =
    dateObj.getUTCFullYear() +
    "/" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getUTCDate();

  console.log(myDate);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Drawer
      className={props.classes.drawer}
      variant="permanent"
      classes={{
        paper: props.classes.drawerPaper,
      }}
      anchor="right"
    >
      {/* TOP IMAGE and name */}
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
        <div className={props.classes.timeSelectorFormatting}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
      </div>
    </Drawer>
  );
}
