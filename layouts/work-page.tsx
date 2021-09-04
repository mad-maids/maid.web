import styled from "@emotion/styled";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

import WorkIntro from "../src/components/Work/Intro";
import SEO from "../src/components/SEO";
import Footer from "../src/components/Footer";
import Back from "../src/components/Back";

interface Props {
  frontMatter: any;
}

const WorkTemplate: FunctionComponent<Props> = ({ children, frontMatter }) => {
  const { image, desc, date, role, categories, title } = frontMatter;
  return (
    <motion.div exit={{ opacity: 0 }}>
      <SEO title={title} description={desc} />
      <WorkIntro
        image={image}
        title={title}
        desc={desc}
        date={format(parseISO(date), "MMMM dd, yyyy")}
        role={role}
        categories={categories}
      />
      <WorkContentStyles>{children}</WorkContentStyles>
      <Back label="Back To Works" />
      <Footer />
    </motion.div>
  );
};

export default WorkTemplate;

const WorkContentStyles = styled.div`
  max-width: 1600px;
  padding: 0 10%;
  margin: 0 auto;
  padding-top: 120px;
  h3 {
    @media screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
`;
