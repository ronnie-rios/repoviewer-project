import Loading from '../UI/Loading';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { AiFillCode, AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { useSearch } from '../store/searchContext';

const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const AllRepos = () => {
    const [repoData, setRepoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { nameSearch } = useSearch();
    console.log(nameSearch)
    const getData = async () => {
        const response = await fetch(URL + nameSearch.name + '/repos', {
            headers: {
                'Authorization': TOKEN
            }
        });
        const data = await response.json(); 
        const starCount = data.sort((a,b) =>  {return b.stargazers_count - a.stargazers_count })
        setRepoData(starCount);
        setLoading(false);
    };

    useEffect(() => {
        getData()
    }, [loading, nameSearch]);

    if (loading) {
        return <Loading />
    } else {
    return (
        <section className='col-start-2 lg:col-span-3 md:col-span-2 sm:col-span-1'>
            {repoData.map((item) => {
                const date = new Date(item.created_at)
                return (    
                    <div className=' py-4 px-6 border-t-2 border-white'key={item.id}>
                        <div className='grid grid-cols-3'>
                            <h1 className='text-blue mb-2 text-2xl font-bold col-span-2'>Repository: {item.name.toUpperCase()}</h1>
                            <button className='bg-green text-btn-text font-semibold rounded p-2 hover:bg-white col-start-4' onClick={()=>navigate(`${item.name}`)}>View Commits</button>
                        </div>
                        <p className='text-white text-lg mt-2'> {item.description}</p>
                        <div className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4'>
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