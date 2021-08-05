import React,{useState} from 'react';

const DisabledButton = () => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [optional, setOptional] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setOptional(event.target.value);
  };

  console.log(`value 1: ${!value} value 2: ${!value2} value 3: ${optional}`);

  return (
    <form>
      <input type="text" value={value} onChange={handleChange}/>
      <input type="email" value={value2} onChange={handleChange2}/>
      <select onChange={handleChange3}>
        <option value={optional}>Hello</option>
      </select>
    <button disabled={!value===false && !value2===false ? false : true }>Submit</button> 
    </form>
  )
}

export default DisabledButton;