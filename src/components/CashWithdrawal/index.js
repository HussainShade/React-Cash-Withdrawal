// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="container">
          <div className="profile-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-text-container">
              <p className="balance-amount">{balance}</p>
              <p className="balance-in-rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="title">Withdraw</p>
          <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="withraw-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationsDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
