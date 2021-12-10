import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../../helper/deviceSize";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (${device.laptop}) {
        margin: 20px 0;
    }
`;

export const ContentContainer = styled(motion.div)`
    width: 850px;
    height: 500px;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    transform-style: preserve-3d;

    @media only screen and (${device.laptop}) {
        width: 90%;
        height: 90%;
    }

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #b0b0b0;
        top: 30px;
        left: -30px;
        border-radius: 20px;
        transform: translateZ(-1px);

        @media only screen and (${device.laptop}) {
            top: 20px;
            left: -20px;
        }
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 1.5rem;
`;

export const ItemsContainer = styled.div`
    width: 100%;
    height: 20%;
    margin-top: 20px;
    
    @media only screen and (${device.laptop}) {
        height: 40%;
    }
`;

export const Item = styled.div`
    margin: 5px;
    padding: 10px 10px;
    background: #e0e0e0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
`;