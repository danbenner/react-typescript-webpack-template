import React from 'react';

function App() {
  const style = {
    root: {
      height: '100%',
      display: 'flex' as 'flex',
      flexDirection: 'column' as 'column',
      fontSize: '1em',
    },
    header: {
      flexDirection: 'row' as 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: '2em',
    },
    body: {
      flexDirection: 'column' as 'column',
      alignItems: 'center',
    },
    footer: {
      flexDirection: 'row' as 'row',
      alignItems: 'center',
    },
  };
  return (
    <div style={style.root}>
      <header style={style.header}>
        <p style={style.title}>Header Here!</p>
      </header>
      <body style={style.body}>
        <h1>Body Here!</h1>
      </body>
      <footer style={style.footer}>
        <h1>Footer Here!</h1>
      </footer>
    </div>
  );
}

export default App;
