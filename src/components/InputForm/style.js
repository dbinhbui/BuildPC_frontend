import { Input } from "antd";
import { styled } from "styled-components";

export const WrapperInputStyle = styled(Input)`
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    &:focus{
        background-color: rgb(234, 231, 237);
    }
`