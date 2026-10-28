// Demo data for index.html. Loaded with a plain <script> tag so the page still works when opened by double-click.
// Each epic name is typed only here; stories and dropdowns refer to EPICS.
const EPICS=[
"Epic 1 — Account setup",
"Epic 2 — Guided onboarding checklist",
"Epic 3 — Data import",
"Epic 4 — Training and handoff",
"Epic 5 — Reporting and pilot feedback"
];
// status is the starting column on the board: "To Do", "In Progress", "In Review" or "Done".
const SPRINTS=[
{id:1,name:"Sprint 1 — Discovery and setup",goal:"Goal: Define the problem, stakeholders, and a usable backlog, and set up tracking before building.",capacity:8,stories:[
{id:"1.1",epic:EPICS[0],title:"As a new partner/customer, I can create an account and see my onboarding stages, so I know what is next.",points:5,status:"To Do",accept:"Stages, owners, and status are visible in one view; incomplete stages are clearly marked."},
{id:"1.2",epic:EPICS[0],title:"As an internal user, I can assign an owner to each stage, so accountability is visible.",points:3,status:"To Do",accept:"Every stage has one named owner role; unassigned stages are flagged."}
]},
{id:2,name:"Sprint 2 — Core build",goal:"Goal: Build the guided checklist, account setup view, and basic data import.",capacity:19,stories:[
{id:"2.1",epic:EPICS[1],title:"As a new customer, I can follow a guided checklist in order, so I do not miss a required step.",points:8,status:"To Do",accept:"Checklist order is enforced for required steps; progress updates as steps are completed."},
{id:"2.2",epic:EPICS[1],title:"As a customer, I can see what is required from me versus what the internal team will do.",points:3,status:"To Do",accept:"Each step is labelled customer action or internal action."},
{id:"3.1",epic:EPICS[2],title:"As a customer, I can import my core data using the most common format, so setup does not start from a blank sheet.",points:8,status:"To Do",accept:"A sample import completes with a clear success/error summary."}
]},
{id:3,name:"Sprint 3 — Pilot, training, and go-live",goal:"Goal: Test the flow with a simulated pilot, fix the highest-impact issues, and prepare a go-live playbook.",capacity:21,stories:[
{id:"3.2",epic:EPICS[2],title:"As an internal user, I can see import errors in plain language, so I can help without engineering help for common cases.",points:5,status:"To Do",accept:"Common errors show a fix suggestion, not only a code."},
{id:"4.1",epic:EPICS[3],title:"As a customer, I can access short training materials linked to each stage, so I do not need a separate training call for basics.",points:5,status:"To Do",accept:"Each major stage links to at least one training note or walkthrough."},
{id:"4.2",epic:EPICS[3],title:"As a Customer Success user, I can confirm handoff only when the completion checklist is met.",points:3,status:"To Do",accept:"Handoff is blocked until required items are marked complete."},
{id:"5.1",epic:EPICS[4],title:"As a project manager, I can see onboarding progress, blockers, and time in stage, so I can act early on delays.",points:5,status:"To Do",accept:"Progress, blocker, and time-in-stage are visible for the pilot group."},
{id:"5.2",epic:EPICS[4],title:"As a pilot customer, I can give feedback on clarity and blockers, so the flow can be improved before full rollout.",points:3,status:"To Do",accept:"Feedback is collected per stage and reviewed in the sprint retrospective."}
]}
];
const RAIDS=[
["Integration work runs late","Start with the most common import format first; phase other formats to a future backlog."],
["Scope grows mid-sprint from Sales/Partnerships requests","Change log, weekly scope decision with the sponsor, and a clear out-of-scope list in the charter."],
["Security/compliance review delays launch","Involve Security/Legal in Sprint 1; complete review before pilot go-live."],
["Pilot customers do not complete training","Training linked to each stage, plus a completion checklist before handoff."]
];
