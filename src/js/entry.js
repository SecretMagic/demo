require('../less/main.less');
var React = require('react');
var ReactDom = require('react-dom');
var App = React.createClass({
  getInitialState: function(){
    return {
      show: false
    }
  },
  clickBtnHandler: function(){
    this.setState({
      show: true
    });
  },
  clickPopupHandler: function(){
    this.setState({
      show: false
    });
  },
  render: function(){
    return (
      <div>
        <button className="btn" onClick={this.clickBtnHandler}>click</button>
        <Mask show={this.state.show} handler={this.clickPopupHandler}/>
      </div>
    )
  }
});
var Mask = React.createClass({
  render: function(){
    var style = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
    style.display = this.props.show ? 'block' : 'none';
    return (
      <div style={style}>
        <Dialog handler={this.props.handler}/>
      </div>
    )
  }
});
var Dialog = React.createClass({
  render: function(){
    var style = {
      position: 'absolute',
      width: '200px',
      height: '200px',
      backgroundColor: '#f40',
      top: '50%',
      marginTop: '-100px',
      left: '50%',
      marginLeft: '-100px',
      fontSize: '50px',
      lineHeight: '200px',
      textAlign: 'center',
      cursor: 'pointer'
    }
    return (
      <div style={style} onClick={this.props.handler}>弹出框</div>
    )
  }
});
ReactDom.render(
  <App/>,
  document.getElementById('root')
);