import styled from 'styled-components';
import Menubar from '../components/Menubar'

const Rental = () => {
    return (
        <>
        <Menubar/>
        <_Wrap>
            <_Line>신청하기<_Search/></_Line>
            
        </_Wrap>
        </>
    );
};

export default Rental;

const _Wrap = styled.div`
    display: flex;
    justify-content: center;
`

const _Line = styled.div`
    width: 60%;
    font-size: 30px;
    font-weight: bold;
    color: #7A7A7A;
    border-bottom: 1px solid #000000;
    padding-bottom: 10px;
    margin-top: 120px;
`


const _Search = styled.input`
    border-radius: 20px;
`