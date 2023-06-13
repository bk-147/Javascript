// import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function Button({ val, clickButton }) {

  return (
    <input type="button" defaultValue={val} onClick={clickButton} />

  )
}

function App() {
  const [disp, setDisp] = useState('')
  function display(x) {
    let screen = disp;
    screen += x
    setDisp(screen)

  }
  function clearScreen() {
    setDisp('')
  }
  function calculate(operation) {
    let screen = disp
    screen = eval(screen)
    setDisp(screen)


  }

  return (
    <><table className="calculator">
      <tr>
        <td colSpan="3"> <input className="output" type="text" id="result" value={disp} /> </td>
        <td> <input type="button" value="Clear" id="btn" onClick={() => clearScreen()} /> </td>
      </tr>
      <tr>
        <td> <Button val='1' clickButton={() => display('1')} /> </td>
        <td> <Button val='2' clickButton={() => display('2')} /> </td>
        <td> <Button val='3' clickButton={() => display('3')} /> </td>
        <td> <Button val='/' clickButton={() => display('/')} /> </td>

      </tr>
      <tr>
        <td> <Button val='4' clickButton={() => display('4')} /> </td>
        <td> <Button val='5' clickButton={() => display('5')} /> </td>
        <td> <Button val='6' clickButton={() => display('6')} /> </td>
        <td> <Button val='-' clickButton={() => display('-')} /> </td>

      </tr>
      <tr>
        <td> <Button val='7' clickButton={() => display('7')} /> </td>
        <td> <Button val='8' clickButton={() => display('8')} /> </td>
        <td> <Button val='9' clickButton={() => display('9')} /> </td>
        <td> <Button val='+' clickButton={() => display('+')} /> </td>

      </tr>
      <tr>
        <td> <Button val='.' clickButton={() => display('.')} /> </td>
        <td> <Button val='0' clickButton={() => display('0')} /> </td>
        <td> <Button val='=' clickButton={() => calculate()} /> </td>
        <td> <Button val='*' clickButton={() => display('*')} /> </td>

      </tr>
    </table></>
  );
}

export default App;
