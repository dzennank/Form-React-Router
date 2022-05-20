import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Form from './Form';
import NewForm from './NewForm';

function App() {
  

  
  return (
    <div>
    <Routes>
      <Route path='/' element={ <Form />} />
      <Route path='newform' element={ <NewForm /> } />
    </Routes>
     
    </div>
  );
}

export default App;
