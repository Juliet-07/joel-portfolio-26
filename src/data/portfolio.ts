export interface Project {
  id: string;
  name: string;
  industry: "Technology" | "Oil & Energy" | "Operations";
  role: string;
  duration: string;
  teamSize: string;
  deliveryModel: "Agile" | "Hybrid" | "Waterfall";
  overview: string;
  objective: string;
  challenges: string[];
  responsibility: string;
  approach: string;
  stakeholderStrategy: string;
  riskManagement: string;
  tools: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: "digital-platform-migration",
    name: "Enterprise Digital Platform Migration",
    industry: "Technology",
    role: "Project Manager",
    duration: "14 months",
    teamSize: "18 members",
    deliveryModel: "Agile",
    overview: "Led the migration of a legacy enterprise platform to a modern cloud-native architecture, serving 50,000+ daily active users across multiple business units.",
    objective: "Modernize the core business platform to improve scalability, reduce operational costs by 40%, and enable rapid feature delivery.",
    challenges: [
      "Complex legacy system with 8 years of technical debt",
      "Zero-downtime migration requirement for business continuity",
      "Cross-functional coordination across 4 business units"
    ],
    responsibility: "End-to-end delivery ownership including planning, execution, stakeholder alignment, vendor management, and go-live coordination.",
    approach: "Implemented a phased migration strategy using Scrum with 2-week sprints. Created dedicated workstreams for backend, frontend, and data migration with synchronized milestones.",
    stakeholderStrategy: "Weekly executive steering committee, bi-weekly demos to business stakeholders, and daily stand-ups with the delivery team. Established a RACI matrix for 25+ stakeholders.",
    riskManagement: "Maintained a live risk register with RAG status. Conducted monthly risk workshops. Implemented rollback procedures for each migration phase.",
    tools: ["Jira", "Confluence", "Azure DevOps", "Miro", "Slack"],
    outcomes: [
      "Delivered on time and 8% under budget",
      "Zero downtime during migration",
      "42% reduction in operational costs",
      "3x faster feature deployment cycle"
    ]
  },
  {
    id: "offshore-operations",
    name: "Offshore Operations Digitalization",
    industry: "Oil & Energy",
    role: "Delivery Lead",
    duration: "10 months",
    teamSize: "12 members",
    deliveryModel: "Hybrid",
    overview: "Managed the digitalization of offshore operations workflows for a major energy company, replacing manual reporting with real-time monitoring dashboards.",
    objective: "Reduce operational reporting delays from 48 hours to real-time, improve safety compliance tracking, and enable data-driven decision making.",
    challenges: [
      "Remote offshore environment with limited connectivity",
      "Strict regulatory and safety compliance requirements",
      "Resistance to change from experienced field operators"
    ],
    responsibility: "Program delivery across onshore development team and offshore operations stakeholders. Managed vendor relationships and regulatory compliance.",
    approach: "Hybrid delivery model combining Waterfall for regulatory phases and Agile for software development. Deployed in 3 incremental releases aligned with offshore crew rotations.",
    stakeholderStrategy: "Created a stakeholder engagement plan spanning offshore crews, onshore management, HSE teams, and regulators. Monthly town halls with field demonstrations.",
    riskManagement: "Safety-first risk framework aligned with industry standards. Conducted HAZOP analysis for digital system integration. Maintained contingency manual processes.",
    tools: ["MS Project", "Power BI", "SharePoint", "Teams", "SAP"],
    outcomes: [
      "Reporting time reduced from 48 hours to real-time",
      "98% safety compliance rate achieved",
      "25% improvement in operational efficiency",
      "Successfully adopted by 200+ offshore personnel"
    ]
  },
  {
    id: "scrum-transformation",
    name: "Agile Transformation Program",
    industry: "Technology",
    role: "Scrum Master & Transformation Lead",
    duration: "8 months",
    teamSize: "35 members (5 teams)",
    deliveryModel: "Agile",
    overview: "Led an organization-wide agile transformation across five product teams, establishing Scrum practices and building a culture of continuous improvement.",
    objective: "Transform delivery practices from ad-hoc project execution to structured Scrum methodology, improving velocity and predictability.",
    challenges: [
      "Deeply embedded waterfall culture with senior leadership",
      "Varying maturity levels across teams",
      "Need to maintain delivery output during transformation"
    ],
    responsibility: "Transformation strategy, Scrum coaching for 5 teams, leadership alignment, metrics establishment, and cultural change management.",
    approach: "Phased rollout starting with two pilot teams. Established communities of practice, defined definition of done, and created agile maturity assessment framework.",
    stakeholderStrategy: "Executive coaching sessions, monthly transformation showcases, and quarterly maturity assessments shared with leadership.",
    riskManagement: "Tracked transformation risks separately from delivery risks. Used retrospective insights to identify and mitigate adoption barriers.",
    tools: ["Jira", "Miro", "Confluence", "Retrium", "Slack"],
    outcomes: [
      "Average team velocity increased by 60%",
      "Sprint commitment accuracy improved from 45% to 85%",
      "Employee satisfaction scores rose 30%",
      "All 5 teams achieving sustained Scrum maturity"
    ]
  },
  {
    id: "pipeline-monitoring",
    name: "Pipeline Integrity Monitoring System",
    industry: "Oil & Energy",
    role: "Project Manager",
    duration: "12 months",
    teamSize: "15 members",
    deliveryModel: "Waterfall",
    overview: "Managed the implementation of an IoT-based pipeline integrity monitoring system across 500km of pipeline infrastructure.",
    objective: "Implement predictive maintenance capabilities to reduce unplanned shutdowns by 60% and improve regulatory compliance documentation.",
    challenges: [
      "Integration with 15-year-old SCADA systems",
      "Harsh environmental conditions for sensor deployment",
      "Multi-vendor coordination across hardware and software"
    ],
    responsibility: "Full project lifecycle management from requirements through commissioning. Managed $2.5M budget and multi-vendor delivery.",
    approach: "Structured waterfall with defined gates for design, procurement, installation, integration, and commissioning. Monthly steering committee reviews.",
    stakeholderStrategy: "Formal governance structure with project board, change advisory board, and weekly vendor alignment sessions.",
    riskManagement: "Comprehensive risk register with quantitative analysis. Weather contingency planning. Supply chain risk monitoring with alternative vendor identification.",
    tools: ["MS Project", "Primavera P6", "SAP", "SharePoint", "Power BI"],
    outcomes: [
      "Delivered within budget ($2.5M)",
      "Unplanned shutdowns reduced by 65%",
      "Full regulatory compliance achieved",
      "Annual maintenance cost savings of $800K"
    ]
  }
];

export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Project & Delivery",
    items: ["Project Planning", "Scope & Change Management", "Risk & Issue Management", "Stakeholder Engagement", "Vendor Coordination", "Budget Management"]
  },
  {
    category: "Agile & Leadership",
    items: ["Scrum Facilitation", "Sprint Planning", "Retrospectives", "Backlog Refinement", "Cross-functional Collaboration", "Agile Coaching"]
  },
  {
    category: "Industry & Domain",
    items: ["Software Delivery", "Digital Products", "Oil & Energy Operations", "Engineering Environments", "IoT & SCADA Systems", "Regulatory Compliance"]
  }
];

export interface Tool {
  name: string;
  category: "Project & Agile" | "Documentation & Reporting" | "Collaboration";
  proficiency: "Expert" | "Advanced";
}

export const tools: Tool[] = [
  { name: "Jira", category: "Project & Agile", proficiency: "Expert" },
  { name: "Azure DevOps", category: "Project & Agile", proficiency: "Advanced" },
  { name: "MS Project", category: "Project & Agile", proficiency: "Expert" },
  { name: "Primavera P6", category: "Project & Agile", proficiency: "Advanced" },
  { name: "Miro", category: "Project & Agile", proficiency: "Expert" },
  { name: "Confluence", category: "Documentation & Reporting", proficiency: "Expert" },
  { name: "SharePoint", category: "Documentation & Reporting", proficiency: "Advanced" },
  { name: "Power BI", category: "Documentation & Reporting", proficiency: "Advanced" },
  { name: "Notion", category: "Documentation & Reporting", proficiency: "Expert" },
  { name: "Slack", category: "Collaboration", proficiency: "Expert" },
  { name: "Microsoft Teams", category: "Collaboration", proficiency: "Expert" },
  { name: "Google Workspace", category: "Collaboration", proficiency: "Advanced" },
];

export const certifications = [
  { name: "PMP", full: "Project Management Professional", body: "PMI", description: "Validates comprehensive project management competence across industries and delivery models." },
  { name: "PSM I", full: "Professional Scrum Master I", body: "Scrum.org", description: "Demonstrates deep understanding of Scrum framework and ability to support Scrum teams." },
  { name: "SAFe Agilist", full: "SAFe 5 Agilist", body: "Scaled Agile", description: "Enables leading agile transformation at enterprise scale across multiple teams." },
  { name: "PRINCE2", full: "PRINCE2 Practitioner", body: "Axelos", description: "Structured project management methodology widely used in governance-heavy environments." },
];

export const testimonials = [
  {
    quote: "Joel has an exceptional ability to cut through complexity and keep teams focused on what matters. His leadership during our platform migration was instrumental to its success.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    relationship: "Client"
  },
  {
    quote: "What sets Joel apart is his ability to operate across industries. He brought fresh perspectives from tech into our energy operations and it made a real difference.",
    name: "Marcus Andersen",
    role: "Operations Director",
    relationship: "Stakeholder"
  },
  {
    quote: "Joel transformed how our teams work. His coaching style is patient yet challenging — he pushed us to improve while respecting our pace of change.",
    name: "Priya Nair",
    role: "Lead Developer",
    relationship: "Team Member"
  }
];

export const methods = [
  { name: "Scrum", description: "Iterative delivery with defined roles, events, and artifacts for complex product development." },
  { name: "Hybrid Delivery", description: "Combining Agile execution with Waterfall governance for regulated environments." },
  { name: "Waterfall", description: "Sequential, gate-based delivery for infrastructure and compliance-heavy projects." },
  { name: "Governance & Reporting", description: "Structured reporting frameworks including steering committees, RAG status, and milestone tracking." },
];
