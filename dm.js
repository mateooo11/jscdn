var styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  :root {
  font-family: "DM Sans";
  }
`;
document.head.appendChild(styleElement);
