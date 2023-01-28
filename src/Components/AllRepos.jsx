import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import Loading from '../UI/Loading';
import { AiFillCalendar, AiFillCode, AiOutlineFork, AiOutlineStar } from 'react-icons/ai';

const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const AllRepos = () => {
    const [repoData, setRepoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getData = async () => {
        const response = await fetch(URL, {
            headers: {
                'Authorization': TOKEN
            }
        });
        const data = await response.json();
        setRepoData(data);
        setLoading(false);
    };
   //TODO: sort data by star count
    useEffect(() => {
        getData()
    }, []);

    if (loading) {
        return <Loading />
    } else {
    return (
        <ul>
            {repoData.map((item) => {
                const date = new Date(item.created_at)
                return (
                    
                    <div className='mx-auto w-9/12 p-4 border-t-2 border-white'key={item.id}>
                        <div className='grid grid-cols-4'>
                            <h1 className='text-blue mb-2 text-2xl font-bold col-span-3'>Repository: {item.name.toUpperCase()}</h1>
                            <button className='bg-green text-black font-semibold rounded p-2 hover:bg-white col-start-4' onClick={()=>navigate(`${item.name}`)}>View Commits</button>
                        </div>
                        <p className='text-white text-lg mt-2'> {item.description}</p>
                        <div className='grid grid-cols-4 mt-4'>
                            <h3 className='text-white'><span><AiFillCode/></span> {item.language}</h3>
                            <h3 className='text-white'><AiOutlineStar/> {item.stargazers_count} Stars</h3>
                            <h3 className='text-white'><AiOutlineFork />{item.forks} Forks</h3>
                            <h3 className='text-white text-base my-4'>Created {date.toLocaleDateString()}</h3>
                        </div>
                    </div>
                    
                )
            })}      
        </ul>
        )
    }
}

export default AllRepos