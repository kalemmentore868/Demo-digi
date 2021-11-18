import React from "react";
import { AppData } from "../data/AppsData";
import {
  SectionWrapper,
  AppsWrapper,
  AppDiv,
  DigiApp,
  AppName,
  OfferDiv,
  OfferHeading,
  OfferP,
  OffersSection,
  OffersWrapper,
  Button,
  DigiBanner,
  LastBanner,
  LastText,
} from "./DigiAppsSection";
import { OffersData } from "../data/OffersData";

const DigiAppsSection = ({ appData, offersData }) => {
  return (
    <SectionWrapper>
      <AppsWrapper>
        {AppData.map((appData, index) => {
          return (
            <AppDiv key={index}>
              <DigiApp src={appData.appImage} />
              <AppName>{appData.appName}</AppName>
            </AppDiv>
          );
        })}
      </AppsWrapper>

      <OffersSection>
        <OffersWrapper>
          {OffersData.map((offersData, index) => {
            return (
              <OfferDiv key={index} style={offersData.style}>
                <OfferHeading>{offersData.heading}</OfferHeading>
                <OfferP>{offersData.text}</OfferP>
                <Button>{offersData.buttonLabel}</Button>
              </OfferDiv>
            );
          })}
        </OffersWrapper>
        <DigiBanner>
          <Button style={{ alignSelf: "center" }}>Learn More</Button>
        </DigiBanner>
        <LastBanner>
          <LastText>How can we help?</LastText>
          <Button style={{ alignSelf: "center", width: "200px" }}>
            Get Support
          </Button>
        </LastBanner>
      </OffersSection>
    </SectionWrapper>
  );
};

export default DigiAppsSection;
