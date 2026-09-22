/* =========================================================================
   Vahan — case study content
   Keyed by the ?id= slug used on case-studies.html; case-study.html renders
   whichever entry the query string asks for. Key order is also the order the
   "More case studies" rail walks through.
   ========================================================================= */
window.VAHAN_CASE_STUDIES = {

  'zomato-scale': {
    company: 'Zomato',
    brandColor: '#f61a49',
    industry: 'Food Delivery & Quick Commerce',
    useCase: 'Work and Employee Management',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    heroImage: 'assets/casestudy/zomato-hero.webp',
    /* the photo that closes "The Challenge"; the poster falls back to the
       shared placeholder until a real still and video URL land */
    storyImage: 'assets/casestudy/zomato-story.jpg',
    roles: 'Delivery partners',
    regions: '42 cities',
    title: 'How Zomato scaled its delivery workforce in times of need.',
    heroTitle: 'Cutting Time-to-Hire in Half.',
    heroStat: { n: '2X', l: 'faster rider onboarding' },
    overview: 'One of India’s largest food and quick commerce platforms, relying on a constant, high-volume pipeline of last-mile delivery riders to keep operations running across its busiest tier-1 cities.',
    dek: 'As demand for delivery riders surged, the client’s manual telecalling process struggled to keep pace. recruiters spent most of their time on repetitive screening instead of closing candidates.',
    stats: [
      { n: '3.2x', l: 'faster ramp-up' },
      { n: '18K', l: 'partners activated' },
      { n: '27%', l: 'lower cost per hire' },
      { n: '4 Days', l: 'average fulfilment' },
    ],
    challenge: [
      'The client relies on a constant, high-volume pipeline of last-mile delivery riders to keep operations running across its busiest tier-1 cities. As demand for delivery riders surged, the existing hiring process struggled to keep pace.',
      'Sourcing and qualifying candidates depended heavily on manual telecalling. Recruiters were spending the bulk of their time on repetitive, low-value conversations, verifying basic eligibility, explaining the role, and screening for intent, before a candidate could even move to onboarding. This manual overload directly inflated time-to-hire in the client’s select tier-1 cities, the very markets where delivery capacity mattered most and where any hiring lag translated into missed fulfillment SLAs.',
      'The client needed a way to qualify and activate riders faster, without simply adding more recruiters to the phones.',
    ],
    solutionIntro: 'Vahan deployed its end-to-end AI Recruiter, a combined voice and chat bot, to take over the candidate qualification and onboarding journey for last-mile delivery hiring in the client’s key tier-1 cities.',
    solutionPoints: [
      {
        label: 'Automated first-line engagement',
        text: 'every inbound and sourced candidate was greeted, screened, and qualified by the AI voice/chat bot instead of waiting in a manual telecalling queue.',
      },
      {
        label: 'Consistent, always-on qualification',
        text: 'the AI recruiter handled eligibility checks, role explanation, and intent screening at scale, any time of day, removing bottlenecks caused by recruiter bandwidth.',
      },
      {
        label: 'Human effort redirected to high-value work',
        text: 'by taking repetitive screening off recruiters’ plates, the client’s team could focus on edge cases and closing, rather than volume calling.',
      },
      {
        label: 'End-to-end coverage',
        text: 'the same AI layer carried qualified candidates through to onboarding, creating a seamless handoff from first contact to activation.',
      },
    ],
    solutionClose: 'The result was a hiring engine that could absorb tier-1 city demand spikes without a proportional increase in manual recruiter effort.',
    impact: [
      'With Vahan’s AI Recruiter live across its priority tier-1 markets, the client saw a step-change in both hiring speed and recruiter efficiency: riders were onboarded and activated at 2X the speed of the prior manual process, directly reducing time-to-hire in the cities that mattered most to the client’s delivery capacity.',
      'At the same time, calling productivity effectively doubled. The same recruiting effort now qualified twice as many candidates, since the AI recruiter absorbed the repetitive, high-volume screening work end to end. Qualification was handled 100% by AI, with zero manual telecalling load.',
    ],
    solution: [
      'Vahan plugged its AI recruiter into Zomato’s existing onboarding flow. Candidates were sourced from the Vahan worker network, screened over a vernacular voice conversation, and handed off already qualified on documents, vehicle and city preference.',
    ],
    results: [
      'Ramp-up to full festive capacity took five weeks instead of sixteen.',
    ],
    quote: {
      text: 'We stopped thinking about hiring as a bottleneck. Vahan gave us a supply line we could turn up or down with the demand curve.',
      name: 'Head of Supply Operations',
      role: 'Zomato',
    },
    /* the design closes on a Zomato card and a Dunzo card; this study is the
       Zomato one the frame draws, so the rail takes the other Zomato story */
    more: ['blinkit-attribution', 'dunzo-sourcing'],
  },

  'dunzo-sourcing': {
    company: 'Dunzo',
    industry: 'Quick Commerce',
    useCase: 'Sourcing Cost & Funnel Visibility',
    cat: 'quick',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Delivery partners, pickers',
    regions: '8 metros',
    title: 'How Dunzo cut sourcing costs by 40% in three months.',
    heroTitle: 'Paying for Hires, Not for Leads.',
    bandStats: [
      { n: '40%',      l: 'lower sourcing cost' },
      { n: '3 Months', l: 'to full rollout' },
      { n: '2.4x',     l: 'more qualified leads' },
      { n: '91%',      l: 'document-ready on arrival' },
    ],
    overview: 'A quick commerce platform operating across eight metros, running delivery partners and store pickers on a funnel fed almost entirely by paid third-party leads.',
    dek: 'Dunzo was paying a premium for candidates who never reached their first shift. Rebuilding the top of the funnel around Vahan’s network cut the cost of every real hire.',
    challenge: [
      'Dunzo’s cost per hire was dominated by candidates who were sourced, paid for, and then lost somewhere between the first call and the first shift. The invoice was settled at the lead stage, long before anyone knew whether that lead would ever work a shift.',
      'Because spend sat with vendors, the team had no visibility into which channels were producing workers who actually stayed. Two channels could report identical lead volumes while one delivered four times the activations, and nothing in the reporting would show it.',
      'Dunzo needed the funnel measured in activated partners rather than in leads bought, and it needed that measurement channel by channel.',
    ],
    solutionIntro: 'Vahan replaced the paid-lead mix with sourcing from its own worker network and instrumented every stage of the funnel, so cost could be read against outcomes rather than against volume.',
    solutionPoints: [
      {
        label: 'Owned supply instead of bought leads',
        text: 'candidates came from Vahan’s worker network, removing the vendor margin that sat on every lead regardless of whether it converted.',
      },
      {
        label: 'A measurable funnel end to end',
        text: 'lead, screened, documented and activated were tracked as distinct stages, so spend could be attributed to the stage that actually mattered.',
      },
      {
        label: 'AI screening in seven languages',
        text: 'the AI recruiter qualified candidates before any Dunzo recruiter time was spent on them, in whichever language the candidate was comfortable in.',
      },
      {
        label: 'Documents collected up front',
        text: 'verification moved ahead of the first Dunzo touchpoint, so candidates arrived ready to activate rather than ready to start paperwork.',
      },
    ],
    solutionClose: 'The effect was to move the whole commercial conversation from cost per lead to cost per activated partner — the only number that tracked with delivery capacity.',
    impact: [
      'Within a single quarter, sourcing cost per activated partner fell 40%, with the same weekly activation volume. Qualified leads per rupee of spend rose 2.4x once the vendor margin and the unconvertible leads came out of the mix.',
      '91% of candidates now reach their first Dunzo conversation with documents already verified, which removed the single largest cause of drop-off between offer and first shift.',
    ],
    outcomes: [
      {
        n: '40% lower sourcing cost',
        t: 'Cost per activated partner fell by 40% inside one quarter, at unchanged volume.',
      },
      {
        n: '2.4x more qualified leads per rupee',
        t: 'Owned supply and AI screening removed the vendor margin and the leads that never converted.',
      },
      {
        n: '91% document-ready on arrival',
        t: 'Verification ahead of the first Dunzo touchpoint closed the biggest gap between offer and first shift.',
      },
    ],
    testimonial: {
      text: 'The number that changed our mind was cost per activation, not cost per lead. That is the only one that ever mattered.',
      name: 'Director, Operations',
      role: 'Dunzo',
    },
    more: ['squadstack-pipeline', 'zomato-hubs'],
  },

  'squadstack-pipeline': {
    company: 'SquadStack',
    industry: 'Sales & Telecalling',
    useCase: 'Always-On Hiring Pipeline',
    cat: 'sales',
    logo: 'assets/homepage/squadstack%20logo.svg',
    image: 'assets/homepage/squadstack%20image.svg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Tele-callers, sales agents',
    regions: 'Pan-India, remote',
    title: 'How SquadStack built a hiring pipeline that scales.',
    heroTitle: 'A Pipeline That Is Always There.',
    bandStats: [
      { n: '3,000+', l: 'agents hired' },
      { n: '0',      l: 'new recruiters added' },
      { n: '5 Days', l: 'contract to first cohort' },
      { n: '2.1x',   l: 'pipeline throughput' },
    ],
    overview: 'A remote-first sales and telecalling company staffing client programmes pan-India, where every signed contract converts directly into an agent headcount that has to be live within days.',
    dek: 'SquadStack needed a hiring engine that could absorb a new client contract without hiring more recruiters. Vahan built one that runs continuously.',
    challenge: [
      'Every new client contract meant a hiring sprint, and every sprint meant more recruiter headcount. Recruiting capacity was being bought in step with delivery capacity, which put a hard ceiling on how fast SquadStack could sign.',
      'The sprints were also cold starts. Each one began with an empty pipeline, so the first fortnight of a contract went into sourcing rather than into training and delivery, and the client felt that delay directly.',
      'SquadStack wanted the pipeline to be a standing capability rather than a project it restarted each quarter.',
    ],
    solutionIntro: 'Vahan ran always-on sourcing against SquadStack’s agent profile, keeping a warm bench of screened candidates ahead of demand rather than behind it.',
    solutionPoints: [
      {
        label: 'Continuous sourcing, not sprints',
        text: 'the funnel ran against a standing agent profile every week, so a new contract drew from a bench that already existed.',
      },
      {
        label: 'AI-led first-round screening',
        text: 'language, availability and basic aptitude were assessed by the AI recruiter, so SquadStack’s team only ever spoke to candidates worth interviewing.',
      },
      {
        label: 'Bench sized to the forecast',
        text: 'the warm pool was held at a level set by the contracts in the pipeline, not by the ones already signed.',
      },
      {
        label: 'No recruiter headcount in the loop',
        text: 'growth in hiring volume no longer required growth in the recruiting team, breaking the link that capped how fast SquadStack could sell.',
      },
    ],
    solutionClose: 'Hiring stopped being a project SquadStack restarted each quarter and became a service that was simply running whenever a contract landed.',
    impact: [
      'Over 3,000 agents were hired without adding a single recruiter to the team. Pipeline throughput per recruiter more than doubled, because the hours that had gone into first-round screening went into closing instead.',
      'A new client contract now produces its first trained cohort in five days rather than in the fortnight a cold start used to take, which changed what SquadStack could credibly commit to in a sales conversation.',
    ],
    outcomes: [
      {
        n: '3,000+ agents hired',
        t: 'Delivered without adding a single recruiter to the SquadStack team.',
      },
      {
        n: '5 days from contract to first cohort',
        t: 'A standing warm bench removed the cold start at the front of every new programme.',
      },
      {
        n: '2.1x pipeline throughput per recruiter',
        t: 'AI-led first-round screening moved recruiter hours from qualifying to closing.',
      },
    ],
    testimonial: {
      text: 'We used to staff up recruiting to staff up delivery. Now the pipeline is just there, and we draw from it.',
      name: 'VP, Talent',
      role: 'SquadStack',
    },
    more: ['squadstack-cost', 'dunzo-sourcing'],
  },

  'zomato-hubs': {
    company: 'Zomato',
    brandColor: '#f61a49',
    industry: 'Logistics',
    useCase: 'Multi-Site Launch Staffing',
    cat: 'logistics',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    heroImage: 'assets/casestudy/zomato-hero.webp',
    storyImage: 'assets/casestudy/zomato-story.jpg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Hub associates, supervisors',
    regions: '18 hubs, 11 cities',
    title: 'How Zomato staffed 18 new distribution hubs in five weeks.',
    heroTitle: 'Eighteen Hubs, One Launch Window.',
    bandStats: [
      { n: '18',      l: 'hubs staffed' },
      { n: '5 Weeks', l: 'end to end' },
      { n: '100%',    l: 'day-one crew coverage' },
      { n: '31%',     l: 'under hiring budget' },
    ],
    overview: 'A national food delivery and quick commerce platform opening eighteen distribution hubs simultaneously across eleven cities, each needing a full crew of associates and supervisors in place on its first operating day.',
    dek: 'Eighteen hubs opening at once across eleven cities, each needing a full crew on day one. Vahan ran all eighteen hiring funnels in parallel.',
    challenge: [
      'A simultaneous eighteen-hub launch left no room for sequential hiring. Staffing one hub at a time would have stretched the programme across a quarter, and every week a fitted-out hub stood idle carried rent and lease cost against no throughput.',
      'Local vendors could cover two or three cities well and the rest poorly. Coverage was strongest where a vendor already had a bench and thinnest exactly where the new hubs were opening, which is the opposite of what the launch needed.',
      'Worse, no one had a single view of where each hub stood. Progress arrived as eighteen separate weekly updates in eighteen different formats, which meant a hub could fall behind for a fortnight before anyone could act on it.',
    ],
    solutionIntro: 'Vahan stood up one hiring funnel per hub, all of them running at once and all of them visible on a single dashboard.',
    solutionPoints: [
      {
        label: 'Eighteen funnels in parallel',
        text: 'each hub got its own funnel rather than a place in a queue, so the programme ran to the slowest hub instead of to the sum of all of them.',
      },
      {
        label: 'Sourcing weighted by local density',
        text: 'effort was allocated against each hub’s local worker density rather than split evenly, putting the most sourcing where candidates were hardest to find.',
      },
      {
        label: 'Automatic widening where cities ran thin',
        text: 'where a city fell behind, the AI recruiter widened travel radius and role criteria immediately rather than waiting for a weekly review to notice.',
      },
      {
        label: 'One dashboard across eleven cities',
        text: 'every hub reported into the same view, so a hub slipping behind was visible the same day rather than at the next update.',
      },
    ],
    solutionClose: 'The launch became a single programme with eighteen tracked lines, rather than eighteen local hiring projects reporting separately.',
    impact: [
      'All eighteen hubs opened with full day-one crews, and no hub launch was delayed by staffing. The five-week end-to-end timeline held across all eleven cities, including the four where local vendor coverage had been weakest.',
      'Total hiring spend came in 31% under the budgeted figure, largely because weighting sourcing by local density removed the over-hiring that a flat per-hub allocation would have produced in the easy cities.',
    ],
    outcomes: [
      {
        n: '18 hubs staffed in 5 weeks',
        t: 'Every hub opened with a full day-one crew and none was delayed by staffing.',
      },
      {
        n: '100% day-one crew coverage',
        t: 'Parallel funnels meant the programme ran to the slowest hub, not to the sum of all eighteen.',
      },
      {
        n: '31% under hiring budget',
        t: 'Weighting sourcing by local worker density removed over-hiring in the easier cities.',
      },
    ],
    testimonial: {
      text: 'Eleven cities, one dashboard. That was the difference between managing a launch and firefighting one.',
      name: 'Regional Operations Lead',
      role: 'Zomato',
    },
    more: ['dunzo-darkstores', 'zomato-onboarding'],
  },

  'dunzo-marketplace': {
    company: 'Dunzo',
    industry: 'E-commerce',
    useCase: 'New Role Launch & Onboarding',
    cat: 'ecommerce',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Pickers, packers',
    regions: '6 cities',
    title: 'How Dunzo’s marketplace arm onboarded 2,400 pickers in a quarter.',
    heroTitle: 'A New Role, Hired at Volume.',
    bandStats: [
      { n: '2,400',    l: 'pickers onboarded' },
      { n: '1 Quarter', l: 'to full strength' },
      { n: '3 Weeks',  l: 'to first funnel' },
      { n: '88%',      l: '30-day retention' },
    ],
    overview: 'The marketplace arm of a quick commerce platform, opening a new category across six cities that depended on a picking-and-packing role the business had never hired for at volume.',
    dek: 'A new marketplace category meant a warehouse role Dunzo had never hired for at volume. Vahan built the funnel from scratch in three weeks.',
    challenge: [
      'Dunzo’s marketplace launch introduced a picking-and-packing role with no existing hiring playbook. There was no screening rubric, no benchmark cost per hire, and no history to say which candidate profile would last past the first month.',
      'The headcount target had to be met before the category could open at all, which meant the funnel had to be designed and delivering inside the same window — there was no pilot phase to learn in.',
      'Dunzo needed a role definition, a screening flow and a working pipeline built in parallel rather than in sequence.',
    ],
    solutionIntro: 'Vahan profiled the new role against comparable warehouse work already running in its network, and built the screening flow around the factors that actually predicted retention in that work.',
    solutionPoints: [
      {
        label: 'A profile borrowed from adjacent work',
        text: 'rather than starting from zero, the role was benchmarked against comparable picking and packing work already in Vahan’s network.',
      },
      {
        label: 'Screening on the factors that predict staying',
        text: 'shift tolerance, distance from the facility and prior handling experience were assessed up front, because those are what separate a one-month hire from a lasting one.',
      },
      {
        label: 'Cohorts sequenced to warehouse readiness',
        text: 'onboarding was tied to the facility schedule, so nobody was hired before there was a shift for them to work.',
      },
      {
        label: 'A reusable funnel, not a one-off push',
        text: 'the role definition and screening rubric were built as assets Dunzo kept, rather than as a campaign that ended with the headcount target.',
      },
    ],
    solutionClose: 'Three weeks after the brief, the category had a working hiring funnel — and a playbook for the next role like it.',
    impact: [
      '2,400 pickers were onboarded inside a single quarter, taking the new category to full strength on the schedule the launch had been planned against. 30-day retention held at 88%, above the warehouse benchmark Dunzo had been working to.',
      'The funnel itself proved the more durable result: it has since been reused, largely unchanged, for two further category launches.',
    ],
    outcomes: [
      {
        n: '2,400 pickers in one quarter',
        t: 'The new category reached full strength on the schedule the launch was planned against.',
      },
      {
        n: '88% 30-day retention',
        t: 'Screening on shift tolerance, distance and handling experience held retention above benchmark.',
      },
      {
        n: 'Reused for two more launches',
        t: 'The role definition and screening rubric became an asset Dunzo kept rather than a one-off campaign.',
      },
    ],
    testimonial: {
      text: 'We had no playbook for this role. Three weeks later we had one that worked, and we have reused it twice since.',
      name: 'Head of Marketplace Operations',
      role: 'Dunzo',
    },
    more: ['zomato-warehouse', 'dunzo-darkstores'],
  },

  'zomato-mobility': {
    company: 'Zomato',
    brandColor: '#f61a49',
    industry: 'Mobility',
    useCase: 'Document Verification & Activation',
    cat: 'mobility',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    heroImage: 'assets/casestudy/zomato-hero.webp',
    storyImage: 'assets/casestudy/zomato-story.jpg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Two-wheeler partners',
    regions: '29 cities',
    title: 'How Zomato onboarded 12,000 two-wheeler partners in 90 days.',
    heroTitle: 'Verification First, Not Last.',
    bandStats: [
      { n: '12,000', l: 'partners onboarded' },
      { n: '90 Days', l: 'to target' },
      { n: '2 Days',  l: 'median time to activation' },
      { n: '46%',     l: 'fewer verification rejects' },
    ],
    overview: 'A national delivery platform building two-wheeler supply across twenty-nine cities, where every partner has to clear licence, registration and insurance checks before a single delivery can be assigned.',
    dek: 'A vehicle-specific supply target across twenty-nine cities, with document verification as the usual choke point. Vahan moved verification to the front of the funnel.',
    challenge: [
      'Two-wheeler supply targets were being missed, but not for lack of candidates. Applications were healthy in every one of the twenty-nine cities; what was failing was the stretch between application and activation.',
      'Licence, registration certificate and insurance checks were happening at the end of the journey, after candidates had already sat through calls, training slots and kit collection. A rejection at that stage cost the whole funnel — the candidate’s time, the recruiter’s time and the training slot, all written off at once.',
      'Candidates whose papers simply needed re-submission were treated the same as candidates who could never qualify, so a recoverable problem became a terminal one.',
    ],
    solutionIntro: 'Vahan moved document capture and validation to the very first conversation, so the funnel filtered on eligibility before it spent anything on a candidate.',
    solutionPoints: [
      {
        label: 'Documents at first contact',
        text: 'licence, RC and insurance were captured and validated in the opening conversation, so candidates who could not qualify never entered the pipeline at all.',
      },
      {
        label: 'Guided re-submission in the candidate’s language',
        text: 'where papers were merely incomplete, the AI recruiter walked the candidate through fixing them rather than rejecting the application outright.',
      },
      {
        label: 'No training slot spent on an unqualified rider',
        text: 'training and kit collection only ever ran for candidates already cleared on documents, which returned those slots to riders who would use them.',
      },
      {
        label: 'One pass, twenty-nine cities',
        text: 'the same front-loaded flow ran across every city, so activation timelines stopped varying with local verification practice.',
      },
    ],
    solutionClose: 'Front-loading verification cost the funnel some applicants at the top and returned far more activated riders at the bottom.',
    impact: [
      '12,000 two-wheeler partners were onboarded inside the 90-day window, meeting the vehicle-specific supply target across all twenty-nine cities. Median time from first contact to activation fell to two days.',
      'Verification rejections at the end of the funnel dropped 46%, because the candidates who would have been rejected there were either resolved early or never entered — and the training and kit capacity they had been consuming went to riders who activated.',
    ],
    outcomes: [
      {
        n: '12,000 partners in 90 days',
        t: 'The two-wheeler supply target was met across all twenty-nine cities inside the window.',
      },
      {
        n: '2-day median time to activation',
        t: 'Clearing documents at first contact removed the longest wait in the journey.',
      },
      {
        n: '46% fewer verification rejects',
        t: 'Guided re-submission recovered candidates who would previously have been rejected outright.',
      },
    ],
    testimonial: {
      text: 'Checking documents first felt counter-intuitive until we saw what it did to the drop-off curve.',
      name: 'Supply Growth Manager',
      role: 'Zomato',
    },
    more: ['zomato-onboarding', 'dunzo-ev'],
  },

  'zomato-onboarding': {
    company: 'Zomato',
    brandColor: '#f61a49',
    industry: 'Food Delivery',
    useCase: 'Onboarding Speed & Completion',
    cat: 'food',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    heroImage: 'assets/casestudy/zomato-hero.webp',
    storyImage: 'assets/casestudy/zomato-story.jpg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Delivery partners',
    regions: 'Pan-India',
    title: 'How Zomato cut rider onboarding time from nine days to two.',
    heroTitle: 'Nine Days Down to Two.',
    bandStats: [
      { n: '9 → 2',  l: 'days to first shift' },
      { n: '78%',    l: 'faster onboarding' },
      { n: '+23 pts', l: 'completion rate' },
      { n: '0',      l: 'added recruiter hours' },
    ],
    overview: 'A pan-India food delivery platform onboarding delivery partners at continuous volume, where the gap between a rider agreeing to join and a rider earning is the single largest source of lost supply.',
    dek: 'Nine days between a rider saying yes and a rider earning is nine days of drop-off. Vahan compressed it to two.',
    challenge: [
      'Riders who had already agreed to join were losing interest during a nine-day onboarding sequence. The problem was not that any one step was slow; it was that there were so many of them.',
      'Calls, document uploads, training slots and kit collection were four separate handoffs, each with its own queue and its own owner. A rider who stalled at step three was treated as a fresh lead when someone picked them up again, and often restarted from the top.',
      'Every day in that sequence was a day a rider could take work somewhere else, and pan-India volumes meant even a small daily drop-off rate compounded into a large supply gap.',
    ],
    solutionIntro: 'Vahan collapsed the four-step sequence into a single guided flow, run end to end by the AI recruiter in one continuous conversation.',
    solutionPoints: [
      {
        label: 'One conversation, not four handoffs',
        text: 'document collection and training scheduling were handled inside the same AI-led flow, so nothing waited in a queue between steps.',
      },
      {
        label: 'Re-engagement at the exact step abandoned',
        text: 'a rider who stalled was picked up where they stopped rather than restarted from the beginning, which is what had been losing the half-finished ones.',
      },
      {
        label: 'Training slots booked while intent is live',
        text: 'a slot was scheduled in the same conversation in which the rider agreed, instead of in a later callback.',
      },
      {
        label: 'No additional recruiter load',
        text: 'the compression came from removing handoffs rather than from adding people to chase riders through them.',
      },
    ],
    solutionClose: 'The sequence that had taken nine days and four owners now takes two days and one flow.',
    impact: [
      'Median onboarding time fell from nine days to two, a 78% reduction, and onboarding completion rose 23 percentage points — the riders who had been lost mid-sequence were largely the ones the re-engagement flow recovered.',
      'None of it required additional recruiter hours. The gain came from removing queues between steps rather than from putting more people on chasing riders through them, which is what made it hold at pan-India volume.',
    ],
    outcomes: [
      {
        n: '9 days to 2 days',
        t: 'Median time from a rider agreeing to join to a rider earning, cut by 78%.',
      },
      {
        n: '+23 points onboarding completion',
        t: 'Re-engaging riders at the step they abandoned recovered those lost mid-sequence.',
      },
      {
        n: '0 added recruiter hours',
        t: 'The compression came from removing handoffs, not from adding people to chase them.',
      },
    ],
    testimonial: {
      text: 'Every day we removed from onboarding showed up directly in riders on the road.',
      name: 'Onboarding Program Lead',
      role: 'Zomato',
    },
    more: ['zomato-scale', 'zomato-mobility'],
  },

  'dunzo-darkstores': {
    company: 'Dunzo',
    industry: 'Quick Commerce',
    useCase: 'Store Launch Staffing',
    cat: 'quick',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Store staff, delivery partners',
    regions: '60 stores, 5 cities',
    title: 'How Dunzo staffed 60 new dark stores in a single quarter.',
    heroTitle: 'Staffed Before the Doors Open.',
    bandStats: [
      { n: '60',        l: 'dark stores staffed' },
      { n: '1 Quarter', l: 'to completion' },
      { n: '6 Days',    l: 'average store fill time' },
      { n: '19%',       l: 'below cost target' },
    ],
    overview: 'A quick commerce operator rolling out sixty dark stores across five cities in one quarter, each store needing its full roster of store staff and delivery partners before it can accept a first order.',
    dek: 'Sixty stores, five cities, one quarter — with each store needing staff in place before it could take its first order.',
    challenge: [
      'Dark store economics only work if a store starts taking orders the week it is fitted out. Rent, fit-out and inventory are all committed before the first order; every idle week is pure cost against no revenue.',
      'Staffing was consistently the step most likely to slip. Property and fit-out ran to a schedule that was known months out, while hiring only started once a store was nearly ready — which meant hiring was always the last thing and always the constraint.',
      'At sixty stores across five cities in a single quarter, a week of slippage per store was not a rounding error; it was most of a quarter of lost throughput.',
    ],
    solutionIntro: 'Vahan tied hiring to the property timeline rather than to the fit-out completion date, building candidate pools around each planned store weeks before it was ready.',
    solutionPoints: [
      {
        label: 'Pools built ahead of fit-out',
        text: 'candidate pools were assembled around each planned store location weeks before the fit-out finished, using the property schedule as the trigger.',
      },
      {
        label: 'One funnel per store, on the property schedule',
        text: 'store-level funnels were sequenced against the build plan, so hiring finished as the store became operational rather than after.',
      },
      {
        label: 'Local catchment per store',
        text: 'sourcing was run against each store’s own catchment, which is what made six-day fill times possible in cities where Dunzo had no existing presence.',
      },
      {
        label: 'Rosters, not headcount',
        text: 'each store was filled as a complete roster of store staff and delivery partners, so a store was never half-staffed and waiting.',
      },
    ],
    solutionClose: 'Hiring stopped being the last step in a store launch and became one that ran alongside it.',
    impact: [
      'All sixty stores were staffed within the quarter, with an average of six days to fill a store’s roster. No store stood fitted out and idle waiting on people.',
      'Hiring cost landed 19% below target, because pools built ahead of need removed the premium Dunzo had been paying for urgent, last-minute local hiring.',
    ],
    outcomes: [
      {
        n: '60 stores staffed in one quarter',
        t: 'Every store was filled across five cities without a launch slipping on staffing.',
      },
      {
        n: '6-day average store fill time',
        t: 'Pools built against the property schedule meant hiring finished as the store became operational.',
      },
      {
        n: '19% below cost target',
        t: 'Hiring ahead of need removed the premium paid for urgent last-minute local hiring.',
      },
    ],
    testimonial: {
      text: 'A dark store that is fitted out but unstaffed is just expensive rent. That gap is now measured in days.',
      name: 'Head of Store Expansion',
      role: 'Dunzo',
    },
    more: ['zomato-hubs', 'dunzo-lastmile'],
  },

  'squadstack-cost': {
    company: 'SquadStack',
    industry: 'Sales & Telecalling',
    useCase: 'Screening Cost & Throughput',
    cat: 'sales',
    logo: 'assets/homepage/squadstack%20logo.svg',
    image: 'assets/homepage/squadstack%20image.svg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Tele-callers',
    regions: 'Pan-India, remote',
    title: 'How SquadStack halved the cost of every qualified agent.',
    heroTitle: 'Cost Per Agent, Not Per Applicant.',
    bandStats: [
      { n: '51%',  l: 'lower cost per qualified agent' },
      { n: '7',    l: 'languages screened' },
      { n: '4.5x', l: 'screening throughput' },
      { n: '68%',  l: 'interview-to-offer rate' },
    ],
    overview: 'A remote-first telecalling business hiring agents pan-India across seven languages, where fluency and comprehension have to be assessed individually before anyone can be put in front of a client programme.',
    dek: 'The cost of a qualified agent, not a raw applicant, was the number SquadStack wanted to move. It came down 51%.',
    challenge: [
      'SquadStack’s recruiters were spending most of their week on first-round language and aptitude screening. It was necessary work — roughly three quarters of applicants did not clear it — but it consumed exactly the hours that should have gone into closing the quarter that did.',
      'It was also inconsistent. Seven languages assessed by different recruiters on different days produced a standard that drifted, which showed up later as agents who passed screening and then struggled on a live programme.',
      'The number SquadStack wanted to move was the cost of a qualified agent, not the cost of a raw applicant — and that number was dominated by recruiter hours, not by sourcing spend.',
    ],
    solutionIntro: 'Vahan’s AI recruiter took over first-round screening across all seven languages, scoring every candidate against the same rubric.',
    solutionPoints: [
      {
        label: 'One rubric across seven languages',
        text: 'fluency, comprehension and availability were scored consistently regardless of language or of which day the candidate applied.',
      },
      {
        label: 'Human interviews reserved for qualified candidates',
        text: 'only candidates who cleared the rubric reached a recruiter, so recruiter hours were spent on the quarter of applicants worth spending them on.',
      },
      {
        label: 'Screening transcript attached',
        text: 'candidates arrived at interview with their screening record, so the recruiter started from evidence rather than from the beginning.',
      },
      {
        label: 'Throughput uncoupled from headcount',
        text: 'screening volume could rise with demand without a matching rise in recruiting hours.',
      },
    ],
    solutionClose: 'The cost of a qualified agent stopped tracking recruiter hours and started tracking the thing SquadStack could actually forecast: applicant volume.',
    impact: [
      'Cost per qualified agent fell 51%, and screening throughput rose 4.5x with the same team — the same recruiters now handle four and a half times the screening volume because they are no longer doing the screening.',
      'Interview-to-offer conversion reached 68%, up from a rate that reflected how many unqualified candidates had been reaching interview. A consistent rubric, applied the same way in all seven languages, is most of that difference.',
    ],
    outcomes: [
      {
        n: '51% lower cost per qualified agent',
        t: 'The metric moved because recruiter hours came out of first-round screening.',
      },
      {
        n: '4.5x screening throughput',
        t: 'The same team now handles four and a half times the volume across seven languages.',
      },
      {
        n: '68% interview-to-offer rate',
        t: 'A consistent rubric meant the candidates reaching interview were the ones worth interviewing.',
      },
    ],
    testimonial: {
      text: 'Our recruiters now spend their time on the candidates who are going to make it. That is the whole change.',
      name: 'Talent Operations Manager',
      role: 'SquadStack',
    },
    more: ['squadstack-pipeline', 'zomato-scale'],
  },

  'dunzo-lastmile': {
    company: 'Dunzo',
    industry: 'Logistics',
    useCase: 'Attrition Planning & Fleet Fill',
    cat: 'logistics',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Last-mile partners',
    regions: '9 cities',
    title: 'How Dunzo kept last-mile fleets 94% filled through peak season.',
    heroTitle: 'Hiring Ahead of the Churn.',
    bandStats: [
      { n: '94%',    l: 'fleet fill rate at peak' },
      { n: '9',      l: 'cities held' },
      { n: '−38%',   l: 'unfilled shift hours' },
      { n: '7 Days', l: 'replacement lead time' },
    ],
    overview: 'A last-mile logistics operation running delivery fleets across nine cities, where peak-season order volume and peak-season partner attrition arrive in the same weeks.',
    dek: 'Peak season is when fleet fill rates usually collapse. Dunzo held at 94% by hiring against attrition rather than after it.',
    challenge: [
      'Peak-season attrition and peak-season demand arrive together. The weeks in which Dunzo most needed a full fleet were precisely the weeks in which partners were most likely to leave for a better-paying seasonal option.',
      'Dunzo was replacing partners after they left. A replacement took weeks to source and activate, which meant fill rates fell exactly when order volumes were highest and recovered only once the peak was over.',
      'The obvious fix — over-hiring across the board — was expensive in the seven cities where churn was moderate, and still not enough in the two where it was severe.',
    ],
    solutionIntro: 'Vahan modelled expected attrition city by city and ran replacement hiring against the forecast rather than against the resignation.',
    solutionPoints: [
      {
        label: 'Attrition modelled per city',
        text: 'each city got its own churn forecast, so the buffer reflected what that city actually loses rather than a national average.',
      },
      {
        label: 'A rolling buffer, sized to churn',
        text: 'a standing pool of screened, activation-ready partners was held per city at the level that city’s churn required.',
      },
      {
        label: 'Drawn down and refilled weekly',
        text: 'the buffer was replenished against actual departures each week, so cost tracked real attrition instead of a fixed over-hire.',
      },
      {
        label: 'Replacements already screened',
        text: 'because the buffer was pre-qualified, a departure converted into an active replacement in days rather than weeks.',
      },
    ],
    solutionClose: 'Replacement stopped being a reaction to a resignation and became a weekly refill against a forecast.',
    impact: [
      'Fleet fill rate held at 94% across the peak in all nine cities, against the collapse the previous peak had produced. Median replacement lead time came down to seven days.',
      'Unfilled shift hours fell 38% year on year — the measure that actually connects fleet fill to revenue, since an unfilled shift hour is an order the network cannot take.',
    ],
    outcomes: [
      {
        n: '94% fleet fill rate at peak',
        t: 'Held across all nine cities through the weeks when fill rates had always collapsed.',
      },
      {
        n: '38% fewer unfilled shift hours',
        t: 'The measure that connects fleet fill to revenue, down year on year.',
      },
      {
        n: '7-day replacement lead time',
        t: 'A pre-screened rolling buffer turned a departure into an active replacement in days.',
      },
    ],
    testimonial: {
      text: 'Hiring ahead of churn instead of behind it sounds obvious. Doing it in nine cities at once is the hard part.',
      name: 'Last-Mile Operations Head',
      role: 'Dunzo',
    },
    more: ['dunzo-darkstores', 'zomato-hubs'],
  },

  'zomato-warehouse': {
    company: 'Zomato',
    brandColor: '#f61a49',
    industry: 'E-commerce',
    useCase: 'Retention & Role Expectation Setting',
    cat: 'ecommerce',
    logo: 'assets/case%20study%20listing%20page/zomato%20logo.svg',
    image: 'assets/case%20study%20listing%20page/zomato%20image.svg',
    heroImage: 'assets/casestudy/zomato-hero.webp',
    storyImage: 'assets/casestudy/zomato-story.jpg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Warehouse associates',
    regions: '12 facilities',
    title: 'How Zomato’s supply arm hired 1,800 warehouse associates.',
    heroTitle: 'Telling People the Hard Parts First.',
    bandStats: [
      { n: '1,800',   l: 'associates hired' },
      { n: '12',      l: 'facilities' },
      { n: '+29 pts', l: '60-day retention' },
      { n: '22%',     l: 'lower cost per hire' },
    ],
    overview: 'The supply arm of a national commerce platform, staffing twelve warehouse facilities against a single associate profile covering picking, sorting and dispatch on rotating shifts.',
    dek: 'Twelve facilities, one associate profile, and a retention problem that started at the job description. Vahan fixed the front of the funnel.',
    challenge: [
      'Associates were joining and leaving inside two months. Gross hiring numbers looked healthy every month while net headcount barely moved, which meant the same roles were being filled repeatedly at full cost.',
      'Exit conversations pointed at the same two things: shift patterns and physical demands that had not been made clear before the first day. People were not leaving because the job was harder than the work they were used to — they were leaving because it was different from the job they had agreed to.',
      'Fixing retention therefore meant fixing the front of the funnel, not the back of it.',
    ],
    solutionIntro: 'Vahan rewrote the screening conversation so that the parts of the job most likely to cause an exit were the parts a candidate heard about first.',
    solutionPoints: [
      {
        label: 'Shift timings stated before commitment',
        text: 'rotating and night shift patterns were surfaced in the screening conversation rather than discovered in week one.',
      },
      {
        label: 'Physical demands made explicit',
        text: 'lifting requirements and standing hours were described plainly, so candidates could judge the work against what they were used to.',
      },
      {
        label: 'Facility location and commute up front',
        text: 'travel time to the specific facility was confirmed early, which is what turns a promising local candidate into a two-month one.',
      },
      {
        label: 'Self-selection made cheap',
        text: 'candidates who opted out at that stage cost nothing, while the ones who stayed in knew exactly what they were joining.',
      },
    ],
    solutionClose: 'The funnel deliberately lost applicants earlier in order to stop losing employees later.',
    impact: [
      '1,800 associates were hired across the twelve facilities, and 60-day retention improved by 29 percentage points. The gross hiring number came down while net headcount growth went up, because the roles stopped reopening.',
      'Cost per retained hire fell 22%. Screening out candidates before they were hired is far cheaper than replacing them after two months, which is what the previous funnel had effectively been doing.',
    ],
    outcomes: [
      {
        n: '1,800 associates across 12 facilities',
        t: 'Hired against a single profile covering picking, sorting and dispatch on rotating shifts.',
      },
      {
        n: '+29 points 60-day retention',
        t: 'Surfacing shifts, lifting and commute before commitment stopped the two-month exits.',
      },
      {
        n: '22% lower cost per retained hire',
        t: 'Self-selection at screening is far cheaper than replacement after two months.',
      },
    ],
    testimonial: {
      text: 'Telling people the hard parts up front lost us applicants and won us employees.',
      name: 'Warehouse HR Lead',
      role: 'Zomato',
    },
    more: ['dunzo-marketplace', 'zomato-onboarding'],
  },

  'dunzo-ev': {
    company: 'Dunzo',
    industry: 'Mobility',
    useCase: 'Fit-Based Screening & Zone Matching',
    cat: 'mobility',
    logo: 'assets/case%20study%20listing%20page/dunzo%20black%20logo.svg',
    image: 'assets/case%20study%20listing%20page/dunzo%20image.svg',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'EV delivery partners',
    regions: '4 cities',
    title: 'How Dunzo built a 5,000-strong EV rider fleet across four cities.',
    heroTitle: 'An EV Rider Is a Different Hire.',
    bandStats: [
      { n: '5,000', l: 'EV riders onboarded' },
      { n: '4',     l: 'cities' },
      { n: '81%',   l: '90-day retention' },
      { n: '2.6x',  l: 'faster than pilot' },
    ],
    overview: 'A quick commerce operator converting its delivery fleet to electric two-wheelers across four cities, where range limits, charging stops and fixed operating zones change the shape of the rider’s working day.',
    dek: 'An EV-only fleet needs riders who will accept range limits and charging routines. Vahan screened for willingness, not just availability.',
    challenge: [
      'Dunzo’s EV pilot had shown a retention problem that standard delivery hiring could not see. Riders recruited on the usual criteria — availability, licence, local knowledge — often left within weeks once they met charging stops and range planning in practice.',
      'Pilot 90-day retention sat at 44%, which made the fleet build-out arithmetic impossible: at that rate, most of the hiring effort would go into replacing riders rather than growing the fleet.',
      'Scaling the fleet meant screening for a different kind of fit, and the criteria that predicted it were not in any existing delivery rubric.',
    ],
    solutionIntro: 'Vahan added EV-specific questions to the screening conversation and used the answers to decide not just whether to hire a rider, but where to place them.',
    solutionPoints: [
      {
        label: 'Charging access assessed up front',
        text: 'whether a rider could charge at home, and how reliably, was established before the offer rather than after the first week.',
      },
      {
        label: 'Comfort with range planning',
        text: 'candidates were screened on willingness to plan a day around range and charging stops, which is the habit the pilot showed predicted staying.',
      },
      {
        label: 'Willingness to work fixed zones',
        text: 'EV operation constrains riders to defined zones, so acceptance of that constraint was screened for rather than assumed.',
      },
      {
        label: 'Zone matched to charging density',
        text: 'riders were placed in zones whose charging density suited their answers, instead of being assigned by proximity alone.',
      },
    ],
    solutionClose: 'The result was a fleet built out of riders who had already agreed to how an EV day actually works.',
    impact: [
      '5,000 EV riders were onboarded across the four cities, with 90-day retention reaching 81% against the pilot’s 44%. Nearly doubling retention is what made the build-out arithmetic work.',
      'Fleet build-out ran 2.6x faster than the pilot pace, not because sourcing moved faster but because far less of the hiring effort was going into replacing riders who had already left.',
    ],
    outcomes: [
      {
        n: '5,000 EV riders across 4 cities',
        t: 'Built on screening criteria the pilot showed actually predict staying.',
      },
      {
        n: '81% 90-day retention',
        t: 'Up from 44% in the pilot, once charging access and range comfort were screened for.',
      },
      {
        n: '2.6x faster than pilot pace',
        t: 'Less of the hiring effort went into replacing riders who had already left.',
      },
    ],
    testimonial: {
      text: 'The pilot taught us that an EV rider is a different hire. Vahan turned that lesson into a screening question.',
      name: 'EV Fleet Program Lead',
      role: 'Dunzo',
    },
    more: ['zomato-mobility', 'dunzo-lastmile'],
  },

  /* ---------------------------------------------------------------------
     Figma node 2695:3131 — Blinkit, "From Attribution Chaos to a Clean
     Ledger." Its own four-up stat band and a two-bullet solution.
     --------------------------------------------------------------------- */
  'blinkit-attribution': {
    company: 'Blinkit',
    brandColor: '#f8cb46',
    industry: 'Food Delivery & Quick Commerce',
    useCase: 'Hiring Attribution & Payout Accuracy',
    cat: 'food',
    logo: 'assets/casestudy/blinkit-logo.png',
    /* the mark ships tight-cropped, so it takes the 273 x 82 slot the frame
       draws rather than the wider box the padded SVG marks need */
    logoBox: '80.5% 24.2%',
    image: 'assets/casestudy/blinkit-story.webp',
    heroImage: 'assets/casestudy/blinkit-hero.webp',
    storyImage: 'assets/casestudy/blinkit-story.webp',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Delivery riders',
    regions: 'Pan-India',
    title: 'How Blinkit turned multi-channel hiring into one clean attribution ledger.',
    heroTitle: 'From Attribution Chaos to a Clean Ledger.',
    bandStats: [
      { n: '20 Lakh+', l: 'workers placed' },
      { n: '900+',     l: 'cities' },
      { n: '98%',      l: 'referral-code adoption via Vahan' },
      { n: '5 Crore+', l: 'workers in our network' },
    ],
    overview: 'A leading quick commerce platform in India, sourcing last-mile delivery riders at massive scale, lakhs of onboardings every month, through a mix of organic funnels, rider referrals, hiring agencies, and partner networks.',
    dek: 'Without a reliable way to credit each hire to its source, the same rider could be claimed by multiple channels, leading to disputed hires, inflated claims, and payout reconciliation that drained time and trust.',
    challenge: [
      'One of India’s largest quick commerce platforms sources last-mile delivery riders through a complex mix of channels running in parallel, including organic and digital funnels, rider referrals, multiple hiring agencies, and partner networks. At the scale of lakhs of monthly onboardings, this multi-channel model created a costly measurement problem.',
      'Without a deterministic way to credit each hire, the same rider could be claimed by more than one channel. Attribution was inferred after the fact rather than declared at source, leading to disputed hires, inflated claims, and payout reconciliation that consumed time and eroded trust. The client couldn’t cleanly answer the questions that mattered most to its unit economics: which hires were genuinely unique, which channel drove each activation, and whether each channel was paid accurately for the value it delivered.',
    ],
    solutionIntro: [
      'To fix this, the client rolled out a referral-code (RC) based attribution system: a unique code captured at onboarding that hard-links every rider to a single source channel. But the system was only as good as its adoption. Across dispersed, high-volume, digitally less-fluent cohorts, the client’s largest supply channels struggled to make it stick. The client needed its partners to drive RC adoption to near-ceiling levels, fast, without sacrificing volume.',
      'As the client’s largest external hiring channel, Vahan re-engineered its onboarding flow to make referral-code capture near-universal, while sustaining month-on-month volume growth:',
    ],
    solutionPoints: [
      {
        label: 'Network-wide adoption discipline',
        text: 'Vahan aligned its entire partner network, including hundreds of recruitment leaders and their tele calling teams, around RC capture, tracked at the individual partner level.',
      },
      {
        label: 'Volume and compliance held together',
        text: 'Adoption scaled without pulling back on placements. Discipline and scale aren’t a trade-off when the flow is engineered right.',
      },
    ],
    impact: [
      'With Vahan’s re-engineered flow live across the client’s network, the platform achieved a step-change in attribution quality: referral-code adoption climbed to 98% of onboardings via Vahan, giving the client a near-complete, deterministic dataset at one of its largest external agencies.',
      'Duplicate and disputed hires were eliminated, letting the client settle payouts against a hard record rather than negotiated claims, all while placements grew month-on-month.',
    ],
    /* the design pins the rail to these two rather than the next two in order */
    more: ['zomato-scale', 'dunzo-sourcing'],
  },

  /* ---------------------------------------------------------------------
     Figma node 2676:453 — "From Hiring Bottlenecks to a More Predictable
     Workforce." Runs without the eyebrow line, renames all three article
     headings, and closes on an outcomes rail plus a testimonial card.
     --------------------------------------------------------------------- */
  'shahi-exports': {
    company: 'Shahi Exports',
    brandColor: '#6b2a86',
    industry: 'Apparel Manufacturing & Export',
    useCase: 'Workforce Recruitment & Hiring',
    cat: 'manufacturing',
    logo: 'assets/casestudy/shahi-logo.png',
    /* the mark ships in full colour on a grey tile, not knocked out */
    logoTileBg: '#eaeaea',
    logoTileKnockout: false,
    image: 'assets/casestudy/shahi-story.webp',
    heroImage: 'assets/casestudy/shahi-hero.webp',
    storyImage: 'assets/casestudy/shahi-story.webp',
    videoThumb: 'assets/casestudy/story-video-poster.webp',
    roles: 'Production and plant manpower',
    regions: '52 plants',
    title: 'How Shahi Exports built a faster, more predictable manpower engine.',
    heroTitle: 'From Hiring Bottlenecks to a More Predictable Workforce.',
    /* this frame drops the "CLIENT SUCCESS STORY" line above the headline */
    eyebrow: false,
    bandStats: [
      { n: '40–50%', l: 'reduction in time-to-hire' },
      { n: '50%',    l: 'reduction in vendor management costs' },
      { n: '40%',    l: 'improvement in retention' },
      { n: '2×',     l: 'organic referrals' },
    ],
    headings: {
      challenge: 'Scaling Hiring with Speed and Consistency',
      solution:  'A Structured, Technology-Enabled Hiring Approach',
      impact:    'Measurable Workforce Outcomes',
    },
    overview: 'Shahi Exports is India’s largest apparel exporter, with 52 plants and a workforce of 125,000. At this scale, maintaining a consistent and efficient manpower pipeline is essential to smooth workforce operations.',
    dek: 'Shahi Exports needed to strengthen manpower hiring while improving speed, vendor efficiency and workforce outcomes. Vahan partnered with Shahi to bring a more structured, technology-enabled approach to recruitment and workforce operations.',
    challenge: [
      'Shahi Exports required quality manpower within strict timelines. The challenge was to strengthen the hiring process while maintaining consistency across workforce operations.',
      'Managing recruitment partners and vendors also added operational complexity. This made faster hiring, better vendor efficiency and stronger retention key priorities for the workforce operation.',
      'Shahi needed a more efficient and predictable way to strengthen its manpower supply.',
    ],
    solutionIntro: 'Vahan partnered with Shahi Exports to strengthen its workforce hiring engine through technology-enabled recruitment, AI-supported tools and a structured manpower supply network.',
    solutionPoints: [
      {
        label: 'Faster hiring',
        text: 'Accelerated sourcing and onboarding helped bring quality manpower within stricter timelines.',
      },
      {
        label: 'Structured vendor management',
        text: 'Vahan’s Vendor Platform improved hiring predictability and reduced the operational burden of vendor management.',
      },
      {
        label: 'Technology + recruitment supply',
        text: 'Tech-enabled workflows were combined with a human-led recruitment network to support hiring at scale.',
      },
      {
        label: 'Better workforce outcomes',
        text: 'Smoother candidate journeys supported improved retention and stronger organic referrals.',
      },
    ],
    impact: [
      'The partnership delivered measurable improvements across the hiring and workforce lifecycle.',
    ],
    /* the three-up rail that closes "Measurable Workforce Outcomes" */
    outcomes: [
      {
        n: '40–50% reduction in time-to-hire',
        t: 'Faster hiring helped Shahi onboard quality manpower within strict timelines.',
      },
      {
        n: '50% reduction in vendor management costs',
        t: 'Improved hiring predictability reduced the operational burden of vendor management.',
      },
      {
        n: '40% improvement in retention and 2× organic referrals',
        t: 'Technology-enabled workflows created smoother candidate journeys, supporting stronger retention and referral-led hiring.',
      },
    ],
    testimonial: {
      logo: 'assets/casestudy/shahi-logo.png',
      text: 'Vahan team is highly proactive and structured in their approach. With the support of their AI tools, we’ve been able to onboard quality manpower within strict timelines. Their partnership has brought efficiency and consistency to our workforce operations, helping our organisation run seamlessly.',
      name: 'Asunda Bhima Reddy',
      role: 'GM Operations, Shahi Exports',
      avatar: 'assets/casestudy/shahi-quote-avatar.jpg',
      image: 'assets/casestudy/shahi-quote.webp',
    },
    more: ['zomato-scale', 'dunzo-sourcing'],
  },

};
