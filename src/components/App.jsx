import Section from './section/Section';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const goodFeedback = good + neutral;
    const totalFeedback = good + neutral + bad;
    return Math.floor((goodFeedback / totalFeedback) * 100);
  };

  return (
    <div>
      <h1>Please leave feedback</h1>
      <Section
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleLeaveFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}
