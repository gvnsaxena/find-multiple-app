import React, { Fragment, useState, memo } from 'react';
import NumberGrid from './components/NumberGrid/number-grid'
import './styles/App.css';
import {START_COUNT, END_COUNT} from './constants/constant';

const App = () => {
  const [clickedNumber, setClickedNumber] = useState(0);

  const clickHandler = (e) => {
    setClickedNumber(Number(e.target.innerText))
  }
  const findMultiplesOfNumbers = (number) => {
   return number % clickedNumber === 0;
  }

  return (
    <Fragment>
        <NumberGrid startCount={START_COUNT} endCount={END_COUNT} clickHandler={clickHandler}
            findMultiplesOfNumbers={findMultiplesOfNumbers}/>
    </Fragment>
  );
}

export default memo(App);
