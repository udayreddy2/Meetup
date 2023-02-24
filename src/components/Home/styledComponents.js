import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const HomeHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 60px;
  font-weight: 600;
`
export const HomeDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  margin: 0px;
`
export const LinkRouter = styled(Link)`
  text-decoration: none;
`

export const RegisterButton = styled.button`
  border: none;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 120px;
  margin-top: 30px;
`
export const RegisterImage = styled.img`
  height: 400px;
  width: 800px;
  margin-top: 30px;
`
export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const UserDetails = styled.h1`
  color: #2563eb;
  font-family: 'Roboto';
  font-size: 60px;
  font-weight: 600;
`
export const UserSelectedTopic = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 34px;
  font-weight: 600;
  margin: 0px;
`
