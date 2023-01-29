import HomePage from './Pages/HomePage';
import Navbar from './UI/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepoCommitPage from './Pages/RepoCommitPage';
import { SearchProvider } from './store/searchContext';

function App() {
  return (
    <SearchProvider>
      <Router>
        <Navbar />
        <main className='bg-black h-full max-auto p-10'>  
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:name' element={<RepoCommitPage />} />
        </Routes>
        </main>
      </Router>
    </SearchProvider>
  );
}

export default App;
