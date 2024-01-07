import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    width: 100%;
    text-decoration: none;
    font-weight: 700;
    outline: none;
    font-size: 20px;
    padding: 10px 20px;
    @media (max-width: 930px) {
        font-size: 17px;
    }
    @media (max-width: 730px) {
        font-size: 15px;
    }
`

interface Props {
    to: string;
    children: ReactNode;
}

export const Castomlink = ({children, to}: Props) => {

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            color: match ? '#333' : "#C0C0C0",
            transition: '.2s ease-in-out',
            width: '100%'
        }}
        >
            {children}
        </LinkBLock>
    )
}