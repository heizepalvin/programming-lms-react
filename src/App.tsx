import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../src/page/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
