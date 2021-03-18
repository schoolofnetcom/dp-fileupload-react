import React, { useState } from 'react';
import FileInput from './FileInput';

function App() {
  const [file, setFile] = useState(null);

  const onSelectFile = (file) => {
    console.log(file);
    return setFile(file);
  }

  return (
    <div className="App">
      <FileInput 
      mimeTypes={['image/jpg', 'image/jpeg', 'image/png']}
      onSelectFile={onSelectFile}/>
    </div>
  );
}

export default App;
