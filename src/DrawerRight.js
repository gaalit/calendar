import React, { useState } from "react";
import {
  Button,
  Input,
  InputAdornment,
  IconButton,
  Dialog,
  DialogActions,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import DeleteIcon from "@material-ui/icons/Delete";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import AccessTime from "@material-ui/icons/AccessTime";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
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

  // console.log(myDate);

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("00:00");

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleDialogTimeChange = (newValue) => {
    const hours = newValue.getHours().toString().padStart(2, "0");
    const minutes = newValue.getMinutes().toString().padStart(2, "0");
    const textValue = hours + ":" + minutes;
    setValue(textValue);
  };
  const handleKeyboardTimeChange = (event) => setValue(event.target.value);

  const createDateFromTextValue = (value) => {
    const splitParts = value.split(":");
    return new Date(1970, 1, 1, splitParts[0], splitParts[1]);
  };

  console.log(value);

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

        <div className={props.classes.timeSelectorFormatting}>
          <div>
            <Input
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
              <div style={{ margin: "10px" }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
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
          </div>
        </div>
      </div>
      {/* DISPLAY OF SELECTED TIME SLOT */}
      {/* if value is not equal to the initial state (i.e: time has changed) */}
      {value !== "00:00" ? (
        <Card id={value} className={props.classes.selectedTimeSlot}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Time Selected:
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                {value} AM
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* REOCURRING? */}
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  className={props.classes.radioText}
                  value="end"
                  control={<Radio color="primary" />}
                  label="Reoccurring"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              color="secondary"
              className={props.classes.buttonFormating}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ) : (
        ""
      )}
    </Drawer>
  );
}