import React, { Component } from 'react';
import {connect} from 'react-redux'
import Footer from './Footer'

//Google Ad
import GoogleAd from 'react-google-ad'

//Google Analytics
import { BrowserRouter } from 'react-g-analytics';

//Facebook Pixels
import ReactPixel from 'react-facebook-pixel';

class Finished extends Component {
  constructor(props) {
    super(props)
    this.wait = this.props.match.path == '/enrollment/finished' ? true : false
  }

  componentWillMount(){
    if(this.wait) return

    //Facebook Pixels
    ReactPixel.pageView();
  }

  thanks(wait){
    if(wait){
      return(
        <div>
          <h4>Thanks for enrolling!</h4>
          <p style={{color: 'black'}}>We’re currently overbooked with free course signups. We’ve added you to our waitlist. Aaron will be reaching out to schedule a time to get started with your program.</p>
        </div>
      )
    }

    return (
      <div>
        <h4>Thanks for enrolling!</h4>
        <p style={{color: 'black'}}>Aaron will be reaching out to confirm your onboarding and give you access to Thinkful’s platform and curriculum.</p>
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter id="UA-32959514-1">

      <GoogleAd client="1002750134" slot="eOYpCM2kinsQtoGT3gM" format="false" />

      <div id="app">
        <div className="app-container" >
          <div className="onboarding-page-container">
            <header className="header-container">
              <div className="header-page-container">

                <div className="header-copy">
                    {this.thanks(this.wait)}
                </div>
              </div>
            </header>
          </div>

          <Footer />
        </div>
      </div>
      </ BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Finished)
