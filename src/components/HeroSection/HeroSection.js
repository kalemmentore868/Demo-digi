import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

export const HeroContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const SliderWrapper = styled.div`
  position: relative;
  height: 80%;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
`;

export const SlideWrapper = styled.div`
  align-self: center;
  transform: ${({ currentImg }) => (currentImg ? "scale(1.03)" : "scale(0.7)")};
  transition: all 0.3s ease-in-out;
`;

export const Slide = styled.img`
  width: ${({ currentImg }) => (currentImg ? "900px" : "500px")};
  height: ${({ currentImg }) => (currentImg ? "400px" : "400px")};
  border-radius: 5px;
  cursor: pointer;
  object-fit: fill;
  image-rendering: crisp-edges;
  image-rendering: optimizeQuality;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 400px;
  }
`;

export const ArrowsWrapper = styled.div`
  margin-top: 19px;
  align-self: center;
  font-size: 3.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: calc(16px + 6 * ((2400vw - 50px) / 380));

  @media screen and (max-width: 768px) {
    width: calc(16px + 6 * ((2800vh - 50px) / 380));
  }
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  color: #161f60;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  color: #161f60;
`;

export const Dotdiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Dot = styled(GoPrimitiveDot)`
  align-self: center;
  font-size: ${({ currentImg }) => (currentImg ? "2.3rem" : "1.5rem")};
  height: inherit;
  color: ${({ currentImg }) => (currentImg ? "#161f60" : "gray")};

  &:hover {
    color: #161f60;
  }
  @media screen and (max-width: 768px) {
    padding-left: 8px;
  }
`;
