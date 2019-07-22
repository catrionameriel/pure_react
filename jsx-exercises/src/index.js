import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
 return (
   <>
    <span>Look at my saying things</span>
    <br />
    <span>What do you think?</span>
    <Book />
    <Book2 />
    <Greeting />
    <TestComponent />
    <Table />
  </>
 )
}

function Book() {
  return (
    <>
      <div className='book'>
        <div className='title'>
          The
          Title
        </div>
        <div className='author'>
          The
          Author
        </div>
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-345678-910
        </li>
      </ul>
    </>
  )
}

function Book2() {
  return (
    React.createElement('div', {},
      React.createElement('div', { className: 'book' },
        React.createElement('div', { }, 'The Title'),
        React.createElement('div', { }, 'The Author')
      ),
      React.createElement('ul', { },
        React.createElement('li', { }, '5 stars'),
          React.createElement('li', { }, '12-345678-910')
      )
    )
  )
}

function Greeting() {
  let username = 'root';
  username = undefined;
  username = null;
  username = false;
  return (
    <div>
      { username ? `Hello ${username}` : 'Not logged in' }
    </div>
  );
}

function TestComponent() {
  return (
    <span>
      'testing!'
    </span> );
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data />
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>
  )
}

function Data() {
  return(
    <>
      <td>1</td >
      <td>2</td>
      <td>3</td>
    </>
  )
}

ReactDOM.render(
  <MyThing />,
  document.getElementById('root')
);
