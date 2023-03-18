import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6f30754841d5402eb51d066c39c7805f")
    .then((res)=>{
     
      setNews(res.data.articles)
    })
  }, [])
  
  return (
    <>
    <div className='container my-5'>
      <h1 className='text-center my-5 text-success display-1'>ChitChat News</h1>
      <div className='row text-center'>
        {
          news.map((item, index)=>{
            return(
              <div className='col my-3' key={index}>
        <div className="card" style={{width: "18rem"}}>
  <img src={item.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{(item.title).slice(0,40)} </h5>
    <p className="card-text">{item.description}</p>
    <button  className="btn btn-primary "><a className='text-white' href={item.url}>Know More</a></button>
  </div>
</div>
        </div>
            )
          })
        }

      </div>
    </div>
     
    </>
  );
}

export default App;
