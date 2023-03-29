import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [form, setform]: any = useState("");
  const [job, setJob] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  let navigate = useNavigate();
  const [color1, setJobColor1] = useState("#1E00D3");
  const [color2, setJobColor2] = useState("#B7B7B7");

  const handleJobClick1 = () => {
    setJobColor1(color1 === "#B7B7B7" ? "#1E00D3" : "#1E00D3");
    setJobColor2(color2 === "#1E00D3" ? "#B7B7B7" : "#B7B7B7");
  };

  const handleJobClick2 = () => {
    setJobColor2(color2 === "#B7B7B7" ? "#1E00D3" : "#1E00D3");
    setJobColor1(color1 === "#1E00D3" ? "#B7B7B7" : "#B7B7B7");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const signUp = () => {
    axios
      .post("http://www.zena.co.kr/api/register", {
        form,
      })
      .then(() => navigate("/"))
      .catch();
    console.log(form);
  };

  return (
    <_Wrap >
      <form
        onSubmit={(event: any) => {
          (job === '' ? setJob("student") : setJob(job));
          event.preventDefault();
          setform({
            job,
            id,
            pw,
            number,
            name,
          });
        }}
      >
        <_FormWrap isInputVisible={isInputVisible}>
          <_Title>
            I Can Do <_TitleColor>IT콘텐츠과</_TitleColor>
          </_Title>
          <_BottonWrap>
            <_JobBtn
              style={{ color: color1 }}
              
              onClick={() => {setJob("student");
                console.log(job);
                setIsInputVisible(!isInputVisible);
                handleJobClick1();
                }}>
              학생
            </_JobBtn>
            <_Line></_Line>
            <_JobBtn style={{ color: color2 }}
              onClick={() => {
                setJob("teacher");
                console.log(job);
                setIsInputVisible(!isInputVisible);
                handleJobClick2();
              }}>
              교사
            </_JobBtn>
          </_BottonWrap>
          <_InputWrap>
            <_Label>아이디</_Label>
            <br />
            <_Input
              isFocused={isFocused}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={id}
              onChange={(event) => {setId(event.target.value);
                console.log(id);
              }}
              type="text"
              placeholder="아이디를 입력해 주세요."
            />
          </_InputWrap>
          <_InputWrap>
            <_Label>비밀번호</_Label>
            <br />
            <_Input
              isFocused={isFocused}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={pw}
              onChange={(event) => {setPw(event.target.value);
                console.log(pw);
              }}
              type="text"
              placeholder="비밀번호를 입력해 주세요."
            />
          </_InputWrap>
          {isInputVisible && (
          <_InputWrap>
            <_Label>학번</_Label>
            <br />
            <_Input
              isFocused={isFocused}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={number}
              onChange={(event) => {setNumber(event.target.value);
                console.log(number);
              }}
              type="text"
              placeholder="학번 입력해 주세요."
            />
          </_InputWrap>
          )}
          <_InputWrap>
            <_Label>이름</_Label>
            <br />
            <_Input
              isFocused={isFocused}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={name}
              onChange={(event) => {setName(event.target.value);
                console.log(name);
              }}
              type="text"
              placeholder="이름을 입력해 주세요."
            />
          </_InputWrap>
          <_SignUpBtnWrap>
            <_SignUpBtn type="submit" onClick={signUp}>
              가입하기
            </_SignUpBtn>
          </_SignUpBtnWrap>
        </_FormWrap>
      </form>
    </_Wrap>
  );
};

export default Signup;

const _Wrap = styled.div`
  background: linear-gradient(to right bottom, #9786ff, #2805fc);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ContainerProps {
  isInputVisible: any;
}

const _FormWrap = styled.div<ContainerProps>`
  /* background-color: white;
  height: 570px;
  width: 500px;
  position: relative;
  
  margin: auto;
  margin-top: 130px;
  
  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.25);
  border-radius: 30px; */
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  /* height: 570px; */
  height: ${({ isInputVisible }) => (isInputVisible ? '570px' : '490px')};
  width : 500px;

  box-shadow: 8px 8px 15px 5px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const _Title = styled.div`
  font-size: 32px;
  text-align: center;

  margin-top: 20px;

  font-weight: bold;
`;

const _TitleColor = styled.span`
  color: #1e00d3;
`;

const _BottonWrap = styled.div`
  padding: 5px 20px 5px 20px;
  margin: 0px 50px 0px 50px;

  display: flex;
`;

const _JobBtn = styled.button`
  padding: 5px 20px 5px 20px;
  margin: 0px 50px 0px 50px;

  color: #b7b7b7;

  font-size: 22px;
  font-weight: bold;
  font-family: sans-serif;

  background: none;
  border: none;
  cursor: pointer;
`;

const _Line = styled.span`
  width: 1px;
  height: 20px;

  margin-top: 10px;

  background-color: rgb(174, 174, 174);
`;

const _Label = styled.label`
  font-size: 13px;

  margin-left: 5px;
`;

interface fuxxyou {
  isFocused: any;
}

const _Input = styled.input<fuxxyou>`
  width: 400px;
  height: 50px;
  margin-top: 3px;
  /* border: 1px solid #e5e5e5; */
  border-radius: 12px;
  border: 1px solid ${({ isFocused }) => (isFocused ? 'gray' : 'blue')};
  padding-left: 10px;

  border-color: gray;
  outline: none;
`;

const _InputWrap = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  >input:focus{
    border: 1px solid blue;
  }
`;

const _SignUpBtn = styled.button`
  width: 412px;
  height: 60px;
  font-size: 20px;

  background: #1e00d3;
  border: 0px solid #e5e5e5;
  border-radius: 12px;

  color: white;
  cursor: pointer;
`;

const _SignUpBtnWrap = styled.div`
  margin-top: 30px;
  
  display: flex;
  justify-content: center;
`;