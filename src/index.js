import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

const ConvertText = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [alteredText, setAlteredText] = React.useState([]);

  const alterText = (event) => {
    if (event.key === 'Enter') {
      const splitText = inputValue.split('');
      setAlteredText(splitText.map((letter, index) => {
        if (index % 5 === 0 && letter.match(/^[A-Za-z]+$/)) {
          return <span className="altered-text" key={index}>{letter}</span>;
        } else {
          return <span className="normal-text" key={index}>{letter}</span>
        }
      }));
    }
  };

  return (
    <div className='container'>
      <div className='altered-text-div'>
        {alteredText}
      </div>
      <div className='textarea-container'>
        <textarea className='textarea' value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} onKeyDown={alterText}/>
      </div>
    </div>
  )
};

ReactDOM.render(<ConvertText />, document.getElementById('root'));
serviceWorker.unregister();
