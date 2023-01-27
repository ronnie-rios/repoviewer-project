import { useEffect, useState} from 'react';
import Loading from '../UI/Loading';

const URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const AllRepos = () => {
    const [repoData, setRepoData] = useState([]);
    const [loading, setLoading] = useState(true);

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
                        <h1 className='mb-2 text-2xl font-bold tracking-tight'>Repo: {item.name.toUpperCase()}</h1>
                        <p >Description: {item.description}</p>
                        <div>
                            <div>
                                <h3>{item.language}</h3>

                                <h3>{item.stargazers_count} Stars</h3>
                            
                                <h3>{item.forks} Forks</h3>
                            </div>
                        </div>
                        <h3>Created at: {date.toLocaleDateString()}</h3>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default AllRepos