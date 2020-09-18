import styled from 'styled-components';

export const InfoSec = styled.div`
color : #000;
padding : 25px 0;
background: ${({colorBg }) => (colorBg ? '#EAF6F9' : '#000')}
`

export const InfoRow = styled.div`
  display:flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')
  };
  /* border: 1px solid red;  */
  /* Hapus */
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 70%;
  flex-basis: 50%;
  flex: 1;

  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-basis: 100%;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 650px;
  /* border: 1px solid red; */
  padding-top: 0;
  padding: 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`


export const Paging = styled.div`
  display: flex;
  margin-bottom: 2rem;
  color: ${(defaultPage) => (defaultPage ? "#000" : "#EAF6F9")};
  font-size: 14px;
  line-height: 16px;
`

export const Heading = styled.h1`
  font-size: 64px;
  line-height: 50px;
  margin-bottom: 26px;
  color: ${(blackText) => ( blackText ? "#000" : "#EAF6F9")};

  @media screen and (max-width: 768px) {
    font-size : 50px;
  }
`

export const Description = styled.p`
  max-width: 650px;
  margin-bottom:26px;
  font-size: 25px;
  line-height: 34px;
  color: #000;
  /* background-color: red; */
`

/* export const NavLinks = styled(Link)`
  text-decoration: none;
` */

/* export const NavLinks = styled(Link) `
  text-decoration: none
` */


export const ImgWrapper = styled.div`
  max-width: 450px;
  display: flex;
  justify-content: ${( start) => ( start ? 'flex-start' : 'flex-end') };
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  max-height: 550px;
  max-width: 100%;
`