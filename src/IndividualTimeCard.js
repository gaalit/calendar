import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const IndividualTimeCard = (props) => {
  // FUCNTION TO DELETE A SELECTED TIME
  const deleteTime = (timeToDelete) => {
    const newList = props.arrayOfTimes.filter((time) => time !== timeToDelete);
    props.setArrayOfTimes(newList);
  };

  return (
    <div>
      <Card className={props.classes.selectedTimeSlot}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="body2"
              style={{ textDecoration: "underline" }}
            >
              Time Selected:
            </Typography>
            <Typography
              className={props.classes.selectedTimeOnCard}
              variant="h6"
              component="p"
            >
              {props.value}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ marginTop: "-25px" }}>
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
                label={
                  <Typography variant="body2" color="textSecondary">
                    Reoccurring
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
          <Button
            onClick={() => {
              deleteTime(props.value);
            }}
            variant="contained"
            color="secondary"
            className={props.classes.buttonFormating}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default IndividualTimeCard;
