import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';
import css from '../statistics/Statistics.module.css';

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
    <ul className={css.valueList}>
      <li className={css.valueItem}>
        <p className={css.value}>Good:{good}</p>
      </li>
      <li className={css.valueItem}>
        <p className={css.value}>Neutral:{neutral}</p>
      </li>
      <li className={css.valueItem}>
        <p className={css.value}>Bad:{bad}</p>
      </li>
      <li className={css.valueItem}>
        <p className={css.value}>Total:{total}</p>
      </li>
      <li className={css.valueItem}>
        <p className={css.value}>Positive feedback:{positivePercentage}%</p>
      </li>
    </ul>
  );
}
Notification.propTypes = {
  message: PropTypes.string,
};
