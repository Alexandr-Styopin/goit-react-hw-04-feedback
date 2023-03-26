import React from 'react';
import Notification from '../Notification/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  if (total <= 0) {
    return (
      <>
        <Notification message="There is no feedback"></Notification>
      </>
    );
  }
  return (
    <ul>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
      <li>Total:{total}</li>
      <li>Positive feedback:{positivePercentage}%</li>
    </ul>
  );
}
