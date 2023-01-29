import AllRepos from '../Components/AllRepos'
import SearchForm from '../Components/SearchForm';
import { AiFillGithub  } from 'react-icons/ai';
import { useSearch } from '../store/searchContext';

const HomePage = () => {
  const { nameSearch } = useSearch();

  return (
    <div className='grid grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 place-content-center gap-2'>
      <div className='col-span-1 text-white m-2 '>
        <AiFillGithub className='h-40 w-40'/>
        <h1 className='text-white text-2xl py-3'>{nameSearch.name.toUpperCase()} Repos</h1>
        <p className='text-white text-base py-3 border-b-2 border-gray mb-4'>View different repositories built and utilized by {nameSearch.name.toUpperCase()}.</p>
        <p className='text-white text-base'>Want to see a different organization?</p>
        <SearchForm />
      </div>
        <AllRepos />
    </div>
    
  )
}

export default HomePage