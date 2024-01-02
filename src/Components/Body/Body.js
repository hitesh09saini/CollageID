import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Colleges from '../Colleges/Colleges';
import CreateCollege from '../Colleges/CreateCollege';
import '../../App.css';
import './body.css';
import Signin from '../Auth/SigninPage';
const Body = () => {
  const [input, setInput] = useState('');
  const [listResult, setListResult] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [college, setCollege] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/college/all');
      setListResult(res.data);
    } catch (error) {
      setError("Error fetching colleges: " + error.message);
    }
  };

  const handleInput = (value) => {
    setInput(value);
    setFilterData(listResult.filter(item => item.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleShowCollege = (data) => {
    setCollege(<Colleges datas={data} />);
  };

  const handleKey = (e) => {
    if (e.target.key === 'Enter') {
      handleInput();
      setInput('')
    }

  }

  useEffect(() => {
    fetchData();
    if (filterData.length == 0) {
      setError('Error')
    }
  }, [handleInput]);


  return (
    <div className='body-cont'>
      <div className="flex flex-col justify-center items-center">
        <div className='input'>
          <input
            type="search"
            id="search"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            name="search"
            placeholder='Search College'
            onKeyDown={(e) => handleKey(e)}
          />
          <div className='icons'>
            <i
              className="fa-solid fa-magnifying-glass fa-xl"
              onClick={() => handleInput(input)}
              style={{ color: "white" }}
            ></i>
          </div>
        </div>

        {error && <CreateCollege />}
        <div className='p-1 flex flex-col gap-1'>
          {filterData.map((val) => (
            <div
              className=' pl-3 hover:bg-gray-100 active:bg-gray-200 rounded shadow'
              onClick={() => handleShowCollege(val)}
              key={val._id}
              value={val}
            >
              {val.name}
            </div>

          ))}
        </div>
        {college}
      </div>

      <Signin/>
    </div>
  );
};

export default Body;
