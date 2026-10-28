// Illustrative Kanban cards for the "Kanban (after go-live)" view. Load after data.js, which defines EPICS.
// status is the starting column: "To Do", "In Progress", "In Review" or "Done".
const KANBAN_LIMITS={"In Progress":3,"In Review":2};
const KANBAN_CARDS=[
{id:"R1",name:"Request 1",type:EPICS[0],status:"To Do",blocked:false},
{id:"R2",name:"Request 2",type:EPICS[1],status:"To Do",blocked:false},
{id:"R3",name:"Request 3",type:EPICS[2],status:"To Do",blocked:false},
{id:"R4",name:"Request 4",type:EPICS[3],status:"In Progress",blocked:false},
{id:"R5",name:"Request 5",type:EPICS[4],status:"In Progress",blocked:false},
{id:"R6",name:"Request 6",type:EPICS[0],status:"In Review",blocked:false},
{id:"R7",name:"Request 7",type:EPICS[1],status:"Done",blocked:false},
{id:"R8",name:"Request 8",type:EPICS[2],status:"Done",blocked:false}
];
