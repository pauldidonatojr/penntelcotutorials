import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ArticleList = styled.ul`
 list-style: none;
 padding: 0;
`

const ArticleItem = styled.li`
 margin-bottom: 20px;
`

const ArticleTitle = styled.h3`
 margin-top: 0;
 margin-bottom: 10px;
`

const ArticleDescription = styled.p`
 margin-top: 0;
 margin-bottom: 10px;
 font-size: 16px;
`

const ArticleImage = styled.img`
 width: 100%;
 height: auto;
 margin-bottom: 10px;
`

function NewsComponent() {
 const [articles, setArticles] = useState([])

 useEffect(() => {
  const fetchArticles = async () => {
   const url =
    'https://api.bing.microsoft.com/v7.0/news/search?q=Philadelphia%20police%20reports%20OR%20traffic%20incidents&count=10&offset=0&mkt=en-US&freshness=Day&sortby=Date&dateRestrict=m30'
   const response = await fetch(url, {
    headers: {
     'Ocp-Apim-Subscription-Key': '8f6f9732b7324505b2b5db25a9d9193a',
    },
   })
   const data = await response.json()
   setArticles(data.value)
  }
  fetchArticles()
 }, [])

 return (
  <div>
   <h2>
    News Articles: Police Reports and Traffic Incidents in Philadelphia (last 30
    days)
   </h2>
   <ArticleList>
    {articles.map((article) => (
     <ArticleItem key={article.url}>
      <ArticleTitle>
       <a href={article.url} target="_blank" rel="noopener noreferrer">
        {article.name}
       </a>
      </ArticleTitle>
      {/* {article.image && (
       <ArticleImage
        src={article.image.thumbnail.contentUrl}
        alt={article.name}
       />
      )} */}
      <ArticleDescription>{article.description}</ArticleDescription>
     </ArticleItem>
    ))}
   </ArticleList>
  </div>
 )
}

export default NewsComponent
