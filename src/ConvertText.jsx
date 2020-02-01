import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './ConvertText.css';

const ConvertText = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [alteredText, setAlteredText] = React.useState("");
  const [textClass, setTextClass] = React.useState('normal-text');

  useEffect(() => {
    console.log(inputValue);
    console.log(inputValue.length);
    if (inputValue.length % 5 === 0) {
      setTextClass('altered-text');
    } else {
      setTextClass('normal-text');
    }
    setAlteredText(inputValue);
  }, []);

  return (
    <div>
      <div>
        <span className={textClass}>{alteredText}</span>
      </div>
      <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
    </div>
  )
};

ReactDOM.render(<ConvertText />, document.getElementById('root'));
serviceWorker.unregister();
