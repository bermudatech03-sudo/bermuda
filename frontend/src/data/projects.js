// src/data/projects.js
export const PROJECTS = [

  {
    id: "gymdesk-management",
    title: "GymDesk",
    category: "Gym Management Software",
    tagline: "Every Member. Every Rep. Fully Managed.",
    year: "2024",
    client: "Multiple Gym Clients",
    description:
      "A production-grade gym management platform deployed across multiple gym branches. Handles memberships, attendance via biometric fingerprint, fee collections, WhatsApp/SMS reminders, staff management, and real-time dashboards — replacing manual registers and disconnected tools entirely.",
    tech: ["Django", "React", "PostgreSQL", "Twilio", "APScheduler", "ZKTeco Fingerprint"],
    color: "#ff7043",
    colorDim: "rgba(255,112,67,0.08)",
    colorBorder: "rgba(255,112,67,0.22)",
    icon: "◈",
    thumb: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    metrics: [
      { val: "Multi-Branch", label: "Deployments" },
      { val: "Biometric", label: "Fingerprint Attendance" },
      { val: "WhatsApp", label: "Auto Reminders" },
      { val: "100%", label: "Fee Tracking" },
    ],
    pages: [
      {
        title: "The Problem",
        subtitle: "Paper registers. Missed dues. Zero visibility.",
        body: "Gym owners were managing hundreds of members through paper registers, WhatsApp groups, and spreadsheets. Attendance was manually signed. Fee reminders were forgotten. Staff had no single view of who was active, overdue, or lapsed. Every month, revenue slipped through cracks that nobody could track.",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
        caption: "Before GymDesk — manual registers, missed renewals, invisible member data",
        insight: "Most gyms lose 15–25% of renewable revenue simply because nobody followed up in time.",
      },
      {
        title: "Biometric Attendance",
        subtitle: "Walk in. Finger on scanner. Done.",
        body: "GymDesk integrates directly with ZKTeco/Biomax fingerprint scanners using the ADMS push protocol over WiFi. Members authenticate with their fingerprint and attendance is recorded instantly in the system — no tokens, no cards, no manual entries. The system supports multiple devices across branches and syncs in real time.",
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
        caption: "Biometric check-in — ZKTeco ADMS integration, real-time attendance sync",
        insight: "Zero proxy attendance. Zero manual entry. Every visit tracked automatically.",
      },
      {
        title: "Member Management",
        subtitle: "Every member profile. Every plan. In one place.",
        body: "Each member has a complete profile — enrollment date, plan type, fee history, attendance streak, and renewal status. Staff can enroll new members, assign plans, process payments, and flag at-risk accounts all from one screen. Role-based access ensures staff only see what they need to.",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80",
        caption: "Member dashboard — 360° profile with plan, attendance, and fee history",
        insight: "Staff onboarding time for new members dropped from 10 minutes to under 2 minutes.",
      },
      {
        title: "Fee & Renewal Engine",
        subtitle: "No due date ever slips again.",
        body: "GymDesk tracks every member's fee cycle and automatically flags renewals 7 days in advance. APScheduler runs background jobs that trigger WhatsApp messages and SMS reminders via Twilio at the right moment — without any manual action from staff. Overdue reports surface on the admin dashboard every morning.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
        caption: "Fee tracker with auto-reminder scheduler and overdue member dashboard",
        insight: "Renewal reminder automation consistently recovers dues that would otherwise go unnoticed.",
      },
      {
        title: "WhatsApp & SMS Automation",
        subtitle: "The right message at the right time.",
        body: "Twilio powers automated WhatsApp and SMS messages for fee reminders, enrollment confirmations, attendance alerts, and plan expiry notices. Messages are templated and personalized per member. Owners can configure reminder schedules from the admin panel without touching code. Communication happens 24/7, automatically.",
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
        caption: "Twilio-powered WhatsApp and SMS automation — reminders, alerts, confirmations",
        insight: "Members respond significantly faster to WhatsApp reminders than to phone calls or emails.",
      },
      {
        title: "Staff & Branch Dashboard",
        subtitle: "Total visibility. One screen.",
        body: "The admin dashboard gives owners a real-time view of active members, today's attendance, pending dues, upcoming renewals, and revenue by month. Staff accounts are role-restricted — trainers see their assigned members, while admins see everything. Multi-branch gyms get branch-level filtering so nothing bleeds across locations.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        caption: "Owner dashboard — attendance summary, dues overview, monthly revenue trends",
        insight: "Owners went from daily manual check-ins with staff to a 2-minute morning dashboard scan.",
      },
      {
        title: "Live Deployments",
        subtitle: "Production. Not a prototype.",
        body: "GymDesk is live across multiple gym branches with real members, real fingerprint hardware, and real revenue flowing through it. The platform has handled concurrent multi-branch rollouts, hardware compatibility issues, and production-scale data — evolving with each client's requirements. It is actively maintained and expanded.",
        img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1200&q=80",
        caption: "GymDesk — deployed, live, and actively serving multiple gym clients",
        insight: "Built for the messiness of real gyms — not a demo environment. Live, maintained, trusted.",
      },
    ],
  },
  {
    id: "detailing-crm",
    title: "Detailing CRM",
    category: "Vehicle Detailing CRM",
    tagline: "From Drop-Off to Invoice. Fully Tracked.",
    year: "2024",
    client: "Vehicle Detailing Business",
    description:
      "A full-stack CRM purpose-built for vehicle detailing shops. Manages customers, vehicles, service bookings, job cards, staff assignments, inventory, and invoicing through a clean workflow. A 3-step job card wizard ties everything together — from vehicle intake to payment — with zero paperwork.",
    tech: ["Django REST Framework", "React", "Vite", "Tailwind CSS", "PostgreSQL", "JWT Auth"],
    color: "#00c8ff",
    colorDim: "rgba(0,200,255,0.08)",
    colorBorder: "rgba(0,200,255,0.22)",
    icon: "◉",
    thumb: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=80",
    metrics: [
      { val: "6 Modules", label: "End-to-End Coverage" },
      { val: "3-Step", label: "Job Card Wizard" },
      { val: "Zero", label: "Paperwork" },
      { val: "JWT", label: "Role-Based Access" },
    ],
    pages: [
      {
        title: "The Problem",
        subtitle: "Sticky notes. Phone photos. Missed payments.",
        body: "Detailing shops run on chaos — job details written on sticky notes, before/after photos stuck in WhatsApp chats, customer follow-ups missed, invoices done by hand. When a vehicle leaves, half the information leaves with it. There was no single system that tracked a vehicle from drop-off all the way to paid invoice.",
        img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=1200&q=80",
        caption: "Before — manual job tracking, scattered photos, handwritten invoices",
        insight: "Most detailing shops lose repeat customers because nobody followed up after the first job.",
      },
      {
        title: "Customer & Vehicle Management",
        subtitle: "Every car has a history. Every customer has a profile.",
        body: "Each customer record holds full contact details, their vehicle roster, and complete service history. Every vehicle tracks make, model, year, and all past job cards. Staff can pull up a returning customer and immediately see their last service, preferred packages, and outstanding balance — no digging, no asking again.",
        img: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=80",
        caption: "Customer and vehicle profiles with full service history",
        insight: "Returning customers feel recognized when staff know their vehicle history instantly.",
      },
      {
        title: "3-Step Job Card Wizard",
        subtitle: "Drop-off to job brief in under 3 minutes.",
        body: "The heart of the CRM is a 3-step atomic job card wizard. Step 1: select the customer and vehicle. Step 2: choose services and assign staff. Step 3: review and confirm. All three steps submit to a single endpoint atomically — either the entire job card is created or nothing is. No orphaned records. No partial data.",
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80",
        caption: "Job card wizard — 3-step stepper with atomic single-endpoint submission",
        insight: "One endpoint. Three steps. Zero chance of a half-created job card causing data issues.",
      },
      {
        title: "Service & Inventory Tracking",
        subtitle: "Know exactly what was used on every job.",
        body: "Services are linked to the products and consumables they consume from inventory. When a job card is closed, inventory is decremented automatically. Low-stock alerts surface on the dashboard before a shortage happens. Staff no longer have to manually cross-check what products are available before quoting a service.",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        caption: "Service catalog with inventory linkage and automatic stock deduction",
        insight: "Inventory shortages during a job dropped to zero after automatic stock tracking went live.",
      },
      {
        title: "Staff Assignment & Job Status",
        subtitle: "Who's working on what. Right now.",
        body: "Each job card assigns one or more staff members responsible for the vehicle. Job status flows through stages — Received, In Progress, Quality Check, Ready, Delivered. Managers see a live board of all active jobs, which staff member is tied up, and which vehicles are ready for pickup. No more chasing updates across WhatsApp.",
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
        caption: "Job status board — active jobs, staff assignments, pickup-ready alerts",
        insight: "Customer pickup calls dropped significantly once owners could tell them exact vehicle status.",
      },
      {
        title: "Invoicing & Payments",
        subtitle: "From job complete to invoice in one click.",
        body: "When a job is marked complete, the system auto-generates an itemized invoice based on the services performed. Staff can record payment method, partial payments, and outstanding balance. Invoice history is linked to the customer profile. Owners can view monthly revenue, outstanding dues, and top-performing services from the reports section.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
        caption: "Auto-generated invoices — itemized, payment-tracked, revenue-reported",
        insight: "Handwritten invoicing was completely eliminated. Every payment is now digitally recorded.",
      },
      {
        title: "Role-Based Access & Security",
        subtitle: "Staff see what they need. Nothing more.",
        body: "JWT-based authentication powers role-separated access across the CRM. Admins control everything — customers, staff, inventory, reports. Staff access only their assigned jobs and relevant customer details. The DRF backend enforces permissions at the API level, not just the UI — so access rules hold regardless of how the API is called.",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
        caption: "JWT role-based auth — admin vs staff access enforced at API level",
        insight: "Enforcing permissions at the API layer means no UI workaround can ever bypass access rules.",
      },
    ],
  },
{
  id: "studenttracker-crm",
  title: "StudentTracker CRM",
  category: "Education Management Platform",
  tagline: "Every Student. Every Class. Fully Tracked.",
  year: "2024",
  client: "TESDB Academy",
  description:
    "A full-scale student tracking CRM designed for institutes to manage attendance, course progress, module completion, and test performance in one unified system. Staff and students mark attendance automatically when logging in, verified through WiFi authentication. Every activity — attendance, progress updates, and test results — triggers automated email notifications, giving complete transparency to students and administrators.",

  tech: ["Django", "PostgreSQL", "React", "SMTP Email Automation", "WiFi Authentication"],

  color: "#2dffc3",
  colorDim: "rgba(45,255,195,0.08)",
  colorBorder: "rgba(45,255,195,0.2)",
  icon: "◉",
  thumb: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",

  metrics: [
    { val: "1K+", label: "Students Managed" },
    { val: "100%", label: "Attendance Automation" },
    { val: "60%", label: "Admin Time Saved" },
    { val: "Realtime", label: "Progress Tracking" },
  ],

  pages: [
  {
    "title": "The Login",
    "subtitle": "Fragmented student management systems.",
    "body": "Staff will be able login or register their username and password for secure login and authentication. After successfull login , staff dashboard is loaded where they can monitor and handle all the batches allocated to them. ",
    "img": "/login_ss.png",
    "caption": "",
    "insight": "Secured login for each and every staff . No other staff can interrupt in a single staff's progress bar."
  },
  {
    "title": "Batch Scheduling and handling",
    "subtitle": "Allocate a scheduled timing batch for each staff for all time student convenience.",
    "body": "Each staff will be assigned for their own batches as a list and everyone can access their own batch and control student attendance and student progress inside it.",
    "img": "/batch_ss.png",
    "caption": "",
    "insight": "Batch tracking and monitor all the students inside it."
  },
  {
    "title": "Smart Login Attendance",
    "subtitle": "Automatic attendance through WiFi authentication.",
    "body": "Students and staff no longer mark attendance manually. Attendance is automatically recorded when users log into the portal while connected to the institute WiFi network. The system verifies the network IP to ensure the user is physically present in the campus environment, eliminating proxy attendance and ensuring reliable records.",
    "img": "/staff_attendance_ss.png",
    "caption": "",
    "insight": "Attendance tracking became fully automated with accurate real-time logs."
  },
  {
    "title": "Student Attendance",
    "subtitle": "Every student's presence and absence is marked and monitored",
    "body": "Each student has a dedicated dashboard showing their attendance percentage, enrolled course details, completed modules, pending lessons, and test performance. Students can track their progress in real time without depending on staff updates.",
    "img": "/student_attendance_ss.png",
    "caption": "",
    "insight": "Students stay more accountable when they can monitor their own progress."
  },
  {
    "title": "Course & Module Progress Tracking",
    "subtitle": "Structured learning progress monitoring.",
    "body": "Courses are divided into modules and topics, allowing staff to update progress as classes are completed. The system maintains a full learning timeline for each student, enabling administrators to quickly identify students who are ahead, on track, or falling behind.",
    "img": "/add_edit_progress.png",
    "caption": "",
    "insight": "Staff can instantly track which modules have been completed for every student."
  },
  {
    "title": "Admin side performance tracking",
    "subtitle": "Data-driven performance insights.",
    "body": "All data given by the staff is viewed from the admin side , data can be added , edited and deleted. All the progress is monitore from 1 Dashboard , staff attendance , studnet attendance , student topic completion, student test marks end-to-end",
    "img":"/admin_monitor_ss.png",
    "caption": "Student performance dashboard with complete test history",
    "insight": "Centralized performance tracking replaced manual grading spreadsheets."
  },
  {
    "title": "Automated Email Notifications",
    "subtitle": "Every action triggers communication.",
    "body": "Important events such as attendance confirmation, progress updates, and test results automatically trigger email notifications. This ensures students and administrators stay informed without requiring manual communication from staff.",
    "img": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80",
    "caption": "",
    "insight": "Communication with students became instant and fully automated."
  }
],
},
  {
  "id": "machinemart-ecom",
  "title": "MachineMart",
  "category": "Industrial E-Commerce Platform",
  "tagline": "Machines. Parts. Procurement Simplified.",
  "year": "2024",
  "client": "Industrial Equipment Supplier",
  "description": "A specialized B2B e-commerce platform designed for selling industrial machines and accessories. Administrators can easily manage product listings, while customers browse equipment, securely log in with OTP verification, and submit purchase requests. The system automates communication through email notifications and provides request tracking for buyers and administrators.",
  "tech": ["React", "Django", "PostgreSQL", "SMTP Email Automation", "OTP Authentication"],
  "color": "#ffb830",
  "colorDim": "rgba(255,184,48,0.08)",
  "colorBorder": "rgba(255,184,48,0.2)",
  "icon": "◆",
  "thumb": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
  "metrics": [
    { "val": "500+", "label": "Machines Listed" },
    { "val": "1000+", "label": "Client Requests" },
    { "val": "OTP", "label": "Secure Login" },
    { "val": "Realtime", "label": "Request Tracking" }
  ],
  "pages": [
    {
      "title": "The Landing Page",
      "subtitle": "E-commerce webistie for machines and accesories.",
      "body": "Faster Inquiry generated on selling and servicing machines and its accessories just like it is done in the popular e-commerce platforms all over the world.",
      "img": "/Machines/landing_ss.png",
      "caption": "",
      "insight": "Reduce the work of a sales team and automatic inquiry and order generated. "
    },
    {
      "title": "Machine Catalog Platform",
      "subtitle": "A digital showroom for machines and accessories.",
      "body": "The platform provides a structured product catalog where customers can browse machines and industrial accessories with detailed specifications, images, and pricing information. Categories help customers easily navigate different types of equipment and quickly find the products they need.",
      "img": "/Machines/brouchure_ss.png",
      "caption": "",
      "insight": "Customers can explore the entire machine inventory online."
    },
    {
      "title": "Secure Login & OTP Verification",
      "subtitle": "Verified access for genuine buyers.",
      "body": "Customers must register and log in securely using OTP verification. This ensures that only verified users can submit purchase requests and communicate with the supplier. The authentication system prevents spam inquiries and improves security.",
      "img": "/Machines/register_ss.png",
      "caption": "",
      "insight": "Verified accounts ensure genuine purchase inquiries."
    },
    {
      "title": "Purchase Request System",
      "subtitle": "From product browsing to purchase inquiry.",
      "body": "Instead of a traditional cart checkout system, customers submit purchase requests for machines or accessories directly from the product page. These requests are recorded in the system and instantly forwarded to the admin for review and quotation processing.",
      "img": "/Machines/submit_req_ss.png",
      "caption": "",
      "insight": "Streamlined inquiry flow improves response time for sales teams."
    },
    {
      "title": "Automated Email Communication",
      "subtitle": "Instant updates for every request.",
      "body": "When a customer submits a request, automated email notifications are sent to both the customer and the admin team. Customers receive confirmation emails with request details while administrators receive alerts to process inquiries quickly.",
      "img": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80",
      "caption": "",
      "insight": "Customers receive instant acknowledgment for their inquiries."
    },
    {
      "title": "Request Tracking System",
      "subtitle": "Track every inquiry from submission to fulfillment.",
      "body": "Customers can log into their accounts to track the status of their purchase requests. The system updates the request status as it moves from inquiry to quotation, processing, and completion. This provides transparency for customers and helps administrators manage orders efficiently.",
      "img": "/Machines/tracking_ss.png",
      "caption": "",
      "insight": "Request tracking reduces communication delays and improves customer experience."
    },
    {
      "title": "Admin Product Management",
      "subtitle": "Full control over machines and accessories.",
      "body": "Administrators can easily add, edit, and manage machines and accessories from the admin dashboard. Product listings can include images, specifications, pricing details, and availability status. This enables quick updates and efficient catalog management.",
      "img": "/Machines/admin_ss.png",
      "caption": "",
      "insight": "Admins manage the entire product catalog from one dashboard."
    }
  ]
},
  {
  "id": "dbapage-portal",
  "title": "DBAPage",
  "category": "Learning Platform",
  "tagline": "Structured Learning. On Demand.",
  "year": "2024",
  "client": "TESDB Academy",
  "description": "A recorded video learning platform where administrators manage courses and video content while students access approved courses through a secure dashboard. The system includes account approval workflows, course-based video access, and inquiry management for prospective students.",
  "tech": ["React", "Django", "PostgreSQL", "SMTP Email", "REST API"],
  "color": "#b48fff",
  "colorDim": "rgba(180,143,255,0.08)",
  "colorBorder": "rgba(180,143,255,0.2)",
  "icon": "◇",
  "thumb": "/dbapage_thumb.jpg",
  "metrics": [
    { "val": "100+", "label": "Recorded Lessons" },
    { "val": "10+", "label": "Courses Hosted" },
    { "val": "Secure", "label": "Admin Approval Access" },
    { "val": "24/7", "label": "Learning Availability" }
  ],
  "pages": [
    {
      "title": "Course Management",
      "subtitle": "Admin control over learning content.",
      "body": "Administrators can create, edit, and delete courses directly from the admin dashboard. Each course contains multiple recorded lessons, descriptions, and structured learning paths to guide students through the content.",
      "img": "/dbapage/admin_course_ss.png",
      "caption": "",
      "insight": "All course content can be updated instantly from the admin panel."
    },
    {
      "title": "Video Content Management",
      "subtitle": "Organized recorded lessons for every course.",
      "body": "Admins upload and manage recorded video lessons for each course. Videos are organized into modules and topics, making it easy for students to navigate through structured learning material.",
      "img": "/dbapage/admin_videos_ss.png",
      "caption": "",
      "insight": "Admins maintain complete control over video learning resources."
    },
    {
      "title": "Student Registration System",
      "subtitle": "Secure student onboarding.",
      "body": "Students create accounts through the registration portal by submitting their details. Newly registered users remain pending until reviewed and approved by the administrator.",
      "img": "/dbapage/candidates_register_ss.png",
      "caption": "",
      "insight": "Admin approval ensures only verified students gain platform access."
    },
    {
      "title": "Admin Approval Workflow",
      "subtitle": "Controlled access to the learning portal.",
      "body": "Administrators review student registrations and approve or reject access requests. Once approved, the student receives login access to the learning dashboard.",
      "img": "/dbapage/admin_approval_ss.png",
      "caption": "",
      "insight": "Approval-based access keeps the learning environment secure."
    },
    {
      "title": "Student Dashboard",
      "subtitle": "Central learning hub for students.",
      "body": "After logging in, students access their personalized dashboard where they can view available courses, navigate lessons, and watch recorded training videos at their own pace.",
      "img": "/dbapage/candidates_login.png",
      "caption": "",
      "insight": "Students access all learning resources from a single interface."
    },
    {
      "title": "Course Access System",
      "subtitle": "Videos available only for approved courses.",
      "body": "Students can only view videos for the courses they have requested or been granted access to. This ensures controlled distribution of learning material and proper course management.",
      "img": "/dbapage/candidates_portal.png",
      "caption": "",
      "insight": "Course access is securely managed based on admin approval."
    },
    {
      "title": "Inquiry Management",
      "subtitle": "Customer communication made simple.",
      "body": "Visitors can submit inquiries through the contact form for course details or enrollment questions. These messages appear in the admin dashboard where administrators can review and reply to each inquiry.",
      "img": "/dbapage/admin_msgs_ss.png",
      "caption": "",
      "insight": "All customer inquiries are centrally managed within the system."
    }
  ]
},
  {
  "id": "dtechland-digital",
  "title": "Techland Solutions",
  "category": "Business Website",
  "tagline": "Digital Presence. Designed to Impress.",
  "year": "2024",
  "client": "Techland Solutions",
  "description": "A modern digital presence website built to showcase the company’s services, portfolio, and design capabilities. The platform highlights clean UI design, detailed service offerings, a client inquiry system, and a portfolio of completed digital products and web solutions.",
  "tech": ["React", "Vite", "Node.js", "Email Automation", "Responsive UI"],
  "color": "#ff6b9d",
  "colorDim": "rgba(255,107,157,0.08)",
  "colorBorder": "rgba(255,107,157,0.2)",
  "icon": "◎",
  "thumb": "/techland_thumb.jpg",
  "metrics": [
    { "val": "10+", "label": "Projects Showcased" },
    { "val": "100%", "label": "Responsive Design" },
    { "val": "24/7", "label": "Online Presence" },
    { "val": "Fast", "label": "Optimized Performance" }
  ],
  "pages": [
    {
      "title": "Modern Brand Presence",
      "subtitle": "A website that represents the company identity.",
      "body": "The website serves as the central digital identity for Techland Solutions. It introduces the company, its expertise in software development and digital products, and communicates its brand through a modern and visually appealing interface.",
      "img": "/techland/landing_ss.png",
      "caption": "",
      "insight": "A strong online presence builds credibility and trust with potential clients."
    },
    {
      "title": "UI & Design Experience",
      "subtitle": "A clean interface built for engagement.",
      "body": "The website features a visually rich and modern UI designed to deliver a smooth browsing experience. Carefully designed sections, animations, and layout structure ensure that visitors can easily navigate the platform and understand the company's capabilities.",
      "img": "/techland/UI_timer_ss.png",
      "caption": "",
      "insight": "A well-designed UI improves engagement and increases visitor retention."
    },
    {
      "title": "Service Showcase",
      "subtitle": "Clear presentation of company expertise.",
      "body": "The services section highlights the company’s offerings including web development, application development, digital solutions, and custom software systems. Each service is explained clearly so potential clients understand the solutions available to them.",
      "img": "/techland/service_ss.png",
      "caption": "",
      "insight": "Clear service descriptions help potential clients quickly understand available solutions."
    },
    {
      "title": "Client Inquiry System",
      "subtitle": "Direct communication with potential clients.",
      "body": "Visitors can submit inquiries through a structured contact form to request project discussions, service information, or quotations. All messages are stored and sent to the company through automated email notifications for quick response.",
      "img": "/techland/form_ss.png",
      "caption": "",
      "insight": "Inquiry forms streamline communication and capture potential business leads."
    },
    {
      "title": "Project Portfolio",
      "subtitle": "Showcasing real-world products and solutions.",
      "body": "The portfolio section displays completed projects and software solutions developed by the company. Each project highlights the product concept, technologies used, and the value delivered to clients.",
      "img": "/techland/portfolio_ss.png",
      "caption": "",
      "insight": "Real project showcases help establish credibility and technical capability."
    },
    {
      "title": "Responsive & Performance Optimized",
      "subtitle": "Fast, scalable, and accessible everywhere.",
      "body": "The platform is fully responsive and optimized for performance across devices including mobile phones, tablets, and desktops. Fast loading speeds and optimized assets ensure smooth browsing for visitors regardless of their device.",
      "img": "/techland/explainedportfolio_ss.png",
      "caption": "",
      "insight": "Performance optimization improves user experience and search visibility."
    }
  ]
},
];

export const SERVICES = [
  {
    icon: "⬡",
    title: "Web Applications",
    desc: "Complex, scalable platforms — CRMs, ERPs, dashboards, portals. We architect systems that handle millions of users without breaking a sweat.",
    features: ["Custom Architecture", "Real-time Data", "Role-based Access", "API Integrations"],
    color: "#a8ff57",
  },
  {
    icon: "◈",
    title: "Mobile Applications",
    desc: "Native-feel cross-platform apps for iOS and Android. From patient management to fleet tracking — mobile experiences people actually use daily.",
    features: ["iOS & Android", "Offline-first", "Push Notifications", "Biometric Auth"],
    color: "#2dffc3",
  },
  {
    icon: "◉",
    title: "Business Websites",
    desc: "Your website is your best salesperson. We design high-converting sites that generate leads, build trust, and make competitors look amateur.",
    features: ["Conversion-optimized", "CMS Integration", "SEO-ready", "Analytics"],
    color: "#ffb830",
  },
  {
    icon: "◆",
    title: "CRM & ERP Systems",
    desc: "Replace spreadsheet chaos with intelligent business tools. Custom-built to your exact workflow — not the other way around.",
    features: ["Workflow Automation", "Custom Reports", "Multi-user Roles", "SMS & Email Triggers"],
    color: "#b48fff",
  },
  {
    icon: "◇",
    title: "E-Commerce Platforms",
    desc: "High-performance storefronts built to scale. From D2C brands to B2B catalogues — commerce engines that turn traffic into revenue.",
    features: ["Custom Storefront", "Inventory Sync", "Payment Gateway", "Cart Recovery"],
    color: "#ff6b9d",
  },
  {
    icon: "◎",
    title: "UI/UX Design",
    desc: "Design that makes users lean forward. Every pixel serves a purpose. Complex workflows become intuitive experiences that feel effortless.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "#38e8ff",
  },
];
