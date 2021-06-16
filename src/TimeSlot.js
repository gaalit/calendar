import React, { useState } from "react";
import {
  Button,
  Input,
  InputAdornment,
  IconButton,
  Dialog,
  DialogActions,
} from "@material-ui/core";

import AccessTime from "@material-ui/icons/AccessTime";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import TimeSlotSelectedCard from "./TimeSlotSelectedCard";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@material-ui/core/Typography";

const TimeSlot = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("00:00");
  let [arrayOfTimes, setArrayOfTimes] = useState([]);

  console.log(arrayOfTimes);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleDialogTimeChange = (newValue) => {
    const hours = newValue.getHours().toString().padStart(2, "0");
    const minutes = newValue.getMinutes().toString().padStart(2, "0");
    const textValue = hours + ":" + minutes;
    setValue(textValue);
    // adding new time to the array of selected times
    setArrayOfTimes([...arrayOfTimes, textValue]);
  };
  const handleKeyboardTimeChange = (event) => setValue(event.target.value);

  const createDateFromTextValue = (value) => {
    const splitParts = value.split(":");
    return new Date(1970, 1, 1, splitParts[0], splitParts[1]);
  };

  return (
    //TIME SELECTOR
    <div className={props.classes.timeSelectorFormatting}>
      <div>
        <Typography
          style={{ fontWeight: "bold" }}
          variant="body1"
          component="p"
        >
          Please select all available times:
        </Typography>

        <Input
          style={{ marginTop: "10px" }}
          value={value}
          onChange={handleKeyboardTimeChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={openDialog}>
                <AccessTime />
              </IconButton>
            </InputAdornment>
          }
        />
        <Dialog maxWidth="xs" open={isOpen}>
          <div style={{ margin: "15px" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                ampm={false}
                label="24 hour clock"
                value={createDateFromTextValue(value)}
                onChange={handleDialogTimeChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={closeDialog} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <TimeSlotSelectedCard
          classes={props.classes}
          arrayOfTimes={arrayOfTimes}
          setArrayOfTimes={setArrayOfTimes}
        />
      </div>
    </div>
  );
};

export default TimeSlot;
