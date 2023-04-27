import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}`
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setarticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}`
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()

    setarticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setloading(false)
  };


  return (
    <>
      <h1 className='text-center' style={{ marginTop: 90, color: props.mode === 'dark' ? 'white' : 'black' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines!</h1>

      {loading && <Spinner mode={props.mode} />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={!(articles.length !== totalResults) ? <Spinner /> : ""}
      >

        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem mode={props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>

  )
}

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "health"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
