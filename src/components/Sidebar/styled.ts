import styled from "@emotion/styled";

type SidebarProps = {
    isOpen: boolean
}

const openSidebarWidth = '260px'
const closedSidebarWidth = '130px'

export const StyledSidebar = styled.div<SidebarProps>`
    height: 100vh;
    width: ${({isOpen}) => isOpen ? openSidebarWidth : closedSidebarWidth};
    background-color: white;

    :hover{
        width: ${() => openSidebarWidth};
    }
`

export const StyledSidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: sticky;
    top: 0;
    left: 0;
`