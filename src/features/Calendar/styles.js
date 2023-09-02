import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

export const DataSession = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const DataSessionElement = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: #4d4117;
  text-align: center;
  color: white;
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const Day = styled.div`
  color: #4d4117;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DayBold = styled.div`
  background-color: #dfbd43;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  color: white;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
`;
