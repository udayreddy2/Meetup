import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import {
  RegisterFormContainer,
  Container,
  RegistrationImage,
  FormContainer,
  FormHeading,
  InputContainer,
  Label,
  NameInputBox,
  SelectTopic,
  SelectOption,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterForm = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        username,
        activeTopicName,
        changeUserName,
        changeTopic,
        onToggleError,
        registerName,
        errorMsg,
      } = value

      const onSubmitDetails = event => {
        event.preventDefault()

        if (username !== '' && activeTopicName !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          onToggleError()
        }
      }

      const onChangeUserName = event => {
        changeUserName(event.target.value)
      }

      const onChangeSelectOption = event => {
        changeTopic(event.target.value)
      }

      return (
        <>
          <Header />
          <Container>
            <RegisterFormContainer>
              <RegistrationImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
                alt="website register"
              />
              <FormContainer onSubmit={onSubmitDetails}>
                <FormHeading>Let us join</FormHeading>
                <InputContainer>
                  <Label htmlFor="name">NAME</Label>
                  <NameInputBox
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={username}
                    onChange={onChangeUserName}
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="topic">TOPICS</Label>
                  <SelectTopic
                    id="topic"
                    value={activeTopicName}
                    onChange={onChangeSelectOption}
                  >
                    {topicsList.map(eachTopic => (
                      <SelectOption key={eachTopic.id} value={eachTopic.id}>
                        {eachTopic.displayText}
                      </SelectOption>
                    ))}
                  </SelectTopic>
                </InputContainer>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {errorMsg && <ErrorMsg>Please enter your name</ErrorMsg>}
              </FormContainer>
            </RegisterFormContainer>
          </Container>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterForm
