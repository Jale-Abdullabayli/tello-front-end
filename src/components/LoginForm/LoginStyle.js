import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 0 3rem;
  }
`;

export const Wrapper = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(1fr);
  a {
    color: #276787;
  }
  h2 {
    color: #4f4f4f;
    font-weight: 500;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 60%;
  }
`;
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  .icon {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
  svg {
    color: #fff;
  }
  span {
    background-color: #4267b2;
    width: 32px;
    height: 32px;
    padding: 0.3rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .google {
    background-color: #db4437;
  }
`;
export const FormStyled = styled.form`
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom:10px;
  }
  .spinner{
    width:20px;
    height:20px;
    margin-bottom:0;
  }
  input {
    background-color: #f2f2f2;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    font-size: 18px;
  }
  button {
    color: #fff;
    width: 100%;
    gap: 1rem;
    border-radius: 0.5rem;
    font-size: 18px;
    padding: 0.75rem 2.5rem;
    margin: 2rem 0;
    background-color: #2dd06e;
    display:flex;
    align-items:center;
    justify-content:center;
    .btnText{
      margin-left:20px;
    }
  }
  .forgetPassword{
    a{
      font-weight: 500;
font-size: 14px;
line-height: 16px;
text-align: right;
color: #2D9CDB;
width: fit-content;
margin-left: auto;
    }
  }
  button:hover {
    background-color: #2db563;
    transition: all 0.3s;
  }
  p {
    display: block;
  }
  @media (min-width: 768px) {
    p {
      display: none;
    }
  }
`;

export const AuthImg = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    max-width: 600px;
    width: 100%;
    object-fit: cover;
  }
`;
