import Loading from '../UI/Loading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSearch } from '../store/searchContext';

const URL = process.env.REACT_APP_SINGLE_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

const CommitData = () => {
    const [commitData, setCommitData] = useState([]);
    const [loading, setLoading] = useState(true);
    const repoName = useParams().name;
    const { nameSearch } = useSearch();
    
    const getCommitData = async () => {
        const response = await fetch(URL + nameSearch.name + '/' + repoName + '/commits',  {
            headers: {
                'Authorization': TOKEN
            }
        });
        const data = await response.json();
        setCommitData(data);
        setLoading(false);
    };

    useEffect(()=> {
        getCommitData();
    }, [loading]);

    if(loading) {
        return <Loading />
    } else {
    return (
        <div className='bg-black h-screen'>

        <section className='grid-cols-1 py-4 px-20 mx-auto'>
            <div className='border-b-4 border-gray my-3 py-3'>
                <h1 className='text-2xl text-white'>Commits for {repoName.toUpperCase()}</h1>
            </div>
            <dl className='text-white divide-y divide-gray'>
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
                            <dt className='mb-1 text-gray'>Commit Hash</dt>
                            <dd className='text-white text-lg font-semibold'> {item.sha}</dd>
                        </div>
                    )
                })}
            </dl>
        </section>
    </div>
    )
    }
}
export default CommitData;
