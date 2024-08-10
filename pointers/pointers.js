var styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.innerHTML = `
  /* Default cursor */
body, * {
    cursor: url('handpointing.svg'), auto;
  }
  
  /* Clickable elements */
  a, button, [role="button"], input[type="submit"], input[type="button"] {
    cursor: url('handpointing.svg'), pointer;
  }
  
  /* Text input areas */
  input[type="text"], textarea, [contenteditable="true"] {
    cursor: url('textcursor.svg'), text;
  }
  
  /* Elements with title attribute or help icons */
  [title], .help-icon {
    cursor: url('help.svg'), help;
  }

`;
document.head.appendChild(styleElement);

