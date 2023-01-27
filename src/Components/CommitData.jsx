import { useEffect, useState } from 'react';

const CommitData = () => {
    const [commitData, setCommitData] = useState([]);

    const getCommitData = async () => {
        //hit endpoint that pulls commits
    };

    useEffect(()=> {
        getCommitData();
    }, []);

    return (
        <div>CommitData</div>
    )
}

export default CommitData