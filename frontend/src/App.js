import './App.css';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {

  const [isEdit, setEdit] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
        { isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} /> }  
        { pending && <p className="loading">Loading...</p>}
        { !isEdit && error && (
          <p className="error">Error when fetching user data from server!!!</p>
        )}
    </div>
  );
}

export default App;
