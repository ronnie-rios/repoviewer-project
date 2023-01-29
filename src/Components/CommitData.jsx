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
        <section>
            <div className='border-b-4 border-gray my-3 py-3'>
                <h1 className='text-2xl text-white'>Commits for {name.toUpperCase()}</h1>
            </div>
            <dl className='max-w-lg text-white divide-y divide-gray'>
                {commitData && commitData.map((item) => {
                    const date = new Date(item.commit.author.date)
                    return (
                        <div className='flex flex-col pb-3' key={item.sha}>
                            <dt className='mb-1 text-gray'>Created</dt>
                            <dd className='text-white text-lg font-semibold'>{date.toLocaleDateString()}</dd>
                            <dt className='mb-1 text-gray'>Commit</dt>
                            <dd className='text-white text-lg font-semibold'>{item.commit.message}</dd>
                            <dt className='mb-1 text-gray'>Author</dt>
                            <dd className='text-white text-lg font-semibold'> {item.committer === null ? item.commit.author.name: item.committer.login }</dd>
                            <dt className='mb-1 text-gray'>Commit hash</dt>
                            <dd className='text-white text-lg font-semibold'> {item.sha}</dd>
                        </div>
                    )
                })}
            </dl>
        </section>
    )
}

export default CommitData;
