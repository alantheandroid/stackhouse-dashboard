import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

export const DashBoardNavbar = styled(AppBar)`
    z-index: 11;
    box-shadow: none;
    padding-block: 1rem;
    backdrop-filter: blur(6px);
    background-color: transparent;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1240px;
    margin: 0 auto;
    position: relative;
    border: 1px solid red;
`