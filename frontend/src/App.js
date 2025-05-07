import './App.css';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage';
import { useState } from 'react';

function App() {

  const [isEdit, setEdit] = useState(false);

  return (
    <div className="App">
        { isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} /> }  
        
    </div>
  );
}

export default App;
