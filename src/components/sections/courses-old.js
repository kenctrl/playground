// // import React, { useState, useEffect } from 'react';
// // import { CSSTransition, TransitionGroup } from 'react-transition-group';
// // import styled from 'styled-components';
// // import { navDelay, loaderDelay } from '@utils';
// // import { usePrefersReducedMotion } from '@hooks';

// // const StyledHeroSection = styled.section`
// //   ${({ theme }) => theme.mixins.flexCenter};
// //   flex-direction: column;
// //   align-items: flex-start;
// //   min-height: 100vh;
// //   height: 100vh;
// //   padding: 0;

// //   @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
// //     height: auto;
// //     padding-top: var(--nav-height);
// //   }

// //   h1 {
// //     margin: 0 0 30px 4px;
// //     color: var(--green);
// //     font-family: var(--font-mono);
// //     font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
// //     font-weight: 400;

// //     @media (max-width: 480px) {
// //       margin: 0 0 20px 2px;
// //     }
// //   }

// //   h3 {
// //     margin-top: 5px;
// //     color: var(--slate);
// //     line-height: 0.9;
// //   }

// //   p {
// //     margin: 20px 0 0;
// //     max-width: 540px;
// //   }

// //   .email-link {
// //     ${({ theme }) => theme.mixins.bigButton};
// //     margin-top: 50px;
// //   }
// // `;

// // const Courses = () => {
// //   const [isMounted, setIsMounted] = useState(false);
// //   const prefersReducedMotion = usePrefersReducedMotion();

// //   useEffect(() => {
// //     if (prefersReducedMotion) {
// //       return;
// //     }

// //     const timeout = setTimeout(() => setIsMounted(true), navDelay);
// //     return () => clearTimeout(timeout);
// //   }, []);

// //   const one = <h1>Hi, my name is</h1>;
// //   const two = <h2 className="big-heading">Kenneth Choi.</h2>;
// //   // const three = <h3 className="big-heading"></h3>;
// //   const four = (
// //     <>
// //       <p>
// //         I'm a third-year student at MIT studying Computer Science and Engineering. I'm interested in
// //         full-stack web development, machine learning, and data privacy. In my free time, I enjoy
// //         cooking, vibing to music, and playing platformer games.
// //       </p>
// //     </>
// //   );

// //   const items = [one, two, four];

// //   return (
// //     <StyledHeroSection>
// //       {prefersReducedMotion ? (
// //         <>
// //           {items.map((item, i) => (
// //             <div key={i}>{item}</div>
// //           ))}
// //         </>
// //       ) : (
// //         <TransitionGroup component={null}>
// //           {isMounted &&
// //             items.map((item, i) => (
// //               <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
// //                 <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
// //               </CSSTransition>
// //             ))}
// //         </TransitionGroup>
// //       )}
// //     </StyledHeroSection>
// //   );
// // };

// // export default Courses;

// import { useState, useEffect, useRef, useMemo } from "react";

// import classNames from "classnames";

// import ReactFlow, {
//   Background,
//   MiniMap,
//   Controls,
//   ReactFlowProvider,
//   BackgroundVariant,
// } from "react-flow-renderer";

// import Tippy from "@tippyjs/react";
// // eslint-disable-next-line import/no-extraneous-dependencies
// import "tippy.js/dist/tippy.css";

// import triangleIcon from "@icons/triangle.svg";
// import tableIcon from "@icons/table.svg";

// import "./App.scss";

// import usePrefersReducedMotion from "./usePrefersReducedMotion";
// import useDialogStatus from "./useDialogStatus";

// import FlowInternalLifter from "./components/flow/FlowInternalLifter";

// import { default as CourseNodeComponent } from "./components/flow/CourseNode";
// import OrNode from "./components/flow/OrNode";
// import AndNode from "./components/flow/AndNode";
// import ContextMenu from "./components/ContextMenu";
// import CustomEdge from "./components/flow/CustomEdge";

// import TableDialog from "./components/dialogs/TableDialog";
// import EditDataDialog from "./components/dialogs/EditDataDialog";

// import {
//   isCourseNode,
//   removeElements,
//   ZERO_POSITION,
//   newConditionalNode,
//   edgeArrowId,
//   newNodeData,
//   sortElementsByDepth,
//   newElemIndexes,
//   setNodeStatus,
//   updateNodeStatus,
//   updateAllNodes,
//   newPosition,
//   resetElementStates,
//   autoconnect,
// } from "./utils";

// const MAX_UNDO_NUM = 20;

// export default function Courses({ initialElements }) {
//   const [minimapPinned, setMinimapPinned] = useState(true);
//   const [tableDlgCls, openTableDlg, closeTableDlg] = useDialogStatus();
//   const [editDlgCls, openEditDlg, closeEditDlg] = useDialogStatus();

//   const flowInstance = useRef();
//   const updateNodePos = useRef(() => {});
//   const selectedElements = useRef([]);
//   const setSelectedElements = useRef(() => {});
//   const resetSelectedElements = useRef(() => {});
//   const unsetNodesSelection = useRef(() => {});

//   const [elements, setElements] = useState(initialElements);
//   const nodeData = useRef(newNodeData(initialElements));
//   const elemIndexes = useRef(newElemIndexes(initialElements));
//   const undoStack = useRef([]);
//   const redoStack = useRef([]);
//   const dragStartState = useRef([]);
//   // Because drag start is triggered on mousedown even if no movement
//   // occurs, the flow state at drag start should only be added to undo
//   // history on drag end

//   const [contextActive, setContextActive] = useState(false);
//   const contextData = useRef<ContextTarget>({
//     target: [],
//     targetType: "pane",
//     targetStatus: "",
//   });
//   const [mouseXY, setMouseXY] = useState<XYPosition>(ZERO_POSITION);

//   const editTargetData = useRef<CourseData>({
//     id: "",
//     name: "",
//     credits: "",
//     description: "",
//     prerequisite: "",
//     offered: "",
//   });

//   const prefersReducedMotion = usePrefersReducedMotion();

//   function onLoad(reactFlowInstance) {
//     reactFlowInstance.fitView();
//     flowInstance.current = reactFlowInstance;
//   }

//   function recalculatedElements(newElements) {
//     nodeData.current = newNodeData(newElements);
//     let recalculatedElems = sortElementsByDepth(newElements, nodeData.current);
//     elemIndexes.current = newElemIndexes(recalculatedElems);
//     recalculatedElems = updateAllNodes(
//       recalculatedElems,
//       nodeData.current,
//       elemIndexes.current,
//     );
//     return resetElementStates(recalculatedElems);
//   }

//   function recordFlowState(elems = null) {
//     const flowElems = elems ?? flowInstance.current?.toObject().elements;
//     if (undoStack.current.length === MAX_UNDO_NUM) {
//       undoStack.current.shift();
//     }
//     undoStack.current.push(resetElementStates(flowElems));
//     redoStack.current = [];
//   }

//   const dialogOpen = useMemo(
//     () => [editDlgCls].some(cls => !cls.includes("--display-none")),
//     [editDlgCls],
//   );

//   useEffect(() => {
//     function undoListener(event) {
//       if (event.ctrlKey && event.key === "z" && !dialogOpen) {
//         if (undoStack.current.length) {
//           unsetNodesSelection.current();
//           redoStack.current.push(
//             resetElementStates(
//               flowInstance.current?.toObject().elements,
//             ),
//           );
//           const pastElements = undoStack.current.pop();
//           for (const elem of pastElements) {
//             if (nodeData.current.has(elem.id)) {
//               updateNodePos.current({
//                 id: elem.id,
//                 pos: (elem).position,
//               });
//             }
//           }
//           nodeData.current = newNodeData(pastElements);
//           elemIndexes.current = newElemIndexes(pastElements);
//           setElements(pastElements);
//         }
//       }
//     }
//     function redoListener(event) {
//       if (event.ctrlKey && event.key === "y" && !dialogOpen) {
//         if (redoStack.current.length) {
//           unsetNodesSelection.current();
//           undoStack.current.push(
//             resetElementStates(
//               flowInstance.current?.toObject().elements,
//             ),
//           );
//           const futureElements = redoStack.current.pop();
//           for (const elem of futureElements) {
//             if (nodeData.current.has(elem.id)) {
//               updateNodePos.current({
//                 id: elem.id,
//                 pos: (elem).position,
//               });
//             }
//           }
//           nodeData.current = newNodeData(futureElements);
//           elemIndexes.current = newElemIndexes(futureElements);
//           setElements(futureElements);
//         }
//       }
//     }
//     document.addEventListener("keydown", undoListener);
//     document.addEventListener("keydown", redoListener);
//     return () => {
//       document.removeEventListener("keydown", undoListener);
//       document.removeEventListener("keydown", redoListener);
//     };
//   }, [dialogOpen]);

//   function saveCourseData(originalId, newData) {
//     recordFlowState();
//     const newElements = elements.slice();
//     const i = elemIndexes.current.get(originalId);
//     newElements[i] = {
//       ...newElements[i],
//       id: newData.id,
//       data: { ...newElements[i].data, ...newData },
//     };
//     if (originalId !== newData.id) {
//       for (const iNode of nodeData.current.get(originalId).incomingNodes) {
//         const oldEdgeId = edgeArrowId(iNode, originalId);
//         const j = elemIndexes.current.get(oldEdgeId);
//         newElements[j] = {
//           ...newElements[j],
//           id: edgeArrowId(iNode, newData.id),
//           target: newData.id,
//         };
//       }
//       for (const oNode of nodeData.current.get(originalId).outgoingNodes) {
//         const oldEdgeId = edgeArrowId(originalId, oNode);
//         const j = elemIndexes.current.get(oldEdgeId);
//         newElements[j] = {
//           ...newElements[j],
//           id: edgeArrowId(newData.id, oNode),
//           source: newData.id,
//         };
//       }
//     }

//     setElements(recalculatedElements(newElements));
//   }

//   /* ELEMENT */
//   // Single change can only propagate 2 layers deep
//   function onElementClick(event, eventTarget) {
//     // NOTE: eventTarget isn't the actual element so can't use id equality
//     if (event.altKey && isCourseNode(eventTarget)) {
//       resetSelectedElements.current();
//       const nodeId = eventTarget.id;
//       const newElements = elements.slice();
//       let newStatus;
//       const targetElement = elements[elemIndexes.current.get(nodeId)];
//       switch (targetElement.data.nodeStatus) {
//         case "ready":
//           newStatus = "enrolled";
//           break;
//         case "enrolled":
//           newStatus = "completed";
//           break;
//         default:
//           return;
//       }
//       recordFlowState();
//       setNodeStatus(
//         nodeId,
//         newStatus,
//         newElements,
//         nodeData.current,
//         elemIndexes.current,
//       );

//       const firstDiff = nodeData.current.get(nodeId).outgoingNodes;
//       for (const id of firstDiff) {
//         updateNodeStatus(
//           id,
//           newElements,
//           nodeData.current,
//           elemIndexes.current,
//         );
//       }
//       const secondDiff = new Set(
//         firstDiff.flatMap(id => nodeData.current.get(id).outgoingNodes),
//       );
//       for (const id of secondDiff.values()) {
//         updateNodeStatus(
//           id,
//           newElements,
//           nodeData.current,
//           elemIndexes.current,
//         );
//       }

//       setElements(newElements);
//     }
//   }

//   function onElementsRemove(targetElems) {
//     recordFlowState();
//     setElements(
//       recalculatedElements(removeElements(targetElems, elements)),
//     );
//   }

//   /* NODE */
//   function onNodeDragStart(_event, _node) {
//     dragStartState.current = flowInstance.current?.toObject()
//       .elements;
//     setContextActive(false);
//   }

//   function onNodeDragStop(_event, _node) {
//     recordFlowState(dragStartState.current);
//   }

//   function applyHoverEffectBackward(
//     nodeId,
//     newElements,
//   ) {
//     for (const id of nodeData.current.get(nodeId).incomingEdges) {
//       const i = elemIndexes.current.get(id);
//       newElements[i] = {
//         ...newElements[i],
//         animated: !prefersReducedMotion,
//       };
//     }

//     for (const id of nodeData.current.get(nodeId).incomingNodes) {
//       const i = elemIndexes.current.get(id);
//       newElements[i] = {
//         ...newElements[i],
//         data: { ...newElements[i].data, nodeConnected: true },
//       };

//       if (["or", "and"].includes(newElements[i].type)) {
//         applyHoverEffectBackward(id, newElements);
//       }
//     }
//   }

//   function applyHoverEffectForward(
//     nodeId,
//     newElements,
//   ) {
//     for (const id of nodeData.current.get(nodeId).outgoingEdges) {
//       const i = elemIndexes.current.get(id);
//       newElements[i] = {
//         ...newElements[i],
//         animated: !prefersReducedMotion,
//       };
//     }

//     for (const id of nodeData.current.get(nodeId).outgoingNodes) {
//       const i = elemIndexes.current.get(id);
//       newElements[i] = {
//         ...newElements[i],
//         data: { ...newElements[i].data, nodeConnected: true },
//       };

//       if (["or", "and"].includes(newElements[i].type)) {
//         applyHoverEffectForward(id, newElements);
//       }
//     }
//   }

//   function onNodeMouseEnter(_event, targetNode) {
//     const nodeId = targetNode.id;
//     const newElements = elements.slice();

//     applyHoverEffectBackward(nodeId, newElements);
//     applyHoverEffectForward(nodeId, newElements);

//     setElements(newElements);
//   }

//   function onNodeMouseLeave(_event, _targetNode) {
//     const newElements = elements.slice();

//     const numNodes = nodeData.current.size;
//     const numElems = newElements.length;
//     for (let i = 0; i < numNodes; i++) {
//       newElements[i] = {
//         ...newElements[i],
//         data: { ...newElements[i].data, nodeConnected: false },
//       };
//     }
//     for (let i = numNodes; i < numElems; i++) {
//       newElements[i] = { ...newElements[i], animated: false };
//     }

//     setElements(newElements);
//     // Can't target specific elements because of how slow this operation is
//     // Using an old for loop for speed over Array.map()
//   }

//   function onNodeContextMenu(event, node) {
//     event.preventDefault();
//     unsetNodesSelection.current();
//     const selectedIds = selectedElements.current
//       ? selectedElements.current.map(elem => elem.id)
//       : [];
//     if (selectedIds.includes(node.id)) {
//       if (selectedIds.length === 1) {
//         // Only one node selected
//         contextData.current = {
//           target: [node.id],
//           targetType: node.type === "course" ? "coursenode" : "conditionalnode",
//           targetStatus: node.data.nodeStatus,
//         };
//       } else if (!selectedIds.some(elemId => elemId.includes("->"))) {
//         // Multiple nodes selected
//         const courseNodeSelected = selectedIds.some(
//           nodeId =>
//             (elements[elemIndexes.current.get(nodeId)]).type ===
//             "course",
//         );
//         contextData.current = {
//           target: selectedIds,
//           targetType: courseNodeSelected
//             ? "coursemultiselect"
//             : "conditionalmultiselect",
//           targetStatus: "",
//         };
//       } else {
//         // Mixed selection, includes edges
//         contextData.current = {
//           target: selectedIds,
//           targetType: "mixedmultiselect",
//           targetStatus: "",
//         };
//       }
//     } else {
//       setSelectedElements.current([node]);
//       contextData.current = {
//         target: [node.id],
//         targetType: node.type === "course" ? "coursenode" : "conditionalnode",
//         targetStatus: node.data.nodeStatus,
//       };
//     }
//     setMouseXY(newPosition(event.clientX, event.clientY));
//     setContextActive(true);
//   }

//   /* EDGE */
//   // function onConnect(connection: FlowEdge | Connection): void {
//   //   const source = connection.source as NodeId;
//   //   const target = connection.target as NodeId;
//   //   const newEdgeId = edgeArrowId(source, target);
//   //   const reverseEdgeId = edgeArrowId(target, source);
//   //   // Creating a cycle causes infinite recursion in depth calculation
//   //   if (
//   //     !elemIndexes.current.has(newEdgeId) &&
//   //     !elemIndexes.current.has(reverseEdgeId)
//   //   ) {
//   //     recordFlowState();
//   //     const newElements = resetElementStates(elements);
//   //     // Need to "unhover" to return to base state
//   //     const sourceNode = elements[elemIndexes.current.get(source)] as Node;
//   //     newElements.push({
//   //       id: newEdgeId,
//   //       type: "custom",
//   //       source,
//   //       target,
//   //       className: sourceNode.data.nodeStatus,
//   //       data: { concurrent: false },
//   //     });
//   //     setElements(recalculatedElements(newElements));
//   //   }
//   // }

//   // { nodeId, handleId, handleType }: OnConnectStartParams
//   // function onConnectStart(
//   //   _event: MouseEvent,
//   //   _params: OnConnectStartParams,
//   // ): void {
//   //   setContextActive(false);
//   // }

//   function onEdgeUpdate(oldEdge, newConnection) {
//     const newSource = newConnection.source;
//     const newTarget = newConnection.target;
//     const newEdgeId = edgeArrowId(newSource, newTarget);
//     const reverseEdgeId = edgeArrowId(newTarget, newSource);
//     if (
//       !elemIndexes.current.has(newEdgeId) &&
//       !elemIndexes.current.has(reverseEdgeId)
//     ) {
//       recordFlowState();
//       setElements(prevElems => {
//         const newElements = prevElems.slice();
//         const sourceNode = prevElems[
//           elemIndexes.current.get(newSource)
//         ];
//         newElements[elemIndexes.current.get(oldEdge.id)] = {
//           ...oldEdge, // Keep CC status
//           id: newEdgeId,
//           source: newConnection.source,
//           target: newConnection.target,
//           className: sourceNode.data.nodeStatus,
//         };
//         return recalculatedElements(newElements);
//       });
//       // Need to use functional update here for some reason
//     }
//   }

//   function onEdgeContextMenu(event, edge) {
//     event.preventDefault();
//     unsetNodesSelection.current();
//     // selectedElements null if nothing selected, not empty array
//     const selectedIds = selectedElements.current
//       ? selectedElements.current.map(elem => elem.id)
//       : [];
//     const targetStatus = (elements[elemIndexes.current.get(edge.id)])
//       .data.concurrent
//       ? "concurrent"
//       : "";
//     if (selectedIds.includes(edge.id)) {
//       if (selectedIds.length === 1) {
//         contextData.current = {
//           target: [edge.id],
//           targetType: "edge",
//           targetStatus,
//         };
//       } else {
//         contextData.current = {
//           target: selectedIds,
//           targetType: "mixedmultiselect",
//           targetStatus: "",
//         };
//       }
//     } else {
//       setSelectedElements.current([edge]);
//       contextData.current = {
//         target: [edge.id],
//         targetType: "edge",
//         targetStatus,
//       };
//     }
//     setMouseXY(newPosition(event.clientX, event.clientY));
//     setContextActive(true);
//   }

//   /* MOVE */
//   function onMoveStart(_flowTransform) {
//     setContextActive(false);
//   }

//   /* SELECTION */
//   function onSelectionDragStart(_event, _nodes) {
//     dragStartState.current = flowInstance.current?.toObject()
//       .elements;
//   }

//   function onSelectionDragStop(_event, _nodes) {
//     recordFlowState(dragStartState.current);
//   }

//   function onSelectionContextMenu(event, nodes) {
//     event.preventDefault();
//     const courseNodeSelected = nodes.some(
//       node =>
//         (elements[elemIndexes.current.get(node.id)]).type === "course",
//     );
//     contextData.current = {
//       target: nodes.map(n => n.id),
//       targetType: courseNodeSelected
//         ? "courseselection"
//         : "conditionalselection",
//       targetStatus: "",
//     };
//     setMouseXY(newPosition(event.clientX, event.clientY));
//     setContextActive(true);
//   }

//   /* PANE */
//   // function onPaneClick(_event) {
//   //   setContextActive(false);
//   // }

//   function onPaneContextMenu(event) {
//     event.preventDefault();
//     resetSelectedElements.current();
//     unsetNodesSelection.current();
//     contextData.current = {
//       target: [],
//       targetType: "pane",
//       targetStatus: "",
//     };
//     setMouseXY(newPosition(event.clientX, event.clientY));
//     setContextActive(true);
//   }

//   return (
//     // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
//     <div
//       className="App"
//       onClick={() => setContextActive(false)}
//       onWheel={() => setContextActive(false)}
//     >
//       {/* <Header version={CURRENT_VERSION}>
//         <HeaderButton
//           label="New flow"
//           description="Start a new flow"
//           onClick={openNewFlowDlg}
//         />
//         <HeaderButton
//           label="Open"
//           description="Open an existing flow"
//           onClick={openOpenFileDlg}
//         />
//         <HeaderButton
//           label="Save"
//           description="Save current flow to file"
//           onClick={saveFlow}
//         />
//         <HeaderButton
//           label="Add courses"
//           description="Add courses to current flow"
//           onClick={openAddCourseDlg}
//         />
//         <HeaderButton
//           label="Reflow"
//           description="Generate a new layout"
//           onClick={reflowElements}
//         />
//         <HeaderButton
//           label="About"
//           description="About Prereq Flow"
//           onClick={openAboutDlg}
//         />
//       </Header> */}

//       <Tippy
//         content={minimapPinned ? "Hide minimap" : "Show minimap"}
//         trigger="mouseenter"
//         hideOnClick={false}
//         placement="right"
//         duration={prefersReducedMotion ? 0 : 100}
//       >
//         <button
//           className={classNames("react-flow__minimap-pin-button", {
//             "react-flow__minimap-pin-button--pinned": minimapPinned,
//           })}
//           type="button"
//           onClick={() => setMinimapPinned(!minimapPinned)}
//         >
//           <img src={triangleIcon} alt="Show/hide minimap" />
//         </button>
//       </Tippy>

//       <button
//         type="button"
//         className="TableDialog__open-btn"
//         onClick={openTableDlg}
//       >
//         <img src={tableIcon} alt="Open table dialog" />
//       </button>

//       <ReactFlowProvider>
//         <FlowInternalLifter
//           updateNodePos={updateNodePos}
//           selectedElements={selectedElements}
//           setSelectedElements={setSelectedElements}
//           resetSelectedElements={resetSelectedElements}
//           unsetNodesSelection={unsetNodesSelection}
//         />
//         <ReactFlow
//           // Flow View
//           minZoom={0.2}
//           // Instance
//           onLoad={onLoad}
//           // Basic Props
//           elements={elements}
//           nodeTypes={{
//             course: CourseNodeComponent,
//             or: OrNode,
//             and: AndNode,
//           }}
//           edgeTypes={{ custom: CustomEdge }}
//           // Event Handlers
//           // --- Element ---
//           onElementClick={onElementClick}
//           onElementsRemove={onElementsRemove}
//           // --- Node ---
//           onNodeDragStart={onNodeDragStart}
//           onNodeDragStop={onNodeDragStop}
//           onNodeMouseEnter={onNodeMouseEnter}
//           onNodeMouseLeave={onNodeMouseLeave}
//           onNodeContextMenu={onNodeContextMenu}
//           // --- Edge ---
//           // onConnect={onConnect}
//           // onConnectStart={onConnectStart}
//           onEdgeUpdate={onEdgeUpdate}
//           onEdgeContextMenu={onEdgeContextMenu}
//           // --- Move ---
//           onMoveStart={onMoveStart}
//           // --- Selection ---
//           onSelectionDragStart={onSelectionDragStart}
//           onSelectionDragStop={onSelectionDragStop}
//           onSelectionContextMenu={onSelectionContextMenu}
//           // --- Pane ---
//           // onPaneClick={onPaneClick}
//           onPaneContextMenu={onPaneContextMenu}
//           // Interaction
//           selectNodesOnDrag={false}
//           zoomOnDoubleClick={false}
//           // Keys
//           deleteKeyCode="Delete"
//           multiSelectionKeyCode="Control"
//         >
//           <Background variant={BackgroundVariant.Lines} gap={32} size={1} />
//           <MiniMap
//             className={classNames({
//               "react-flow__minimap--pinned": minimapPinned,
//             })}
//             nodeColor={node => {
//               switch (node.data.nodeStatus) {
//                 case "completed":
//                   return "#000000";
//                 case "enrolled":
//                   return "#9400d3";
//                 case "ready":
//                   return "#32cd32";
//                 case "under-one-away":
//                   return "#daa520";
//                 case "one-away":
//                   return "#ff8c00";
//                 case "over-one-away":
//                   return "#ff0000";
//                 default:
//                   return "#808080";
//               }
//             }}
//             nodeBorderRadius={2}
//           />
//           <Controls showInteractive={false} />
//         </ReactFlow>
//         <ContextMenu
//           elements={elements}
//           nodeData={nodeData.current}
//           elemIndexes={elemIndexes.current}
//           active={contextActive}
//           data={contextData.current}
//           xy={mouseXY}
//           setSelectionStatuses={(
//             nodeIds,
//             newStatus,
//           ) => {
//             resetSelectedElements.current();
//             recordFlowState();

//             const newElements = elements.slice();
//             for (const id of nodeIds) {
//               const node = elements[elemIndexes.current.get(id)];
//               if (node.type === "course") {
//                 setNodeStatus(
//                   id,
//                   newStatus,
//                   newElements,
//                   nodeData.current,
//                   elemIndexes.current,
//                 );
//               }
//             }

//             setElements(
//               updateAllNodes(
//                 newElements,
//                 nodeData.current,
//                 elemIndexes.current,
//               ),
//             );
//           }}
//           toggleEdgeConcurrency={(edgeId) => {
//             resetSelectedElements.current();
//             recordFlowState();

//             const newElements = elements.slice();
//             const i = elemIndexes.current.get(edgeId);
//             const targetEdge = newElements[i];

//             newElements[i] = {
//               ...targetEdge,
//               data: { concurrent: !targetEdge.data.concurrent },
//             };

//             setElements(
//               updateAllNodes(
//                 newElements,
//                 nodeData.current,
//                 elemIndexes.current,
//               ),
//             );
//           }}
//           editCourseData={(courseId) => {
//             const targetNode = elements[
//               elemIndexes.current.get(courseId)
//             ];
//             editTargetData.current = { ...targetNode.data };
//             openEditDlg();
//           }}
//           deleteElems={(elemIds) => {
//             resetSelectedElements.current();
//             onElementsRemove(
//               elemIds.map(id => elements[elemIndexes.current.get(id)]),
//             );
//           }}
//           connect={(
//             targetId,
//             to = { prereq: true, postreq: true },
//           ) => {
//             resetSelectedElements.current();
//             recordFlowState();

//             const newElements = autoconnect(
//               elements[elemIndexes.current.get(targetId)],
//               elements.slice(),
//               nodeData.current.size,
//               elemIndexes.current,
//               to,
//             );
//             setElements(recalculatedElements(newElements));
//           }}
//           disconnect={(
//             targetIds,
//             from = { prereq: true, postreq: true },
//           ) => {
//             resetSelectedElements.current();
//             recordFlowState();

//             const connectedEdges = new Set();
//             for (const id of targetIds) {
//               if (from.prereq) {
//                 for (const edge of nodeData.current.get(id).incomingEdges) {
//                   connectedEdges.add(edge);
//                 }
//               }
//               if (from.postreq) {
//                 for (const edge of nodeData.current.get(id).outgoingEdges) {
//                   connectedEdges.add(edge);
//                 }
//               }
//             }

//             setElements(
//               recalculatedElements(
//                 elements.filter(elem => !connectedEdges.has(elem.id)),
//               ),
//             );
//           }}
//           newConditionalNode={(
//             type,
//             xy,
//           ) => {
//             resetSelectedElements.current();
//             recordFlowState();

//             const newNode = newConditionalNode(
//               type,
//               flowInstance.current?.project(xy),
//             );

//             setElements(recalculatedElements(elements.concat([newNode])));
//           }}
//           rerouteSingle={(targetId) => {
//             resetSelectedElements.current();
//             recordFlowState();

//             let newElements = elements.slice();

//             const targetNode = newElements[elemIndexes.current.get(targetId)];
//             const targetData = nodeData.current.get(targetId);

//             for (const iNode of targetData.incomingNodes) {
//               for (const oNode of targetData.outgoingNodes) {
//                 const oldEdgeId = edgeArrowId(iNode, targetId);
//                 const newEdgeId = edgeArrowId(iNode, oNode);
//                 if (!elemIndexes.current.has(newEdgeId)) {
//                   newElements.push({
//                     ...newElements[elemIndexes.current.get(oldEdgeId)],
//                     id: newEdgeId,
//                     source: iNode,
//                     target: oNode,
//                   });
//                 }
//               }
//             }
//             newElements = removeElements([targetNode], newElements);
//             setElements(recalculatedElements(newElements));
//           }}
//           reroutePointless={() => {
//             resetSelectedElements.current();
//             recordFlowState();

//             let newElements = elements.slice();
//             let tempNodeData = newNodeData(elements);
//             let tempIndexes = newElemIndexes(elements);
//             const numNodes = tempNodeData.size;
//             for (let i = 0; i < numNodes; i++) {
//               const elem = elements[i];
//               if (
//                 elem.type === "or" &&
//                 tempNodeData.get(elem.id).incomingNodes.length <= 1
//               ) {
//                 const incoming = tempNodeData.get(elem.id).incomingNodes;
//                 if (incoming.length) {
//                   const [source] = incoming;
//                   const oldEdgeId = edgeArrowId(source, elem.id);
//                   const outgoing = tempNodeData.get(elem.id).outgoingNodes;
//                   for (const target of outgoing) {
//                     const newEdgeId = edgeArrowId(source, target);
//                     if (!tempIndexes.has(newEdgeId)) {
//                       newElements.push({
//                         ...newElements[tempIndexes.get(oldEdgeId)],
//                         id: newEdgeId,
//                         source,
//                         target,
//                       });
//                     }
//                   }
//                 }
//                 newElements = removeElements([elem], newElements);
//                 tempNodeData = newNodeData(newElements);
//                 tempIndexes = newElemIndexes(newElements);
//               }
//             }

//             setElements(recalculatedElements(newElements));
//           }}
//         />
//       </ReactFlowProvider>

//       <aside className="Legend">
//         <div className="completed">Completed</div>
//         <div className="enrolled">Enrolled</div>
//         <div className="ready">Ready</div>
//         <div className="under-one-away">&lt;1&nbsp;away</div>
//         <div className="one-away">1&nbsp;away</div>
//         <div className="over-one-away">&gt;1&nbsp;away</div>
//       </aside>

//       <TableDialog
//         modalCls={tableDlgCls}
//         closeDialog={closeTableDlg}
//         elements={elements}
//         onElementsRemove={onElementsRemove}
//       />
//       <EditDataDialog
//         modalCls={editDlgCls}
//         closeDialog={closeEditDlg}
//         originalData={editTargetData.current}
//         nodeData={nodeData.current}
//         saveCourseData={saveCourseData}
//         resetSelectedElements={resetSelectedElements.current}
//       />
//     </div>
//   );
// }
