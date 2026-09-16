import { StudyNote, Phase } from '../types/notes';

export const PHASES: Phase[] = [
  { id: 'strategy',           name: 'Exam Strategy',            subtitle: 'How to read a CPMAI question', icon: '🎯' },
  { id: 'business',           name: 'Business Understanding',   subtitle: 'Phase 1',                      icon: '💼' },
  { id: 'data-understanding', name: 'Data Understanding',       subtitle: 'Phase 2',                      icon: '🔍' },
  { id: 'data-prep',          name: 'Data Preparation',         subtitle: 'Phase 3',                      icon: '🧹' },
  { id: 'development',        name: 'Model Development',        subtitle: 'Phase 4',                      icon: '⚙️' },
  { id: 'evaluation',         name: 'Model Evaluation',         subtitle: 'Phase 5',                      icon: '📐' },
  { id: 'operations',         name: 'Model Operationalization', subtitle: 'Phase 6',                      icon: '🚀' },
];

export const NOTES: StudyNote[] = [
  // ─────────────────────────── EXAM STRATEGY ───────────────────────────
  {
    id: 'answer-patterns',
    phase: 'strategy',
    title: 'The Answer Pattern',
    summary:
      'Across all 270 questions the correct answer is almost always a proactive, structured, collaborative action taken BEFORE the next step. Learn the verbs and you can often eliminate two options without domain knowledge.',
    keyPoints: [
      'Winning verbs: assess, establish, define, identify, engage, document, verify, evaluate, map, align, collaborate. These dominate correct answers.',
      'Losing verbs: escalate, approve, proceed, continue, delay, review, reduce, adjust. "Escalate" and "only" appear in ZERO correct answers.',
      'The correct answer usually ADDS structure (a plan, an assessment, a control, a documented criterion) rather than making a judgement call.',
      'When two options both look reasonable, pick the one that happens EARLIER in the sequence. CPMAI is a phase-gated methodology — prerequisites matter more than speed.',
      'Ask "does this address the root cause or the symptom?" The root-cause option wins nearly every time.',
      'The AI project manager almost never does the technical work themselves and almost never decides alone. They assess, engage the right person, and establish a process.',
      'If an option says "the data science team will handle it" it is usually wrong — that phrase appears in 13 wrong answers and 0 correct ones.',
    ],
    traps: [
      { wrong: 'Escalate to the project sponsor', why: 'Escalation is never the CPMAI answer. The PM is expected to assess the situation and bring a recommendation, not hand the problem upward. "To the project sponsor" appears in 6 wrong answers and 0 correct.' },
      { wrong: 'Proceed and address it after release', why: 'Deferring a known gap past a phase gate is the single most common trap in this exam. Anything unresolved must be resolved before the gate, not after.' },
      { wrong: 'Adjust the target to match current results', why: 'CPMAI never lets you lower the bar to meet results. Success criteria are set in Business Understanding and the model must meet them — you fix the model, not the target.' },
      { wrong: 'Rely only on X', why: 'Any option containing "only" or "solely" is almost certainly wrong. CPMAI answers are comprehensive and multi-dimensional.' },
      { wrong: 'Delay until the next review cycle', why: 'Passive waiting is as wrong as premature action. The PM acts now — by assessing, not by deciding blindly.' },
    ],
  },
  {
    id: 'sequence-logic',
    phase: 'strategy',
    title: 'Sequence & Root Cause',
    summary:
      'Analysis of all 718 "why this is wrong" explanations shows wrong answers fail for four reasons: premature, delayed, skips a prerequisite, or treats a symptom. Every question is really asking "what comes next, and why."',
    keyPoints: [
      'The four failure modes, by frequency: acts "without first" doing a prerequisite (29), is "premature" (27), causes "delay" (27), "does not address" the real issue (27).',
      'A quarter of wrong explanations use the words "underlying" or "root cause" — the exam is obsessed with diagnosing before acting.',
      'When a scenario describes a problem, the first step is almost always to INVESTIGATE or ASSESS, not to fix. Corrective action without diagnosis is a trap.',
      'When a scenario describes readiness, the first step is to VERIFY against defined criteria, not to approve.',
      'When a scenario describes confusion or missing knowledge, the answer is to ENGAGE the right role (SME, data steward, data custodian, legal).',
      'When a scenario describes disagreement, the answer is to ALIGN stakeholders and DEFINE the boundary.',
      '"Assumes" appears in 15 wrong explanations — any option resting on an unverified assumption is wrong.',
    ],
    traps: [
      { wrong: 'Retrain the model immediately', why: 'Retraining is a fix. If you have not diagnosed why performance dropped, you may be retraining on the same broken data. Analyze degradation patterns first.' },
      { wrong: 'Collect more data to solve the quality problem', why: 'More of the same bad data does not help. Assess whether existing data meets the defined requirements before collecting anything.' },
      { wrong: 'Add the feature the stakeholder requested', why: 'Scope changes go through scope definition, not straight to the backlog. Define the approved use case, boundaries, and excluded functions.' },
      { wrong: 'Document the issue and move on', why: 'Documentation is usually part of the right answer but is never sufficient alone when an unresolved risk blocks a gate.' },
    ],
  },

  // ─────────────────── PHASE 1: BUSINESS UNDERSTANDING ───────────────────
  {
    id: 'ai-fit',
    phase: 'business',
    title: 'Is AI the Right Solution?',
    summary:
      'AI is justified only when the problem requires intelligence — defined as perception, prediction, and planning. If well-defined rules can solve it, traditional automation wins.',
    keyPoints: [
      'INTELLIGENCE = perception + prediction + planning. A problem needing pattern recognition, prediction, and adaptation to new information is a good AI fit. Memorise these three.',
      'Always evaluate whether traditional (rules-based) automation is sufficient BEFORE committing to AI. Well-defined rules indicate automation, not AI.',
      'Not every manual or slow process needs AI. Cost and complexity of AI must be justified by the intelligence requirement.',
      'Before any business case exists, engage stakeholders to align on organizational objectives, scope, and expected outcomes.',
      'Stakeholder interviews come before solution selection — skipping them risks solving the wrong problem.',
      'The PM translates technical findings into business-relevant language so sponsors can make informed decisions.',
    ],
    traps: [
      { wrong: 'Build the AI solution because leadership is enthusiastic', why: 'Executive enthusiasm builds momentum but cannot justify investment. You still need objective evidence: financial data and projected benefits.' },
      { wrong: 'Select a modelling technique first', why: 'Technique selection belongs to Model Development. In Business Understanding you clarify the business need.' },
      { wrong: 'Use AI because the process is manual and slow', why: 'Manual and slow points to automation. AI is warranted only when perception, prediction, or planning is genuinely required.' },
    ],
  },
  {
    id: 'ai-patterns',
    phase: 'business',
    title: 'The 7 AI Patterns',
    summary:
      'CPMAI classifies every AI solution into one of seven patterns. Matching the business goal to the right pattern is a recurring free mark — the pattern determines what data you need.',
    keyPoints: [
      'HYPER-PERSONALIZATION — builds and continuously updates a unique profile per individual. Needs individual behavioural, historical, and interaction data. Triggered by "personalize for individual users".',
      'AUTONOMOUS SYSTEMS — automates work that would otherwise need people. Triggered by "reduce labor costs", self-service, machine-led execution.',
      'PATTERNS & ANOMALIES — identifies unusual behaviour, groupings, or deviations. Typically unsupervised (no labels needed). Triggered by fraud detection, unusual transactions.',
      'PREDICTIVE ANALYTICS & DECISION SUPPORT — forecasts outcomes and recommends actions to a human decision-maker.',
      'CONVERSATIONAL / HUMAN INTERACTION — chatbots, assistants, natural-language interfaces.',
      'RECOGNITION — identifies objects in images, video, audio, text. Triggered by image recognition, medical imaging.',
      'GOAL-DRIVEN SYSTEMS — learns the optimal path to a defined goal, typically reinforcement learning.',
      'The pattern drives the data requirement. Identify the pattern, then the data type follows.',
    ],
    traps: [
      { wrong: 'Choosing Predictive Analytics for a fraud-detection scenario', why: 'If it identifies unusual or deviating transactions — especially with unsupervised learning — it is Patterns & Anomalies, not prediction.' },
      { wrong: 'Choosing Recognition for a personalization scenario', why: 'Recommending products to individual users is Hyper-personalization. Recognition is about identifying what something IS.' },
      { wrong: 'Choosing Conversational for any customer-facing solution', why: 'Customer-facing does not mean conversational. The pattern follows the mechanism, not the audience.' },
    ],
  },
  {
    id: 'stakeholders',
    phase: 'business',
    title: 'Stakeholders, Sponsors & SMEs',
    summary:
      'The most common correct action in the whole exam is engaging the right person. Know which role solves which problem — the exam distinguishes them precisely.',
    keyPoints: [
      'SUBJECT MATTER EXPERT (SME) / domain expert — explains what the data MEANS, where it comes from, how it changed, and how it is used in daily operations. Engage when the team lacks operational context or disagrees on which fields are reliable.',
      'DATA STEWARD — governance knowledge. Maps data sources, locations, and access permissions. Engage when you do not know where data lives or who controls it.',
      'DATA CUSTODIAN — responsible for storage, transfer, administration. Engage when data exists but has not been migrated into the development environment.',
      'PROJECT SPONSOR — makes funding decisions. Needs financial data, projected benefits, strategic alignment, ROI. Speak to them in business language, never raw technical findings.',
      'LEGAL & COMPLIANCE — must approve data usage rights BEFORE integration begins, not after.',
      'The PM translates between technical and business audiences. That translation is itself frequently the correct answer.',
      'When stakeholders disagree on scope, the answer is to define approved use case, intended outcomes, boundaries, and excluded functions.',
    ],
    traps: [
      { wrong: 'Ask the data science team to interpret the data', why: 'The data science team knows the model, not the business meaning of fields. Data origin and operational context come from an SME.' },
      { wrong: 'Present raw technical findings to the sponsor', why: 'Sponsors need business-relevant language connecting model behaviour to objectives. Untranslated technical detail does not support a funding decision.' },
      { wrong: 'Have the project manager personally locate the data', why: 'Mapping sources, owners, and permissions is the data steward role. The PM engages them.' },
    ],
  },
  {
    id: 'scope-business-case',
    phase: 'business',
    title: 'Scope & the AI Business Case',
    summary:
      'An AI business case is NOT a conventional one. It must carry data feasibility assumptions, data quality assessments, and recurring retraining costs — the three things that distinguish AI projects financially.',
    keyPoints: [
      'AI business case must include: data feasibility assumptions, data quality assessments, and recurring model retraining costs. This distinction is directly examined.',
      'Scope definition = approved use case, intended outcomes, boundaries, AND explicitly excluded functions. Naming what is OUT of scope is part of the answer.',
      'A formal scope document resolves competing stakeholder expectations before development begins.',
      'Feasibility has five dimensions: business, data, technical, operational, and ethical. A one-dimensional assessment is incomplete.',
      'Ethical and regulatory risk is assessed EARLY, in Business Understanding — not at deployment. This is especially true for hiring, lending, and healthcare use cases.',
      'Requirements definition precedes data collection: define the data types and formats needed before collecting anything.',
    ],
    traps: [
      { wrong: 'Reuse the standard IT project business case', why: 'It omits the AI-specific costs: ongoing labeling, monitoring, and retraining. AI has recurring operational cost that conventional software does not.' },
      { wrong: 'Defer the ethics review until before deployment', why: 'For algorithmic decision-making (hiring, lending, diagnosis), ethical and regulatory risk is a Business Understanding activity. Deferring it is a classic trap.' },
      { wrong: 'Schedule the kick-off meeting to meet the deadline', why: 'Time pressure never replaces scope definition. Document boundaries and deliverables first.' },
    ],
  },
  {
    id: 'success-roi',
    phase: 'business',
    title: 'Success Criteria, KPIs & ROI',
    summary:
      'Success criteria are defined up front and are never renegotiated to match results. AI ROI must include the recurring costs that conventional projects do not have.',
    keyPoints: [
      'AI-specific recurring costs: data labeling, model monitoring, and ongoing retraining cycles. These must appear in any AI ROI estimate.',
      'A complete ROI assessment covers expected benefits, costs, risks, AND the underlying assumptions — not revenue projections in isolation.',
      'BUSINESS PERFORMANCE KPIs measure value to the organization: customer satisfaction, product/service usage, ROI, revenue, engagement.',
      'MODEL PERFORMANCE METRICS measure the model: accuracy, precision, recall, F1. Do not confuse the two categories — the exam tests the distinction.',
      'Business impact metrics quantify the effect on organizational outcomes (revenue, cost savings, efficiency) and are what leadership needs post-deployment.',
      'Sponsors approve funding on cost-benefit analysis, expected returns, and the metrics that will measure delivery.',
      'If a deployed model hits technical targets but creates business cost (e.g. false positives driving rework), recalibrate the SUCCESS METRICS to capture business impact.',
    ],
    traps: [
      { wrong: 'Lower the accuracy target so the model qualifies', why: 'Never adjust the target to align with current results. This is one of the most repeated wrong answers in the entire question bank.' },
      { wrong: 'Report model accuracy to demonstrate business value', why: 'Accuracy is a model metric. Leadership needs business impact — revenue, cost savings, efficiency gains.' },
      { wrong: 'Estimate ROI from projected revenue growth alone', why: 'Incomplete. ROI needs benefits, costs, risks, and assumptions together.' },
    ],
  },
  {
    id: 'go-no-go',
    phase: 'business',
    title: 'Feasibility & the Go/No-Go Gate',
    summary:
      'The single most important rule in this exam: meeting technical targets is NEVER sufficient for a go decision. Readiness is technical AND operational AND documentation AND human.',
    keyPoints: [
      'A comprehensive readiness assessment covers technical performance, operational procedures, documentation, dependencies, and the people who must act on outputs.',
      'HUMAN READINESS counts: if front-line users (advisors, physicians, adjusters) lack capacity or preparedness to act on the output, the solution is not ready — regardless of model accuracy.',
      'Poor data quality at the data gate = NO-GO. Missing values, inconsistent definitions, and conflicting records mean pause and fix, not proceed carefully.',
      'Strong training performance with weak validation performance = NO-GO. The model has not generalized.',
      'Meeting a target on ONE test set or ONE facility is not evidence of overall readiness.',
      'Sponsor pressure, leadership enthusiasm, and launch deadlines never override an unresolved readiness gap.',
      'For clinical/diagnostic models the critical data gate factor is completeness, accuracy, and reliability of the LABELS — corrupted ground truth makes everything downstream invalid.',
    ],
    traps: [
      { wrong: 'Approve deployment because the model met the accuracy target', why: 'Technical targets alone never justify a go decision. Operational readiness, documentation, and dependency gaps must all be confirmed.' },
      { wrong: 'Proceed with a limited rollout and fix the gap after release', why: 'A limited rollout does not neutralise an unresolved gap — it just exposes fewer users to it. Resolve, then deploy.' },
      { wrong: 'Expedite launch because the sponsor requested it', why: 'The PM recommends delaying until segment performance and operational readiness gaps are resolved, regardless of sponsor pressure.' },
      { wrong: 'Approve because pilot testing was strong', why: 'Strong pilot results do not cover inconsistent performance on a new segment or unfinished monitoring and rollback procedures.' },
    ],
  },

  // ──────────────────── PHASE 2: DATA UNDERSTANDING ────────────────────
  {
    id: 'data-sources',
    phase: 'data-understanding',
    title: 'Data Sources, Ownership & Collection',
    summary:
      'The three AI-specific aspects of data understanding are SOURCES, DESCRIPTION, and QUALITY. Before collecting anything you must know where data lives and who controls access.',
    keyPoints: [
      'The three aspects of data understanding: sources (where it comes from), description (what it represents), quality (whether it is fit for use). Memorise this triplet.',
      'When data exists but its location is unknown: map the relevant data sources, owners, and storage locations first. This is foundational before collection or preparation.',
      'When data is located but not in the dev environment: coordinate extraction and transfer, or engage a data custodian to migrate it.',
      'Define required data types and formats BEFORE data collection begins so you collect the right data in the right structure.',
      'Real-time use cases (e.g. flagging fraud before a transaction completes) require a real-time ingestion pipeline — batch will not satisfy the requirement.',
      'Data that ages (sales, inventory, seasonal) needs established refresh and update procedures, or the model degrades.',
      'Verify access permissions and compliance requirements BEFORE integrating datasets with different restrictions.',
    ],
    traps: [
      { wrong: 'Begin collecting data immediately since the objective is confirmed', why: 'Knowing what data you need is not knowing where it is. Inventory sources, system owners, and storage locations first.' },
      { wrong: 'Migrate everything into a unified store to simplify access', why: 'Consolidation without checking usage rights and access restrictions creates compliance exposure. Verify first, integrate second.' },
      { wrong: 'Use a batch pipeline to reduce cost', why: 'If the business requirement is to act before a transaction completes, only real-time ingestion satisfies it.' },
    ],
  },
  {
    id: 'data-quality',
    phase: 'data-understanding',
    title: 'Data Quality Assessment',
    summary:
      'When quality issues surface, compare the data against DEFINED REQUIREMENTS before taking corrective action. The size of the gap determines the response — including a no-go.',
    keyPoints: [
      'First action on discovering quality issues: compare available data against the defined requirements and solution needs. This sizes the gap and informs what to do.',
      'If the target variable itself is inconsistent across source systems, everything stops until that is resolved — the model would learn from corrupted ground truth.',
      'Common quality issues: missing values, inconsistencies, duplicates, conflicting records, inconsistent definitions across systems.',
      'Data quality management favours automation to speed collection and reduce human error.',
      'Assess whether data sufficiently REPRESENTS the intended population or period (e.g. enough seasonal variation) before preparation begins.',
      'Severe, widespread quality problems justify a formal no-go decision at the data gate rather than pressing on.',
      'Quality controls scale with volume — as data volume grows, quality checks must strengthen.',
    ],
    traps: [
      { wrong: 'Begin cleaning the data immediately', why: 'Cleaning before assessing the gap against requirements risks expensive work on data that was never fit for the use case. Assess, then clean.' },
      { wrong: 'Proceed and handle quality issues during model training', why: 'Quality issues are resolved in Data Understanding and Data Preparation. Carrying them into training corrupts the model.' },
      { wrong: 'Collect additional data to compensate', why: 'Volume does not fix inconsistency. Resolve the definitional conflict at source first.' },
    ],
  },
  {
    id: 'data-bias',
    phase: 'data-understanding',
    title: 'Representativeness & Bias',
    summary:
      'Bias is found in the data before it is found in the model. When a disparity appears, INVESTIGATE the underlying cause — never jump straight to a fix or a deployment decision.',
    keyPoints: [
      'On discovering a performance disparity across groups: investigate the cause and address underlying data issues before any corrective or deployment decision.',
      'On discovering over/under-representation in training data: conduct bias and fairness testing to see whether the imbalance actually produces different outcomes.',
      'On confirmed bias during development: apply bias mitigation techniques, or rebalance training data to include diverse, representative patterns.',
      'An error rate for one demographic segment exceeding the documented threshold is the signal that training data or model configuration needs re-evaluation.',
      'Within-threshold variation is NOT a trigger. Slight increases or lower scores that remain inside documented limits warrant monitoring, not re-evaluation.',
      'Bias checks belong before model development begins — detecting bias early is a Responsible AI practice.',
      'Model retirement, newer versions, and better algorithms do NOT address bias. A newer model is not inherently less biased.',
    ],
    traps: [
      { wrong: 'Re-evaluate because one segment scored lower but stayed within tolerance', why: 'Within documented limits is not a breach. The trigger is EXCEEDING the documented threshold.' },
      { wrong: 'Retire the older model and deploy the newer version', why: 'Model lifecycle management is good practice but does not address bias. A new version can carry the same skew.' },
      { wrong: 'Apply a uniform data collection approach across regions', why: 'Standardising collection does not detect existing imbalance. Perform data and bias checks across the regional datasets.' },
      { wrong: 'Proceed since overall accuracy meets the target', why: 'Aggregate accuracy hides per-segment failure. Fairness is evaluated per group.' },
    ],
  },
  {
    id: 'data-privacy',
    phase: 'data-understanding',
    title: 'Privacy, PII & Compliance',
    summary:
      'Legal authorization comes before technical work. Verify usage rights, confirm regulatory compliance, and implement access controls BEFORE any integration or training.',
    keyPoints: [
      'The standard three-part answer for PII: verify data usage rights, confirm regulatory compliance, implement appropriate access controls.',
      'Anonymization / pseudonymization replaces sensitive identifiers with non-identifiable substitutes, protecting PII while preserving data utility for training.',
      'A PRIVACY IMPACT ASSESSMENT evaluates risks to data subjects from collection, processing, and use — conducted before the data is used.',
      'Data governance protocols specify how data will be collected, accessed, stored, AND deleted. Deletion is part of the answer.',
      'HIPAA governs US healthcare / patient health information. GDPR governs EU personal data. Match the regulation to the jurisdiction and domain.',
      'Legal and compliance sign-off on data usage rights happens BEFORE datasets are merged, not after integration.',
      'For medical images, strip identifiers from the metadata too — not just the visible content.',
    ],
    traps: [
      { wrong: 'Anonymize the data after training to protect privacy', why: 'Anonymization happens before training. Once PII is in the training set the exposure has already occurred.' },
      { wrong: 'Proceed since the data is internal', why: 'Internal origin does not confer usage rights. Legal authorization must be confirmed regardless of source.' },
      { wrong: 'Rely on the vendor contract for compliance', why: 'The organization retains accountability. Verify usage rights and regulatory compliance directly.' },
    ],
  },

  // ───────────────────── PHASE 3: DATA PREPARATION ─────────────────────
  {
    id: 'data-prep',
    phase: 'data-prep',
    title: 'Cleaning, Transformation & Features',
    summary:
      'Data preparation runs in a fixed order: clean and standardize, then engineer and select features. Every step must be documented well enough to reproduce.',
    keyPoints: [
      'ORDER: data cleaning and preprocessing → standardization/normalization → feature engineering and selection. The exam tests "what comes next" on this sequence.',
      'NORMALIZATION scales numerical features with very different ranges to a consistent range, so large-range features do not dominate learning.',
      'FEATURE ENGINEERING derives new variables from existing data and selects those most likely to contribute to model performance.',
      'ATTRIBUTE PRUNING removes irrelevant columns from a wide dataset, making it leaner and more manageable.',
      'STRUCTURED data follows a predefined schema. UNSTRUCTURED data (images, video, text) has no consistent format and needs specialized processing before training.',
      'Preparation work must be documented so it is reproducible and auditable — otherwise you cannot verify or repeat what was done.',
      'A data pipeline automates extract, transform, load. Manual data entry sits OUTSIDE the pipeline.',
    ],
    traps: [
      { wrong: 'Begin feature engineering before cleaning', why: 'Features derived from dirty data inherit the problems. Clean and standardize first.' },
      { wrong: 'Include manual data entry as a pipeline stage', why: 'Pipelines automate ETL. Human data entry is performed outside the automated pipeline.' },
      { wrong: 'Skip documentation to save time in preparation', why: 'Without documented preparation steps the work cannot be reproduced or audited — a recurring correct answer is establishing exactly this documentation.' },
    ],
  },

  // ──────────────────── PHASE 4: MODEL DEVELOPMENT ────────────────────
  {
    id: 'approach-selection',
    phase: 'development',
    title: 'Choosing the Approach',
    summary:
      'Technique selection is a trade-off assessment, never a pure accuracy contest. Interpretability and operational fit routinely beat raw performance.',
    keyPoints: [
      'Evaluate techniques against performance, complexity, AND interpretability — plus operational requirements. The most accurate model is often the wrong choice.',
      'When the people relying on the model need to explain or act on its output (transit controllers, loan officers, clinicians), interpretability outweighs marginal accuracy.',
      'DATA-CENTRIC approach improves the data quality; MODEL-CENTRIC changes the algorithm. If performance improves through cleaning and refinement alone, it is data-centric.',
      'Always compare a new model against the EXISTING BASELINE before recommending replacement. Improvement must be demonstrated, not assumed.',
      'Selection must be based on documented criteria and decision rationale — that documentation is what you show a sponsor who asks how the model was chosen.',
      'Check whether traditional automation suffices before committing to AI at all.',
    ],
    traps: [
      { wrong: 'Select the highest-accuracy ensemble model', why: 'If users need to understand the reasoning, an opaque ensemble fails the operational requirement no matter its accuracy.' },
      { wrong: 'Deploy the new model since it scored better in testing', why: 'Compare against the current baseline first. A better test score does not establish meaningful improvement over what is already running.' },
      { wrong: 'Change the algorithm to fix poor performance', why: 'If the root cause is data quality, a new algorithm learns the same flawed patterns. Consider the data-centric route first.' },
    ],
  },
  {
    id: 'training-iteration',
    phase: 'development',
    title: 'Training, Tuning & Iteration',
    summary:
      'After initial training the immediate next step is hyperparameter tuning on the VALIDATION set — never the test set. AI development is iterative by design.',
    keyPoints: [
      'Sequence: initial training → tune hyperparameters using the validation dataset → evaluate against unseen test data. Tuning on test data invalidates the evaluation.',
      'AI models require continuous refinement; infrastructure should support multiple pipelines for iterative development cycles, not a single one-shot run.',
      'Before a new development iteration, evaluate and prioritize accumulated data by quality and relevance — do not simply feed in everything collected.',
      'Compute must be assessed and provisioned BEFORE training begins. Infrastructure gaps discovered mid-training cause failures, delays, and budget overruns.',
      'Establish a secure, consistent development environment. Data scientists working on local machines with inconsistent configurations is a coordination problem to fix, not tolerate.',
    ],
    traps: [
      { wrong: 'Tune hyperparameters on the test set', why: 'The test set must stay unseen to give an honest generalization estimate. Tuning uses the validation set.' },
      { wrong: 'Provision more compute after training fails', why: 'Reactive. Assess requirements and provision adequate infrastructure before training starts.' },
      { wrong: 'Use all accumulated data for the next iteration', why: 'Evaluate and prioritize by quality and relevance first. Volume without relevance degrades the model.' },
    ],
  },
  {
    id: 'versioning-docs',
    phase: 'development',
    title: 'Documentation, Versioning & Reproducibility',
    summary:
      'If you cannot trace what changed, you cannot pass an audit or explain a result. Version control covers model code, training data, AND the training environment.',
    keyPoints: [
      'Version control must span model code, training data, and the training environment. Missing any one makes results untraceable.',
      'If a team cannot tell whether an improvement came from code or data changes, the root cause is missing version control — not an analysis problem.',
      'EXPERIMENT TRACKING documents every training run so configurations can be compared and reproduced.',
      'CONFIGURATION MANAGEMENT tracks model versions and parameters, giving the consistent record needed for formal evaluation.',
      'MODEL VERSIONING AND CHANGE CONTROL ensures updates are documented, reviewed, and approved before implementation.',
      'The model version control log is the artifact you review when a model produces inconsistent results and you must explain why.',
      'For a regulatory audit: version-controlled records of model iterations, datasets, and stakeholder approvals provide auditable evidence of lineage.',
      'A strong validation score never compensates for unresolved configuration and review gaps — controls must be complete before approval.',
    ],
    traps: [
      { wrong: 'Rely on the data scientist to recall what changed', why: 'Memory is not traceability. The exam always wants a version-controlled, documented record.' },
      { wrong: 'Approve the model since validation performance is strong', why: 'Performance does not offset missing logs, misaligned preprocessing scripts, or incomplete reviews. Complete the controls before approval.' },
      { wrong: 'Document the model after deployment for the audit', why: 'Audit evidence must be captured as the work happens. Reconstructed documentation is not verifiable lineage.' },
    ],
  },

  // ───────────────────── PHASE 5: MODEL EVALUATION ─────────────────────
  {
    id: 'metrics-thresholds',
    phase: 'evaluation',
    title: 'Metrics, Thresholds & Baselines',
    summary:
      'When a model misses its threshold, find the root cause before acting. When it meets the threshold but harms the business, fix the metric — not the model.',
    keyPoints: [
      'Missing a QA threshold: identify the ROOT CAUSE of the errors before determining next steps. Corrective action without diagnosis addresses the wrong problem.',
      'Meeting precision and recall but causing business cost (false positives driving rework): recalibrate success metrics to capture business impact.',
      'Model performance metrics = accuracy, precision, recall, F1 — objective evidence against quality thresholds during development and testing.',
      'Thresholds are documented in advance. Exceeding a documented threshold is a trigger; variation within it is not.',
      'Always compare against the existing baseline to prove meaningful improvement.',
      'A single test set result is weak evidence — performance must hold across segments.',
    ],
    traps: [
      { wrong: 'Retrain with more data to close the accuracy gap', why: 'You have not established why misclassification occurs. Diagnose the root cause first.' },
      { wrong: 'Lower the QA threshold to the achieved level', why: 'The bar does not move to meet the result. Fix the model or make a no-go decision.' },
      { wrong: 'Accept the model since precision and recall targets were met', why: 'If false positives are driving operational cost, the metric set is incomplete and must account for business impact.' },
    ],
  },
  {
    id: 'validation-generalization',
    phase: 'evaluation',
    title: 'Validation & Generalization',
    summary:
      'High training performance with low validation performance means the model has not generalized. That is a no-go, every time.',
    keyPoints: [
      'Strong on training, significantly weaker on validation = failure to generalize = withhold deployment approval until resolved.',
      'Cross-validation testing across different segments AND time periods confirms performance is reliable across production conditions.',
      'Compare candidate model performance across multiple data segments before selecting — consistency matters more than a single strong average.',
      'Performance dependent on one particular data subset is not validated performance.',
      'Validation happens before any deployment decision, not alongside it.',
    ],
    traps: [
      { wrong: 'Approve deployment because the training target was met', why: 'Training performance measures memorisation. Validation performance measures usefulness. Only the latter justifies deployment.' },
      { wrong: 'Deploy to a limited segment where the model performs well', why: 'Cherry-picking the favourable segment hides the generalization failure rather than resolving it.' },
      { wrong: 'Adjust the performance target to match validation results', why: 'The recurring trap across the whole exam. Resolve the gap; never move the bar.' },
    ],
  },

  // ─────────────── PHASE 6: MODEL OPERATIONALIZATION ───────────────
  {
    id: 'deployment-planning',
    phase: 'operations',
    title: 'Deployment Planning & Rollout',
    summary:
      'A deployment plan is a defined artifact with required contents. Learn the checklist — questions frequently ask what the plan must include.',
    keyPoints: [
      'A deployment plan must define: infrastructure requirements, system integration steps, release sequence, readiness criteria, approval checkpoints, and ROLLBACK procedures.',
      'PHASED ROLLOUT WITH ROLLBACK TRIGGERS is the standard risk-managed approach, especially when replacing an existing production system.',
      'Rollback procedures and contingency plans are required whenever the solution replaces a core operational process.',
      'Handover documentation and training for support/incident teams must be complete BEFORE go-live, not after.',
      'A BUSINESS CONTINUITY PLAN covers how the business keeps operating if the AI solution becomes unavailable.',
      'Conduct a safety, ethical, and security risk assessment before deployment and develop mitigation actions — do not carry surfaced risks into production.',
      'Cloud vs on-premise is decided on monitoring tool availability, scalability, and infrastructure support.',
    ],
    traps: [
      { wrong: 'Deploy on the leadership timeline and complete the plan in parallel', why: 'Outstanding readiness gaps must be addressed by a comprehensive deployment plan before deployment, regardless of the requested date.' },
      { wrong: 'Big-bang rollout across all sites to realise value faster', why: 'Phased rollout with rollback triggers manages technical and decisioning risk. Simultaneous full rollout removes your ability to contain failure.' },
      { wrong: 'Train the operations team after go-live', why: 'Operational teams must be equipped before go-live or you risk disruption during the transition.' },
    ],
  },
  {
    id: 'monitoring-drift',
    phase: 'operations',
    title: 'Monitoring, Drift & Retraining',
    summary:
      'AI models degrade as real-world data changes. Gradual performance decline after a successful period is model drift — and the response is structured and governed, not reactive.',
    keyPoints: [
      'MODEL DRIFT = performance declines after a period of successful operation because real-world data patterns changed. This is the default diagnosis for gradual post-deployment decline.',
      'DRIFT DETECTION monitors for changes in data patterns or model behaviour that could reduce performance, as part of model governance.',
      'The governed response to decline: initiate retraining AND conduct a formal performance review — controlled, documented, accountable. Not a panic fix.',
      'Before corrective action on reported underperformance, analyze performance trends and degradation patterns to find the root cause.',
      'Establish alerting systems that notify operations when KPIs drift below accepted thresholds.',
      'Continuous monitoring is the control that would have caught degradation early — it is the right answer to "what would have prevented this".',
      'AI handover documentation must include a RETRAINING PLAYBOOK and DRIFT MONITORING PROCEDURES. This is what makes AI handover different from conventional IT.',
    ],
    traps: [
      { wrong: 'Immediately retrain on the newest data', why: 'Retraining without a performance review skips governance and may not address the root cause. The governed answer pairs retraining with a formal review.' },
      { wrong: 'Roll back to the previous model version', why: 'The older model faces the same shifted data distribution. Diagnose the drift rather than reverting.' },
      { wrong: 'Hand over standard IT runbooks to operations', why: 'AI-specific needs — retraining and drift monitoring — are absent from conventional IT documentation.' },
    ],
  },
  {
    id: 'governance-compliance',
    phase: 'operations',
    title: 'Governance, Compliance & Audit',
    summary:
      'The largest single topic in the question bank. Governance means traceable records, assigned human accountability, and legal verification before action.',
    keyPoints: [
      'TRUSTWORTHY AI PRINCIPLES tested here: Responsible AI, Ethical AI, Transparent AI, Governed AI.',
      'RESPONSIBLE AI = humans are assigned to guard against errors, monitor outputs, and take corrective action. No assigned owner for monitoring = Responsible AI gap. It also covers laws, regulations, and internal compliance policies.',
      'EXPLAINABILITY / INTERPRETABILITY TOOLS are the answer whenever a stakeholder cannot understand how the model reached a decision.',
      'Regulatory requests for evidence are satisfied while protecting IP — you balance transparency with competitive interest, you do not refuse and you do not hand over everything.',
      'Verify with legal and compliance that data is approved BEFORE integration begins.',
      'Compliance monitoring plus periodic reporting is the structured mechanism for tracking adherence over time.',
      'Bias testing is what demonstrates a system meets responsible and trustworthy AI standards.',
      'For sensitive domains, establish governance controls before development begins — not as a deployment gate.',
    ],
    traps: [
      { wrong: 'Decline the regulator request to protect intellectual property', why: 'It is not either/or. Satisfy regulatory demands while protecting IP.' },
      { wrong: 'Provide full source code and training data to regulators', why: 'Over-disclosure is equally wrong. Balance the regulatory obligation against legitimate IP protection.' },
      { wrong: 'Add monitoring dashboards to close the accountability gap', why: 'Responsible AI requires an assigned human owner empowered to take corrective action. A dashboard with no owner changes nothing.' },
      { wrong: 'Validate prediction accuracy to prove trustworthiness', why: 'Accuracy is not fairness. Bias testing demonstrates responsible and trustworthy AI standards.' },
    ],
  },
  {
    id: 'handover-adoption',
    phase: 'operations',
    title: 'Handover, Adoption & Change Management',
    summary:
      'A technically perfect model that nobody uses has failed. Adoption problems are solved with structured change management and workflow integration, not better models.',
    keyPoints: [
      'Handover requires defined roles and responsibilities, handover documentation, and training materials — assign clear ownership of ongoing operational tasks.',
      'A TRANSITION PLAN prepares the organization to own and sustain the solution: accountability, user preparedness, maintenance procedures.',
      'User resistance is addressed with onboarding support and practical hands-on guidance that builds confidence.',
      'Concern about workflow disruption is addressed with a structured CHANGE MANAGEMENT PLAN.',
      'If users must leave their primary system to access predictions, the root cause is LACK OF INTEGRATION with existing systems and workflows — that friction limits adoption.',
      'At project closure, document successes, challenges, and recommendations (lessons learned) to support organizational learning.',
      'Coordinate knowledge transfer and establish ongoing support procedures before the project team disbands.',
    ],
    traps: [
      { wrong: 'Mandate use of the new system', why: 'Mandates do not resolve capability or trust gaps. Onboarding support and practical guidance address the actual barrier.' },
      { wrong: 'Improve model accuracy to increase adoption', why: 'If the barrier is workflow friction or unfamiliarity, a better model changes nothing. Fix the integration or the change management.' },
      { wrong: 'Hand over once the model is performing as expected', why: 'Model performance is not handover readiness. Ownership, documentation, training, and support procedures must be in place.' },
    ],
  },
  {
    id: 'infrastructure-resources',
    phase: 'operations',
    title: 'Infrastructure & Resources',
    summary:
      'Assess skills and infrastructure BEFORE committing. AI projects need specialized roles and compute that conventional projects do not.',
    keyPoints: [
      'Resource planning starts by assessing required SKILL SETS and evaluating HARDWARE needs. Skills come first — they drive every subsequent resource decision.',
      'Core AI technical resources: data engineers, ML engineers, and specialized compute infrastructure.',
      'Assess and provision compute before training begins to avoid failures, delays, and budget overruns.',
      'Organizational readiness spans governance, data infrastructure, technology, AND change management — assess it before committing to a technical direction.',
      'Multi-tenant AI systems hosting several applications need ISOLATION CONTROLS so applications cannot access one another.',
      'Implement data processing rules and governance policies so infrastructure operates within organizational boundaries before processing begins.',
      'Where capability gaps exist, assess required skills and infrastructure, then fill gaps via procurement or external contractors.',
    ],
    traps: [
      { wrong: 'Procure hardware based on the vendor recommendation', why: 'Requirements come from your assessed skill and workload needs, not a vendor default.' },
      { wrong: 'Begin training and scale compute as needed', why: 'Reactive scaling causes the repeated failures and overruns the exam describes. Provision before training.' },
      { wrong: 'Hire data scientists to close the capability gap', why: 'First assess which skills, infrastructure, and tools each phase requires. The gap may be engineering or compute, not data science.' },
    ],
  },
];

export const NOTE_COUNT = NOTES.length;

export function notesForPhase(phaseId: string): StudyNote[] {
  return NOTES.filter(n => n.phase === phaseId);
}

export function getNote(id: string): StudyNote | undefined {
  return NOTES.find(n => n.id === id);
}
