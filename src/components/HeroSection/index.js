import React, { useState, useEffect, useRef } from "react";
import { SliderData, SlidesArray } from "../data/SliderData";
import {
  HeroContainer,
  HeroWrapper,
  SliderWrapper,
  SlideWrapper,
  Slide,
  ArrowsWrapper,
  ArrowLeft,
  ArrowRight,
  Dot,
  Dotdiv,
} from "./HeroSection";

const HeroSection = ({ slides, slideArray }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const dotsSelecter = (dotNumber) => {
    setCurrent(dotNumber);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <HeroContainer>
      <HeroWrapper>
        <SliderWrapper>
          <SlideWrapper>
            {current === 0 ? (
              <Slide currentImg={false} src={slideArray[length - 1]} />
            ) : (
              <Slide currentImg={false} src={slideArray[current - 1]} />
            )}
          </SlideWrapper>
          {SliderData.map((slide, index) => {
            return (
              <SlideWrapper
                key={index}
                currentImg={index === current ? true : false}
              >
                {index === current && (
                  <Slide currentImg={true} src={slide.img} alt={slide.alt} />
                )}
              </SlideWrapper>
            );
          })}
          <SlideWrapper>
            {current === length - 1 ? (
              <Slide currentImg={false} src={slideArray[0]} />
            ) : (
              <Slide currentImg={false} src={slideArray[current + 1]} />
            )}
          </SlideWrapper>
        </SliderWrapper>
        <ArrowsWrapper>
          <ArrowLeft onClick={prevSlide} />
          <Dotdiv>
            <Dot
              onClick={() => dotsSelecter(0)}
              currentImg={0 === current ? true : false}
            />
            <Dot
              onClick={() => dotsSelecter(1)}
              currentImg={1 === current ? true : false}
            />
            <Dot
              onClick={() => dotsSelecter(2)}
              currentImg={2 === current ? true : false}
            />
            <Dot
              onClick={() => dotsSelecter(3)}
              currentImg={3 === current ? true : false}
            />
          </Dotdiv>

          <ArrowRight onClick={nextSlide} />
        </ArrowsWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
