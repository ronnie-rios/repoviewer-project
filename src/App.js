import HomePage from './Pages/HomePage';
import Navbar from './UI/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepoCommitPage from './Pages/RepoCommitPage';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:name' element={<RepoCommitPage />} />
        </Routes>
      </Router>
  );
}

export default App;
