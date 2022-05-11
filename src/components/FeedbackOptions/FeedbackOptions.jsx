import { Component } from 'react';
import SectionTitle from '..//SectionTitle';
import { Button } from './FeedbackOptions.js';
class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <SectionTitle title="Please leave feedback">
        {options.map(option => (
          <Button
            key={[option]}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </SectionTitle>
    );
  }
}

export default FeedbackOptions;
