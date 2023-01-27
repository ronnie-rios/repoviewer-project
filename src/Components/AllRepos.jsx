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
        <div>
            {repoData.map((item) => {
                const date = new Date(item.created_at)
                return (
                    <div className='max-w-md p-6 m-6 border border-gray-800 rounded-lg shadow'key={item.id}> 
                        <h1 className='mb-2 text-2xl font-bold tracking-tight'><AiOutlineGithub/>Repo: {item.name.toUpperCase()}</h1>
                        <p >Description: {item.description}</p>
                        <div>
                            <div>
                                <AiFillCode/> <h3>{item.language}</h3>

                                <AiOutlineStar/> <h3>{item.stargazers_count} Stars</h3>
                            
                                <AiOutlineFork /><h3>{item.forks} Forks</h3>
                            </div>
                        </div>
                        <h3><AiOutlineCalendar />Created at: {date.toLocaleDateString()}</h3>
                        <button onClick={()=>navigate(`${item.name}`)}>View Commits on this Repo</button>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default AllRepos