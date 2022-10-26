import React,{useEffect,useState} from "react";
import axios from '../../api/index';
import './Filter.scss';

const Filter = ({setBrends,brends}) => {

  const [allBrends, setAllBrends] = useState([]);

  async function getallBrends(){
    const {data} = await axios.get(`/brends`);
    setAllBrends(data.data.brends);
  }


  useEffect(() => {
    getallBrends();
  }, []);

  function filterChange(e,id){
  
    if(e.target.checked){
      setBrends([...brends,id])
    }
    else{
      setBrends(brends.filter(el=>el!==id))
    }

  }
  return (
    <>
    {allBrends.map(brend=>{
      return <>
      <input type="checkbox" className="filterInput" onChange={(e)=>filterChange(e,brend._id)}  style={{ marginRight: "9px" }} />
      <label htmlFor="apple">{brend.name.charAt(0).toUpperCase() + brend.name.slice(1)}</label>
      <br /></>
    })}
    
    </>
  );
};

export default Filter;
