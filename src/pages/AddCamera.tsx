import React, { useState } from 'react';
import Menubar from '../components/Menubar'
import styled from 'styled-components';

const AddCamera = () => {
    const [image, setImage] = useState(null);
    const [CameraName, setCameraName] = useState("");
    const handleImageUpload = (event:any) => {
        setImage(event.target.files[0]);
    };
    return (
    <>
    <Menubar/>
    <_Form>
    <_Header>기자재 추가하기</_Header>
    <_Inputtitle>카메라이름<_Input onChange={(event) => {
                    setCameraName(event.target.value);
                    console.log(CameraName);
                    }}
                    type="text"
                    placeholder='이름을 입력해주세요.' width={"150px"}/></_Inputtitle>
    <input type="file" onChange={handleImageUpload} />
    {/* {image && <img src={URL.createObjectURL(image)} alt="Selected Image" />} 이미지를 보여주는 코드 */}
    </_Form>
    </>
    );
};

export default AddCamera;

const _Header = styled.header`
    width: 100%;
    margin-top: 80px;
    font-size: 28px;
    font-weight: 750;
    color: #000000;
    text-align: center;
    grid-area: header;
`

const _Form = styled.form`
    display: flex;
`

const _Inputtitle = styled.label`
    /* margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
    padding-left: 10px;
    box-shadow: inset 0 -1px 0 #888888;
    display: flex; */
`

const _Input = styled.input`
    width:${props => props.width};
    height: 50px;
    margin-left: 20px;
    border: 1px solid #888888;
    border-radius: 3px;
    padding-left: 5px;
`