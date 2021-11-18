import styled from "styled-components";
import Banner from "../../images/digi-banner.png";

export const SectionWrapper = styled.div``;
export const AppsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 90px;

  @media screen and (max-width: 850px) {
    margin: 60px auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3em;
    justify-content: center;
  }
`;
export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  cursor: pointer;
`;
export const DigiApp = styled.img`
  width: calc(16px + 6 * ((400vw - 30px) / 480));
  height: calc(16px + 6 * ((400vw - 30px) / 480));
  border-radius: 15px;
  margin: 0 1.5rem;
  -webkit-box-shadow: 0 2px 5px 2px rgba(128, 128, 128, 0.5);
  -moz-box-shadow: 0 2px 5px 2px rgba(128, 128, 128, 0.5);
  box-shadow: 0 2px 5px 2px rgba(128, 128, 128, 0.5);
  justify-self: center;
  align-self: center;

  @media screen and (max-width: 850px) {
    width: 70px;
    height: 70px;
    margin: 0 1rem;
  }

  @media screen and (max-width: 468px) {
    width: 60px;
    height: 60px;
  }
`;
export const AppName = styled.p`
  margin-top: 15px;
  justify-self: center;
  align-self: center;
  font-size: 18px;
  text-align: center;
  line-height: 27px;
  letter-spacing: 0.36px;
  color: #161f60;
  font-weight: 600;

  @media screen and (max-width: 850px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const OffersSection = styled.div`
  margin-top: 10vh;
  padding: 0 13px;
`;

export const OffersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2em;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const OfferDiv = styled.div`
  background-size: 100vh;
  background-position: right;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: calc(16px + 6 * ((100vw - 50px) / 380));
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    align-content: center;
    height: 70vh;
    padding: 30px 10px;
    background-size: 80vh;
    background-position: right bottom;
  }
`;

export const OfferHeading = styled.h1`
  color: #161f60;
  font-weight: bolder;
  font-size: calc(16px + 6 * ((100vw - 50px) / 380));
  padding-bottom: 2em;

  @media screen and (max-width: 768px) {
    align-self: center;
    padding-bottom: none;
  }
`;
export const OfferP = styled.p`
  color: #161f60;
  font-size: calc(16px + 6 * ((100vw - 50px) / 1580));
  font-weight: 600;
  width: calc(16px + 6 * ((1200vw - 30px) / 380));
  margin-top: -26vh;
  letter-spacing: 1.5px;
  word-spacing: 1px;

  @media screen and (max-width: 768px) {
    justify-self: center;
    margin-top: -50vh;
    width: 100%;
    align-self: center;
    text-align: center;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  height: 40px;
  padding: 0 15px;
  width: 150px;
  font-size: 17px;
  color: #161f60;
  font-weight: 700;
  border: solid 2px transparent;
  max-width: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      76deg,
      #fd3f2a 0,
      #e22d69 25%,
      #cf2094 50%,
      #b30dd4 75%,
      #a101ff 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 100px 1px #fff inset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 135px;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    align-self: center;
  }

  &:hover {
    background-color: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(
        76deg,
        #fd3f2a 0,
        #e22d69 25%,
        #cf2094 50%,
        #b30dd4 75%,
        #a101ff 100%
      );
    color: white;
    background-origin: unset;
    background-clip: unset;
    box-shadow: unset;
    border: unset;
    transition: all 0.2s ease-in-out;
  }
`;

export const DigiBanner = styled.div`
  margin-top: 3vh;
  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 60vh;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding-right: 6vw;
  background-color: rgba(247, 247, 247, 1);

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 40vh;
    background-size: cover;
    background-position: center;
  }
`;

export const LastBanner = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40vh;
  align-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;
export const LastText = styled.h2`
  align-self: center;
  color: #161f60;
  font-size: 62px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 42px;
    margin-bottom: 0.5em;
  }
`;
