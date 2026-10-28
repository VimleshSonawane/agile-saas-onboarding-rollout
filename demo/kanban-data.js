// Illustrative Kanban cards for the "Kanban (after go-live)" view. Load after data.js, which defines EPICS.
// status is the starting column: "To Do", "In Progress", "In Review" or "Done".
const KANBAN_LIMITS={"In Progress":3,"In Review":2};
// Demo day the Kanban view starts on (and returns to on Reset). Demo days are not real dates.
const KANBAN_START_DAY=15;
// history: the demo day(s) each card entered each column, oldest first.
// This starting history is illustrative, made up for the demo; it is not from a real team.
const KANBAN_CARDS=[
{id:"R1",name:"Request 1",type:EPICS[0],status:"To Do",blocked:false,history:{"To Do":[9]}},
{id:"R2",name:"Request 2",type:EPICS[1],status:"To Do",blocked:false,history:{"To Do":[10]}},
{id:"R3",name:"Request 3",type:EPICS[2],status:"To Do",blocked:false,history:{"To Do":[12]}},
{id:"R4",name:"Request 4",type:EPICS[3],status:"In Progress",blocked:false,history:{"To Do":[3],"In Progress":[11]}},
{id:"R5",name:"Request 5",type:EPICS[4],status:"In Progress",blocked:false,history:{"To Do":[4],"In Progress":[13]}},
{id:"R6",name:"Request 6",type:EPICS[0],status:"In Review",blocked:false,history:{"To Do":[2],"In Progress":[7],"In Review":[12]}},
{id:"R7",name:"Request 7",type:EPICS[1],status:"Done",blocked:false,history:{"To Do":[1],"In Progress":[3],"In Review":[6],"Done":[8]}},
{id:"R8",name:"Request 8",type:EPICS[2],status:"Done",blocked:false,history:{"To Do":[1],"In Progress":[5],"In Review":[8],"Done":[10]}}
];
