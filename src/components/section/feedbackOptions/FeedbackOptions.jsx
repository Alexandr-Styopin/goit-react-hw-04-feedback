import React from 'react';
import css from '../feedbackOptions/FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btnList}>
      {options.map(option => (
        <li className={css.btnItem} key={option}>
          <button
            className={css.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
