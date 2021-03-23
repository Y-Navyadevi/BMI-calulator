import React, {Component} from 'react';
import './App.css'

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      heightFeet: '',
      heightInch: '',
      weight: '',
    }

    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
    this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);

  }

  handleHeightFeetChange(event){
    this.setState({
      heightFeet: event.target.value
    });
  }

  handleHeightInchChange(event){
    this.setState({
      heightInch: event.target.value
    });
  }  

  handleWeightChange(event){
    this.setState({
      weight: event.target.value
    });
  }


  render() {


    return (
      <div className="App container">
        <div className="row">
          <div className="col-xs-12">
            <h1>BMI Calculator</h1>
            <p>Enter your weight and height below.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <legend>Weight</legend>
                <div className="row">
                  <div className="col-xs-12">
                    <input className="form-control" id="bmiWeight" type="number" min="1" max="1000" value={ this.state.weight } onChange={ this.handleWeightChange } />
                    <label className="control-label" htmlFor="bmiWeight">KG</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <legend>Height</legend>
                <div className="row">
                  <div className="col-xs-6">
                    <input className="form-control" id="bmiHeightFeet" type="number" min="1" max="12" value={ this.state.heightFeet } onChange={ this.handleHeightFeetChange } />
                    <label className="control-label" htmlFor="bmiHeightFeet">"</label>
                  </div>
                  <div className="col-xs-6">
                    <input className="form-control" id="bmiHeightInch" type="number" min="0" max="12" value={ this.state.heightInch } onChange={ this.handleHeightInchChange } />
                    <label className="control-label" htmlFor="bmiHeightInch">'</label>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-sm-6">
          </div>

        </div>
      </div>
    );
  }
}






/* https://reactjs.org/docs/create-a-new-react-app.html  */
export default App;