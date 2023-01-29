import { useState } from 'react';
import { useSearch } from '../store/searchContext';


const SearchForm = () => {
    const [formData, setFormData] = useState({
        name: ''
    });
    const { setNameSearch } = useSearch();
  
    const formHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setFormData((prev) => {
        return { ...prev, [name]: value}
      })
    };
    
    const formSubmit = (e) => {
        e.preventDefault();
        setNameSearch(formData);
        setFormData({
            name: ''
        })
    }

    return (
    <div>
        <form onChange={formHandler} onSubmit={formSubmit}> 
            <label className='text-white'>Search for an organization</label>
            <input type="text" name='name' value={formData.name}/>
            <button className='bg-gray p-2 rounded'>Submit</button>
        </form>
    </div>
    )
}

export default SearchForm