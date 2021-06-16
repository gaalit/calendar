import React from "react";

import IndividualTimeCard from "./IndividualTimeCard";

const TimeSlotSelectedCard = (props) => {
  const timeSelectedContainer =
    props.arrayOfTimes.length > 0
      ? props.arrayOfTimes.map((timeSelected) => {
          return (
            <IndividualTimeCard
              setArrayOfTimes={props.setArrayOfTimes}
              arrayOfTimes={props.arrayOfTimes}
              key={timeSelected}
              classes={props.classes}
              value={timeSelected}
            />
          );
        })
      : "";

  return timeSelectedContainer;
};

export default TimeSlotSelectedCard;
