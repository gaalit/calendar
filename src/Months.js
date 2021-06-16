import DrawerRight from "./DrawerRight";
import React, { useState } from "react";

import "react-calendar/dist/Calendar.css";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Months({ classes }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setToggle(true);
  };
  return (
    <div className={classes.calendarFormating}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      {toggle ? (
        <DrawerRight
          selectedDate={selectedDate}
          classes={classes}
          toggle={toggle}
        ></DrawerRight>
      ) : (
        ""
      )}
    </div>
  );
}
