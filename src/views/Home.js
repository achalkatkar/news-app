import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"
import NewsArticle from "../Component/newsArticle/NewArticle";

function Home()
{
    const [news,setNews]=useState([])
    const [searchQuery,setSearchQuery]=useState("nagpur")
    const loadnews= async()=>{
try{
    const response= await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}
    &from=2023-10-06&sortBy=popularityAt&apiKey=${process.env.REACT_APP_API_KEY}`);
  setNews(response.data.articles)
}
catch(error){
    console.log(error)
}
}

    useEffect(()=>{
loadnews()
    },[])
    useEffect(()=>{
        loadnews()
    },[searchQuery])
    return(
        <div>
            <h1 className="head">News App</h1>
            <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}/> 
            <div  className="container">
            {
                news.map((newsArticle,index)=>{
                const{author,title,description,url,urlToImage,publishedAt}=newsArticle
                return(
                <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} 
                 publishedAt={publishedAt}  key={index}/>
                 )
            })
  }
</div>
</div>
)
}
export default Home