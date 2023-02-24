import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

import './App.css'

class App extends Component {
  state = {
    username: '',
    activeTopicName: 'Arts and Culture',
    errorMsg: false,
    isRegistered: false,
  }

  changeUserName = username => {
    this.setState({
      username,
    })
  }

  changeTopic = activeTopicName => {
    this.setState({
      activeTopicName,
    })
  }

  onToggleError = () => {
    this.setState({
      errorMsg: true,
    })
  }

  registerName = () => {
    this.setState({
      isRegistered: true,
    })
  }

  render() {
    const {username, activeTopicName, isRegistered, errorMsg} = this.state
    return (
      <RegisterContext.Provider
        value={{
          username,
          activeTopicName,
          isRegistered,
          errorMsg,
          changeUserName: this.changeUserName,
          changeTopic: this.changeTopic,
          onToggleError: this.onToggleError,
          registerName: this.registerName,
        }}
      >
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
