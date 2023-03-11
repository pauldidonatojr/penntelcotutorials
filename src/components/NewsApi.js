import React, { useState, useEffect } from 'react'

function ArticleList() {
 const [articles, setArticles] = useState([])

 useEffect(() => {
  async function fetchData() {
   const url =
    'https://newsapi.org/v2/everything?q=Philadelphia%20police%20reports%20OR%20traffic%20violations%20OR%20car%20accidents%20OR%20cars%20on%20fire&apiKey=54f462522a794f04816f6046782b9905'
   const response = await fetch(url)
   const data = await response.json()
   setArticles(data.articles)
  }
  fetchData()
 }, [])

 return (
  <div>
   <h2>Articles</h2>
   <ul>
    {articles.map((article) => (
     <li key={article.url}>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
       {article.title}
      </a>
     </li>
    ))}
   </ul>
  </div>
 )
}

export default ArticleList
