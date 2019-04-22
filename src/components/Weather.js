import React, {Component} from 'react';

class Weather extends Component{
  render(){
    return(
      <div className = 'weather'>
      {this.props.city && this.props.country && <p><span>Location: </span>{this.props.city} {this.props.country} </p>}
      {this.props.temperature && <p> <span>Temperature: </span>{this.props.temperature}</p>}
      {this.props.humidity && <p> <span>Humidity: </span>{this.props.humidity}</p>}
      {this.props.description && <p> <span>Description: </span>{this.props.description}</p>}
      {this.props.error && <p> <span></span> {this.props.error}</p>}
      </div>
    )
  }
}
export default Weather;
