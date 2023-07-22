import React, { useState, useEffect, useRef } from 'react';
import { GraphCanvas, useSelection } from 'reagraph';
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
  height: 80vh;
  padding: 0;
  margin: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
`;

const StyledCanvas = styled.div`
  div {
    margin-left: auto;
    margin-right: auto;
    height: 80vh;
    width: 100vh;
    position: relative;

    border-radius: var(--border-radius)
    border-color: var(--lightest-slate);
    border-style: solid;
    border-width: 0.5px;
  }
`;

const createEmptyNode = () => ({ id: '', label: '', name: '', description: '', semester: '' });

const Courses = () => {
  const [popupActive, setPopupActive] = useState(false);
  const [popupNode, setPopupNode] = useState(createEmptyNode());
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [layout] = useState('forceDirected2d');
  // const [layout, setLayout] = useState('treeLr3d');
  // const [cursor, setCursor] = useState('pointer');

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // const recommendedLayout = recommendLayout(courseNodes, courseEdges);

  const graphRef = useRef(null);
  const { selections, actives, onNodeClick, onCanvasClick } = useSelection({
    ref: graphRef,
    nodes: courseNodes,
    edges: courseEdges,
    pathSelectionType: 'all',
  });

  return (
    <StyledHeroSection id="courses">
      <h2 className="numbered-heading">What I’ve Learned</h2>
      <StyledCanvas style={{ cursor: 'pointer' }}>
        {/* <button
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
        </button> */}
        {popupActive ? <Popup node={popupNode} position={position} /> : null}
        <GraphCanvas
          nodes={courseNodes}
          edges={courseEdges}
          theme={courseTheme}
          labelFontUrl="node-fonts/SFMono-Regular.ttf"
          clusterAttribute="category"
          draggable
          layoutType={layout}
          ref={graphRef}
          selections={selections}
          actives={actives}
          onCanvasClick={onCanvasClick}
          onNodeClick={onNodeClick}
          // cameraMode="rotate"
          onNodePointerOver={node => {
            setPopupActive(true);
            setPopupNode(node);
            // setCursor('context-menu');
          }}
          onNodePointerOut={() => {
            setPopupActive(false);
            setPopupNode(createEmptyNode());
            // setCursor('pointer');
          }}
        />
      </StyledCanvas>
    </StyledHeroSection>
  );
};

export default Courses;
