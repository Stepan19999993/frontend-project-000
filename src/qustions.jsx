import React from 'react';

class QustionF extends React.Component {
  onClicks = (e) => {
    console.log(e);
  };

  render() {
    return (
      <button type="button" onClick={this.onClicks}>Save</button>
    );
  }
}

export default QustionF;
