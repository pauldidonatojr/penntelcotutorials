import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
const NewsWrapper = styled.div`
 max-width: 800px;
 margin: 0 auto;
 padding: 20px;
`

const Title = styled.h2`
 font-size: 28px;
 margin-bottom: 10px;
`

const List = styled.ul`
 list-style: none;
 margin: 0;
 padding: 0;
`

const ListItem = styled.li`
 margin-bottom: 20px;
 border-bottom: 1px solid #ddd;
 padding-bottom: 20px;
 display: flex;
 align-items: center;
`

const Image = styled.img`
 width: 100px;
 margin-right: 20px;
`

const TextWrapper = styled.div`
 flex-grow: 1;
`

const Link = styled.a`
 color: #007bff;
 text-decoration: none;
 &:hover {
  text-decoration: underline;
 }
`

const Description = styled.p`
 margin-top: 10px;
`

function News({ apiKey }) {
 const [articles, setArticles] = useState([])

 useEffect(() => {
  async function fetchData() {
   const url =
    'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'category=general&' +
    'apiKey=' +
    apiKey

   const response = await fetch(url)
   const data = await response.json()
   setArticles(data.articles)
  }

  fetchData()
 }, [apiKey])

 return (
  <NewsWrapper>
   <Title>Top Headlines</Title>
   <List>
    {articles.map((article, index) => (
     <ListItem key={index}>
      {article.urlToImage && (
       <Image src={article.urlToImage} alt={article.title} />
      )}
      <TextWrapper>
       <Link href={article.url} target="_blank" rel="noopener noreferrer">
        {article.title}
       </Link>
       {article.description && <Description>{article.description}</Description>}
      </TextWrapper>
     </ListItem>
    ))}
   </List>
  </NewsWrapper>
 )
}

export default News
