import React, { Component } from 'react'
import '../App.css'
export class Navbar extends Component {
    render() {
        return (
            <div class="navbar">
                <div className='icon'><a src="/"><img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" height="50" width="271"></img></a></div>
                <div className='Select-btn-box'>
                    <div>
                        <select name="cars" id="cars">
                            <option value="volvo">INR</option>
                        </select>
                    </div>
                    <div>
                        <select name="cars" id="cars">
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="BUY BTC"></input>
                    </div>
                </div>
                <div className='Toggle-box'>
                    <div>

                    </div>
                    <div>
                        <input type="submit" value="Connect Telegram" class="tbtn"></input>
                    </div>
                    <div>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                   </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
