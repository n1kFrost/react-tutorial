import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  border-radius: 30px;
  background-color: rgba(255, 253, 244, 0.96);
  padding: 20px;


  @media (max-width: 992px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 576px ) {
    padding: 10px;
  }
`;