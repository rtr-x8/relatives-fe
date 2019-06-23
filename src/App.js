import React from 'react';

function App() {
      let t= process.env.REACT_APP_BACKEND_SERVER
  return (
    <div className="App">
      {t}
    </div>
  );
}

export default App;
