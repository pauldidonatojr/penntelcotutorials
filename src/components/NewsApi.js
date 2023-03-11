import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const NewsAPIComponent = () => {
 const [articles, setArticles] = useState([])

 useEffect(() => {
  const fetchNews = async () => {
   try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
     params: {
      country: 'us',
      apiKey: '522c32e9fc4044a1bec0a295eb88aba5',
     },
    })
    setArticles(response.data.articles)
   } catch (error) {
    console.error(error)
   }
  }
  fetchNews()
 }, [])

 return (
  <Wrapper>
   <Title>Latest News</Title>
   <ArticleList>
    {articles.map((article) => (
     <Article key={article.title}>
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleDescription>{article.description}</ArticleDescription>
      <ReadMoreLink href={article.url}>Read More</ReadMoreLink>
     </Article>
    ))}
   </ArticleList>
  </Wrapper>
 )
}

const Wrapper = styled.div`
 background-color: #f8f8f8;
 padding: 20px;
`

const Title = styled.h1`
 font-size: 36px;
 font-weight: bold;
 margin-bottom: 20px;
`

const ArticleList = styled.ul`
 list-style: none;
 padding: 0;
 margin: 0;
`

const Article = styled.li`
 margin-bottom: 20px;
`

const ArticleTitle = styled.h2`
 font-size: 24px;
 font-weight: bold;
 margin-bottom: 10px;
`

const ArticleDescription = styled.p`
 font-size: 16px;
 margin-bottom: 10px;
`

const ReadMoreLink = styled.a`
 font-size: 16px;
 color: #0070c0;
 text-decoration: none;
`

export default NewsAPIComponent
