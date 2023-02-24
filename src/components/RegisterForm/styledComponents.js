import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const RegisterFormContainer = styled.div`
  display: flex;
  align-self: center;
  width: 60%;
  height: 70vh;
`
export const RegistrationImage = styled.img`
  height: 100%;
  width: 50%;
`
export const FormContainer = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:flex-start
    height:100%;
    width:50%;
    padding:20px;
`
export const FormHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 52px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
`
export const Label = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`
export const NameInputBox = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 8px;
  color: #475569;
`
export const SelectTopic = styled.select`
  width: 100%;
  height: 50px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 16px;
  padding-left: 8px;
  font-weight: 500;
  color: #475569;
`
export const SelectOption = styled.option`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const RegisterNowButton = styled.button`
  border: none;
  outline: none;
  background-color: #2563eb;
  height: 50px;
  width: 180px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 16px;
`
