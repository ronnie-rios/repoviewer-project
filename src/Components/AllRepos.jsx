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
    console.log(repoData);
    useEffect(() => {
        getData()
    }, [])
  return (
    <div>AllRepos</div>
  )
}

export default AllRepos