import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [alignment, setAlignment] = useState('left');
  const [fontSize, setFontSize] = useState('16px');
  const [fontWeight, setFontWeight] = useState('normal');
  const [fontStyle, setFontStyle] = useState('normal');
  const [textColor, setTextColor] = useState('#000');
  const [highlightedText, setHighlightedText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleClClick = () => {
    setText('');
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleOnChange = (event) => {
    let newText = event.target.value;
    setText(newText);
    setWordCount(newText.trim().split(/\s+/).length);
    setCharCount(newText.length);
  };

  const handleAlignmentChange = (alignment) => {
    setAlignment(alignment);
  };

  const handleFontSizeChange = (fontSize) => {
    setFontSize(fontSize);
  };

  const handleFontWeightChange = (fontWeight) => {
    setFontWeight(fontWeight);
  };

  const handleFontStyleChange = (fontStyle) => {
    setFontStyle(fontStyle);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color);
  };

  const handleTextHighlight = () => {
    setHighlightedText(text);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              textAlign: alignment,
              fontSize: fontSize,
              fontWeight: fontWeight,
              fontStyle: fontStyle,
              color: textColor,
              backgroundColor: highlightedText === text ? 'yellow' : 'transparent',
            }}
            spellCheck="true" // Enable spell-checking
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear
        </button>
        <button type="button" className="btn btn-warning mx-2 my-2" onClick={speak}>
          Speak
        </button>
        <div className="btn-group mx-2" role="group">
          <button type="button" className="btn btn-secondary" onClick={() => handleAlignmentChange('left')}>
            Left
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleAlignmentChange('center')}>
            Center
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleAlignmentChange('right')}>
            Right
          </button>
        </div>
        <div className="btn-group mx-2" role="group">
          <button type="button" className="btn btn-secondary" onClick={() => handleFontSizeChange('16px')}>
            Small
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleFontSizeChange('20px')}>
            Medium
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleFontSizeChange('24px')}>
            Large
          </button>
        </div>
        <div className="btn-group mx-2" role="group">
          <button type="button" className="btn btn-secondary" onClick={() => handleFontWeightChange('normal')}>
            Normal
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleFontWeightChange('bold')}>
            Bold
          </button>
        </div>
        <div className="btn-group mx-2" role="group">
          <button type="button" className="btn btn-secondary" onClick={() => handleFontStyleChange('normal')}>
            Normal
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => handleFontStyleChange('italic')}>
            Italic
          </button>
        </div>
        <input type="color" className="form-control-color mx-2" onChange={(e) => handleTextColorChange(e.target.value)} />
        <button type="button" className="btn btn-primary mx-2" onClick={handleTextHighlight}>
          Highlight Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{wordCount} words and {charCount} characters</p>
        <h2>Preview</h2>
        <p style={{textAlign: alignment, fontSize: fontSize, fontWeight: fontWeight, fontStyle: fontStyle, color: textColor}}>
          {text}
        </p>
      </div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container text-center">
          Developed by Pankaj Kumar
        </div>
      </footer>
    </>
  );
}
