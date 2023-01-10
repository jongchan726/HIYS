import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Menubar = () => {
    return (
        <Menubox1>
            <Menuwrap>
                <Menu1>
                    <span>1차 메뉴 아이템 1</span>
                    <Menuwrap>
                        <li><span>2차 메뉴 아이템 1</span></li>
                        <li><span>2차 메뉴 아이템 2</span></li>
                        <li><span>2차 메뉴 아이템 3</span></li>
                    </Menuwrap>
                </Menu1>
                <Menu1>
                    <span>1차 메뉴 아이템 1</span>
                    <Menuwrap>
                        <li><span>2차 메뉴 아이템 1</span></li>
                        <li><span>2차 메뉴 아이템 2</span></li>
                        <li><span>2차 메뉴 아이템 3</span></li>
                    </Menuwrap>
                </Menu1>
                <Menu1>
                    <span>1차 메뉴 아이템 1</span>
                    <Menuwrap>
                        <li><span>2차 메뉴 아이템 1</span></li>
                        <li><span>2차 메뉴 아이템 2</span></li>
                        <li><span>2차 메뉴 아이템 3</span></li>
                    </Menuwrap>
                </Menu1>
                <Menu1>
                    <span>1차 메뉴 아이템 1</span>
                    <Menuwrap>
                        <li><span>2차 메뉴 아이템 1</span></li>
                        <li><span>2차 메뉴 아이템 2</span></li>
                        <li><span>2차 메뉴 아이템 3</span></li>
                    </Menuwrap>
                </Menu1>
            </Menuwrap>
        </Menubox1>
    );
};

export default Menubar;

const Menubox1 = styled.nav`
    text-align: center;
    >ul{
        display:inline-block;
        padding:0 20px;
        border-radius:10px;
    }
`
const Menuwrap = styled.ul`
    /* background-color:#afafaf; */
    >li{
        >span{
            padding:10px;
            display: block;
            font-weight:bold;
        }
    }
    >li:hover{
        >span{
            background-color:black;
            color:white;
        }
    }
`

const Menu1 = styled.li`
    display:inline-block;
    position:relative;
    >ul{
        position:absolute;
        display:none;
        top:100%;
        left:0;
    }
    :hover{
        >ul{
            display:block;
        }
    }
`