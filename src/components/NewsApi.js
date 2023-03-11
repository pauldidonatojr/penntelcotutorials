import React, { useState, useEffect } from 'react'

function ArticleList() {
 const [articles, setArticles] = useState([])
 const [currentPage, setCurrentPage] = useState(1)

 useEffect(() => {
  async function fetchData() {
   const pageSize = 5
   const startIndex = (currentPage - 1) * pageSize
   const url = `https://newsapi.org/v2/everything?q=Philadelphia%20police%20reports%20OR%20traffic%20violations%20OR%20car%20accidents%20OR%20cars%20on%20fire&apiKey=54f462522a794f04816f6046782b9905&pageSize=${pageSize}&startIndex=${startIndex}`
   const response = await fetch(url)
   const data = await response.json()
   setArticles(data.articles)
  }
  fetchData()
 }, [currentPage])

 function handlePageChange(newPage) {
  setCurrentPage(newPage)
 }

 return (
  <div>
   <h2>Articles about Philadelphia</h2>
   {articles.map((article) => (
    <div key={article.url} className="article-card">
     <h3>{article.title}</h3>
     <p>{article.description}</p>
    </div>
   ))}
   <div className="pagination">
    {[1, 2, 3, 4, 5].map((page) => (
     <button key={page} onClick={() => handlePageChange(page)}>
      {page}
     </button>
    ))}
   </div>
  </div>
 )
}

export default ArticleList
