import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  articles = [
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  capitalize=(s)=>{
    return s[0].toUpperCase() + s.slice(1);
  }
  constructor(props){
    super(props);
    this.state={
      articles: this.articles,
      loading: false,
      page: 1
    }
    document.title=`${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  // The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.

  async componentDidMount(){
    console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0550c06d07b449b3bf41af34a35fcd24&page=1&pagesize=${this.props.pagesize}`;
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // console.log(data);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false
    // })
    this.update();
  }
  update=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0550c06d07b449b3bf41af34a35fcd24&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
  }
  handlePrev=async()=>{
    console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0550c06d07b449b3bf41af34a35fcd24&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // console.log(data);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   page: this.state.page-1,
    //   loading: false
    // })
    this.setState({
      page: this.state.page - 1
    })
    this.update();
  }

  handleNext=async()=>{
    console.log("Next");
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))
    {

    }
    else{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0550c06d07b449b3bf41af34a35fcd24&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    // this.setState({
    //   loading: true
    // })
    // let data = await fetch(url);
    // console.log(data);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   page: this.state.page+1,
    //   loading: false

    // })
    this.setState({
      page: this.state.page+1
    })
    this.update();

  }}
  render() {
    let {color,backgroundColor} = this.props;

    console.log("render")
    return (
      <div className='container my-3' style={{color: color, backgroundColor: backgroundColor==='black'?'#428b81':'white'}}>
        <h2 className='text-center'>NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4">
      <NewsItem title={element.title?element.title.slice(0,45):"India won the last match"} description={element.description?element.description.slice(0,88):"Shreyas iyer declared as man of the match"} urlI={element.urlToImage} urlD={element.url} author={element.author?element.author:"Ritik Bansal"} date={element.publishedAt}/>
        </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr;Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div>
    </div>
    
    )
  }
}
