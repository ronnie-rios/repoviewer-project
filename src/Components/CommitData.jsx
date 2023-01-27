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
        console.log(data);
    };

    useEffect(()=> {
        getCommitData();
    }, []);

    return (
        <div>CommitData</div>
    )
}

export default CommitData