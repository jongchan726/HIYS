import React from 'react';
import styled from 'styled-components';
import Menubar from '../components/Menubar3'

const Home = () => {
    return (
      <>
      <Menubar/>
      <_Notice>공지사항</_Notice>
      <_Itfwrap>
      <_Interface></_Interface>
      <_Interface></_Interface>
      </_Itfwrap>
      <_Itfwrap>
      <_Interface></_Interface>
      <_Interface></_Interface>
      </_Itfwrap>
      </>
    );
  };
  
  export default Home;

const _Notice = styled.div`
  width: 90vw;
  height: 20vh;
  margin-top: 80px;
  margin-left:5%;

  background: #D9D9D9;
  border-radius: 20px;
  text-align: center;
`

const _Itfwrap = styled.div`
  width: 90vw;
  height: 400px;
  margin-left:5%;
  display: flex;
  justify-content: space-between;

  :last-child{
    margin-top: 20px;
  }

  @media (max-width: 600px) {
        flex-direction: column;
        height: auto;
    }
`

const _Interface = styled.div`
  width: 44vw;
  height: 400px;
  margin-top: 13px;
  background: #D1D1D1;
  border-radius: 15px;

  @media (max-width: 600px) {
        width: 90vw;
    }
`