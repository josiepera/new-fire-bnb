import React, {Component} from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class StartDate extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      // Day is disabled, do nothing
      return;
    }
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
      <h6> Start Date </h6>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
          disabledDays={{ daysOfWeek: [0, 3, 4] }}
        />
        {this.state.selectedDay ? (
          <p>You selected {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    );
  }
}

export default StartDate;
