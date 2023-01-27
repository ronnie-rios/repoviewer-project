import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const URL = process.env.REACT_APP_SINGLE_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const CommitData = () => {
    const [commitData, setCommitData] = useState([]);
    const name = useParams().name;
    const getCommitData = async () => {
        //hit endpoint that pulls commits
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
            {commitData.map((item) => {
                return (
                    <div className='max-w-md p-6 m-6 border border-gray-800 rounded-lg shadow'>
                        <p>Commit Message: {item.commit.message}</p>
                        <div>
                            add required data
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CommitData