import { Component } from 'react';
// import styled from './Statistics';
import SectionTitle from '../SectionTitle';

class Statistics extends Component {
  render(good = 0, neutral = 0, bad = 0) {
    return (
      <SectionTitle title="Statistics">
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
      </SectionTitle>
    );
  }
}

export default Statistics;
