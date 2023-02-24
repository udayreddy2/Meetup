import React from 'react'

const RegisterContext = React.createContext({
  errorMsg: false,
  username: '',
  activeTopicName: 'Arts and Culture',
  isRegistered: false,
  changeUserName: () => {},
  changeTopic: () => {},
  onToggleError: () => {},
  registerName: () => {},
})

export default RegisterContext
