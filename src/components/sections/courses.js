import React from 'react';
import { GraphCanvas } from 'reagraph';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
`;

const StyledCoursesSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
`;

const StyledCanvas = styled.div`
  div {
    margin-left: auto;
    margin-right: auto;
    height: 80vh;
    width: 100vh;
    position: relative;
  }
`;

const Courses = () => {
  const nodes = [
    {
      id: '1',
      label: '1',
    },
    {
      id: '2',
      label: '2',
    },
  ];

  const edges = [
    {
      source: '1',
      target: '2',
      id: '1-2',
      label: '1-2',
    },
    {
      source: '2',
      target: '1',
      id: '2-1',
      label: '2-1',
    },
  ];

  return (
    <StyledHeroSection>
      <StyledCoursesSection>
        <StyledCanvas>
          <GraphCanvas nodes={nodes} edges={edges} />
        </StyledCanvas>
      </StyledCoursesSection>
    </StyledHeroSection>
  );
};

export default Courses;
