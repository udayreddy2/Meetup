import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'

import {
  HomeContainer,
  HomeHeading,
  HomeDescription,
  LinkRouter,
  RegisterButton,
  RegisterImage,
  UserDetails,
  UserDetailsContainer,
  UserSelectedTopic,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {username, activeTopicName, isRegistered} = value
      console.log(username)
      console.log(activeTopicName)
      return (
        <>
          <Header />
          <HomeContainer>
            {isRegistered ? (
              <UserDetailsContainer>
                <UserDetails>Hello {username}</UserDetails>
                <UserSelectedTopic>
                  Welcome to {activeTopicName}
                </UserSelectedTopic>
              </UserDetailsContainer>
            ) : (
              <>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomeDescription>Please register for the topic</HomeDescription>
                <LinkRouter to="/register">
                  <RegisterButton type="button">Register</RegisterButton>
                </LinkRouter>
              </>
            )}

            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
