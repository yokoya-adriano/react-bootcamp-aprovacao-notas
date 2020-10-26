import React, { Component } from 'react';
import { averageGrades } from '../helpers/calculateGrades';
import { formatPercent } from '../helpers/formatHelpers';
import css from './calculo.module.css';

export default class Calculos extends Component {
  render() {
    const { modules, totalGrades, average60Percent } = this.props;
    return (
      <div>
        <label>Total grades: </label>
        <span>{totalGrades}</span>
        <br></br>
        <label>Percentual Total: </label>
        <span>
          {formatPercent(averageGrades(totalGrades, modules.length) / 100)}
        </span>
        <br></br>
        <label>Aprovação pela média (60%): </label>
        {average60Percent ? (
          <span className={css.approved}>Sim</span>
        ) : (
          <span className={css.disapproved}>Não</span>
        )}
        <br></br>
        <label>Aprovação pelo percentual total: </label>
        {averageGrades(totalGrades, modules.length) >= 70 ? (
          <span className={css.approved}>Sim</span>
        ) : (
          <span className={css.disapproved}>Não</span>
        )}
      </div>
    );
  }
}
