import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AdventageSection = styled.div`
  padding: 100px 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFF;
`;

export const AdventageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AdventageHeading = styled.h1`
  color: #000;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const AdventageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const AdventageCard = styled(Link)`
  background: #FFF;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 250px;
  height: 400px;
  text-decoration: none;
  border-radius: 4px;
  border : 1px solid #E0E0E0;
  &:nth-child(2) {
    margin: 20px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const AdventageCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const AdventageCardIcon = styled.div`
  margin: 24px 0;
  color: #FC8047;
`;

export const AdventageCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  color: #000;
`;


export const AdventageCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`;

export const AdventageCardFeature = styled.li`
  margin-bottom: 10px;
  display: flex;
  text-align: center;
  color: #000;
`;
