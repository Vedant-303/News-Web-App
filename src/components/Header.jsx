import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="headSection">
      <Data />
      <div className="logo">What's Happening</div>
      <Time />
    </div>
  );
};

const Data = () => {
  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  let dayName;
  let monthName;

  if (day == 0) {
    dayName = "Sunday";
  } else if (day == 1) {
    dayName = "Monday";
  } else if (day == 2) {
    dayName = "Tuesday";
  } else if (day == 3) {
    dayName = "Wednesday";
  } else if (day == 4) {
    dayName = "Thursday";
  } else if (day == 5) {
    dayName = "Friday";
  } else {
    dayName = "Saturday";
  }

  if (month == 0) {
    monthName = "January";
  } else if (month == 1) {
    monthName = "February";
  } else if (month == 2) {
    monthName = "March";
  } else if (month == 3) {
    monthName = "April";
  } else if (month == 4) {
    monthName = "May";
  } else if (month == 5) {
    monthName = "June";
  } else if (month == 6) {
    monthName = "July";
  } else if (month == 7) {
    monthName = "August";
  } else if (month == 8) {
    monthName = "September";
  } else if (month == 9) {
    monthName = "October";
  } else if (month == 10) {
    monthName = "November";
  } else {
    monthName = "December";
  }

  return (
    <div className="date">
      <p>
        {dayName}, {date} {monthName}
      </p>
      <p>{year}</p>
    </div>
  );
};

const Time = () => {
  const timeHr = new Date().getHours();
  const timeMin = new Date().getMinutes();

  let AM_PM;

  if (timeHr < 12) {
    AM_PM = "AM";
  } else {
    AM_PM = "PM";
  }

  return (
    <div className="time">
      <p>Time:</p>
      <p>
        {timeHr}:{timeMin} {AM_PM}
      </p>
    </div>
  );
};

export default Header;
