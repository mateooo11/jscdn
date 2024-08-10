var styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.innerHTML = `
  @import url('https://rsms.me/inter/inter.css');

  :root {
    font-family: Inter, sans-serif;
    font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
  }
  @supports (font-variation-settings: normal) {
    :root { font-family: InterVariable, sans-serif; }
  }
`;
document.head.appendChild(styleElement);
