import { Component } from 'react';
import { Paragraf } from './Notification';
import SectionTitle from '../SectionTitle';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <SectionTitle>
        <Paragraf>{message}</Paragraf>
      </SectionTitle>
    );
  }
}

export default Notification;
