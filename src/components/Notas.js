import React, { Component } from 'react';

export default class Notas extends Component {
  handleInputChange = (event) => {
    const { id } = this.props.currentGrades;
    const grade = Number.parseInt(event.target.value);
    this.props.onGradeChange(grade, id);
  };

  render() {
    const { moduleName, currentGrades } = this.props;
    const { grades } = currentGrades;

    return (
      <div>
        <label>{moduleName} </label>
        <input
          style={grades >= 60 ? styles.toColorGreen : styles.toColorRed}
          type="number"
          min="0"
          max="100"
          defaultValue={grades}
          onInput={this.handleInputChange}
        />
      </div>
    );
  }
}

const styles = {
  toColorRed: {
    color: 'red',
    fontWeight: 'bold',
  },
  toColorGreen: {
    color: 'green',
    fontWeight: 'bold',
  },
};
