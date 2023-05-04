import React, { Component } from 'react'
import '../App.css'
export class Body extends Component {
  constructor()
  {
    super();
    this.state = {
      coins:[],
      base_unit:"btc"
    }
  }
  async componentDidMount()
  {
    console.log("hi")
    let data = await fetch('http://localhost:8080/getData');
    data = await data.json();
    console.log(data);
    this.setState({
      coins:data
    })
  }
  render() {
    return (
      <div className='body'>
        <h2 style={{'color':'grey','margin-left':'45%'}}>Best Price to Trade</h2>
        <div className='price'>
           <div>
               <h3>0.32 %</h3>
               <p>5 Mins</p>
           </div>
           <div>
           <h3>0.39 %</h3>
               <p>1 Hour</p>
           </div>
           <div id="bestprice">
           <h3>₹ 1,70,066</h3>  
           </div>
           <div>
           <h3>8.18 %</h3>
               <p>5 Mins</p>
           </div>
           <div>
           <h3>7.48 %</h3>
               <p>7 Days</p>
           </div>
        </div>
        <p id="para">Average ETH/INR net price including commission</p>
        <div className='heading' style={{'color':'gray','font-size':'18px'}}>
            <h2>#</h2>
            <h2>Platform</h2>
            <h2>Last Traded Price</h2>
            <h2>Buy / Sell Price</h2>
            <h2>Difference</h2>
            <h2>Savings</h2>
        </div>
        <div className='coins-tbl'>
              {this.state.coins.map((ele,ind)=>{
                return (
                  <>
                  <div className='coins'>
                  <h2>{ind+1}</h2>
                  <h2>{ele.name}</h2>
                  <h2>{ele.last}</h2>
                  <h2>{ele.buy/ele.sell}</h2>
                  <h2>{ele.low}</h2>
                  <h2>{ele.volume}</h2>
                  </div>
                  </>
                )
              })}
        </div>
      </div>
    )
  }
}

export default Body
