import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <br style={{'backgroundColor':'gray'}} />
        <div>
            <p>Copyright © 2019 HodlInfo.com</p>
            <p>Support</p>
        </div>
        <input type="submit" value="Add hodlinfo to home screen"></input>
      </div>
    )
  }
}

export default Footer
