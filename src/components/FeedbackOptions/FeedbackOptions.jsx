import { Component } from 'react';
import SectionTitle from '..//SectionTitle';
import { Button } from './FeedbackOptions.js';
class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { options } = this.props;
    const arr = Object.values(this.props);
    const obj = { ...arr };
    console.log(options);
    return (
      <SectionTitle title="Please leave feedback">
        {options.map(el => (
          <Button key={el.length} type="button">
            {el}
          </Button>
        ))}
      </SectionTitle>
    );
  }
}

export default FeedbackOptions;
