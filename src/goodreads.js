import React, {Component} from 'react'
import axios from 'axios'
import xml2json from 'xml2js'
import Bookshelf from './bookshelf.js'
import './goodreads.css'
import goodreads from './public/materials/goodreads.png'

class Goodreads extends Component {
  state = {
    jsonData:[],
    error:null
  }

  componentWillMount(){
    const apiKey = "BJoTpSB7LAEMeNVmibe5WQ";
    var config = {headers: {"X-Requested-With" : "XMLHttpRequest"}};
    axios.get("https://cors-anywhere.herokuapp.com/http://www.goodreads.com/review/list/83932463.xml?key="+apiKey+"&v=2", config)
    .then(response =>{
      let data;
      xml2json.parseString(response.data, function (err, result) {
        data = result.GoodreadsResponse.reviews[0].review
      });
      this.setState({jsonData: data});
    })
    .catch(error =>{
      this.setState({error:error})
    });
  }

  render() {
    const layout = this.state.jsonData.map((v,k)=>{
      return(
        <Bookshelf key={k} bookNameTitle={v.book[0].title} cover={v.book[0].image_url} url={v.book[0].link}/>
        )
    })

    return(
      <div className="goodshelf">
        <div>
        <img src={goodreads} width="80px" height="80px"/>
        <span className="header">My Goodreads Read Shelf</span>
        </div>
        <table className="table shelf table-hover table-dark">
          <tbody>
            {layout}
          </tbody>
      </table>
      </div>
    )
  }
}

export default Goodreads
