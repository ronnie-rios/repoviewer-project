import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import Loading from '../UI/Loading';
import { AiOutlineCalendar, AiFillCode, AiOutlineFork, AiOutlineGithub, AiOutlineStar } from 'react-icons/ai';

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
                    <li> 
                    <div className='mx-auto w-9/12 p-4  border-t-4  border-white w'key={item.id}>
                        <h3 className='text-white my-4'><AiOutlineCalendar />Created at: {date.toLocaleDateString()}</h3>
                        <h1 className='text-blue mb-2 text-2xl font-bold tracking-tight '>Repo: {item.name.toUpperCase()}<AiOutlineGithub/></h1>
                        <p className='text-white'> {item.description}</p>
                        <div className='grid grid-cols-3 my-4'>
                            <h3 className='text-white'><span><AiFillCode/></span> {item.language}</h3>
                            <h3 className='text-white'><AiOutlineStar/> {item.stargazers_count} Stars</h3>
                            <h3 className='text-white'><AiOutlineFork />{item.forks} Forks</h3>
                        </div>
                        <button className='bg-green text-black rounded p-2 hover:bg-white' onClick={()=>navigate(`${item.name}`)}>View Commits</button>
                    </div>
                    </li>
                )
            })}      
        </ul>
        )
    }
}

export default AllRepos