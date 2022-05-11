import { Component } from 'react';
import { Paragraf } from './Statistics';
import SectionTitle from '../SectionTitle';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total = 0, positivePercentage } = this.props;

    return (
      <SectionTitle title="Statistics">
        <Paragraf>Good: {good}</Paragraf>
        <Paragraf>Neutral: {neutral}</Paragraf>
        <Paragraf>Bad: {bad}</Paragraf>
        <Paragraf>Total: {total}</Paragraf>
        <Paragraf>
          PositivePercentage: {total ? positivePercentage(good, total) : 0}
        </Paragraf>
      </SectionTitle>
    );
  }
}

export default Statistics;
