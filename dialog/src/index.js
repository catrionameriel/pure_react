import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="wrapper is-display-flex is-center dialog-active">
      <Dialog>
        <Title>
          Help, something has gone wrong!
        </Title>
        <Body className="has-grey-border">
          There has been an error that you should probably fix
        </Body>
        <Footer></Footer>
      </Dialog>
    </div>
  )
}

function Dialog( {children} ) {
  return (
    <div className="dialog">
      {children}
    </div>
  )
}

Dialog.propTypes = {
  children: function(props, propName, componentName) {
    const children = props[propName]
    const types = [Title, Body, Footer]
    let error;
    React.Children.forEach(children, (child) => {
      if (!types.includes(child.type)) {
        error = new Error(`${componentName} only accepts children of types ${child.type.name}`);
      }
    })
    return error;
  }
}

function Title( {children} ) {
  return (
    <h1>
      {children}
    </h1>
  )
}

function Body(props) {
  return (
    <span className={props.className}>
      {props.children}
    </span>
  )
}

function Footer() {
  return (
    <div className="is-display-flex is-center">
      <button className="small">
        Close
    </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
