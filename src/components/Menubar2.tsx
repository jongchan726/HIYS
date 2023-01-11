import styled from 'styled-components';

function MenuBar2() {
    return (
        <>
        <MenuBarContainer>
            <_Logo src='YSIT-logo.png'></_Logo>
            <MenuItem>게시판</MenuItem>
            <MenuItem>방과후</MenuItem>
            <MenuItem>대여/반납</MenuItem>
            <MenuItem>상담신청</MenuItem>
            <MenuItem>학생관리</MenuItem>
            <_Thwrap>
            <_Name>장두영<_Tier>선생님</_Tier></_Name>
            <_Smalltalk>좋은하루되세요</_Smalltalk>
            </_Thwrap>
        </MenuBarContainer>
        </>
    );
}

export default MenuBar2;

const MenuBarContainer = styled.div`
    display: flex;
    align-items: center;
    height: 5vw;
    color: #555;
    font-size: 14px;
    position: relative;
    font-weight: bold;
    padding: 5px;
    border-bottom: 1px solid gray;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 3vw;
    height: 100%;
    display: flex;
    align-items: center;
    :hover {
        color: #1E00D3;
        box-shadow: inset 0 -2px 0 #1E00D3;
        >div{
            display: block;
        }
    }
`;

const _Logo = styled.img`
    width: 64px;
    height: 64px;
`;

const _Thwrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 53vw;
`

const _Name = styled.span`
    color: #1E00D3;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`
const _Tier = styled.span`
    color: black;
    font-size: 16px;
`

const _Smalltalk = styled.span`
    color: black;
    font-size: 14px;
`

const _Bbox = styled.div`
    width: 100px;
    height: 1000px;
    background-color: red;
`