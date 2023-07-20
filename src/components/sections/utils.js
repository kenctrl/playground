// import { nanoid } from "nanoid";

// // eslint-disable-next-line import/order
// import { layout } from "./dagre";
// // eslint-disable-next-line import/order
// import Graph from "./graphlib";

// import {
//   isNode as isNodeBase,
//   isEdge as isEdgeBase,
//   removeElements as removeElementsBase,
// } from "react-flow-renderer";

// // Wrapped to narrow type
// export function isNode(elem) {
//   return isNodeBase(elem);
// }
// export function isEdge(elem) {
//   return isEdgeBase(elem);
// }
// export function removeElements(
//   toRemove,
//   toRemoveFrom,
// ) {
//   return removeElementsBase(toRemove, toRemoveFrom);
// }

// export function isCourseNode(elem) {
//   return isNode(elem) && elem.type === "course";
// }

// export function isConditionalNode(elem) {
//   return isNode(elem) && ["or", "and"].includes(elem.type);
// }

// export const ZERO_POSITION = { x: 0, y: 0 };
// export const CRS = String.raw`(?:[A-Z&]+ )+\d{3}`; // COURSE_REGEX_STRING
// export const COURSE_REGEX = new RegExp(CRS, "g"); // AAA 000

// export function courseIdMatch(text) {
//   return text.match(COURSE_REGEX);
// }

// const EITHER_OR_REGEX = new RegExp(
//   `(?:[Ee]ither )?(${CRS})(?:, (${CRS}))*,? or (${CRS})`,
// );
// // "AAA 000 or AAA 111"
// // "AAA 000, AAA 111, or AAA 222"
// // ...etc.

// // Input string assumed to contain 2+ matches
// function eitherOrMatches() {
//   const matches = text.match(EITHER_OR_REGEX);
//   if (matches) {
//     // Repeated groups only return last result
//     // If not all courses captured by either/or regex, it's a false match
//     const courseMatches = courseIdMatch(matches[0]);
//     const allCourseMatches = courseIdMatch(text);
//     if (courseMatches.length === allCourseMatches.length) {
//       return courseMatches;
//     }
//   }
//   return null;
// }

// const CONCURRENT_REGEX =
//   /(?:either of )?which may be taken concurrently(?:\. Instructor|\.?$)/;

// // Cannot be taken for credit
// // Not open for credit
// // may not be taken (for credit)
// function isRestriction(text) {
//   return (
//     /(cannot be taken|not open) for credit/gi.test(text) ||
//     /may not be taken/gi.test(text)
//   );
// }

// export function newCourseNode(courseData) {
//   return {
//     id: courseData.id,
//     type: "course",
//     position: ZERO_POSITION,
//     data: {
//       ...courseData,
//       nodeStatus: "over-one-away",
//       nodeConnected: false,
//     },
//   };
// }

// export function newConditionalNode(
//   type: ConditionalTypes,
//   position = ZERO_POSITION,
// ): ConditionalNode {
//   return {
//     id: `${type.toUpperCase()}-${nanoid()}`,
//     type,
//     position,
//     data: {
//       nodeStatus: "completed",
//       nodeConnected: false,
//     },
//   };
// }

// export function edgeArrowId(source: NodeId, target: NodeId): EdgeId {
//   return `${source} -> ${target}`;
// }

// export function newEdge(
//   source: NodeId,
//   target: NodeId,
//   concurrent: boolean = false,
//   id: EdgeId = "",
// ): Edge {
//   const edgeId = id || edgeArrowId(source, target);

//   return {
//     id: edgeId,
//     type: "custom",
//     source,
//     target,
//     className: "over-one-away",
//     data: { concurrent },
//   };
// }

// function addEdges(
//   sources: NodeId[],
//   target: NodeId,
//   elements: Element[],
//   elementIds: Set<ElementId>,
//   concurrent: boolean = false,
// ): void {
//   for (const source of sources) {
//     const edgeId = edgeArrowId(source, target);
//     const reverseExists = elementIds.has(edgeArrowId(target, source));
//     // For BIOL cycles
//     if (elementIds.has(source) && !elementIds.has(edgeId) && !reverseExists) {
//       elements.push(newEdge(source, target, concurrent, edgeId));
//       elementIds.add(edgeId);
//     }
//   }
// }

// export function generateInitialElements(
//   courseData: CourseData[],
//   ambiguityHandling: AmbiguityHandling,
// ): Element[] {
//   const elements: Element[] = courseData.map(c => newCourseNode(c));
//   const elementIds: Set<ElementId> = new Set(courseData.map(c => c.id));
//   const secondPass: AlwaysDefinedMap<ElementId, string[]> = new Map();

//   // First pass: unambiguous prerequisites
//   for (const data of courseData) {
//     const courseId = data.id;
//     const { prerequisite } = data;
//     if (!COURSE_REGEX.test(prerequisite)) {
//       // No course prerequisites
//       continue;
//     }

//     const reqSections = prerequisite.split(";");
//     for (const section of reqSections) {
//       const courseMatches = courseIdMatch(section);
//       if (!courseMatches) {
//         continue;
//       } else if (courseMatches.length === 1) {
//         if (!isRestriction(section)) {
//           const concurrent = CONCURRENT_REGEX.test(section);
//           addEdges(courseMatches, courseId, elements, elementIds, concurrent);
//         }
//       } else {
//         if (!secondPass.has(courseId)) {
//           secondPass.set(courseId, []);
//         }
//         secondPass.get(courseId).push(section);
//       }
//     }
//   }
//   // TODO: Co-requisites

//   // Second pass: either/or prerequisites and unparsable 2+
//   for (const [course, problemSections] of secondPass.entries()) {
//     for (const section of problemSections) {
//       const matches = eitherOrMatches(section);
//       if (matches) {
//         if (isRestriction(section)) {
//           continue;
//         }

//         const alreadyRequired = matches.filter(m => elementIds.has(m));
//         const concurrent = CONCURRENT_REGEX.test(section);
//         if (alreadyRequired.length === 1) {
//           addEdges(alreadyRequired, course, elements, elementIds, concurrent);
//         } else if (alreadyRequired.length > 1) {
//           const orNode = newConditionalNode("or");
//           elements.push(orNode);
//           elementIds.add(orNode.id);
//           addEdges([orNode.id], course, elements, elementIds);
//           addEdges(
//             alreadyRequired,
//             orNode.id,
//             elements,
//             elementIds,
//             concurrent,
//           );
//         }
//       } else if (ambiguityHandling === "aggressively") {
//         const allMatches = courseIdMatch(section) as RegExpMatchArray;
//         addEdges(allMatches, course, elements, elementIds);
//       }
//     }
//   }

//   return elements;
// }

// function discoverMaxDepths(
//   startNodeId: NodeId,
//   startDepth: number,
//   nodeData: NodeDataMap,
// ): void {
//   const startNode = nodeData.get(startNodeId);
//   if (startNode.depth !== startDepth) {
//     if (startDepth > startNode.depth) {
//       startNode.depth = startDepth;
//     }
//     for (const outgoerId of startNode.outgoingNodes) {
//       discoverMaxDepths(outgoerId, startDepth + 1, nodeData);
//     }
//   }
//   // If the current depth is equal to startDepth,
//   // retraversing deeper nodes will have no effect

//   // Skips unnecessary processing for diamonds in flow

//   //     B
//   // A <   > D — (rest of flow)
//   //     C

//   // B has already traversed everything past D,
//   // so extra traversal from C is skipped
// }

// export function newNodeData(elements: Element[]): NodeDataMap {
//   const initialNodeData: NodeDataMap = new Map();

//   function setNewNode(nodeId: NodeId): void {
//     if (!initialNodeData.has(nodeId)) {
//       initialNodeData.set(nodeId, {
//         depth: -1,
//         incomingNodes: [],
//         incomingEdges: [],
//         outgoingEdges: [],
//         outgoingNodes: [],
//       });
//     }
//   }

//   for (const elem of elements) {
//     const elemId = elem.id;

//     if (isNode(elem)) {
//       setNewNode(elemId);
//     } else {
//       const { source, target } = elem;
//       setNewNode(source);
//       setNewNode(target);

//       const sourceNode = initialNodeData.get(source);
//       const targetNode = initialNodeData.get(target);
//       sourceNode.outgoingEdges.push(elemId);
//       sourceNode.outgoingNodes.push(target);
//       targetNode.incomingEdges.push(elemId);
//       targetNode.incomingNodes.push(source);
//     }
//   }

//   const roots = elements.filter(
//     elem => isNode(elem) && !initialNodeData.get(elem.id).incomingEdges.length,
//   );
//   for (const root of roots) {
//     discoverMaxDepths(root.id, 0, initialNodeData);
//   }

//   return initialNodeData;
// }

// export function sortElementsByDepth(
//   elements: Element[],
//   nodeData: NodeDataMap,
// ): Element[] {
//   return elements.sort((a, b) => {
//     const aVal = isNode(a)
//       ? nodeData.get(a.id).depth
//       : Number.POSITIVE_INFINITY;
//     const bVal = isNode(b)
//       ? nodeData.get(b.id).depth
//       : Number.POSITIVE_INFINITY;

//     return aVal - bVal;
//   });
// }

// export function newElemIndexes(elements: Element[]): ElemIndexMap {
//   return new Map(elements.map((elem, i) => [elem.id, i])) as ElemIndexMap;
// }

// const COURSE_STATUSES: CourseStatus[] = [
//   "completed", // 0
//   "enrolled", // 1
//   "ready", // 2
//   "under-one-away", // 3
//   "one-away", // 4
//   "over-one-away", // 5
// ];

// export const COURSE_STATUS_CODES = Object.freeze(
//   Object.fromEntries(COURSE_STATUSES.map((status, i) => [status, i])),
// ) as Readonly<Record<CourseStatus, number>>;

// export function setNodeStatus(
//   nodeId: NodeId,
//   newStatus: CourseStatus,
//   elements: Element[],
//   nodeData: NodeDataMap,
//   elemIndexes: ElemIndexMap,
// ): void {
//   (elements[elemIndexes.get(nodeId)] as Node).data.nodeStatus = newStatus;
//   for (const edgeId of nodeData.get(nodeId).outgoingEdges) {
//     elements[elemIndexes.get(edgeId)] = {
//       ...elements[elemIndexes.get(edgeId)],
//       className: newStatus,
//     } as Edge;
//   }
// }

// function getEdgeStatusCode(edge: Edge): number {
//   let edgeStatusCode = COURSE_STATUS_CODES[edge.className];
//   if (edgeStatusCode === COURSE_STATUS_CODES.enrolled && edge.data.concurrent) {
//     edgeStatusCode = COURSE_STATUS_CODES.completed;
//   }
//   return edgeStatusCode;
// }

// export function updateNodeStatus(
//   nodeId: NodeId,
//   elements: Element[],
//   nodeData: NodeDataMap,
//   elemIndexes: ElemIndexMap,
// ): void {
//   const targetNode = elements[elemIndexes.get(nodeId)] as Node;
//   const currentStatus = targetNode.data.nodeStatus;
//   const incomingEdges = nodeData
//     .get(nodeId)
//     .incomingEdges.map(id => elements[elemIndexes.get(id)]) as Edge[];

//   let newStatus;
//   switch (targetNode.type) {
//     case "course": {
//       let newStatusCode = Math.max(...incomingEdges.map(getEdgeStatusCode));
//       newStatusCode =
//         newStatusCode === Number.NEGATIVE_INFINITY ? 0 : newStatusCode;
//       // Math.max() with no args -> negative infinity

//       if (newStatusCode === 0) {
//         newStatus =
//           currentStatus === "completed" || currentStatus === "enrolled"
//             ? currentStatus
//             : "ready";
//         // All prereqs completed (or concurrently enrolled)
//       } else if (newStatusCode === 1) {
//         newStatus = "under-one-away";
//         // All prereqs will be complete after finishing currently enrolled
//       } else if (newStatusCode === 2) {
//         newStatus = "one-away";
//         // All prereqs ready for enrollment
//       } else if (newStatusCode > 2) {
//         newStatus = "over-one-away";
//         // At least one prereq not ready for enrollment
//       }
//       break;
//     }
//     case "and": {
//       let newStatusCode = Math.max(...incomingEdges.map(getEdgeStatusCode));
//       newStatusCode =
//         newStatusCode === Number.NEGATIVE_INFINITY ? 0 : newStatusCode;
//       // Math.max() with no args -> negative infinity

//       newStatus = COURSE_STATUSES[newStatusCode];
//       // AND node should be complete if no prereqs
//       break;
//     }
//     case "or": {
//       let newStatusCode = Math.min(...incomingEdges.map(getEdgeStatusCode));
//       newStatusCode =
//         newStatusCode === Number.POSITIVE_INFINITY ? 0 : newStatusCode;
//       // Math.min() with no args -> positive infinity

//       newStatus = COURSE_STATUSES[newStatusCode];
//       break;
//     }
//     default:
//       break;
//   }

//   setNodeStatus(
//     nodeId,
//     newStatus as CourseStatus,
//     elements,
//     nodeData,
//     elemIndexes,
//   );
// }

// export function updateAllNodes(
//   elements: Element[],
//   nodeData: NodeDataMap,
//   elemIndexes: ElemIndexMap,
// ): Element[] {
//   const updatedElements = elements.slice();
//   const numNodes = nodeData.size;
//   for (let i = 0; i < numNodes; i++) {
//     updateNodeStatus(elements[i].id, updatedElements, nodeData, elemIndexes);
//   }
//   return updatedElements;
// }

// const nodesep = 75; // Vertical spacing
// const ranksep = 250; // Horizontal spacing
// const nodeWidth = 172;
// const nodeHeight = 36;

// export const nodeSpacing = ranksep + nodeWidth;
// // For autopositioning

// function generateDagreLayout(elements: Element[]): Element[] {
//   const dagreGraph = new Graph();
//   dagreGraph.setDefaultEdgeLabel(() => ({}));
//   dagreGraph.setGraph({ rankdir: "LR", ranksep, nodesep });

//   for (const elem of elements) {
//     if (isNode(elem)) {
//       dagreGraph.setNode(elem.id, { width: nodeWidth, height: nodeHeight });
//     } else {
//       dagreGraph.setEdge(elem.source, elem.target);
//     }
//   }

//   layout(dagreGraph);

//   const arrangedElements = elements.map(elem => {
//     if (isNode(elem)) {
//       const node = dagreGraph.node(elem.id);

//       // Slight random change is needed as a hack to notify react flow
//       // about the change.
//       // This also shifts the dagre node anchor (center center) to
//       // match react flow anchor (top left)
//       elem.position = {
//         x: node.x - nodeWidth / 2 + Math.random() / 1000,
//         y: node.y - nodeHeight / 2,
//       };
//     }

//     return elem;
//   });

//   return arrangedElements;
// }

// export function filterUnconditionalElements(
//   elements: Element[],
//   condNodes: ConditionalNode[] = [],
// ): Element[] {
//   let tempElements = elements.slice();
//   let tempNodeData = newNodeData(tempElements);
//   let tempIndexes = newElemIndexes(tempElements);

//   const conditionalNodes = (
//     condNodes.length
//       ? condNodes
//       : tempElements.filter(elem => isConditionalNode(elem))
//   ) as ConditionalNode[];

//   for (const elem of conditionalNodes) {
//     const node = tempNodeData.get(elem.id);

//     for (const iNode of node.incomingNodes) {
//       for (const oNode of node.outgoingNodes) {
//         const edgeId = edgeArrowId(iNode, oNode);
//         if (!tempIndexes.has(edgeId)) {
//           tempElements.push(newEdge(iNode, oNode));
//         }
//       }
//     }
//     tempElements = removeElements([elem], tempElements);
//     tempNodeData = newNodeData(tempElements);
//     tempIndexes = newElemIndexes(tempElements);
//   }

//   return tempElements;
// }

// function getSourcePositions(
//   nodeId: NodeId,
//   elements: Element[],
//   elemIndexes: ElemIndexMap,
//   nodeData: NodeDataMap,
// ): XYPosition | XYPosition[] {
//   const node = elements[elemIndexes.get(nodeId)] as Node;
//   return node.type === "course"
//     ? node.position
//     : nodeData
//         .get(nodeId)
//         .incomingNodes.flatMap(nId =>
//           getSourcePositions(nId, elements, elemIndexes, nodeData),
//         );
// }

// export function newPosition(x, y) {
//   return { x, y };
// }

// function averagePosition(positions) {
//   const avgSourcePosition = positions.reduce(
//     (a, b) => ({ x: a.x + b.x, y: a.y + b.y }),
//     ZERO_POSITION,
//   );
//   avgSourcePosition.x /= positions.length;
//   avgSourcePosition.y /= positions.length;
//   return avgSourcePosition;
// }

// function averageYPosition(positions) {
//   return positions.map(pos => pos.y).reduce((a, b) => a + b) / positions.length;
// }

// export function generateNewLayout(
//   elements,
//   elemIndexes,
//   nodeData,
// ) {
//   const newElements = elements.slice();

//   // Conditional nodes should not influence course depth/positioning
//   const conditionalNodes = elements.filter(elem =>
//     isConditionalNode(elem),
//   );

//   let dagreLayout;
//   if (!conditionalNodes.length) {
//     dagreLayout = generateDagreLayout(
//       elements.slice().sort(() => Math.random() - 0.5),
//     );
//   } else {
//     const filteredElements = filterUnconditionalElements(
//       elements,
//       conditionalNodes,
//     );

//     // https://flaviocopes.com/how-to-shuffle-array-javascript/
//     dagreLayout = generateDagreLayout(
//       filteredElements.sort(() => Math.random() - 0.5),
//     );
//   }

//   for (const dagElem of dagreLayout) {
//     if (isNode(dagElem)) {
//       const i = elemIndexes.get(dagElem.id);
//       (newElements[i]).position = dagElem.position;
//     }
//   }

//   conditionalNodes.reverse();
//   for (const node of conditionalNodes) {
//     const i = elemIndexes.get(node.id);
//     const data = nodeData.get(node.id);
//     const { incomingNodes, outgoingNodes } = data;

//     if (incomingNodes.length && outgoingNodes.length) {
//       const incomingPositions = incomingNodes.flatMap(nodeId =>
//         getSourcePositions(nodeId, elements, elemIndexes, nodeData),
//       );
//       const outgoingPositions = outgoingNodes.map(
//         nodeId => (newElements[elemIndexes.get(nodeId)]).position,
//       );

//       const x =
//         Math.min(...outgoingPositions.map(pos => pos.x)) - nodeWidth * 0.5;
//       const avgSourcePosition = averagePosition(incomingPositions);
//       const avgDestPosition = averagePosition(outgoingPositions);
//       const slope =
//         (avgDestPosition.y - avgSourcePosition.y) /
//         (avgDestPosition.x - avgSourcePosition.x);
//       let dy = -nodeWidth * slope;
//       if (outgoingNodes.length === 1 && Math.abs(dy) > 3 * nodeHeight) {
//         dy = (dy / Math.abs(dy)) * (3 * nodeHeight);
//       }
//       const y = dy + avgDestPosition.y;

//       (newElements[i]).position = { x, y };
//     } else if (incomingNodes.length && !outgoingNodes.length) {
//       const incomingPositions = incomingNodes.map(
//         nodeId => (newElements[elemIndexes.get(nodeId)]).position,
//       );

//       const x =
//         Math.max(...incomingPositions.map(pos => pos.x)) + nodeWidth * 1.1;
//       const y = averageYPosition(incomingPositions);

//       (newElements[i]).position = { x, y };
//     } else if (!incomingNodes.length && outgoingNodes.length) {
//       const outgoingPositions = outgoingNodes.map(
//         nodeId => (newElements[elemIndexes.get(nodeId)]).position,
//       );

//       const x =
//         Math.min(...outgoingPositions.map(pos => pos.x)) - nodeWidth * 0.5;
//       const y = averageYPosition(outgoingPositions);

//       (newElements[i]).position = { x, y };
//     }
//   }
//   // Magic multipliers to compensate for unkown conditional node width

//   return newElements;
// }

// export function resetElementStates(newElements) {
//   return newElements.map(elem =>
//     isNode(elem)
//       ? ({ ...elem, data: { ...elem.data, nodeConnected: false } })
//       : ({ ...elem, animated: false }),
//   );
// }

// export function autoconnect(
//   targetNode,
//   newElements,
//   numNodes,
//   elemIndexes,
//   connectTo = { prereq: true, postreq: true },
//   reposition = false,
// ) {
//   const targetId = targetNode.id;
//   const courseMatches = courseIdMatch(targetNode.data.prerequisite) || [];

//   // Remove duplicates (example: NMETH 450 prereqs)
//   let targetPrereqs = [];
//   if (connectTo.prereq) {
//     targetPrereqs = [...new Set(courseMatches)]
//       .filter(elemId => elemIndexes.has(elemId))
//       .filter(elemId => !elemIndexes.has(edgeArrowId(elemId, targetId)))
//       .map(elemId => newElements[elemIndexes.get(elemId)]);
//   }

//   const targetPostreqs = [];
//   if (connectTo.postreq) {
//     for (let i = 0; i < numNodes; i++) {
//       const postreq = newElements[i];
//       if (
//         isCourseNode(postreq) &&
//         postreq.data.prerequisite.includes(targetId) &&
//         !elemIndexes.has(edgeArrowId(targetId, postreq.id))
//       ) {
//         targetPostreqs.push(postreq);
//       }
//     }
//     // Avoid traversing edges
//   }

//   for (const prereq of targetPrereqs) {
//     newElements.push(newEdge(prereq.id, targetId));
//   }
//   for (const postreq of targetPostreqs) {
//     newElements.push(newEdge(targetId, postreq.id));
//   }

//   if (reposition) {
//     const prereqPositions = targetPrereqs.map(elem => elem.position);
//     const postreqPositions = targetPostreqs.map(elem => elem.position);
//     if (prereqPositions.length && postreqPositions.length) {
//       const allPositions = prereqPositions.concat(postreqPositions);

//       const x =
//         (Math.max(...prereqPositions.map(pos => pos.x)) +
//           Math.min(...postreqPositions.map(pos => pos.x))) /
//         2;
//       const y = averageYPosition(allPositions);

//       targetNode.position = { x, y };
//     } else if (prereqPositions.length && !postreqPositions.length) {
//       const x = Math.max(...prereqPositions.map(pos => pos.x)) + nodeSpacing;
//       const y = averageYPosition(prereqPositions);

//       targetNode.position = { x, y };
//     } else if (!prereqPositions.length && postreqPositions.length) {
//       const x = Math.min(...postreqPositions.map(pos => pos.x)) - nodeSpacing;
//       const y = averageYPosition(postreqPositions);

//       targetNode.position = { x, y };
//     }
//   }

//   if (!elemIndexes.has(targetId)) {
//     newElements.push(targetNode);
//   }

//   return newElements;
// }

// export function stateUpdater(setState) {
//   return {
//     value: (key, value) => setState(prev => ({ ...prev, [key]: value })),
//     cb: (key, value) =>
//       setState(prev => ({
//         ...prev,
//         [key]: value(prev),
//       })),
//   };
// }

// export function textChangeUpdater(
//   setState,
// ) {
//   return key =>
//     function _setState(e) {
//       setState(prev => ({ ...prev, [key]: e.target.value }));
//     };
// }

// export const _testing = {
//   courseIdMatch,
//   eitherOrMatches,
//   CONCURRENT_REGEX,
//   isRestriction,
//   generateInitialElements,
//   newNodeData,
//   sortElementsByDepth,
//   newElemIndexes,
//   setNodeStatus,
//   updateNodeStatus,
//   updateAllNodes,
//   nodeSpacing,
//   filterUnconditionalElements,
//   getSourcePositions,
//   newPosition,
//   averagePosition,
//   averageYPosition,
//   autoconnect,
// };
