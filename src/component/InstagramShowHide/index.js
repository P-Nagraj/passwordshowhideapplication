import {Component} from 'react'
import './index.css'

class InstagramShowHide extends Component {
  state = {
    showPassword: false,
  }

  onTogglePassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {showPassword} = this.state

    const passwordType = showPassword ? 'text' : 'password'

    const buttonText = showPassword ? 'Hide Password' : 'Show Password'

    return (
      <div className="app-container">
        <div className="card">
          <h1 className="logo">Instagram</h1>

          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="input"
          />

          <input
            type={passwordType}
            placeholder="Password"
            className="input"
          />

          <button type="button" className="login-button">
            Log In
          </button>

          <button
            type="button"
            className="show-hide-button"
            onClick={this.onTogglePassword}
          >
            {buttonText}
          </button>

          <p className="forgot-password">Forgot password?</p>
        </div>
      </div>
    )
  }
}

export default InstagramShowHide