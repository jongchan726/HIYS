import styled from 'styled-components';
import Menubar from '../components/Menubar'

const Rental = () => {
    return (
        <>
        <Menubar/>
        <_Wrap>
            <_Header>신청하기</_Header>
            <_Listwrap>
                <_Subtext>기자재 목록<_Addbtn>추가하기 +</_Addbtn></_Subtext>
            </_Listwrap>
            <_Writewrap>
                <_Subtext>신청서 작성</_Subtext>
                <_Inputtitle>이름</_Inputtitle>
                <_Inputtitle>학번</_Inputtitle>
                <_Inputtitle>이용인원</_Inputtitle>
                <_Inputtitle>대여기간</_Inputtitle>
                <_Inputtitle>불출시점</_Inputtitle>
                <_Inputtitle>연락처</_Inputtitle>
            </_Writewrap>
        </_Wrap>
        </>
    );
};

export default Rental;

const _Wrap = styled.div`
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr auto auto 2fr;
    grid-template-areas:
        "header header header"
        "sbmenu list ."
        ". write ."
        ". btn .";
`

const _Header = styled.header`
    width: 100%;
    margin-top: 30px;
    font-size: 28px;
    font-weight: 750;
    color: #000000;
    text-align: center;
    grid-area: header;
`

const _Listwrap = styled.div`
    width: 100%;
    grid-area: list;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

const _Subtext = styled.div`
    width: 100%;
    font-size: 23px;
    font-weight: 700;
    color: #000000;
    box-shadow: inset 0 -2px 0 #1E00D3;
    padding-bottom: 10px;
`

const _Addbtn = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #1E00D3;
    color: white;
    float: right;
`

const _Writewrap = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    grid-area: write;
`

const _Inputtitle = styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
    padding-left: 10px;
    box-shadow: inset 0 -1px 0 #888888;
`