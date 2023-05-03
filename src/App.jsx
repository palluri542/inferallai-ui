import React from 'react';
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
import docs from './swagger.json';

const apiDescriptionDocument = docs;

function App() {
  return (
    <div className="App">
      <API
        apiDescriptionDocument={apiDescriptionDocument}
      />
    </div>
  );
}

export default App;
