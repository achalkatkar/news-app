import React from "react";
import "./NewArticle.css"

function NewsArticle({author,title,description,url,urlToImage,publishedAt}){
    return(
        <div className="news-card">
        <img src={urlToImage} alt="" className="news-img"/>
        <h1 className="article-title">{title}</h1>
        <div className="article-info"> 
            <p className="article-author">{author}</p>
            <p className="article-publishedAt">{publishedAt}</p>
        </div>
        <p className="description">{description}</p>
        <a href={url} target="_blank" className="btn">Read More</a>
     </div>
                )
        
}
export default NewsArticle