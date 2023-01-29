import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const URL = process.env.REACT_APP_SINGLE_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const CommitData = () => {
    const [commitData, setCommitData] = useState([]);
    const name = useParams().name;

    const getCommitData = async () => {
        const response = await fetch(URL + name + '/commits',  {
            headers: {
                'Authorization': TOKEN
            }
        });
        const data = await response.json();
        setCommitData(data);
    };

    useEffect(()=> {
        getCommitData();
    }, []);

    return (
        <div>
            <h2>Commits for {name.toUpperCase()}</h2>
            {commitData && commitData.map((item) => {
                const date = new Date(item.commit.author.date)
                return (
                    <div className='max-w-md p-6 m-6 border bg-beige border-gray-800 rounded-lg shadow' key={item.sha}>
                        <h3>Date: {date.toLocaleDateString()}</h3>
                        <p>Commit Messages: </p>
                        <p>{item.commit.message}</p>
                        <div>
                            <div className='pt-2'>
                                <h3>Author: {item.committer === null ? item.commit.author.name: item.committer.login }</h3>
                            </div>
                            <div className='pt-2'>
                                <h3>Commit Hash: {item.sha}</h3>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommitData