/* =========================================================================
   Vahan — case study content
   Keyed by the ?id= slug used on case-studies.html; case-study.html renders
   whichever entry the query string asks for. Key order is also the order the
   "More case studies" rail walks through.
   ========================================================================= */
window.VAHAN_CASE_STUDIES = {

  'zomato-scale': {
    company: 'Zomato',
    industry: 'Food Delivery',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    roles: 'Delivery partners',
    regions: '42 cities',
    title: 'How Zomato scaled its delivery workforce in times of need.',
    dek: 'A festive-season demand spike needed thousands of delivery partners on the road in weeks, not quarters. Vahan’s AI recruiter sourced, screened and activated them city by city.',
    stats: [
      { n: '3.2x', l: 'faster ramp-up' },
      { n: '18K', l: 'partners activated' },
      { n: '27%', l: 'lower cost per hire' },
      { n: '4 Days', l: 'average fulfilment' },
    ],
    challenge: 'Zomato’s festive-season order volumes climb faster than any traditional hiring funnel can follow. Vendor-led sourcing was returning candidates who dropped off before their first shift, and city teams were spending their days chasing follow-ups instead of running operations.',
    solution: [
      'Vahan plugged its AI recruiter into Zomato’s existing onboarding flow. Candidates were sourced from the Vahan worker network, screened over a vernacular voice conversation, and handed off already qualified on documents, vehicle and city preference.',
      'Every drop-off point was instrumented, so the funnel could be re-tuned weekly — a change to the screening script in one city rolled out to the rest within days.',
    ],
    results: [
      'Ramp-up to full festive capacity took five weeks instead of sixteen.',
      'Cost per activated partner fell 27% against the vendor-led baseline.',
      'First-shift show-up rate improved from 61% to 84%.',
    ],
    quote: {
      text: 'We stopped thinking about hiring as a bottleneck. Vahan gave us a supply line we could turn up or down with the demand curve.',
      name: 'Head of Supply Operations',
      role: 'Zomato',
    },
  },

  'dunzo-sourcing': {
    company: 'Dunzo',
    industry: 'Quick Commerce',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    roles: 'Delivery partners, pickers',
    regions: '8 metros',
    title: 'How Dunzo cut sourcing costs by 40% in three months.',
    dek: 'Dunzo was paying a premium for candidates who never reached their first shift. Rebuilding the top of the funnel around Vahan’s network cut the cost of every real hire.',
    stats: [
      { n: '40%', l: 'lower sourcing cost' },
      { n: '3 Months', l: 'to full rollout' },
      { n: '2.4x', l: 'more qualified leads' },
      { n: '91%', l: 'document-ready on arrival' },
    ],
    challenge: 'Dunzo’s cost per hire was dominated by candidates who were sourced, paid for, and then lost somewhere between the first call and the first shift. Because spend sat with vendors, the team had no visibility into which channels were producing workers who actually stayed.',
    solution: [
      'Vahan replaced the paid-lead mix with sourcing from its own worker network and made every stage of the funnel measurable — lead, screened, documented, activated.',
      'Screening moved to an AI voice recruiter that ran in seven languages, so candidates were qualified before any Dunzo recruiter time was spent on them.',
    ],
    results: [
      'Sourcing cost per activated partner dropped 40% within one quarter.',
      'Qualified leads per rupee spent rose 2.4x.',
      '91% of candidates arrived with documents already verified.',
    ],
    quote: {
      text: 'The number that changed our mind was cost per activation, not cost per lead. That is the only one that ever mattered.',
      name: 'Director, Operations',
      role: 'Dunzo',
    },
  },

  'squadstack-pipeline': {
    company: 'SquadStack',
    industry: 'Sales & Telecalling',
    logo: 'assets/homepage/squadstack%20logo.svg',
    image: 'assets/homepage/squadstack%20image.svg',
    roles: 'Tele-callers, sales agents',
    regions: 'Pan-India, remote',
    title: 'How SquadStack built a hiring pipeline that scales.',
    dek: 'SquadStack needed a hiring engine that could absorb a new client contract without hiring more recruiters. Vahan built one that runs continuously.',
    stats: [
      { n: '3,000+', l: 'agents hired' },
      { n: '0', l: 'new recruiters added' },
      { n: '5 Days', l: 'contract to first cohort' },
      { n: '2.1x', l: 'pipeline throughput' },
    ],
    challenge: 'Every new client contract meant a hiring sprint, and every sprint meant more recruiter headcount. SquadStack wanted the pipeline to be a standing capability rather than a project it restarted each quarter.',
    solution: [
      'Vahan ran always-on sourcing against SquadStack’s agent profile, keeping a warm bench of screened candidates ahead of demand rather than behind it.',
      'The AI recruiter handled language screening, availability and basic aptitude, so SquadStack’s team only ever spoke to candidates worth interviewing.',
    ],
    results: [
      'Over 3,000 agents hired without adding a single recruiter.',
      'A new client contract now produces its first trained cohort in five days.',
      'Pipeline throughput per recruiter more than doubled.',
    ],
    quote: {
      text: 'We used to staff up recruiting to staff up delivery. Now the pipeline is just there, and we draw from it.',
      name: 'VP, Talent',
      role: 'SquadStack',
    },
  },

  'zomato-hubs': {
    company: 'Zomato',
    industry: 'Logistics',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    roles: 'Hub associates, supervisors',
    regions: '18 hubs, 11 cities',
    title: 'How Zomato staffed 18 new distribution hubs in five weeks.',
    dek: 'Eighteen hubs opening at once across eleven cities, each needing a full crew on day one. Vahan ran all eighteen hiring funnels in parallel.',
    stats: [
      { n: '18', l: 'hubs staffed' },
      { n: '5 Weeks', l: 'end to end' },
      { n: '100%', l: 'day-one crew coverage' },
      { n: '31%', l: 'under hiring budget' },
    ],
    challenge: 'A simultaneous eighteen-hub launch left no room for sequential hiring. Local vendors could cover two or three cities well and the rest poorly, and no one had a single view of where each hub stood.',
    solution: [
      'Vahan stood up one funnel per hub, all visible on a single dashboard, with sourcing weighted by each hub’s local worker density.',
      'Where a city ran thin, the AI recruiter widened radius and role criteria automatically rather than waiting for a weekly review.',
    ],
    results: [
      'All 18 hubs opened with full day-one crews.',
      'Total hiring spend came in 31% under the budgeted figure.',
      'No hub launch was delayed by staffing.',
    ],
    quote: {
      text: 'Eleven cities, one dashboard. That was the difference between managing a launch and firefighting one.',
      name: 'Regional Operations Lead',
      role: 'Zomato',
    },
  },

  'dunzo-marketplace': {
    company: 'Dunzo',
    industry: 'E-commerce',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    roles: 'Pickers, packers',
    regions: '6 cities',
    title: 'How Dunzo’s marketplace arm onboarded 2,400 pickers in a quarter.',
    dek: 'A new marketplace category meant a warehouse role Dunzo had never hired for at volume. Vahan built the funnel from scratch in three weeks.',
    stats: [
      { n: '2,400', l: 'pickers onboarded' },
      { n: '1 Quarter', l: 'to full strength' },
      { n: '3 Weeks', l: 'to first funnel' },
      { n: '88%', l: '30-day retention' },
    ],
    challenge: 'Dunzo’s marketplace launch introduced a picking-and-packing role with no existing hiring playbook, no benchmark cost, and a headcount target that had to be met before the category could open.',
    solution: [
      'Vahan profiled the role against comparable warehouse work in its network and built a screening flow around shift tolerance, location and prior handling experience.',
      'Cohorts were sequenced against warehouse readiness, so no one was onboarded before there was a shift for them.',
    ],
    results: [
      '2,400 pickers onboarded inside a single quarter.',
      '30-day retention held at 88%, above the warehouse benchmark.',
      'The funnel was reusable for the next two category launches.',
    ],
    quote: {
      text: 'We had no playbook for this role. Three weeks later we had one that worked, and we have reused it twice since.',
      name: 'Head of Marketplace Operations',
      role: 'Dunzo',
    },
  },

  'zomato-mobility': {
    company: 'Zomato',
    industry: 'Mobility',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    roles: 'Two-wheeler partners',
    regions: '29 cities',
    title: 'How Zomato onboarded 12,000 two-wheeler partners in 90 days.',
    dek: 'A vehicle-specific supply target across twenty-nine cities, with document verification as the usual choke point. Vahan moved verification to the front of the funnel.',
    stats: [
      { n: '12,000', l: 'partners onboarded' },
      { n: '90 Days', l: 'to target' },
      { n: '2 Days', l: 'median time to activation' },
      { n: '46%', l: 'fewer verification rejects' },
    ],
    challenge: 'Two-wheeler supply targets were being missed not for lack of candidates but because licence, RC and insurance checks were happening after candidates had already invested time — and rejections at that stage cost the whole funnel.',
    solution: [
      'Vahan moved document capture and validation to the first conversation, so candidates who could not qualify never entered the pipeline.',
      'The AI recruiter guided candidates through re-submission in their own language, recovering applicants who would previously have been rejected outright.',
    ],
    results: [
      '12,000 two-wheeler partners onboarded in 90 days.',
      'Median time from first contact to activation fell to two days.',
      'Verification rejections at the end of the funnel dropped 46%.',
    ],
    quote: {
      text: 'Checking documents first felt counter-intuitive until we saw what it did to the drop-off curve.',
      name: 'Supply Growth Manager',
      role: 'Zomato',
    },
  },

  'zomato-onboarding': {
    company: 'Zomato',
    industry: 'Food Delivery',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    roles: 'Delivery partners',
    regions: 'Pan-India',
    title: 'How Zomato cut rider onboarding time from nine days to two.',
    dek: 'Nine days between a rider saying yes and a rider earning is nine days of drop-off. Vahan compressed it to two.',
    stats: [
      { n: '9 → 2', l: 'days to first shift' },
      { n: '78%', l: 'faster onboarding' },
      { n: '+23 pts', l: 'completion rate' },
      { n: '0', l: 'added recruiter hours' },
    ],
    challenge: 'Riders who agreed to join were losing interest during a nine-day onboarding sequence of calls, document uploads, training slots and kit collection — each one a separate handoff with its own queue.',
    solution: [
      'Vahan collapsed the sequence into a single guided flow, with the AI recruiter running document collection and training scheduling in one conversation.',
      'Riders who stalled were re-engaged automatically at the exact step they abandoned, rather than restarting from the top.',
    ],
    results: [
      'Median onboarding time fell from nine days to two.',
      'Onboarding completion rose 23 percentage points.',
      'No additional recruiter hours were required.',
    ],
    quote: {
      text: 'Every day we removed from onboarding showed up directly in riders on the road.',
      name: 'Onboarding Program Lead',
      role: 'Zomato',
    },
  },

  'dunzo-darkstores': {
    company: 'Dunzo',
    industry: 'Quick Commerce',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    roles: 'Store staff, delivery partners',
    regions: '60 stores, 5 cities',
    title: 'How Dunzo staffed 60 new dark stores in a single quarter.',
    dek: 'Sixty stores, five cities, one quarter — with each store needing staff in place before it could take its first order.',
    stats: [
      { n: '60', l: 'dark stores staffed' },
      { n: '1 Quarter', l: 'to completion' },
      { n: '6 Days', l: 'average store fill time' },
      { n: '19%', l: 'below cost target' },
    ],
    challenge: 'Dark store economics only work if a store starts taking orders the week it is fitted out. Staffing was the step most likely to slip, and a slipped store carried full rent with no revenue.',
    solution: [
      'Vahan pre-built candidate pools around each planned store location weeks before fit-out completed.',
      'Store-level funnels were tied to the property timeline, so hiring finished as the store became operational rather than after.',
    ],
    results: [
      'All 60 stores staffed within the quarter.',
      'Average time to fill a store’s roster: six days.',
      'Hiring cost landed 19% below target.',
    ],
    quote: {
      text: 'A dark store that is fitted out but unstaffed is just expensive rent. That gap is now measured in days.',
      name: 'Head of Store Expansion',
      role: 'Dunzo',
    },
  },

  'squadstack-cost': {
    company: 'SquadStack',
    industry: 'Sales & Telecalling',
    logo: 'assets/homepage/squadstack%20logo.svg',
    image: 'assets/homepage/squadstack%20image.svg',
    roles: 'Tele-callers',
    regions: 'Pan-India, remote',
    title: 'How SquadStack halved the cost of every qualified agent.',
    dek: 'The cost of a qualified agent, not a raw applicant, was the number SquadStack wanted to move. It came down 51%.',
    stats: [
      { n: '51%', l: 'lower cost per qualified agent' },
      { n: '7', l: 'languages screened' },
      { n: '4.5x', l: 'screening throughput' },
      { n: '68%', l: 'interview-to-offer rate' },
    ],
    challenge: 'SquadStack’s recruiters were spending most of their week on first-round language and aptitude screening — work that filtered out three quarters of applicants and consumed the hours that should have gone into closing the rest.',
    solution: [
      'Vahan’s AI recruiter took over first-round screening across seven languages, scoring fluency, comprehension and availability on a consistent rubric.',
      'Only candidates who cleared the rubric reached a human interview, and they arrived with their screening transcript attached.',
    ],
    results: [
      'Cost per qualified agent fell 51%.',
      'Screening throughput rose 4.5x with the same team.',
      'Interview-to-offer conversion reached 68%.',
    ],
    quote: {
      text: 'Our recruiters now spend their time on the candidates who are going to make it. That is the whole change.',
      name: 'Talent Operations Manager',
      role: 'SquadStack',
    },
  },

  'dunzo-lastmile': {
    company: 'Dunzo',
    industry: 'Logistics',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    roles: 'Last-mile partners',
    regions: '9 cities',
    title: 'How Dunzo kept last-mile fleets 94% filled through peak season.',
    dek: 'Peak season is when fleet fill rates usually collapse. Dunzo held at 94% by hiring against attrition rather than after it.',
    stats: [
      { n: '94%', l: 'fleet fill rate at peak' },
      { n: '9', l: 'cities held' },
      { n: '−38%', l: 'unfilled shift hours' },
      { n: '7 Days', l: 'replacement lead time' },
    ],
    challenge: 'Peak-season attrition and peak-season demand arrive together. Dunzo was replacing partners after they left, which meant fill rates fell exactly when order volumes were highest.',
    solution: [
      'Vahan modelled expected attrition per city and ran replacement hiring ahead of it, keeping a rolling buffer sized to each city’s churn.',
      'The buffer was drawn down and refilled weekly, so cost tracked actual attrition rather than a fixed over-hire.',
    ],
    results: [
      'Fleet fill rate held at 94% across the peak.',
      'Unfilled shift hours fell 38% year on year.',
      'Median replacement lead time: seven days.',
    ],
    quote: {
      text: 'Hiring ahead of churn instead of behind it sounds obvious. Doing it in nine cities at once is the hard part.',
      name: 'Last-Mile Operations Head',
      role: 'Dunzo',
    },
  },

  'zomato-warehouse': {
    company: 'Zomato',
    industry: 'E-commerce',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    roles: 'Warehouse associates',
    regions: '12 facilities',
    title: 'How Zomato’s supply arm hired 1,800 warehouse associates.',
    dek: 'Twelve facilities, one associate profile, and a retention problem that started at the job description. Vahan fixed the front of the funnel.',
    stats: [
      { n: '1,800', l: 'associates hired' },
      { n: '12', l: 'facilities' },
      { n: '+29 pts', l: '60-day retention' },
      { n: '22%', l: 'lower cost per hire' },
    ],
    challenge: 'Associates were joining and leaving inside two months. Exit conversations pointed at the same thing: shift patterns and physical demands that had not been made clear before the first day.',
    solution: [
      'Vahan rewrote the screening conversation to surface shift timings, lifting requirements and facility location before a candidate committed.',
      'Candidates who self-selected out at that stage cost nothing; the ones who stayed in knew what they were joining.',
    ],
    results: [
      '1,800 associates hired across 12 facilities.',
      '60-day retention improved 29 percentage points.',
      'Cost per retained hire fell 22%.',
    ],
    quote: {
      text: 'Telling people the hard parts up front lost us applicants and won us employees.',
      name: 'Warehouse HR Lead',
      role: 'Zomato',
    },
  },

  'dunzo-ev': {
    company: 'Dunzo',
    industry: 'Mobility',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    roles: 'EV delivery partners',
    regions: '4 cities',
    title: 'How Dunzo built a 5,000-strong EV rider fleet across four cities.',
    dek: 'An EV-only fleet needs riders who will accept range limits and charging routines. Vahan screened for willingness, not just availability.',
    stats: [
      { n: '5,000', l: 'EV riders onboarded' },
      { n: '4', l: 'cities' },
      { n: '81%', l: '90-day retention' },
      { n: '2.6x', l: 'faster than pilot' },
    ],
    challenge: 'Dunzo’s EV pilot had shown that riders recruited on standard delivery criteria often left within weeks once they encountered charging stops and range planning. Scaling the fleet meant screening for a different kind of fit.',
    solution: [
      'Vahan added EV-specific questions to the screening conversation — charging access at home, comfort with range planning, willingness to work fixed zones.',
      'Riders were matched to zones with charging density that suited their answers, rather than assigned by proximity alone.',
    ],
    results: [
      '5,000 EV riders onboarded across four cities.',
      '90-day retention reached 81%, against 44% in the pilot.',
      'Fleet build-out ran 2.6x faster than the pilot pace.',
    ],
    quote: {
      text: 'The pilot taught us that an EV rider is a different hire. Vahan turned that lesson into a screening question.',
      name: 'EV Fleet Program Lead',
      role: 'Dunzo',
    },
  },

};
