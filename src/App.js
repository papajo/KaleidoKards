import React, { Component } from 'react';
import Card from './components/card/Card';
import Header from './components/header/Header';
import './components/card/Card.scss';
import './components/styles/text.scss';
import './App.scss';
import Footer from './components/footer/Footer';
import TradingContainer from './components/trade/tradingContainer';
import MyCardsContainer from './components/mycards/MyCardsContainer';
//import KaleidoKardsContract from '../build/contracts/KaleidoKards.json';
//import getWeb3 from './utils/getWeb3';





class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     web3: null,
  //     kaleidoKardsInstance: null,
  //     cards: []

  //   }
  // }

  // componentWillMount () {

  //   console.log("here");
  //   getWeb3
  //   .then(results => {
  //     this.setState({
  //       web3: results.web3
  //     })

  //     // Instantiate contract once web3 provided.
  //     this.instantiateContract()
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }


  // instantiateContract() {
    
  //   const kaleidoKards = new this.state.web3.Contract(KaleidoKardsContract, 'contractAddress')
  //   console.log(kaleidoKards, "BANANA");
  


  //   // Get accounts.
  //   this.state.web3.eth.getAccounts((error, accounts) => {
  //    kaleidoKards.deployed().then((instance) => {
  //      instance.getKards().then((x) => console.log(x));
  //      this.setState({
  //        kaleidoKardsInstance: instance
      
  //      })
  //     })
  //   })

    
  // }
 
  // getCards() {
  //   let result = getCards;
  //   this.setState({cards: <Card shape= {result.shape} color={result.color} />})
  // }

  // clickButton() 

  render() {
    //let cards = this.state.cards;
    return (
      <div>
        <div>
        <Header/>
          <div className = "square-container">
            <div className="other-players-cards">
              <TradingContainer/>
            </div>
            <div className="column-container">
              <div className="ether">
              <h1 className="amount-of-ether"> 100</h1>
              <h2 className="text-style"> Ether </h2>
              </div>
              <div className="my-cards">
                <h2 className="my-cards-title header-text"> My Cards </h2>
                <div className="my-cards-container">
                  <MyCardsContainer/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>

      </div>
    );
  }
}

export default App;
