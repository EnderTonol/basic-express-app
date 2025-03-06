import { useEffect,useState } from "react";
import axios from "axios";

function App(){
  const [Data,setData] = useState("");
  useEffect(()=>{
    axios.get('/api').then((res)=> setData(res.data)).catch((err)=> console.log(err));
  },[]);
  
  return(
    <>
    <h1>{Data}</h1>
    </>
  )
}
export default App;
