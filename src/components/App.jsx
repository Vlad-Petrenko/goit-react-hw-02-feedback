import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
export const App = () => {
  return (
    <>
      <FeedbackOptions options={['good', 'neutral', 'bad']} />
      <Statistics />
    </>
  );
};
