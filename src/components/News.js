import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
  constructor(){
    super();
    console.log("Hello I am constructor");
    this.state={
      articles : [],
      loading : false
    }
  }
  async componentDidMount(){

    let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fccdec19a3be43d6853d849c43bbe859";
    let data=await fetch(url);
    let parsedData =await data.json()
    this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className='container my-4'>
      <h2 className='text-center' style={{margin : '35px 0px', marginTop :' 90px'}}><u>Top News HeadLines</u></h2>
      <div className='row'>
        {this.state.articles.map((element)=>{
         return <div className="col-md-3" key={element.url}>
                <NewsItem title={element.title} description={element.description ?element.description.slice(0,80) : "No description is available "} imageUrl={element.urlToImage ? element.urlToImage :" https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522breaking%2Bnews%2522&psig=AOvVaw3D4h4RGsUmxiwVpnURmQ78&ust=1667973100339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOjx8pHynfsCFQAAAAAdAAAAABAE"} newsUrl={element.url}/>
        </div>
        })}
      </div>
       
      </div>
    )
  }
}

export default News
