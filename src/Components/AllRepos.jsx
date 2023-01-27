import { useEffect, useState} from 'react';

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
        setLoading(false)
    };
   //TODO: sort data by star count
    useEffect(() => {
        getData()
    }, []);
    
  return (
    <div>
        {repoData.map((item) => {
            const date = new Date(item.created_at)
            return (
                <div className='max-w-md p-6 m-6 border border-gray-800 rounded-lg shadow'key={item.id}> 
                    <h3> {item.name.toUpperCase()}</h3>
                    <p >Description: </p>
                    <div>
                        <div>
                            <h3>{item.language}</h3>

                            <h3>stars{item.stargazers_count}</h3>
                        
                            <h3>forks{item.forks}</h3>
                        </div>
                    </div>
                    <h3>{date.toLocaleDateString()}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default AllRepos