import React from "react";
import styled from "styled-components";

interface StatData {
    id: number;
    top: string;
    bottom: string;
}

const StatCard: React.FC<StatData> = ({ id, top, bottom }) => {
  return (
    <CardMain key={id}>
        <CardTop>{top}</CardTop>
        <CardBottom>{bottom}</CardBottom>
    </CardMain>
  )
}

const CardMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: goldenrod;

`
const CardTop = styled.div`

    /* uizard import */
    color: #191b1c;
    font-size: 48px;
    font-family: "Roboto Mono";
    font-weight: 600;
    line-height: 54px;
`
const CardBottom = styled.div`
    /* uizard import */
    color: #393939;
    font-size: 20px;
    font-family: "Roboto Mono";
    font-weight: 300;
    line-height: 24px;
`

export default StatCard