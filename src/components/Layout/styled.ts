import styled from "@emotion/styled";
import { secondary } from "../../styles/themeColors";

export const StyledLayout = styled.div`
    display: flex;
    background-color: ${() => secondary[200]};
    gap: 3rem;
`