import styled from "@emotion/styled";
import { secondary } from "../../styles/themeColors";

export const StyledLayout = styled.div`
    display: flex;
    background-color: ${() => secondary[200]};
    gap: 3rem;
`

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1;
max-width: 1240px;
margin: 0 auto;
gap: 1.5rem;
`