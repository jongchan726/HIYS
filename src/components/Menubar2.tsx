import styled from 'styled-components';

function MenuBar2() {
    return (
        <MenuBarContainer>
            <MenuItem>메뉴1
            <SecondMenuBarContainer>
                <SecondMenuItem>Menu 1</SecondMenuItem>
                <SecondMenuItem>Menu 2</SecondMenuItem>
                <SecondMenuItem>Menu 3</SecondMenuItem>
            </SecondMenuBarContainer></MenuItem>
            <MenuItem>메뉴2
            <SecondMenuBarContainer>
                <SecondMenuItem>Menu ㄱ</SecondMenuItem>
                <SecondMenuItem>Menu ㄴ</SecondMenuItem>
                <SecondMenuItem>Menu ㄷ</SecondMenuItem>
            </SecondMenuBarContainer></MenuItem>
            <MenuItem>메뉴3
            <SecondMenuBarContainer>
                <SecondMenuItem>Menu a</SecondMenuItem>
                <SecondMenuItem>Menu b</SecondMenuItem>
                <SecondMenuItem>Menu c</SecondMenuItem>
            </SecondMenuBarContainer>
            </MenuItem>
        </MenuBarContainer>
    );
}

export default MenuBar2;

const MenuBarContainer = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    color: #555;
    font-size: 1.2rem;
    position: relative;
    font-weight: bold;
`;

const MenuItem = styled.div`
    cursor: pointer;
    padding: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    :hover {
        background-color: #444;
        color: #eee;
        >div{
            display: block;
        }
    }
`;

const SecondMenuBarContainer = styled.div`
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #eee;
    color: #333;
    font-size: 1.2rem;
`;

const SecondMenuItem = styled.div`
    cursor: pointer;
    padding: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #ddd;
    }
`;