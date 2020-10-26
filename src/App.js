import React, { Component } from 'react';
import Calculos from './components/Calculos';
import Notas from './components/Notas';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      modules: [
        {
          id: 1,
          description: 'Módulo 01 - Fundamentos (0 - 100)',
          grades: 100,
        },
        {
          id: 2,
          description: 'Módulo 02 - Angular (0 - 100)',
          grades: 100,
        },
        {
          id: 3,
          description: 'Módulo 03 - React (0 - 100)',
          grades: 100,
        },
        {
          id: 4,
          description: 'Módulo 01 - Vue (0 - 100)',
          grades: 100,
        },
        {
          id: 5,
          description: 'Módulo 01 - Desafio Final (0 - 100)',
          grades: 100,
        },
      ],
      totalGrades: '',
      average60Percent: true,
    };
  }

  handleChangeGrade = (grade, i) => {
    const { modules } = this.state;
    //Nesta parte acontece a alteração das notas do array grades e
    //em seguida faz o cálculo de acordo com a nota informada!
    modules.map((item) => {
      if (item.id === i) {
        item.grades = grade;
      }
      return i;
    });
    this.willBeCalculatedGrades();
  };

  willBeCalculatedGrades = () => {
    const { modules } = this.state;
    let totalGrades = modules.reduce((accumulator, current) => {
      return accumulator + current.grades;
    }, 0);
    let validateAverage60Percent = modules.find((item) => {
      return item.grades < 60;
    });

    this.setState({
      totalGrades,
      average60Percent: validateAverage60Percent ? false : true,
    });
  };

  render() {
    const { modules, totalGrades, average60Percent } = this.state;
    return (
      <>
        <div className="container">
          <h1>Notas Atuais</h1>
          <div className="border">
            {modules.map((currentGrades) => {
              const { id, description } = currentGrades;
              return (
                <div key={id}>
                  <Notas
                    moduleName={description}
                    currentGrades={currentGrades}
                    onGradeChange={this.handleChangeGrade}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <h3>Cálculos</h3>
            <Calculos
              totalGrades={totalGrades}
              modules={modules}
              average60Percent={average60Percent}
            />
          </div>
        </div>
      </>
    );
  }
}
