import HomePage from './Pages/HomePage';
import Navbar from './UI/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RepoCommitPage from './Pages/RepoCommitPage';
import { SearchProvider } from './store/searchContext';
import Footer from './UI/Footer';

function App() {
  return (
    <SearchProvider>
      <Router>
        <Navbar />
        <main className='bg-black h-full w-full '>  
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:name' element={<RepoCommitPage />} />
        </Routes>
        <Footer />
        </main>
      </Router>
    </SearchProvider>
  );
}

export default App;
