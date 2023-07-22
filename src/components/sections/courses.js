import React, { useState, useEffect } from 'react';
import { GraphCanvas } from 'reagraph';
import styled from 'styled-components';
import Popup from '../popup';
import { courseNodes } from './data/nodes';
import { courseEdges } from './data/edges';
import { courseTheme } from './data/theme';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 30vh;
  height: 50vh;
  padding: 0;
  margin: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
`;

const StyledCanvas = styled.div`
  div {
    border-radius: 50px;
    margin-left: auto;
    margin-right: auto;
    height: 50vh;
    width: 100vh;
    position: relative;
  }
`;

const createEmptyNode = () => ({ id: '', label: '', name: '', description: '', semester: '' });

const Courses = () => {
  const [popupActive, setPopupActive] = useState(false);
  const [popupNode, setPopupNode] = useState(createEmptyNode());
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [layout, setLayout] = useState('forceDirected2d');

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <StyledHeroSection>
      <h2 className="numbered-heading">What I’ve Taken</h2>
      <StyledCanvas>
        <button
          style={{
            position: 'static',
            top: 40,
            right: 15,
            zIndex: 999,
            width: 120,
          }}
          onClick={() =>
            setLayout(layout === 'forceDirected2d' ? 'forceDirected3d' : 'forceDirected2d')
          }>
          Reset Layout
        </button>
        {popupActive ? <Popup node={popupNode} position={position} /> : null}
        <GraphCanvas
          nodes={courseNodes}
          labelFontUrl="https://fonts.googleapis.com/css2?family=Fira+Mono&display=swap"
          edges={courseEdges}
          theme={courseTheme}
          layoutType={layout}
          onNodePointerOver={node => {
            setPopupActive(true);
            setPopupNode(node);
          }}
          onNodePointerOut={() => {
            setPopupActive(false);
            setPopupNode(createEmptyNode());
          }}
        />
      </StyledCanvas>
    </StyledHeroSection>
  );
};

export default Courses;
