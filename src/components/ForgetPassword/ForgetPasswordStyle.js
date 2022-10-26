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
    color: #2d9cdb;
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
  .title{
    h2{
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #4F4F4F;
        text-align:center;
        margin-bottom:15px;
    }
    p{
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #BDBDBD;
    }
  }
  @media (min-width: 768px) {
    width: 60%;
  }
  p{
    margin-bottom:0;
  }
`;

export const FormStyled = styled.form`
  width: 100%;
 
  .spinner{
    width:20px;
    height:20px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input {
    background-color: #f2f2f2;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    font-size: 18px;
    margin-bottom: 2rem;
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
  button:hover {
    background-color: #2db563;
    transition: all 0.3s;
  }
  .error {
    color: #db2c66;
    margin-top: -1.25rem;
    margin-bottom: 1rem;
  }
  .navigate {
    display: none;
  }
  @media (min-width: 768px) {
    .navigate {
      display: block;
    }
  }
`;
export const AuthImg = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
  img {
    max-width: 600px;
    width: 70%;
    object-fit: cover;
  }
`;
