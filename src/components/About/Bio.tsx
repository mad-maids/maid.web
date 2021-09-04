import styled from "@emotion/styled";
import Image from "next/image";
import { FunctionComponent } from "react";

import { media } from "../../styles/styles-utils";

const Bio: FunctionComponent = () => {
  const image = "/assets/misc/bio-edit.jpg";
  return (
    <About>
      <BioContainer>
        <BioImage>
          <Image src={image} unsized />
        </BioImage>
        <BioCopy>
          <SubTitle>
            <h2>About Me</h2>
          </SubTitle>
          <Copy>
            <p>
              I’m a young graphic designer currently based in Wilmington NC. I’m
              currently working on a contract basis with a creative/design
              agency, but open to freelance.
            </p>
            <br />
            <p>
              The focus right now for me is to build upon my skillset with
              design and frontend development at the for front.
            </p>
          </Copy>
        </BioCopy>
      </BioContainer>
    </About>
  );
};

export default Bio;

const About = styled.div`
  padding: 100px 10%;
`;
const BioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;
  ${media.desktop`grid-template-columns: none;grid-template-rows: repeat(2, auto);`}
`;
const BioImage = styled.div`
  grid-column: span 6;
  margin-right: 20%;
  img {
    width: 100%;
  }
  ${media.desktop`margin-right: 0;`}
`;
const BioCopy = styled.div`
  grid-column: span 6;
  display: flex;
  padding-top: 200px;
  ${media.bigDesktop`padding-top: 80px;`}
`;
const SubTitle = styled.div`
  h2 {
    font-size: 24px;
    text-transform: uppercase;
    ${media.tablet`font-size: 18px;`}
  }
  margin-right: 100px;
  ${media.thone`margin-right: 35px;`}
`;
const Copy = styled.div`
  max-width: 290px;
  ${media.thone`max-width: 220px;`}
`;
