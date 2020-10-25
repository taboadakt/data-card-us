import React from "react";
import styled from "styled-components";

export const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  padding: 20px;
`;

export const CardHeaderContainer = styled.div`
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 32px;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: normal;
  font-style: italic;
  margin-bottom: 24px;
`;

export const CardGrayContainer = styled.div`
  background: rgb(242, 245, 248);
  border-radius: 6px;
  padding: 32px;
`;

export const CardBody = styled.p`
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  line-height: 28px;
`;
