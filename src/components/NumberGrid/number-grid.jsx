import React,  {memo} from 'react';
import './styles/number-grid.scss';

const NumberGrid = ({startCount, endCount, 
            clickHandler, findMultiplesOfNumbers}) => {

    const makeArray = () => {
        let arr = [];
        for(let i=startCount; i<=endCount; i++){
            arr.push(i);
        }
        return arr;
    }

    return(
        <div className='number-grid'>
            {makeArray().map((item) => 
                <div onClick={clickHandler} key={item} aria-label={`Click Number ${item}`}
                    className={`number-box ${findMultiplesOfNumbers(item) ? 'highlight-number': ''}`}>{item}
                </div>
            )}
        </div>
    );
}

export default memo(NumberGrid);