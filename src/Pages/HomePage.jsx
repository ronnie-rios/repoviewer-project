import AllRepos from '../Components/AllRepos'
import logo from '../assets/logo.png';
import SearchForm from '../Components/SearchForm';

const HomePage = () => {
  return (
    <div className='grid grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 place-content-center gap-2'>
      <div className='col-span-1 text-white m-2 '>
        <img src={logo} alt="Netflix Logo" className='h-40 w-40'/>
        <h1 className='text-white text-2xl py-3'>Netflix Repos</h1>
        <p className='text-white text-base py-3'>View different repositories built and utilized by Netflix.</p>
        <SearchForm />
      </div>
        <AllRepos />
    </div>
    
  )
}

export default HomePage