import { Component } from 'react';
import SectionTitle from '..//SectionTitle';
import { Button } from './FeedbackOptions.js';
class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hundleIncrement = index => {
    const { options } = this.props;
    const option = options[index];
    this.setState(preState => ({ [option]: preState[option] + 1 }));
  };

  render() {
    const { options } = this.props;
    return (
      <SectionTitle title="Please leave feedback">
        {options.map((option, index) => (
          <Button
            key={option.length}
            type="button"
            onClick={() => this.hundleIncrement(index)}
          >
            {option}
          </Button>
        ))}
      </SectionTitle>
    );
  }
}

export default FeedbackOptions;
