import Loading from '../UI/Loading';
import { AiFillCode, AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { useSearch } from '../store/searchContext';
import ErrorHandler from '../UI/ErrorHandler';

const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const AllRepos = () => {
    const [repoData, setRepoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorData, setErrorData] = useState(false);
    const navigate = useNavigate();
    const { nameSearch } = useSearch();
   
    const getData = async () => {
        const response = await fetch(URL + nameSearch.name + '/repos', {
            headers: {
                'Authorization': TOKEN
            }
        });
        
        if (response.status === 200) {     
            const data = await response.json(); 
            const starCount = data.sort((a,b) =>  {return b.stargazers_count - a.stargazers_count })
            setRepoData(starCount);
            setLoading(false);
            setErrorData(false);
        } else {
            setErrorData(true);
        }
    };

    useEffect(() => {
        getData()
    }, [loading, nameSearch]);

    if (errorData) {
        return <ErrorHandler />
    } else {
    return (
        <section className='md:col-start-2 lg:col-span-3 md:col-span-3 col-span-1 px-5'>
            {repoData.map((item) => {
                const date = new Date(item.created_at)
                return (    
                    <div className=' py-4 px-6 border-t-2 border-white'key={item.id}>
                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                            <h1 className='text-blue mb-2 text-2xl font-bold md:col-span-2'>Repository: {item.name.toUpperCase()}</h1>
                            <button className='bg-green text-btn-text font-semibold rounded p-2 hover:bg-white md:col-start-4' onClick={()=>navigate(`${item.name}`)}>View Commits</button>
                        </div>
                        <p className='text-white text-lg mt-2'> {item.description}</p>
                        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4'>
                            <h3 className='text-white'><span><AiFillCode/></span> {item.language}</h3>
                            <h3 className='text-white'><AiOutlineStar/> {item.stargazers_count} Stars</h3>
                            <h3 className='text-white'><AiOutlineFork />{item.forks} Forks</h3>
                            <h3 className='text-white text-base my-4 content-end'>Created {date.toLocaleDateString()}</h3>
                        </div>
                    </div>              
                    )
                })}      
        </section>
        )
    }
}

export default AllRepos