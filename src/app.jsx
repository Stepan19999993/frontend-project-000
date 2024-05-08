/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import QustionF from './qustions.jsx';

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      agree: '',
      sex: null,
      disabled: true,
    };
  }

  changeAgree = (e) => {
    const value = e.target.value.length;
    let realV = '';

    if (value === 1) realV = 'Д';
    else if (value === 2) realV = 'Да';
    else if (value >= 3) realV = 'Да!';

    this.setState({ agree: realV });
  };

  changeName = (e) => {
    const { value } = e.target;

    this.setState({ name: value });
  };

  changeSex = (e) => {
    this.setState({ sex: Number(e.target.id) });
  };

  render() {
    const {
      name,
      agree,
      sex,
      disabled,
    } = this.state;

    return (
      <section className="p-4 mt-5 bg-white container rounded">
        <div className="row">
          <h1 className="display-4 mb-2 text-name text-center">Регистрация</h1>
          <p className="lead text-discription text-center">
            Добро пожаловать, на тест... Ох, не знаю что написать.
            А ладно, всё равно это никто не читает.
          </p>
          <form>
            <div className="form-group mb-2">
              <label htmlFor="name">Имя -</label>
              <input onChange={this.changeName} value={name} className="form-control" id="name" placeholder="Василий" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="agree">Вы согласны с пользовательскими правилами?</label>
              <input onChange={this.changeAgree} value={agree} className="form-control" id="agree" placeholder="Да" />
              <small id="emailHelp" className="form-text text-muted">
                Мы возможно не передаем ваши данным Третьем Лицам.
                <a href="#"> Пользовательское Соглашение</a>
              </small>
            </div>
            <p>Ваш пол:</p>
            <div className="mb-1">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="1">
                  <input onChange={this.changeSex} className="form-check-input" type="checkbox" id="1" value="option1" checked={sex === 0} />
                  М
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="0">
                  <input onChange={this.changeSex} className="form-check-input" type="checkbox" id="0" value="option2" checked={sex === 1} />
                  Ж
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="2">
                  <input onChange={this.changeSex} className="form-check-input" type="checkbox" id="2" value="option3" disabled={disabled} checked={sex === 2} />
                  Ламинат
                </label>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark">Начать</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Hello;
