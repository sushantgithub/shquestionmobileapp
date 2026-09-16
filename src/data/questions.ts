import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    "id": "exam1_q1",
    "question": "A data science team is testing a self-supervised learning model. The team needs to determine whether the training data or model configuration requires re-evaluation.\n\nWhat would be an indicator for re-evaluation?",
    "options": {
      "A": "An error rate that increased slightly from the previous test cycle but remained within the documented threshold.",
      "B": "Confidence scores that were lower for one demographic but remained inside the limits of acceptable variance.",
      "C": "Confidence scores that were evenly distributed across all segments and on target.",
      "D": "An error rate for one demographic segment that exceeded the documented threshold."
    },
    "correct": "D",
    "correctExplanation": "When the error rate for a specific demographic segment exceeds the documented threshold, that indicates that the training data or model configuration may contain bias or gaps affecting that segment specifically. This signals that re-evaluation is needed to determine the root cause and ensure the model performs fairly and reliably across all populations.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "An error rate that increased slightly but remained within the documented threshold does not represent a breach of the established standard, even though the trend may warrant continued monitoring."
      },
      {
        "options": [
          "B"
        ],
        "text": "Confidence scores that were lower for one segment but remained within acceptable variance reflect a result still considered within tolerance, not a confirmed indicator requiring re-evaluation."
      },
      {
        "options": [
          "C"
        ],
        "text": "Confidence scores that are evenly distributed across all demographic segments and on target suggest consistent performance across populations, which does not indicate a need for re-evaluation."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q2",
    "question": "A bank is developing an AI model to approve personal loans. During testing, the model consistently approves applications from one geographic region at a much higher rate than applicants from other regions.\n\nWhat should the AI project team do first?",
    "options": {
      "A": "Deploy the model and monitor approval performance after launch.",
      "B": "Increase the model complexity to improve prediction accuracy.",
      "C": "Investigate the cause of the disparity and address any underlying data issues.",
      "D": "Remove geographic information from future applications and continue model development."
    },
    "correct": "C",
    "correctExplanation": "Investigating the cause of the disparity and addressing any underlying data issues before proceeding ensures the team understands whether the disparity reflects a genuine bias risk before any corrective or deployment decisions are made.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Deploying the model and monitoring approval performance after launch allows a potentially biased model to make real lending decisions before the cause of the disparity has been understood, risking harm to applicants and regulatory exposure."
      },
      {
        "options": [
          "B"
        ],
        "text": "Increasing the model complexity to improve prediction accuracy does not address the underlying data imbalance and may make the bias harder to detect and interpret."
      },
      {
        "options": [
          "D"
        ],
        "text": "Removing all geographic information from future applications does not eliminate bias if the model has learned to rely on other variables that correlate with geography, and it does not address the data issue already identified in the existing model."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q3",
    "question": "An AI project team has access to several datasets. Team members disagree on which fields are reliable, how values were derived, and which historical changes may affect interpretation. The AI project manager understands the dashboards, but has limited knowledge about the data structure.  What should the AI project manager do first?",
    "options": {
      "A": "Ask the reporting lead to approve the data definitions usedfor model development.",
      "B": "Use the current data dictionary and let the data scienceteam resolve questions later.",
      "C": "Identify and engage the subject matter experts who understand data origin, meaning, and changes",
      "D": "Exclude unclear fields from the dataset until model testingshows they are needed."
    },
    "correct": "C",
    "correctExplanation": "The project manager should involve subject matter experts with direct knowledge of where the data comes from, what it represents, and how it has changed over time. Their input is essential for determining which fields are reliable and for understanding how historical changes could affect model interpretation and outcomes.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Asking the reporting lead to approve data definitions or relying only on the current data dictionary while postponing questions to the data science team does not ensure an accurate understanding of the data."
      },
      {
        "options": [
          "D"
        ],
        "text": "Excluding unclear fields from the data set is also not the best approach."
      },
      {
        "options": [
          "B"
        ],
        "text": "That avoids the underlying issue instead of resolving it and could remove fields that may be valuable to model performance once their meaning and reliability are properly clarified."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q4",
    "question": "An AI project manager is overseeing a model governance framework for an AI solution in production. The team needs to monitor model behavior that could affect performance over time.\n\nWhat monitoring practice should the AI project manager apply?",
    "options": {
      "A": "Drift detection",
      "B": "Performance benchmarking",
      "C": "Model lifecycle documentation",
      "D": "Governance review"
    },
    "correct": "A",
    "correctExplanation": "Drift detection is the practice of monitoring for changes in data patterns or model behavior that could reduce performance over time. Applying drift detection as part of model governance ensures the team can identify and respond to performance degradation.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Performance benchmarking measures model results against established criteria but does not specifically identify changes in data patterns or model behavior over time."
      },
      {
        "options": [
          "C"
        ],
        "text": "Model lifecycle documentation captures decisions, assumptions, and controls across the model lifecycle but is a record-keeping activity rather than a monitoring practice."
      },
      {
        "options": [
          "D"
        ],
        "text": "Governance review confirms that the model remains aligned to approved governance requirements but does not detect changes in data patterns or model behavior."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q5",
    "question": "An AI project team deployed a credit risk scoring model into production six months ago. A regulatory audit has been scheduled. The AI project manager must ensure the documentation required for the audit is complete and readily available. What should the AI project manager do?",
    "options": {
      "A": "Review version-controlled records of model iterations, datasets, and stakeholder approvals from the repository.",
      "B": "Request the data scientists recreate the development documentation from team memory, interviews, and informal notes.",
      "C": "Submit current production performance metrics and operational logs from the live model environment.",
      "D": "Engage external auditors to reconstruct decision history through stakeholder interviews and workshops."
    },
    "correct": "A",
    "correctExplanation": "Verifiable, version-controlled repository records provide auditable evidence of lineage, model performance, and regulatory approval checkpoints.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Recreating documentation after the fact creates compliance vulnerabilities and lacks credibility."
      },
      {
        "options": [
          "C"
        ],
        "text": "Providing only active production logs misses historical development decisions and dataset provenance required by regulatory standards."
      },
      {
        "options": [
          "D"
        ],
        "text": "Reconstructing history through workshops lacks formal documentation rigor."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q6",
    "question": "An AI project manager at a medical research company is leading a diagnostic AI project. The project sponsor has threatened to halt the project after the model produced different diagnostic results for the same case on separate occasions. The AI project manager must identify the root cause of the issue.\n\nWhat document should the AI project manager review first?",
    "options": {
      "A": "The stakeholder register",
      "B": "The model version control log",
      "C": "The risk mitigation plan",
      "D": "The business requirements document"
    },
    "correct": "B",
    "correctExplanation": "An AI project requires maintaining version control records to support transparency and accountability in AI model development. The model version control log contains a record of all changes made to the model over time, including updates to algorithms, training data, and configurations. Reviewing this log allows the AI project manager to identify what changed that led the model to produce different diagnostic results for the same case.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "The stakeholder register and the business requirements document are planning and reference documents. Neither contains information about model behavior, changes to the diagnostic system, or the decision records needed to investigate inconsistent outputs."
      },
      {
        "options": [
          "C"
        ],
        "text": "The risk mitigation plan outlines responses to identified project risks, but it does not contain the version history or decision records needed to investigate the issue."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q7",
    "question": "An AI project manager is overseeing a maintenance initiative for manufacturing equipment. The required sensor and maintenance data have been located, but the AI project team has limited understanding of how the data is generated, interpreted, and applied in daily operations.  What should the AI project manager do?",
    "options": {
      "A": "Begin model training and refine data understanding afterperformance results are available.",
      "B": "Engage a domain subject matter expert (SME) to provide operational context and clarification",
      "C": "Increase historical data, expand data sources, andproceed with further analysis.",
      "D": "Define deployment procedures before validating themeaning and context of the data."
    },
    "correct": "B",
    "correctExplanation": "When the team lacks understanding of its operational context, the AI project manager must engage a domain SME who can explain how the data is generated, interpreted, and applied in daily operations. Without this knowledge, the team cannot confidently use the data for model development.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Beginning model training and defining deployment procedures advance the project without the foundational operational context needed to ensure the data is correctly understood and applied."
      },
      {
        "options": [
          "C"
        ],
        "text": "Increasing historical data collection and expanding data sources addresses data volume rather than the team's limited understanding of how the existing data is generated and applied in daily operations."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q8",
    "question": "An AI project manager is leading a student dropout prediction model at a university to identify at risk student populations. The model has met all established performance criteria, but the AI project manager paused the go/no-go decision to confirm operational readiness before approving deployment. What should the AI project manager confirm prior to operationalization?",
    "options": {
      "A": "That reference materials and communication templates explain retention resources.",
      "B": "That reporting dashboards and summary metrics are available for university leadership.",
      "C": "That staff has the required access to review compliance procedures and audit logs.",
      "D": "That advisors have the capacity and preparedness to act on risk alerts consistently and on time."
    },
    "correct": "D",
    "correctExplanation": "Confirming advisor capacity and preparedness to respond to alerts is the primary readiness check; the value of model predictions depends entirely on whether front-line users are equipped to take timely, effective action.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Reference materials and templates provide secondary operational support rather than ensuring users are practically prepared to act on alerts."
      },
      {
        "options": [
          "B"
        ],
        "text": "Leadership reporting dashboards assist with executive oversight but do not ensure end-users execute operational interventions."
      },
      {
        "options": [
          "C"
        ],
        "text": "Compliance and audit log access supports governance controls rather than operational readiness in the primary workflow."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q9",
    "question": "An AI initiative to predict equipment failures across several manufacturing plants is underway. The data science team has confirmed the business objective and identified the key variables needed for the model. However, the team is uncertain where this data currently resides across the organization.  What should the data science team do next?",
    "options": {
      "A": "Request plant managers estimate machine failure ratesand use as the primary data set.",
      "B": "Inventory data sources, system owners, and storage locations for the required data elements",
      "C": "Begin model training with available sensor data,maintenance history, and downtime records.",
      "D": "Delay data source identification until after the team selectsthe final machine learning (ML) algorithm."
    },
    "correct": "B",
    "correctExplanation": "Since the team knows what data is needed but not where it resides, the next step is to systematically inventory the data sources, identify system owners, and document storage locations for each required data element. This ensures the team has a complete picture of where the data lives before any collection or integration activities begin.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Requesting plant managers to estimate machine failure rates substitutes anecdotal estimates for the actual historical data already identified as necessary for the model, which would undermine the reliability of the initiative."
      },
      {
        "options": [
          "C"
        ],
        "text": "Starting model training with only partially available data, or postponing identification of data sources until after selecting algorithm options, both move forward without first creating a complete inventory of data sources."
      },
      {
        "options": [
          "D"
        ],
        "text": "This creates a risk of data gaps and puts the activities in the wrong order."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q10",
    "question": "A data scientist has been assigned to assess the data needs for a new AI initiative. The AI project manager wants to ensure the team covers all critical aspects of data understanding before moving forward. What should the data scientist do?",
    "options": {
      "A": "Review the project charter to confirm data requirements are aligned.",
      "B": "Consult the stakeholder register to identify who has access to data sources.",
      "C": "Evaluate the sources, description, and quality of the available data.",
      "D": "Analyze the systems, quantity, and description of the available data."
    },
    "correct": "C",
    "correctExplanation": "The three AI-specific aspects of data understanding are sources, description, and quality. Evaluating data sources identifies where the data comes from and whether it is appropriate for the initiative. Assessing data description provides an understanding of the data's structure and characteristics. Reviewing data quality ensures the data is accurate, complete, and suitable for model development.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Reviewing the project charter is a project management activity that provides business context rather than directly evaluating the characteristics of the data itself."
      },
      {
        "options": [
          "B"
        ],
        "text": "Consulting the stakeholder register helps identify governance or access permissions, but it does not evaluate the core properties of the data."
      },
      {
        "options": [
          "D"
        ],
        "text": "'Systems' or 'quantity' do not substitute for 'sources' and 'quality' in the established three AI-specific aspects of data understanding."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q11",
    "question": "An AI project manager is exploring an AI solution for a service provider experiencing declining customer retention. The operations team has flagged several inefficiencies, but no formal analysis has been conducted to identify the root cause.  What should the AI project manager do?",
    "options": {
      "A": "Facilitate stakeholder interviews to understand pain points and clarify the business need",
      "B": "Select an AI solution based on similar implementations atcompetitor service providers.",
      "C": "Begin data collection activities before an assessment ofthe problem is complete.",
      "D": "Estimate the solution's return on investment (ROI) tosupport a go/no-go decision."
    },
    "correct": "A",
    "correctExplanation": "Skipping stakeholder interviews risks selecting a solution that addresses the wrong business challenge. The business need must be clarified before any solution direction is pursued.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Selecting an AI solution based on a competitor's approach and estimating the ROI to support a go/no-go decision both commit to a technical or financial direction before the business problem has been formally validated."
      },
      {
        "options": [
          "C"
        ],
        "text": "Beginning data collection before the problem assessment is complete reverses the correct sequence."
      },
      {
        "options": [
          "D"
        ],
        "text": "The business problem must be clearly defined before the team can determine what data is needed to address it."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q12",
    "question": "An AI initiative is progressing into the model development phase. The project sponsor has asked the AI team to identify potential security threats before any work begins. What should the AI team prioritize during data preparation?",
    "options": {
      "A": "The computational resource requirements for model training.",
      "B": "The stakeholder communication plan for the initiative.",
      "C": "The data volume and quality available for model development.",
      "D": "The cybersecurity vulnerabilities in the proposed AI system."
    },
    "correct": "D",
    "correctExplanation": "Identifying system security vulnerabilities upfront ensures threat models and safeguards are integrated directly into preparation pipelines.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Compute sizing addresses execution feasibility rather than risk posture."
      },
      {
        "options": [
          "B"
        ],
        "text": "Communication plans focus on stakeholder management rather than security threats."
      },
      {
        "options": [
          "C"
        ],
        "text": "Data volume and quality address execution feasibility rather than security risk posture."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q13",
    "question": "A project manager is coordinating data preparation for an AI solution that predicts product returns. The data science team has identified several quality issues across source systems and the relevant mitigation actions have not been recorded.  What should the AI project manager do?",
    "options": {
      "A": "Select the model technique that can process the largestnumber of source fields.",
      "B": "Request additional data sources before preparing theexisting data for modeling.",
      "C": "Move the available data into model training and resolvedata issues during testing.",
      "D": "Establish documentation practices that ensure the work is reproducible"
    },
    "correct": "D",
    "correctExplanation": "Establishing documentation practices ensures the preparation work is captured and reproducible. Without this documentation, the team cannot verify what was done to the data or reproduce the preparation steps if the process needs to be repeated or audited.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Selecting the model technique that can process the largest number of source fields addresses model selection rather than the undocumented data preparation work that must be resolved first."
      },
      {
        "options": [
          "B"
        ],
        "text": "Requesting additional data sources expands the volume of data without addressing the existing quality issues or the missing documentation of preparation work already completed."
      },
      {
        "options": [
          "C"
        ],
        "text": "Moving the available data into model training and resolving issues during testing carries undocumented and unresolved data quality issues into model development, risking unreliable results and an untraceable preparation process."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q14",
    "question": "An AI project manager is evaluating whether a business problem is a good fit for an AI solution. The problem involves recognizing patterns in data, making predictions, and adapting to new information over time. What type of problem is this?",
    "options": {
      "A": "Automation",
      "B": "Rule-based",
      "C": "Intelligence",
      "D": "Probabilistic"
    },
    "correct": "C",
    "correctExplanation": "Problems that require aspects of intelligence are a good fit for AI. Intelligence in this context focuses on three core capabilities: perception, prediction, and planning. A problem that involves recognizing patterns, making predictions, and adapting to new information over time requires these aspects of intelligence, making it well-suited for an AI solution.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Automation problems involve repetitive tasks that do not often change and can be programmed using deterministic rules."
      },
      {
        "options": [
          "D"
        ],
        "text": "A probabilistic problem produces the same output from the same input every time, which does not require the reasoning that AI provides."
      },
      {
        "options": [
          "B"
        ],
        "text": "A rule-based problem describes a problem where the solution is determined by applying a set of predefined rules or logical conditions to given inputs."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q15",
    "question": "An AI project manager at a media company is preparing to develop the resource management plan for a newly approved natural language processing (NLP) initiative. The project has defined objectives but has not yet identified the people, technology, or infrastructure required to execute the work.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Define the success criteria and key performance indicators (KPIs).",
      "B": "Establish data governance protocols for the training dataset.",
      "C": "Conduct a risk assessment to identify potential failure modes.",
      "D": "Assess the skill requirements and evaluate hardware needs."
    },
    "correct": "D",
    "correctExplanation": "Before developing the resource plan, the AI project manager should identify and assess the capabilities and infrastructure required to successfully deliver the NLP initiative. AI projects require specialized skills and technical resources, and early assessment helps determine whether the organization has sufficient internal capacity or needs additional resources. Understanding resource needs provides a foundation for resource planning, scheduling, budgeting, and identifying potential constraints.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Defining success criteria and KPIs is important for AI projects, but it is not the first activity when the stated objective is estimating resources. These criteria may influence resource needs later, but the immediate focus is identifying required capabilities and infrastructure."
      },
      {
        "options": [
          "B"
        ],
        "text": "Data governance is a critical component of AI project management, particularly for ensuring data quality, security, and compliance. However, it is not the first step in resource estimation."
      },
      {
        "options": [
          "C"
        ],
        "text": "Risk assessment is necessary for AI projects because of uncertainty, bias, data issues, and model performance concerns. However, risk identification does not directly determine the resources needed to execute the initiative."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q16",
    "question": "A project manager is finalizing a deployment plan for an AI solution at a logistics company. The team is preparing for release and wants to ensure all deployment activities are completed in the correct order and that the solution meets defined standards before going live.\n\nWhat should the AI project manager create?",
    "options": {
      "A": "A model retraining schedule",
      "B": "A deployment checklist",
      "C": "A stakeholder communication plan",
      "D": "A data governance framework"
    },
    "correct": "B",
    "correctExplanation": "When preparing for release, the project manager must create a deployment checklist and validation criteria to confirm that all required activities have been completed and the solution meets defined standards before going live. This ensures the deployment proceeds in a controlled and verifiable manner.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A model retraining schedule addresses ongoing model maintenance after deployment rather than the pre-release validation needed to confirm readiness before the solution goes live."
      },
      {
        "options": [
          "C"
        ],
        "text": "A stakeholder communication plan addresses how information will be shared with stakeholders rather than the structured checklist and criteria needed to verify deployment readiness."
      },
      {
        "options": [
          "D"
        ],
        "text": "A data governance framework addresses data management and compliance requirements rather than the deployment activities and validation standards that must be confirmed before release."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q17",
    "question": "A project sponsor wants to evaluate their return on investment (ROI) for an AI-based document classification system initiative. The AI project manager must estimate the total cost of ownership.  What should the AI project manager include in the calculation?",
    "options": {
      "A": "Recurring costs for data labeling, model monitoring, and ongoing retraining cycles",
      "B": "One-time development effort, infrastructure setup, andinitial deployment expenses.",
      "C": "Initiation phase costs, planning phase costs, and projectdocumentation overhead.",
      "D": "Internal and external resource related costs andgovernance coordination efforts."
    },
    "correct": "A",
    "correctExplanation": "Unlike conventional software systems, AI models require continuous investment in data preparation, performance monitoring, and retraining to remain accurate and effective over time. These ongoing operational costs are specific to AI projects and must be explicitly included in the total cost of ownership calculation.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Development effort, infrastructure setup, and initial deployment expenses describe upfront costs that are typically captured in conventional project budgets."
      },
      {
        "options": [
          "C"
        ],
        "text": "Project phase-related costs and project documentation overhead describe traditional project management costs."
      },
      {
        "options": [
          "D"
        ],
        "text": "Internal and external resource-related costs and governance coordination effort describe governance activities that are not direct inputs to a total cost of ownership calculation for an AI system."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q18",
    "question": "An AI project manager is overseeing the development of a prediction model for a public transit agency. The data science team recommends a highly accurate ensemble model, but the operations managers are concerned about the complexity of the model when making real-time decisions during service disruptions.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Approve the ensemble model since it's the highest-performing technique.",
      "B": "Evaluate the available techniques against performance, interpretability, and operational requirements.",
      "C": "Delay model selection until the full deployment schedule is confirmed.",
      "D": "Request the team implements the model with the shortest training time to accelerate field testing."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager should evaluate the available techniques against performance, interpretability, and operational requirements to account for the explainability needs of the people who will rely on the model during service disruptions.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Approving the highest-performing technique prioritizes accuracy without considering the interpretability and operational requirements that the operations team has identified as essential for real-time decision-making."
      },
      {
        "options": [
          "C"
        ],
        "text": "Delaying model selection defers a critical technical decision without addressing the trade-off between accuracy and interpretability that must be resolved before development can proceed."
      },
      {
        "options": [
          "D"
        ],
        "text": "Requesting the model with the shortest training time prioritizes speed over the evaluation needed to confirm the selected technique meets both performance and operational requirements."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q19",
    "question": "An AI project manager is preparing to hand over an AI- enabled claims triage solution to operations. The model is performing as expected, but the operations team is concerned about support ownership, user readiness, and updates management post deployment. What should the AI project manager do?",
    "options": {
      "A": "Develop and execute a transition plan that allows the organization to own and sustain the solution",
      "B": "Delay the handoff until the model achieves betterperformance results in a second pilot cycle.",
      "C": "Document model architecture, explain how the algorithmworks, and prepare technical specifications for theoperations team.",
      "D": "Ask the vendor to manage the solution independently untilthe operations team becomes comfortable with the newprocess."
    },
    "correct": "A",
    "correctExplanation": "The project manager must develop a transition plan that addresses these concerns and prepares the organization to take full ownership of the solution after handoff. A structured transition plan ensures accountability, user preparedness, and maintenance procedures are in place before the project team steps away.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Delaying the handoff until the model achieves better performance results is unnecessary since the model is already performing as expected and does not address the operational concerns raised by leadership."
      },
      {
        "options": [
          "C"
        ],
        "text": "Documenting model architecture and preparing technical specifications addresses transparency and explainability but does not resolve the support ownership, user readiness, and maintenance concerns that are the focus of the transition."
      },
      {
        "options": [
          "D"
        ],
        "text": "Asking the vendor to manage the solution independently defers operational accountability to an external party rather than establishing the internal ownership and support structures needed for a sustainable handoff."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q20",
    "question": "An AI project manager at a technology company is allocating the resources to build a natural language processing (NLP) model for a customer service chatbot initiative.  What should the AI project manager do first?",
    "options": {
      "A": "Interview potential team members.",
      "B": "Determine the hardware requirements for the initiative.",
      "C": "Determine the skill sets needed for the project team",
      "D": "Hire contractors to fill resource gaps."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must first identify what skill sets are required to build the natural language processing model. Understanding the skills needed provides the foundation for all subsequent resource decisions.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Interviewing potential team members and engaging contractors to fill resource gaps assumes the required skill sets are already known."
      },
      {
        "options": [
          "B"
        ],
        "text": "Determining hardware requirements addresses infrastructure needs rather than the human skill sets that must be identified first to understand the full scope of resource requirements."
      },
      {
        "options": [
          "D"
        ],
        "text": "Without first determining what skills are needed, the team cannot effectively evaluate candidates or identify which gaps require external support."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q21",
    "question": "An AI project manager is leading a player churn prediction initiative at a gaming company. The data science team confirms that the data needed for the initiative exists across internal databases, a cloud warehouse, and a third-party analytics platform.\n\nWhat should the AI project manager do next?",
    "options": {
      "A": "Begin model training using whichever data source is easiest to access.",
      "B": "Coordinate the extraction and transfer of the required data into the development environment.",
      "C": "Consolidate all available data sources into a single repository once the development begins.",
      "D": "Wait until model selection is finalized before collecting the required data."
    },
    "correct": "B",
    "correctExplanation": "Coordinating the extraction and transfer of that data into the development environment ensures all identified data sources are consolidated in a single location where the team can begin preparation and modeling activities.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Beginning model training using the easiest data to access proceeds without a structured approach to gathering the identified data, risking incomplete or misaligned data sets for model development."
      },
      {
        "options": [
          "C",
          "D"
        ],
        "text": "Waiting until model selection is finalized before collecting data and consolidating all available data after development begins reverses the correct sequence, since data collection and preparation must occur before a model can be trained and evaluated."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q22",
    "question": "An AI project manager is overseeing the development of a bird identification application. The quality assurance (QA) threshold requires 98% accuracy, but volunteer testing revealed 25% of bird photos were incorrectly labeled. What should the AI project manager do next?",
    "options": {
      "A": "Review the training data to identify quality issues affectingmodel performance.",
      "B": "Identify the root cause of the misclassification errors before determining next steps",
      "C": "Expand the volunteer testing pool to gather moreperformance data before acting.",
      "D": "Lower the quality threshold so the model can meet thedeployment requirements."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must first identify what is causing the misclassifications before any corrective action is taken. Without understanding the root cause, any corrective action risks addressing the wrong problem and leaving the underlying issue unresolved.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Reviewing the training data to identify quality issues assumes the root cause is in the training data, which may lead the team to address the wrong source of the problem."
      },
      {
        "options": [
          "C"
        ],
        "text": "Expanding the volunteer pool gathers more performance data without first understanding why the current results fell below the accuracy threshold, which does not resolve the misclassification issue."
      },
      {
        "options": [
          "D"
        ],
        "text": "Lowering the quality threshold so the model can be deployed is not the correct approach since the root cause of the issue has not been properly identified. This measure contradicts recommended QA/QC standards."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q23",
    "question": "An AI project team is preparing a model for formal evaluation after several development cycles. Upon review, a data scientist finds that changes have not been consistently recorded, rendering performance results unreliable for comparison across model variations.\n\nWhat should the AI project team do?",
    "options": {
      "A": "Establish model testing protocols and quality assurance (QA) procedures.",
      "B": "Monitor model performance metrics during development and testing.",
      "C": "Coordinate peer reviews and technical validation of model designs.",
      "D": "Implement configuration management for model versions and parameters."
    },
    "correct": "D",
    "correctExplanation": "Implementing configuration management for model versions and parameters ensures all changes are tracked, documented, and traceable, providing the consistent record needed to compare results and support formal evaluation.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Establishing model testing protocols, quality assurance (QA) procedures, and coordinating peer reviews and technical validation address how the model is reviewed and tested but do not resolve the underlying gap in version and parameter tracking that is preventing reliable comparisons."
      },
      {
        "options": [
          "B"
        ],
        "text": "Monitoring model performance metrics during development addresses ongoing performance tracking but does not establish the configuration management needed to ensure changes are consistently recorded and comparable across versions."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q24",
    "question": "An AI project manager is overseeing the development of a credit scoring model for a bank. A senior stakeholder asks how the model arrived at a rejection decision for a specific application.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Share the model's source code with the senior stakeholder for independent review.",
      "B": "Analyze the overall accuracy metrics against the validation report.",
      "C": "Use model interpretability tools to explain the factors that contributed to the outcome.",
      "D": "Refer the stakeholder to the data science team for a technical briefing."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager should use model interpretability tools to provide a clear and meaningful explanation. This is a core transparency practice that ensures stakeholders can understand and trust the model's decision-making process.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Source code does not provide an accessible explanation of how the model reached a particular outcome."
      },
      {
        "options": [
          "B"
        ],
        "text": "Analyzing overall accuracy metrics addresses model performance in general but does not explain how the model arrived at a specific rejection decision."
      },
      {
        "options": [
          "D"
        ],
        "text": "Referring the stakeholder to the data science team defers the AI project manager's responsibility to manage transparency and communicate model decisions to stakeholders."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q25",
    "question": "A data engineer at a financial services company is configuring the AI workspace for a new initiative. During setup, the project manager emphasizes that the infrastructure must comply with organizational governance and security requirements.\n\nWhat should the data engineer do first?",
    "options": {
      "A": "Provision computing resources and model training.",
      "B": "Implement data processing rules and policies.",
      "C": "Configure data storage and backup systems.",
      "D": "Set up collaboration tools and version controls."
    },
    "correct": "B",
    "correctExplanation": "Implementing data processing rules and governance policies ensures the infrastructure operates within defined organizational boundaries before any data processing or model development begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C",
          "D"
        ],
        "text": "Provisioning computing resources, configuring data storage and backup systems, and setting up collaboration tools and version control systems are all valid workspace setup activities. However, none of these directly address the governance and compliance requirements emphasized by the project manager in the scenario."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q26",
    "question": "An AI project manager responsible for an AI-powered analytics dashboard in production for six months sees a gradual decline in prediction accuracy on the monitoring dashboard. What should the AI project manager do?",
    "options": {
      "A": "Escalate the accuracy decline to the project sponsor and request approval to retire the model.",
      "B": "Initiate model retraining and conduct a performance review to comply with governance procedures.",
      "C": "Instruct the data engineering team to retrain the model on a clean set of training data.",
      "D": "Suspend the model from production until the accuracy decline has been investigated."
    },
    "correct": "B",
    "correctExplanation": "A gradual accuracy decline calls for a structured, governed response \u2014 not a panic reaction. Initiating retraining alongside a formal performance review follows governance procedures, ensuring the issue is addressed in a controlled, documented, and accountable way.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Requesting model retirement is a premature overreaction to a gradual decline that hasn't yet been fully assessed through the proper governance process."
      },
      {
        "options": [
          "C"
        ],
        "text": "Directly instructing engineering to retrain bypasses the required governance steps and performance review that should accompany and authorise this action."
      },
      {
        "options": [
          "D"
        ],
        "text": "Suspending the model is also an overreaction to a gradual decline \u2014 governance procedures should guide the response proportionately, not a panic shutdown."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q27",
    "question": "A data scientist is preparing a dataset for an AI initiative. Before model development begins, the AI project manager wants the project team to have a deeper understanding of the dataset's characteristics.\n\nWhat activity should the data scientist conduct?",
    "options": {
      "A": "Exploratory data analysis",
      "B": "Privacy impact assessment",
      "C": "Feasibility assessment",
      "D": "Bias detection audit"
    },
    "correct": "A",
    "correctExplanation": "Exploratory data analysis is the process of examining a dataset to understand its characteristics, structure, and patterns before model development begins. Conducting this analysis ensures the team has a thorough understanding of the data.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "D"
        ],
        "text": "A privacy impact assessment and a bias detection audit address compliance and fairness concerns respectively. Neither is designed to develop a general understanding of dataset characteristics."
      },
      {
        "options": [
          "C"
        ],
        "text": "A feasibility assessment evaluates whether the project is viable and is conducted earlier in the project lifecycle, not during data preparation."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q28",
    "question": "An AI project manager is leading a predictive analytics initiative at a healthcare organization. The team has identified that the current technical environment cannot support the planned model training workload. What should the AI project manager do?",
    "options": {
      "A": "Assess and provision computing resources to support development activities.",
      "B": "Reduce the scope of model validation activities to save processing time.",
      "C": "Postpone infrastructure planning until the deployment phase begins.",
      "D": "Collect additional data sources before addressing infrastructure needs."
    },
    "correct": "A",
    "correctExplanation": "Assessing and provisioning the necessary compute resources before training begins prevents delays, failures, and budget overruns resulting from infrastructure gaps.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Reducing model validation scope compromises model quality and safety rather than solving infrastructure limitations."
      },
      {
        "options": [
          "C"
        ],
        "text": "Postponing infrastructure planning allows model training to proceed on inadequate systems, guaranteeing bottlenecks."
      },
      {
        "options": [
          "D"
        ],
        "text": "Collecting more data increases processing workloads, compounding the underlying resource shortage."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q29",
    "question": "An AI project manager is overseeing the development of a fraud detection solution. The data science team is working independently on local machines with inconsistent configurations, causing delays and coordination challenges.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Procure the approved data sources for model training.",
      "B": "Establish a secure development environment and provide the resources needed.",
      "C": "Select the modeling technique before the environment is configured.",
      "D": "Begin model training using the current local configuration until resources are approved."
    },
    "correct": "B",
    "correctExplanation": "Establishing a secure development environment and providing the resources needed to support consistent and controlled development activities resolves the coordination challenges and delays caused by inconsistent local setups before development continues.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Procuring approved data sources addresses data availability rather than the infrastructure and tooling gap, causing delays in the development environment."
      },
      {
        "options": [
          "C"
        ],
        "text": "Selecting the modeling technique before the development environment reverses the correct sequence since the team needs a properly provisioned environment before technical modeling decisions can be effectively implemented."
      },
      {
        "options": [
          "D"
        ],
        "text": "Beginning model training using the current local configuration proceeds despite known inconsistencies that could compromise the reliability and reproducibility of development activities."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q30",
    "question": "An AI project team discovers there is no owner assigned to monitor results or implement corrective actions during project execution.\n\nWhat Trustworthy AI principle is not being adhered to?",
    "options": {
      "A": "Ethical AI",
      "B": "Governed AI",
      "C": "Transparent AI",
      "D": "Responsible AI"
    },
    "correct": "D",
    "correctExplanation": "Responsible AI requires that humans are assigned to guard against errors, monitor system outputs, and take corrective action when issues arise. The absence of an assigned role to monitor results and respond to unexpected outcomes represents a direct gap in this layer of the Trustworthy AI Framework.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B",
          "C"
        ],
        "text": "Ethical AI addresses human values, fairness, and bias avoidance. Transparent AI focuses on visibility into how the AI system operates and how decisions are made. Governed AI covers policies, audits, and risk management controls. None of these layers specifically address the assignment of human accountability for monitoring and corrective action."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q31",
    "question": "An AI project team is defining data requirements for an AI model development project. The team is debating how much training data to collect.  What should the AI project team do?",
    "options": {
      "A": "Collect the minimum amount of data needed to reducecleaning.",
      "B": "Collect defined data to improve model training and implement data quality control.",
      "C": "Collect as much data as possible disregarding quality tomaximize training potential.",
      "D": "Collect structured data from internal sources to simplifypreparation."
    },
    "correct": "B",
    "correctExplanation": "The project team should gather the defined data needed to strengthen model training while also putting appropriate data quality controls in place. As data volume increases, stronger quality checks are necessary to ensure the dataset remains accurate, consistent, and usable for effective model development.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Limiting data collection to reduce cleaning effort weakens model training and undermines the goal of building an accurate, effective AI model."
      },
      {
        "options": [
          "C"
        ],
        "text": "Maximizing data volume without regard to quality ignores the need for cleansing and validation, which can reduce model performance."
      },
      {
        "options": [
          "D"
        ],
        "text": "Prioritizing only structured internal data sources is also too narrow, because it may exclude other relevant data types and sources needed to support strong model training."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q32",
    "question": "A data engineer is reviewing the data quality on an AI project that has inconsistent data outputs.  What should the data engineer do next?",
    "options": {
      "A": "Implement standardized data processing rules andpolicies.",
      "B": "Restrict data access to the IT department to maintainintegrity.",
      "C": "Implement automation tools to accelerate data collection and minimize errors",
      "D": "Assess data accuracy at the end of the project to confirmanalysis is reliable."
    },
    "correct": "C",
    "correctExplanation": "Investing in data quality and automation is a recommended practice for data quality management because it speeds up data collection and reduces human error, helping to ensure the data used for analysis and decision-making is accurate and reliable throughout the AI project.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Implementing standardized data processing rules and policies describes a data governance practice, not a data quality management activity."
      },
      {
        "options": [
          "B"
        ],
        "text": "Restricting data access to the IT department contradicts the recommended practice of involving all departments and engaging key roles across the organization."
      },
      {
        "options": [
          "D"
        ],
        "text": "Assessing data accuracy only at the end of the project is incorrect because data quality must be managed and monitored continuously throughout the project, not evaluated as a final step."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q33",
    "question": "A project manager has been assigned to support the creation of a business case for an AI initiative. Leadership has expressed interest in adopting an AI solution but has not yet defined the core business problem or expected value.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Identify advanced AI technologies to incorporate into the business case.",
      "B": "Estimate the return on investment (ROI) based on standard industry assumptions.",
      "C": "Collect raw data to define the business case before engaging stakeholders.",
      "D": "Engage stakeholders to align on organizational objectives, scope, and expected outcomes."
    },
    "correct": "D",
    "correctExplanation": "Before a business case can be developed, the project manager must first establish a clear understanding of the initiative's purpose and expected value. Engaging stakeholders ensures the business case is grounded in real organizational needs and aligned with measurable outcomes.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Identifying advanced AI technologies and estimating ROIs based on standard assumptions both move forward without first establishing organizational objectives and problem scope, resulting in a business case that may not reflect actual needs."
      },
      {
        "options": [
          "C"
        ],
        "text": "Collecting raw data before engaging stakeholders skips the foundational step of defining what problem the initiative is meant to address, making the collection effort premature and misdirected."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q34",
    "question": "An AI project team is preparing a data set for an initiative at a retail company. The team has identified several data quality issues that must be addressed before the development phase. What should the AI project team do?",
    "options": {
      "A": "Conduct data cleaning and preprocessing activities.",
      "B": "Increase model complexity to compensate for the data issues.",
      "C": "Proceed directly to model training using the data set.",
      "D": "Rely on stakeholder input to determine data usability."
    },
    "correct": "A",
    "correctExplanation": "Conducting data cleaning and preprocessing activities before the data set is used for model training ensures the data meets the quality standards needed to support reliable model development.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Increasing model complexity does not resolve underlying data flaws and can degrade performance."
      },
      {
        "options": [
          "C"
        ],
        "text": "Proceeding directly to training carries known quality issues into production."
      },
      {
        "options": [
          "D"
        ],
        "text": "Relying solely on stakeholder input replaces technical assessment with subjective opinion."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q35",
    "question": "An AI project manager is leading the deployment of a fraud detection solution at a bank. Go-live is scheduled, but the customer support and incident management teams have not been prepared to handle escalations and model-related questions. What should the AI project manager do?",
    "options": {
      "A": "Proceed with deployment as scheduled and allow support teams to learn through early operational experience.",
      "B": "Create handover documentation and provide training to prepare the relevant management teams.",
      "C": "Assign all post-deployment support responsibilities to the model development team.",
      "D": "Reduce the number of model alerts at launch to limit the volume of issues support teams must manage."
    },
    "correct": "B",
    "correctExplanation": "Creating handover documentation and providing training before go-live proceeds ensures operational teams are equipped to respond effectively once the solution is in production, reducing the risk of disruption during the transition.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with deployment as scheduled and allowing support teams to learn through early operational experience risks poor incident handling and customer dissatisfaction during a critical launch period."
      },
      {
        "options": [
          "C"
        ],
        "text": "Assigning all post-deployment support responsibilities to the model development team avoids preparing the operational teams entirely, which does not establish a sustainable support structure for the long term."
      },
      {
        "options": [
          "D"
        ],
        "text": "Reducing the number of model alerts at launch limits visibility into fraud detection activity rather than addressing the underlying readiness gap in the support and incident management teams."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q36",
    "question": "An AI project team is training several versions of a demand forecasting model. During a project review, the team reports that different configurations have been tested but results and settings have not been consistently recorded.  What should the AI project manager do?",
    "options": {
      "A": "Establish experiment tracking practices to ensure training runs are documented and reproducible",
      "B": "Select the model that demonstrates the highestperformance metric and continue development.",
      "C": "Increase the frequency of model retraining to improve thereliability of the results.",
      "D": "Deploy the most recent model version to gather additionaloperational feedback."
    },
    "correct": "A",
    "correctExplanation": "The AI project manager must establish experiment tracking practices to ensure all training runs are properly documented and can be reproduced. Without this foundation, the team cannot reliably compare model versions or understand which configurations produced which results.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "D"
        ],
        "text": "Selecting the highest performing model and deploying the most recent model advance development without first resolving the documentation gap, which means the team cannot reliably trace how any model version was produced or validate the results."
      },
      {
        "options": [
          "C"
        ],
        "text": "Increasing model retraining frequency does not resolve the inconsistent documentation gap needed to compare configurations and results across training runs."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q37",
    "question": "A data scientist is working to improve the performance of an underperforming AI model. After reviewing the model, the data scientist suggests the AI project team focus on cleaning and refining rather than modifying the algorithm. What approach does the data scientist recommend?",
    "options": {
      "A": "An infrastructure-centric approach",
      "B": "A data-centric approach",
      "C": "An algorithm-centric approach",
      "D": "A model-centric approach"
    },
    "correct": "B",
    "correctExplanation": "A data-centric approach focuses on improving the quality of the data rather than changing the algorithm. In this scenario, performance improves through data cleaning and refinement alone, showing that data quality is the key driver.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "An infrastructure-centric approach focuses on the computational environment, such as processing capacity or platforms, which is separate from data quality."
      },
      {
        "options": [
          "C"
        ],
        "text": "An algorithm-centric approach focuses on changing the algorithm or tuning how it is applied rather than improving the data."
      },
      {
        "options": [
          "D"
        ],
        "text": "A model-centric approach emphasizes modifying the model structure or configuration, which does not align with gains from data cleaning."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q38",
    "question": "An AI project manager is leading the development of a chatbot to handle customer billing inquiries. The project sponsor wants to know how the model was selected. What should the AI project manager do?",
    "options": {
      "A": "Explain that the users determined which AI model to implement.",
      "B": "Advise that a dedicated AI subject matter expert (SME) chose the model.",
      "C": "Explain that the project team selected an AI tool that was successful in a similar project.",
      "D": "Advise that AI tools were analyzed using model selection criteria and decision rationale."
    },
    "correct": "D",
    "correctExplanation": "Explaining that selection was based on documented criteria and decision rationale demonstrates transparency and governance, ensuring stakeholders trust how the model was chosen.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Claiming users chose the model describes an informal process lacking structured technical and business evaluation criteria."
      },
      {
        "options": [
          "B"
        ],
        "text": "Relying solely on an SME's personal decision lacks documented selection criteria and transparent decision rationale."
      },
      {
        "options": [
          "C"
        ],
        "text": "Selecting a tool merely because it worked in a previous project skips formal evaluation tailored to current project requirements."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q39",
    "question": "An AI project manager is preparing to deploy an AI system that will host multiple applications across different business units. The project manager must ensure that the infrastructure meets security requirements.  What should the AI project manager implement?",
    "options": {
      "A": "A unified dashboard",
      "B": "Isolation controls",
      "C": "Data sharing protocols",
      "D": "A data repository"
    },
    "correct": "B",
    "correctExplanation": "When an AI system hosts multiple applications, application isolation controls ensure that each application operates independently without accessing or interfacing with others. This is a key security requirement for AI infrastructure.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Controlled data sharing protocols, a unified application dashboard, and a centralized data repository are infrastructure and management approaches that prioritize data access, visibility, or consolidation."
      },
      {
        "options": [
          "A",
          "D"
        ],
        "text": "None of these addresses the security requirement of keeping applications isolated from one another."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q40",
    "question": "A healthcare AI initiative will use patient records to train a predictive diagnosis model. Before the data extraction begins, the AI project manager must review the data sharing agreements with the hospital network.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Determine if the data volume is sufficient for model training.",
      "B": "Confirm data ownership and document access permissions.",
      "C": "Assess the compatibility of the data schema with the machine learning (ML) framework.",
      "D": "Ensure that the data storage infrastructure meets the project's capacity requirements."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must confirm who owns the data and what access permissions are in place. This ensures the team has the authority to access and use the patient records before any extraction activity takes place.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Confirming data volume and assessing data schema compatibility are activities that address data readiness and technical fit, which are relevant at a later stage after ownership and access have been established."
      },
      {
        "options": [
          "D"
        ],
        "text": "Ensuring the data storage infrastructure meets capacity requirements is a workspace and infrastructure concern that does not need to be resolved before data ownership and access permissions are confirmed."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q41",
    "question": "An AI project manager is developing an AI solution to support mortgage approval decisions. Regulators request evidence of how the algorithm and the training data were selected. However, business executives are concerned that providing too much detail could expose proprietary practices.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Document only the technical specifications.",
      "B": "Satisfy regulatory demands while protecting intellectual property.",
      "C": "Provide regulators full access to training data sources.",
      "D": "Postpone documentation efforts until after the governance review."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager should satisfy regulatory demands while protecting intellectual property (IP). This balances the need for regulatory transparency with the organization's legitimate interest in protecting its competitive advantage.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Documenting only the technical specifications withholds the model selection rationale that regulators have specifically requested, failing to fully satisfy governance review requirements."
      },
      {
        "options": [
          "C"
        ],
        "text": "Providing regulators full access to training data sources unnecessarily exposes intellectual property (IP), which conflicts with legitimate business concerns raised by executives."
      },
      {
        "options": [
          "D"
        ],
        "text": "Postponing documentation efforts until after the governance review fails to address the regulator's request in a timely manner and risks noncompliance during the review process."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q42",
    "question": "A project sponsor wants the AI project manager to expedite the launch of a credit risk model with strong pilot testing results. However, the model produced inconsistent outputs on a new customer segment, and the AI project team has not finalized monitoring thresholds or rollback steps.  What should the AI project manager recommend?",
    "options": {
      "A": "Approve deployment since the model meets validationmetrics and the pilot confirms business value.",
      "B": "Delay deployment until segment performance concerns and operational readiness gaps are resolved",
      "C": "Approve deployment in segments where pilot testingoutcomes exceed the expected value.",
      "D": "Delay deployment only if legal or compliance stakeholdersformally reject the release package."
    },
    "correct": "B",
    "correctExplanation": "Inconsistent performance on a new customer segment and unfinished monitoring thresholds and rollback steps indicate that the model is not ready for production. The project manager must recommend delaying deployment until these gaps are resolved, regardless of sponsor pressure to expedite the launch.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Approving deployment because the model met the primary validation metric and approving deployment in well-performing segments both proceed despite known performance and operational readiness gaps, which introduces unacceptable risk into a production credit risk environment."
      },
      {
        "options": [
          "D"
        ],
        "text": "Delaying deployment only if legal or compliance stakeholders formally reject the release package places the go/no-go decision in the hands of external parties rather than on the project manager's responsibility to assess and confirm full deployment readiness before approving release."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q43",
    "question": "An AI project team is preparing the deployment plan for a new credit decisioning model that will replace an existing rule-based system. The AI project manager is leading the deployment planning.\n\nWhat should the AI project manager define to manage technical risk at go-live?",
    "options": {
      "A": "A marketing communication plan for customer notification.",
      "B": "End-user training schedules and onboarding materials for loan officers.",
      "C": "Data archival policies for historical records and audit logs.",
      "D": "A phased rollout strategy with rollback triggers."
    },
    "correct": "D",
    "correctExplanation": "A phased rollout strategy with rollback triggers allows the team to manage technical and decisioning risk by introducing the model gradually and defining the conditions under which deployment would be reversed. This ensures the team can respond quickly if the model does not perform as expected at go-live.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "A marketing communication plan and end-user training schedules address stakeholder communication and user readiness respectively. Neither directly manages technical risk during deployment."
      },
      {
        "options": [
          "C"
        ],
        "text": "Data archival policies address record retention and audit requirements rather than the deployment risk management needed at go-live."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q44",
    "question": "An AI project manager is coordinating an AI initiative to flag unusual warranty claims. The team plans to combine customer claim records, payment history, and third-party device data. However, the legal and governance requirements for merging this data have not been reviewed yet. What should the AI project manager do?",
    "options": {
      "A": "Remove direct identifiers from the data and send the combined file to the modeling team.",
      "B": "Request additional historical claim records to increase the volume of the training data set.",
      "C": "Verify with the legal and compliance team that the data is approved before integration begins.",
      "D": "Select a model approach that limits user access to prediction results after deployment."
    },
    "correct": "C",
    "correctExplanation": "Verifying with legal and compliance before integration ensures the initiative complies with usage rights, privacy obligations, and data governance policies before datasets are merged.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Removing direct identifiers without legal review assumes data merging is permitted, exposing the organization to compliance risks."
      },
      {
        "options": [
          "B"
        ],
        "text": "Requesting additional historical records proceeds with data activities before resolving legal and governance requirements."
      },
      {
        "options": [
          "D"
        ],
        "text": "Limiting output access addresses post-deployment permissions rather than pre-integration data usage rights."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q45",
    "question": "A data engineer is preparing data from internal and external sources for a cross-functional AI initiative. The AI project manager flags that the data includes personally identifiable information (PII) and may be subject to regional data protection regulations.  What should the data engineer do?",
    "options": {
      "A": "Begin data integration, address compliance requirements,and consolidate the available dataset.",
      "B": "Verify data usage rights, confirm regulatory compliance, and implement appropriate access controls",
      "C": "Use only internal data sources to avoid complianceconcerns associated with external data providers.",
      "D": "Allow each team to manage data formats independentlybased on their system requirements."
    },
    "correct": "B",
    "correctExplanation": "When data includes PII and may be subject to regional data protection regulations, the data engineer must first verify that the organization has the legal right to use the data, confirm compliance with applicable regulations, and implement access controls to protect sensitive information. Addressing these requirements ensures the initiative operates within legal and regulatory boundaries from the outset.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Beginning data integration immediately and allowing teams to manage data access independently defers or decentralizes compliance responsibilities, exposing the organization to legal and regulatory risks before appropriate safeguards are in place."
      },
      {
        "options": [
          "C"
        ],
        "text": "Using only internal data sources to avoid compliance concerns does not eliminate the obligation to verify usage rights and implement access controls, as internal data may also be subject to data protection requirements."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q46",
    "question": "An AI project team is deploying an AI solution at a healthcare organization. The project team has been making adjustments to the model without proper tracking documentation.  What should the AI project team establish?",
    "options": {
      "A": "A retraining schedule to ensure the model is regularlyupdated with new data.",
      "B": "A monitoring dashboard to track model performance andalert the team to degradation.",
      "C": "A model versioning and change control process to manage and record updates",
      "D": "A compliance review to confirm the model meets currentregulatory requirements."
    },
    "correct": "C",
    "correctExplanation": "The AI project team must establish model versioning and change control procedures. This ensures that all updates are documented, reviewed, and approved before implementation, maintaining accountability and traceability across the model lifecycle.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Establishing a retraining schedule addresses how frequently the model is updated but does not provide the governance structure needed."
      },
      {
        "options": [
          "B"
        ],
        "text": "Implementing a monitoring dashboard supports ongoing performance tracking but does not address the absence of a formal process for managing and documenting model updates."
      },
      {
        "options": [
          "D"
        ],
        "text": "Conducting a compliance review does not establish the change control process needed to govern how future updates are managed and documented."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q47",
    "question": "An AI project team has identified the data sources for a customer service chatbot. During data preparation activities, the AI project team discovers that data from several operational systems has not been transferred to the development environment.  What should the AI project team do?",
    "options": {
      "A": "Begin model development using the currently availabledata and incorporate the remaining data later.",
      "B": "Modify the project success criteria to reflect the volume ofthe available data.",
      "C": "Engage a data custodian to collect and migrate the remaining data to complete the data set",
      "D": "Reduce the scope of the AI solution to match the datacurrently available."
    },
    "correct": "C",
    "correctExplanation": "When data from several operational systems has not been made available in the development environment, the AI project team should engage a data custodian to collect and migrate the missing data. A custodian is responsible for the storage, transfer, and administrative management of data. This resolution ensures the initiative is built on the full set of required data.",
    "incorrectExplanations": [
      {
        "options": [
          "D"
        ],
        "text": "Beginning development with only the data currently available or narrowing the scope of the AI solution both move forward before the complete dataset has been established."
      },
      {
        "options": [
          "A"
        ],
        "text": "This creates a risk that the model will be built on incomplete information and may not properly reflect the full intended use case."
      },
      {
        "options": [
          "B"
        ],
        "text": "Modifying the project success criteria lowers the standard to match the data gap rather than resolving it, which does not address the underlying data collection requirement."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q48",
    "question": "During the data preparation phase of an AI initiative the project team has completed data cleaning and preprocessing activities.  What should the AI project team do next?",
    "options": {
      "A": "Conduct exploratory data analysis to identify qualityissues.",
      "B": "Partition the data set into training, validation, and testsets.",
      "C": "Derive and select variables for feature engineering",
      "D": "Expand the data set by adding more records fromavailable sources."
    },
    "correct": "C",
    "correctExplanation": "After completing data cleaning and standardization, the next step in the data preparation phase is feature engineering and selection. This involves deriving new variables from existing data and identifying those most likely to contribute to model performance, which prepares the data set for effective model training.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Conducting exploratory data analysis to identify additional data quality issues should have been addressed during the cleaning and standardization activities already completed by the team."
      },
      {
        "options": [
          "B"
        ],
        "text": "Partitioning the data set into training, validation, and test sets is a model development activity that follows data preparation."
      },
      {
        "options": [
          "D"
        ],
        "text": "Expanding the data set by adding more records addresses data volume rather than the quality and relevance of the variables needed to improve model performance."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q49",
    "question": "An AI project manager at an education company wants senior executive approval for an AI teaching copilot. The project sponsor has asked to support the executive business case presentation with appropriate evidence. What should the AI project manager gather?",
    "options": {
      "A": "Financial data and projected benefits.",
      "B": "Technical specifications and system architecture diagrams.",
      "C": "User interface mockups and navigation flows.",
      "D": "Detailed model training logs and algorithm documentation."
    },
    "correct": "A",
    "correctExplanation": "Executive approvals rely primarily on investment value, financial returns, strategic alignment, and clear business benefits.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Technical architecture diagrams target technical execution teams rather than executive decision-makers."
      },
      {
        "options": [
          "C"
        ],
        "text": "UI designs target product design teams rather than executive decision-makers evaluating business value."
      },
      {
        "options": [
          "D"
        ],
        "text": "Deep technical training logs target data science teams."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q50",
    "question": "An AI project team is developing the business case for a predictive maintenance solution for manufacturing equipment. The AI project manager is supporting the project team and wants the business case to reflect the unique requirements of the project.  What should the AI project team include in the AI business case?",
    "options": {
      "A": "Signed statement of work (SOW) from the procurementdepartment.",
      "B": "A detailed Gantt chart with milestones, dependencies, andresource allocation overview.",
      "C": "Data feasibility assumptions, data quality assessments, and recurring model retraining costs",
      "D": "A stakeholder register stating project roles andcommunication requirements."
    },
    "correct": "C",
    "correctExplanation": "An AI business case must reflect the unique requirements of an AI project, including data feasibility assumptions, data quality assessments, and recurring model retraining costs. These elements distinguish an AI business case from a conventional project business case by capturing the data dependencies, quality constraints, and ongoing operational costs specific to AI model development and maintenance.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B",
          "D"
        ],
        "text": "An SOW, Gantt chart, and stakeholder register are project management tools, not business case inputs, and they do not address the financial or technical factors specific to an AI business case."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q51",
    "question": "An AI project manager is evaluating the return on investment (ROI) of an autonomous retail solution. The marketing team expects revenue to grow while operations teams anticipate additional infrastructure and support costs. Senior executives are eager to proceed because competitors have already implemented similar solutions.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Estimate revenue increases, engagement metrics, and conversion rates.",
      "B": "Focus primarily on implementation and operating costs.",
      "C": "Assess the expected benefits, costs, risks, and underlying assumptions.",
      "D": "Base the ROI determination on the competitor adoption trends."
    },
    "correct": "C",
    "correctExplanation": "A comprehensive ROI determination requires more than projecting revenue or estimating costs in isolation. It must account for the full financial picture, including risks and the assumptions on which projections are based.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Estimating revenue increases, engagement metrics, and conversion rates, and focusing primarily on implementation and operating costs, only evaluate one side of the ROI equation, producing an incomplete picture that does not account for the full range of factors needed to determine whether the investment is financially justified."
      },
      {
        "options": [
          "D"
        ],
        "text": "Basing the ROI determination on competitor adoption trends relies on external market behavior rather than the organization's own projected benefits, costs, risks, and assumptions, which is not a sufficient basis for an informed investment decision."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q52",
    "question": "An AI project manager is working with the governance team to ensure an AI initiative adheres to applicable laws, standards, and internal policies. The project sponsor requests the team tracks and communicates adherence to stakeholders.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Execute a model governance framework.",
      "B": "Request the stakeholder refers to the risk register.",
      "C": "Maintain an audit trail for model development decisions.",
      "D": "Establish compliance monitoring and periodical reporting."
    },
    "correct": "D",
    "correctExplanation": "Compliance monitoring and periodic reporting mechanisms provide a structured way to track whether an AI initiative adheres to applicable laws, standards, and internal policies, and to communicate that adherence to stakeholders.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A model governance framework establishes the rules and procedures for managing the AI model life cycle, but does not specifically address the tracking and communication of regulatory and policy adherence."
      },
      {
        "options": [
          "B"
        ],
        "text": "A risk register documents identified compliance risks but does not provide an ongoing mechanism for monitoring and reporting adherence to requirements."
      },
      {
        "options": [
          "C"
        ],
        "text": "An audit trail records model development decisions and outputs but is focused on accountability and traceability rather than tracking and communicating compliance with laws and standards. An audit trail alone is not enough."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q53",
    "question": "An AI project manager is leading a retail forecasting initiative. The data science team has completed initial data collection. However, the data set relies on sales and inventory records that are updated daily.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Collect a larger initial data set to reduce the need for frequent updates.",
      "B": "Establish procedures to refresh and update the data set as new records become available.",
      "C": "Proceed with model development and update the data set if performance declines.",
      "D": "Delegate data refresh responsibilities to the data engineering team without defining a process."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must establish procedures to keep the data set current. Without a defined refresh process, the data set will become outdated, compromising the reliability of the forecasting model over time.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Collecting a larger initial data set does not address the need for ongoing updates since the value of a forecasting model depends on current data, not just data volume."
      },
      {
        "options": [
          "C"
        ],
        "text": "Proceeding with model development and updating only if performance declines defers the refresh process until after problems arise rather than establishing the procedures needed to prevent them."
      },
      {
        "options": [
          "D"
        ],
        "text": "Delegating refresh responsibilities without defining a process transfers the task without the structure needed to ensure it is performed consistently and correctly."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q54",
    "question": "An AI project manager at a logistics company is preparing a deployment plan for the operationalization phase of an AI initiative.  What should the AI project manager include in the plan?",
    "options": {
      "A": "Data cleaning procedures, preprocessing workflows, andfeature engineering.",
      "B": "Infrastructure requirements, system integration steps, and rollback procedures",
      "C": "Stakeholder engagement assessment matrix andfeedback reports.",
      "D": "Model training activities and hyperparameter tuningconfigurations."
    },
    "correct": "B",
    "correctExplanation": "A deployment plan must include infrastructure requirenments, system integration steps, and rollback procedures to ensure the AI solution can be released into production in a coordinated and controlled manner. These components prepare the team to manage the technical and operational aspects of deployment while reducing the risk of disruption.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Data cleaning, preprocessing workflows, and feature engineering belong to the data preparation phase and are not deployment plan components."
      },
      {
        "options": [
          "C"
        ],
        "text": "Stakeholder feedback reports belong to the planning and discovery phase and have no place in a deployment plan."
      },
      {
        "options": [
          "D"
        ],
        "text": "Model training activities and hyperparameter tuning configurations are development phase activities that should have been completed before the deployment plan is executed, not components of the deployment plan itself."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q55",
    "question": "A company has deployed an AI-based sales prediction model. After operating successfully for some time, the model's forecast performance begins to decline.  What should the AI project manager identify as the cause of the decline?",
    "options": {
      "A": "Model drift",
      "B": "Poorly defined performance metrics",
      "C": "Pipeline failure",
      "D": "Incomplete deployment documentation"
    },
    "correct": "A",
    "correctExplanation": "When a deployed AI model operates successfully for a period of time and then begins to decline in performance, the most likely cause is model drift. Model drift occurs when changes in real-world data patterns cause the model's predictions to become less accurate over time.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "D"
        ],
        "text": "A poorly defined performance metric and incomplete deployment documentation would have caused issues from the beginning of deployment rather than after a period of successful operation, making them unlikely causes of a gradual performance decline."
      },
      {
        "options": [
          "C"
        ],
        "text": "Pipeline failure could affect model inputs and outputs but would typically cause an immediate and visible disruption rather than a gradual decline in forecast performance over time."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q56",
    "question": "An AI project manager has completed delivery of an AI-powered analytics dashboard for an energy company. The project is entering the closure phase.\n\nWhat should the AI project manager do to support organizational learning?",
    "options": {
      "A": "Transfer ownership of the AI model to the operations team.",
      "B": "Document project successes, challenges, and recommendations for future initiatives.",
      "C": "Finalize the knowledge transfer and technical specifications for model maintenance.",
      "D": "Document the budget variance and present it to the project sponsor."
    },
    "correct": "B",
    "correctExplanation": "At project closure, documenting lessons learned captures what worked well, what did not, and what should be done differently in future projects. This supports organizational learning and improves the quality of future AI initiatives.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Transferring ownership of the AI model and finalizing knowledge transfer and technical specifications are closure activities that support operational continuity rather than organizational learning."
      },
      {
        "options": [
          "D"
        ],
        "text": "Documenting the final budget variance and presenting it to the project sponsor does not contribute to capturing lessons learned for future initiatives."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q57",
    "question": "An AI project manager is reviewing an AI model that has completed development and testing. The project manager needs to determine whether the model is ready for operationalization.  What should the AI project manager do next?",
    "options": {
      "A": "Establish testing protocols and implement configurationmanagement procedures.",
      "B": "Plan training schedules and coordinate hyperparametertuning activities.",
      "C": "Evaluate model performance and validate deployment readiness documentation",
      "D": "Oversee data cleaning workflows and managenormalization processes."
    },
    "correct": "C",
    "correctExplanation": "When an AI model has completed development and testing, the project manager should evaluate model performance against established success criteria and validate model documentation and operational procedures before making a final approval decision for deployment. These activities confirm the model is ready for operationalization and support a defensible go/no-go decision.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Establishing testing protocols and implementing configuration management procedures relates to quality assurance and model development control."
      },
      {
        "options": [
          "B"
        ],
        "text": "These activities help manage and validate the solution during development, but they do not address deployment readiness."
      },
      {
        "options": [
          "D"
        ],
        "text": "Overseeing data cleaning workflows and managing normalization processes is likewise incorrect because those are data preparation activities. Planning training schedules and coordinating hyperparameter tuning are not correct because these are model training activities. They occur earlier in the development lifecycle and focus on improving model performance rather than determining whether the solution is ready for deployment. They support the quality and usability of input data, but they are not part of evaluating whether the AI solution is operationally ready to be deployed."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q58",
    "question": "An AI project team is developing a diagnostic tool for a US- based healthcare organization. The AI project manager must oversee the development of the privacy and security plan.  What regulation should the privacy and security plan comply with?",
    "options": {
      "A": "The General Data Protection Regulation (GDPR)",
      "B": "The California Consumer Privacy Act (CCPA)",
      "C": "Health Insurance Portability and Accountability Act (HIPAA",
      "D": "The Family Educational Rights and Privacy Act (FERPA)"
    },
    "correct": "C",
    "correctExplanation": ") Any organization developing a diagnostic tool for a U.S.- based healthcare organization must ensure its privacy and security plan complies with HIPAA requirements. HIPAA is the federal law that sets the standard for protecting sensitive patient health information in the U.S.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "GDPR and CCPA are data privacy regulations, but neither applies here."
      },
      {
        "options": [
          "A"
        ],
        "text": "GDPR governs data protection for individuals in the European Union, and CCPA applies to consumer data privacy in California."
      },
      {
        "options": [
          "D"
        ],
        "text": "FERPA governs the privacy of student education records and does not apply to healthcare data or diagnostic tools. Neither is specific to U.S. healthcare organizations broadly."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q59",
    "question": "A data scientist at a financial services company is preparing historical chat logs to train a large language model (LLM). The logs contain sensitive personally identifiable information (PII) that must be protected before the data can be used.\n\nWhat should the data scientist do before using the data for model training?",
    "options": {
      "A": "Encrypt the customer chat logs and feed the encrypted files directly into the model.",
      "B": "Replace the customer chat logs with publicly available data to avoid PII concerns.",
      "C": "Require all team members to sign non-disclosure agreements before accessing the training data.",
      "D": "Apply data anonymization techniques to replace sensitive identifiers before model training."
    },
    "correct": "D",
    "correctExplanation": "Data anonymization techniques such as pseudonymization replace sensitive identifiers with non-identifiable substitutes, protecting customer PII while preserving the data's utility for model training.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Encrypting the data set does not remove PII from the data. The model would still process sensitive identifiers during training."
      },
      {
        "options": [
          "B"
        ],
        "text": "Replacing customer chat logs with publicly available data eliminates the relevant training data entirely, undermining the purpose of the initiative."
      },
      {
        "options": [
          "C"
        ],
        "text": "Non-disclosure agreements are administrative controls that do not technically protect PII within the data set or prevent sensitive information from being processed during training."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q60",
    "question": "An AI project manager is finalizing a deployment plan for a new AI solution. The solution will replace a core operational process, and stakeholders want assurance that disruptions can be managed if deployment issues arise.\n\nWhat should the AI project manager include in the deployment plan?",
    "options": {
      "A": "A user training schedule to prepare staff before the solution goes live.",
      "B": "Defined rollback procedures and contingency plans for deployment failures.",
      "C": "A model performance dashboard to track accuracy after the solution is released.",
      "D": "A stakeholder communication plan outlining post-deployment reporting frequency."
    },
    "correct": "B",
    "correctExplanation": "Defined rollback procedures and contingency plans in the deployment plan ensure the team has a predefined path to reverse or mitigate the impact of a failed deployment before it disrupts the core operational process the solution is replacing.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A user training schedule prepares staff to use the solution but does not provide the predefined response mechanisms needed to manage disruptions if deployment issues occur."
      },
      {
        "options": [
          "C"
        ],
        "text": "A model performance dashboard supports ongoing monitoring after the solution is released but does not address the need for a predefined plan to respond to deployment failures before they affect operations."
      },
      {
        "options": [
          "D"
        ],
        "text": "A stakeholder communication plan addresses how information will be shared after deployment but does not establish the rollback and contingency procedures needed to manage disruptions during the deployment process itself."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q61",
    "question": "An AI project manager has been asked to explore an AI solution for a customer service department. The project team wants to reduce rising response times and inconsistent issue resolution.  What should the AI project manager do first?",
    "options": {
      "A": "Select the AI tool with the strongest automation featuresand begin a pilot with the service team.",
      "B": "Interview stakeholders and users to clarify pain points, define the target audience, and confirm the business need",
      "C": "Build a prototype using historical service data to testwhether response times can be reduced.",
      "D": "Estimate implementation cost, project expected savings,and determine whether the initiative has financial value."
    },
    "correct": "B",
    "correctExplanation": "Without this foundation, any tool selection, prototyping, or financial analysis risks being misaligned with the actual business need.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Selecting an AI tool and building a prototype both proceed with technical activities before the problem has been clearly defined, risking investment in a solution that does not address the actual business need."
      },
      {
        "options": [
          "D"
        ],
        "text": "Estimating implementation cost and projecting expected savings are financial planning activities that depend on a clearly defined problem and scope."
      },
      {
        "options": [
          "C"
        ],
        "text": "Without first confirming the business need, financial estimates would be based on assumptions rather than validated requirements."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q62",
    "question": "An AI project team has deployed a classification model. The model meets precision and recall targets, but business users report that false positives are increasing costs and manual rework.  What should the AI project team do?",
    "options": {
      "A": "Disregard reports since technical benchmarks are met.",
      "B": "Recalibrate success metrics to account for false positives",
      "C": "Update the algorithm to reduce false positives.",
      "D": "Transfer the issue to the operations team."
    },
    "correct": "B",
    "correctExplanation": "When a deployed model meets technical targets but causes operational costs and manual rework, the project manager should recalibrate success metrics to account for the business impact of false positives. Tracking key performance indicators (KPIs) and success measures must reflect both technical and business performance to ensure the AI solution is delivering value.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Disregarding user reports ignores the business impact of false positives."
      },
      {
        "options": [
          "D"
        ],
        "text": "Updating the algorithm and transferring the issue to the operations team addresses symptoms rather than the underlying gap in success metrics."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q63",
    "question": "An AI project team is about to begin data preparation for a customer churn prediction initiative. During the final data quality review, the team discovers that customer data from a recently acquired business unit is not fully integrated. Project stakeholders request the team proceeds to maintain the planned schedule.  What should the AI project manager do?",
    "options": {
      "A": "Proceed with data preparation activities because some ofthe required customer data is already available.",
      "B": "Begin model development activities per stakeholder'srequest and evaluate the impact of the missing data duringtesting.",
      "C": "Assess whether the available data sufficiently represents the intended customer population before proceeding",
      "D": "Request additional computing resources to reducepotential performance issues caused by the incompletedata set."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must first assess whether the available data adequately represents the customer population before any preparation activities begin. Proceeding without this assessment risks building a model on data that does not reflect the full customer base, which could produce unreliable churn predictions.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with data preparation or excluding the missing business unit data seek to advance the project without first confirming whether the available data is sufficient and representative, which is the foundational assessment required before preparation begins."
      },
      {
        "options": [
          "B"
        ],
        "text": "Beginning model development and evaluating the impact of the missing data during testing carries a known data gap into model development without first determining whether it is acceptable to proceed, which introduces avoidable risk into the development process."
      },
      {
        "options": [
          "D"
        ],
        "text": "This option is not the best answer; option C more directly addresses the situation described."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q64",
    "question": "An AI project manager is preparing to deploy an AI solution that recommends maintenance actions for industrial equipment. Early testing shows the model performs well overall, but some recommendations cannot be easily explained and one test case produced an unsafe suggestion. What should the AI project manager do next?",
    "options": {
      "A": "Document the model's accuracy results and move intodeployment planning with operations leaders.",
      "B": "Improve system speed so users can receiverecommendations more efficiently.",
      "C": "Assess the safety, ethical, and security risks surfaced during testing and develop mitigation actions",
      "D": "Train end users to identify, flag, and overriderecommendations that seem unusual during production."
    },
    "correct": "C",
    "correctExplanation": "The project manager must conduct a risk assessment before deployment proceeds. Developing mitigation actions ensures these risks are understood and managed rather than carried into production.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Documenting accuracy results and moving into deployment planning proceed without addressing the safety and ethical risks already identified during testing, which could expose users and the organization to harm."
      },
      {
        "options": [
          "B"
        ],
        "text": "Improving system speed addresses performance efficiency rather than the safety and ethical concerns surfaced during testing."
      },
      {
        "options": [
          "D"
        ],
        "text": "Training end users to identify and override unusual recommendations places the burden of risk management on users rather than addressing the underlying risks through a formal assessment and mitigation process."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q65",
    "question": "An AI project team has received an initial dataset to train a clinical diagnosis support model. The AI project manager must make a go/no-go decision before data preparation begins.\n\nWhat should the AI project manager assess first?",
    "options": {
      "A": "Data completeness, accuracy, and reliability of diagnostic labels.",
      "B": "Dataset freshness and currency relative to current clinical practice.",
      "C": "Record volume, feature count, and storage format compatibility.",
      "D": "Dataset accessibility and access permissions for the data science team."
    },
    "correct": "A",
    "correctExplanation": "For a clinical diagnosis support model, the completeness, accuracy, and reliability of diagnostic labels are the most critical factors in determining whether the data is ready for model development. Without accurate and complete labels, the model cannot learn to make reliable diagnostic predictions, making this the foundational assessment for a go/no-go decision.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "C"
        ],
        "text": "Dataset freshness and record volume address data currency and size, respectively. While relevant to data readiness, neither is as critical as label quality for a clinical diagnosis model where incorrect labels directly impact patient safety."
      },
      {
        "options": [
          "D"
        ],
        "text": "Dataset accessibility and access permissions address data governance concerns that are important but secondary to confirming the data is of sufficient quality to support model development."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q66",
    "question": "An AI project manager is leading an initiative to improve loan approval recommendations. The project sponsor must make a funding decision soon and needs to understand the performance metrics.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Present model accuracy metrics and defer business interpretation to the leadership.",
      "B": "Recommend collecting additional customer data before addressing the performance concerns.",
      "C": "Escalate the segment performance concern to the data science team before responding to leadership.",
      "D": "Translate the data findings to business-relevant language that connects model behavior to objectives."
    },
    "correct": "D",
    "correctExplanation": "The project manager's responsibility is to communicate data findings in terms that are meaningful to a business audience. Translating technical concepts into business-relevant language that connects model behavior to objectives enables the sponsor to make an informed funding decision without requiring additional analysis time.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Presenting accuracy metrics and deferring business interpretation places the communication burden on leadership rather than fulfilling the project manager's responsibility to translate technical findings for a non-technical audience."
      },
      {
        "options": [
          "B",
          "C"
        ],
        "text": "Recommending additional data collection and escalating the concern to the data science team both defer action at a time when a funding decision requires an immediate and informed response from the project manager."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q67",
    "question": "A retail company is preparing to launch an AI demand forecasting solution across 200 stores. The model has passed testing, but several deployment planning activities remain incomplete before rollout can begin.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Delay planning until after full production release, gathering operational data, and collecting store manager feedback.",
      "B": "Create a deployment plan that defines the release sequence, readiness criteria, approval checkpoints, and rollback procedures.",
      "C": "Focus only on improving forecast accuracy before finalizing deployment details.",
      "D": "Ask each store manager to decide when and how the solution should be deployed locally."
    },
    "correct": "B",
    "correctExplanation": "Creating a deployment plan that defines the release sequence, readiness criteria, approval checkpoints, and rollback procedures ensures the rollout across 200 stores is coordinated, controlled, and prepared to respond if deployment issues arise.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Delaying planning until after full production release, gathering operational data, and collecting store manager feedback defers the structured planning needed to coordinate a large-scale rollout and introduces unnecessary risk."
      },
      {
        "options": [
          "C"
        ],
        "text": "Focusing only on improving forecast accuracy before finalizing deployment details assumes technical performance is the only remaining gap, without addressing the planning and coordination activities needed to support a controlled rollout across multiple locations."
      },
      {
        "options": [
          "D"
        ],
        "text": "Asking each store manager to decide when and how the solution should be deployed locally decentralizes deployment decisions without a coordinated plan, creating inconsistent rollout conditions and no defined approval or recovery process."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q68",
    "question": "A data engineer is preparing data for an AI project that involves personal records from multiple third-party providers. The project manager needs to ensure the data can be legally and responsibly used before model training begins.  What should the data engineer do?",
    "options": {
      "A": "Assess data sufficiency and evaluate representativenessacross sources.",
      "B": "Verify data usage rights and compliance with data protection regulations",
      "C": "Coordinate data transfers and establish refreshprocedures for ongoing feeds.",
      "D": "Analyze demographic distributions and identifyrepresentation gaps in the data."
    },
    "correct": "B",
    "correctExplanation": "When preparing data from third-party providers for an AI project involving personal records, the data engineer should verify data usage rights and licensing agreements and ensure compliance with data protection regulations and policies. These activities confirm that the data can be legally and responsibly used before model training begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Assessing data sufficiency, coordinating data transfers, and analyzing demographic distributions are all activities related to data readiness assessment, data collection, or bias checks."
      },
      {
        "options": [
          "D"
        ],
        "text": "None of these actions addresses the legal, privacy, and compliance obligations involved in using third-party personal records."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q69",
    "question": "A data scientist is reviewing available datasets for a new AI initiative. After an initial assessment, they identify inconsistencies, missing values, and duplicate records across multiple sources.   What should the data scientist do next?",
    "options": {
      "A": "Compare the available data against the defined requirements and solution needs",
      "B": "Proceed with model development and adjust outputs toaddress data issues.",
      "C": "Use only the subset of data with the fewest visibilityissues.",
      "D": "Begin data cleansing and preprocessing activitiesimmediately."
    },
    "correct": "A",
    "correctExplanation": "When data quality issues are identified, the data scientist must first assess whether the available data meets the defined requirements for the AI solution before any corrective action is taken. This comparison determines the extent of the gaps and informs whether the data is sufficient to proceed or whether additional steps are needed to address deficiencies.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Proceeding with model development and adjusting outputs to compensate for data issues bypasses the necessary assessment step and risks building a model on data that does not meet the solution's requirements."
      },
      {
        "options": [
          "C",
          "D"
        ],
        "text": "Using only a data subset or starting cleansing immediately takes action before completing the assessment needed to identify the right corrective steps and confirm whether the data can support the initiative."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q70",
    "question": "An AI project manager is overseeing an AI assistant deployed in an IT help desk department. The department relies on the solution to handle a high volume of staff requests daily. The AI project manager wants to make sure operations can continue if the AI solution becomes unavailable due to service disruptions.  What should the AI project manager establish?",
    "options": {
      "A": "A model retraining schedule",
      "B": "A bias detection process",
      "C": "A business continuity plan",
      "D": "A performance monitoring dashboard"
    },
    "correct": "C",
    "correctExplanation": "The AI project manager should establish a business continuity plan that ensures operations can continue if the solution becomes unavailable due to service disruptions. This plan defines how the department will maintain service delivery during a disruption, minimizing the impact on staff and operations.",
    "incorrectExplanations": [
      {
        "options": [
          "D"
        ],
        "text": "A model retraining schedule and a performance monitoring dashboard address model maintenance and performance tracking, respectively."
      },
      {
        "options": [
          "B"
        ],
        "text": "A bias detection process addresses fairness in the assistant's responses rather than the operational continuity concern raised in the scenario."
      },
      {
        "options": [
          "A"
        ],
        "text": "Neither provides a plan for maintaining operations when the solution is unavailable."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q71",
    "question": "A data scientist team is reviewing a training data set for a new AI initiative. The team reports that one customer demographic is significantly overrepresented while several others are minimally represented.\n\nWhat should the data science team do?",
    "options": {
      "A": "Document the data set composition and proceed with model training.",
      "B": "Conduct bias testing to determine model balance and fairness.",
      "C": "Request additional computing resources to accelerate model training.",
      "D": "Move directly to testing the model's technical performance metrics."
    },
    "correct": "B",
    "correctExplanation": "Conducting bias and fairness testing to evaluate whether the imbalance produces different outcomes across population groups identifies whether the representation gap translates into unfair or inconsistent model behavior before development proceeds.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Proceeding with the current data set and moving directly to testing the model's technical performance metrics advances the project without first evaluating whether the demographic imbalance creates fairness risks."
      },
      {
        "options": [
          "C"
        ],
        "text": "Requesting additional computing resources addresses infrastructure capacity rather than the representation and fairness concern identified in the scenario."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q72",
    "question": "An organization plans to launch an AI-based applicant screening system for high-volume recruitment processes. The AI project manager is conducting the risk assessment during the business understanding phase.  What should the project manager evaluate first?",
    "options": {
      "A": "Schedule risks related to vendor platform delivery andtimeline commitments.",
      "B": "Budget risks related to compute infrastructure costs andlicensing fee variability.",
      "C": "Resource risks related to availability of qualified machinelearning (ML) engineers.",
      "D": "Ethical and regulatory risks related to algorithmic bias and applicable laws"
    },
    "correct": "D",
    "correctExplanation": "The project manager should evaluate ethical and regulatory risks first. Identifying these risks early in the business understanding phase ensures the project is designed to meet ethical and regulatory requirements from the outset. Applicant screening systems use algorithmic decision-making, which is subject to anti-discrimination laws and regulatory scrutiny, making bias and legal compliance the highest priority risk category to assess before the development phase.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B",
          "C"
        ],
        "text": "Schedule risks related to vendor platform delivery, budget risks related to compute infrastructure costs, and resource risks related to machine learning (ML) engineer availability are all legitimate project risk categories, but do not take priority over ethical and regulatory risks."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q73",
    "question": "An AI project team is developing a fraud detection solution for a credit card company. Several modeling approaches have been proposed, and the team has engaged a data scientist to support the technique selection process.  What should the data scientist do?",
    "options": {
      "A": "Select the technique that requires the fewestcomputational resources.",
      "B": "Recommend a technique that has been applied inprevious organizational projects.",
      "C": "Assess the trade-offs between model performance, complexity, and interpretability",
      "D": "Postpone selection until model evaluation, validation, andtesting activities are complete."
    },
    "correct": "C",
    "correctExplanation": "The data scientist must evaluate the trade-offs between performance, complexity, and interpretability before supporting a technique selection. This ensures the recommended approach is appropriate for the fraud detection use case and aligned with the project's technical and business requirements.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Approving the fewest computational resources technique and selecting a previously used technique prioritize convenience over a structured evaluation of which approach best fits the current use case and requirements."
      },
      {
        "options": [
          "B"
        ],
        "text": "The modeling technique must be selected before development begins, not after evaluation activities have been completed."
      },
      {
        "options": [
          "D"
        ],
        "text": "Postponing technique selection reverses the correct sequence."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q74",
    "question": "An AI project manager is preparing to deploy a customer support assistant chatbot that successfully completed testing. Leadership wants to deploy within the next month. However, the training support processes, and ownership of production issues are still unclear.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Deploy immediately since testing is complete.",
      "B": "Transfer planning responsibilities to the technical team.",
      "C": "Develop a comprehensive deployment plan.",
      "D": "Delay deployment until outstanding questions are resolved."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must develop a comprehensive deployment plan that addresses the outstanding readiness gaps. This ensures the solution can be deployed in a coordinated manner that supports a successful transition to production.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Deploying immediately since testing is complete overlooks the unresolved operational and support questions that must be addressed before a controlled deployment can occur."
      },
      {
        "options": [
          "B"
        ],
        "text": "Transferring planning responsibilities to the technical team shifts accountability away from the AI project manager without resolving the readiness gaps that require coordinated planning across multiple functions."
      },
      {
        "options": [
          "D"
        ],
        "text": "Delaying deployment until outstanding questions are resolved does not reflect the AI project manager's responsibility to actively develop the plan needed to resolve those questions and support timely deployment."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q75",
    "question": "An AI project manager is developing the scope statement for a customer service chatbot initiative. The project sponsor requests clearly defined boundaries before development begins.  What should the AI project manager include in the scope statement?",
    "options": {
      "A": "The chatbot's technical architecture and algorithmselection criteria.",
      "B": "The data collection schedule and preprocessing workflowsfor model training.",
      "C": "The solution parameters, expected outcomes, assumptions, and constraints",
      "D": "The performance benchmarks, validation thresholds, anddeployment approval criteria."
    },
    "correct": "C",
    "correctExplanation": "A scope statement for an AI initiative must clearly define what the solution will and will not deliver, the expected outcomes, and the assumptions and constraints that govern the work. This ensures all stakeholders have a shared understanding of the initiative before development begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "The chatbot's technical architecture, algorithm selection criteria, model performance targets, model performance benchmarks, validation thresholds, and deployment approval criteria describe technical development and evaluation components that belong in later phases of the project, not in the scope statement."
      },
      {
        "options": [
          "B"
        ],
        "text": "The data collection schedule and preprocessing workflows address data preparation activities rather than the boundaries, outcomes, and constraints that define the project scope."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q76",
    "question": "An AI project manager is evaluating an AI solution to reduce customer churn for a subscription service. Executives have expressed enthusiasm for the initiative, but the business case presented to leadership is incomplete and lacks the justification needed for approval.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Approve model development to show early technical progress to leadership.",
      "B": "Gather financial data and projected benefits to strengthen the proposal.",
      "C": "Request that the data science team present model results to the executive team.",
      "D": "Expand the initiative scope to include additional use cases that may interest leadership."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager should strengthen the business case before seeking approval by gathering financial data and projected benefits. Executive support may build momentum, but it cannot independently justify the investment. Leadership needs objective evidence that the proposed AI solution will create measurable value.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Starting model development or having the data science team present results would move technical work forward before the business case is complete and would not resolve the justification gap blocking approval."
      },
      {
        "options": [
          "D"
        ],
        "text": "Expanding the initiative scope to include additional use cases increases complexity without addressing the incomplete justification that is the gap identified in the scenario."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q77",
    "question": "An AI project manager is overseeing the deployment of an AI solution that routes service requests to support teams. During rollout, several technical and operational gaps remain unresolved. What should the AI project manager do?",
    "options": {
      "A": "Continue the rollout and document any production issues after users begin using the solution.",
      "B": "Ensure all deployment readiness criteria are met before the rollout proceeds further.",
      "C": "Ask the model team to retrain the AI model before completing production deployment.",
      "D": "Transfer ownership to the support team because the solution has reached the deployment phase."
    },
    "correct": "B",
    "correctExplanation": "Verifying that all readiness criteria are satisfied prior to proceeding prevents premature deployment of a system with known operational or technical gaps.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with rollout despite unresolved gaps increases the risk of severe operational disruption for end users."
      },
      {
        "options": [
          "C"
        ],
        "text": "Model retraining addresses model performance issues rather than general technical and operational deployment gaps."
      },
      {
        "options": [
          "D"
        ],
        "text": "Handing over incomplete systems transfers unresolved project risks onto operational support teams."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q78",
    "question": "A project manager is preparing to deploy an AI demand forecasting tool across regional warehouses. The model meets performance targets, but several operational readiness gaps remain unresolved. The project sponsor wants deployment to begin on schedule.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Launch the solution simultaneously across all warehouses.",
      "B": "Develop a comprehensive transition plan before proceeding.",
      "C": "Retrain the model with additional warehouse data before proceeding.",
      "D": "Expand the solution scope to include supplier optimization features."
    },
    "correct": "B",
    "correctExplanation": "Developing a comprehensive transition plan before rollout proceeds ensures the organization is prepared to own, operate, and sustain the solution before it is handed over to operations.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Launching the solution simultaneously across all warehouse regions proceeds despite unresolved operational readiness gaps, increasing the risk of disruption and failed adoption across multiple locations at once."
      },
      {
        "options": [
          "C"
        ],
        "text": "Retraining the model using additional warehouse data addresses model quality rather than the operational readiness gaps that must be resolved before the transition can be completed."
      },
      {
        "options": [
          "D"
        ],
        "text": "Expanding the solution scope to include supplier optimization features increases complexity without addressing the readiness gaps that are preventing a successful transition to operations."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q79",
    "question": "A project sponsor requests a model's data status report from the AI project manager. Upon review, a data analyst finds missing values, inconsistencies, and limited historical data. However, the core dataset is accessible and relevant to the business objective.  What should the AI project manager do?",
    "options": {
      "A": "Present the raw profiling outputs so leadership can reviewthe detailed quality results directly.",
      "B": "Explain the data's business relevance, readiness risks, and recommended next steps in plain language",
      "C": "Focus on the data engineering methods so leadership canconfirm the team followed recommended practices.",
      "D": "Delay the update until every data quality issue isaddressed and limitations are mitigated."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must translate the technical findings from the data science team into business-relevant language that addresses what the data can support, what risks exist, and what actions are recommended. This gives leadership the information needed to make informed decisions without requiring them to interpret technical details.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Sharing raw profiling results or emphasizing data engineering methods gives leadership technical detail that does not fit an executive audience and does not provide the concise, decision-focused summary they requested."
      },
      {
        "options": [
          "D"
        ],
        "text": "Waiting to provide an update until every data quality issue is fully resolved would delay information leadership needs now."
      },
      {
        "options": [
          "A"
        ],
        "text": "That is unnecessary because the core dataset has already been validated as accessible and relevant to the business objective."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q80",
    "question": "A compliance officer is reviewing the data used to train an AI loan assessment system. During the review, the compliance officer discovers that the data sources used for model training do not have verified usage rights or licensing agreements in place. What should the compliance officer do first?",
    "options": {
      "A": "Confirm legal authorization to use the data.",
      "B": "Assess the quality and completeness of the data.",
      "C": "Establish model governance controls.",
      "D": "Verify security controls and thresholds."
    },
    "correct": "A",
    "correctExplanation": "Before data can be used for model training, the compliance officer must verify that the organization has the legal right to use it. Without confirmed usage rights and licensing agreements, using the data exposes the organization to legal and regulatory risk.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Assessing data quality does not address the legal authorization gap identified in the scenario."
      },
      {
        "options": [
          "C"
        ],
        "text": "Establishing model governance controls addresses how the model operates after deployment, not whether the organization has the right to use the training data."
      },
      {
        "options": [
          "D"
        ],
        "text": "Verifying security controls does not resolve the lack of verified usage rights or licensing agreements."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q81",
    "question": "An AI project manager is defining data requirements for a new AI initiative. The project is designed to improve customer satisfaction by personalizing product recommendations for individual users. What type of data should the AI project manager prioritize in this scenario?",
    "options": {
      "A": "Labeled image and video data.",
      "B": "Individual user behavioral, historical, and interaction data",
      "C": "Business data to predict user behavior and consumertrends.",
      "D": "Aggregated transaction data."
    },
    "correct": "B",
    "correctExplanation": "A solution designed to personalize product recommendations for individual users follows the hyper-personalization pattern. This pattern uses machine learning (ML) to create and continuously update unique profiles for individuals, requiring individual user behavioral, historical, and interaction history to deliver personalized content and recommendations in real time.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Labeled image and video data for object detection and visual pattern recognition describes the data requirements for a recognition pattern solution."
      },
      {
        "options": [
          "C"
        ],
        "text": "Business data for predicting future outcomes and consumer trends describes useful data for consumer predictions but does not align with personalized product recommendations."
      },
      {
        "options": [
          "D"
        ],
        "text": "Aggregated transaction data describes the data requirements for a patterns and anomalies pattern solution."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q82",
    "question": "An AI project team is preparing an AI solution to forecast consumer demand. Business stakeholders have approved the use case, but the AI project team have not determined where the relevant data needed for the initiative resides.  What should the AI project team do?",
    "options": {
      "A": "Define the model evaluation metrics before locating therequired data.",
      "B": "Begin data preparation activities using the data that iseasiest to access.",
      "C": "Ask the data engineer to begin data ingestion while theteam confirms locations.",
      "D": "Engage a data steward to map data sources, locations, and access permissions"
    },
    "correct": "D",
    "correctExplanation": "Data stewards have the governance knowledge and organizational connections needed to identify where data lives and who controls access, which is the foundational step before any data collection or preparation activity can begin.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Defining model evaluation metrics and asking the data engineer to begin data ingestion, proceed with downstream activities before the data sources and locations have been fully identified, risking gaps and rework once the complete picture of available data is known."
      },
      {
        "options": [
          "B"
        ],
        "text": "Data preparation using the easiest data to access prioritizes convenience over relevance, which may result in preparing data that does not meet the initiative's requirements."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q83",
    "question": "A project manager is leading the final rollout of an AI claims automation system. The project sponsor has requested skipping governance controls to accelerate deployment, and engineers have proposed adding them after the launch. What should the project manager do?",
    "options": {
      "A": "Proceed with deployment and schedule a stakeholder review after the launch.",
      "B": "Limit management access to governance controls to avoid further delays.",
      "C": "Delegate governance to the engineering team to complete after deployment.",
      "D": "Enforce version documentation and audit trail setup before deployment."
    },
    "correct": "D",
    "correctExplanation": "Governance baseline requirements must be established prior to release to protect organizational compliance, risk profile, and system traceability.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Deferring governance steps until post-launch introduces severe legal and risk exposure."
      },
      {
        "options": [
          "B"
        ],
        "text": "Restricting management access compromises oversight rather than establishing structure."
      },
      {
        "options": [
          "C"
        ],
        "text": "Delegating governance to engineering post-launch bypasses necessary launch controls."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q84",
    "question": "An AI project manager is coordinating an AI initiative at a financial services company. The project requires combining several data sets, each subject to different access and usage requirements. What should the AI project manager do?",
    "options": {
      "A": "Verify access permissions and compliance requirements before integration.",
      "B": "Combine the data sets and review usage requirements after integration.",
      "C": "Merge all data sets and grant access to all project participants.",
      "D": "Limit data combination to the data sets considered least sensitive."
    },
    "correct": "A",
    "correctExplanation": "Verifying access permissions and compliance requirements before any integration occurs ensures the initiative uses each data set appropriately and complies with the access and usage restrictions that apply to sensitive information.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Combining data sets and reviewing requirements after integration exposes the organization to unauthorized use of restricted data."
      },
      {
        "options": [
          "C"
        ],
        "text": "Merging all data sets and granting blanket access exposes sensitive data to unauthorized participants."
      },
      {
        "options": [
          "D"
        ],
        "text": "Limiting data combination to least sensitive datasets avoids compliance review entirely rather than confirming actual permissions."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q85",
    "question": "An AI-based dynamic pricing model has been in production for six months. The marketing team reports that pricing recommendations have become less effective over the past quarter despite no code changes.\n\nWhat is absent from the team's model governance framework?",
    "options": {
      "A": "Continuous monitoring of model performance and drift detection.",
      "B": "Quarterly model card reviews and ethics committee sign-off.",
      "C": "Annual revalidation against the original training dataset.",
      "D": "Periodic stakeholder surveys and qualitative feedback collection."
    },
    "correct": "A",
    "correctExplanation": "Continuous monitoring of model performance and drift detection would have identified this degradation early, allowing the team to take corrective action before the impact became apparent to stakeholders.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Quarterly model card reviews and ethics committee sign-off are governance checkpoints, not continuous operational monitoring. Accuracy or reliability can decline between review cycles, making them insufficient for timely detection."
      },
      {
        "options": [
          "C"
        ],
        "text": "Annual revalidation against the original training data set happens too infrequently and uses a static historical data set rather than monitoring live production behavior on an ongoing basis. This makes annual revalidation inadequate for identifying gradual changes in operational performance."
      },
      {
        "options": [
          "D"
        ],
        "text": "Periodic stakeholder surveys and qualitative feedback rely on human perception and retrospective input rather than systematic, automated measurement. Stakeholders may notice only obvious issues, and feedback often comes after problems have already affected outcomes, making this approach too indirect and inconsistent to detect subtle performance changes reliably."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q86",
    "question": "An AI project manager at a global company is overseeing the development of an AI model to screen job applicants. Recruiters express concern that they cannot interpret how the model arrives at its recommendations.\n\nWhat should the AI project manager implement to address the recruiter's concerns?",
    "options": {
      "A": "Performance dashboards",
      "B": "Access restrictions",
      "C": "Explainability tools",
      "D": "Data augmentation methods"
    },
    "correct": "C",
    "correctExplanation": "Implementing explainability tools helps stakeholders understand the factors driving the model's outputs and addresses the transparency gap that recruiters have identified, supporting their ability to trust and effectively use the model's recommendations.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Performance dashboards display metrics about model accuracy and outcomes, but do not explain how individual rankings or decisions were derived, which is the specific concern recruiters have raised."
      },
      {
        "options": [
          "B"
        ],
        "text": "Access restrictions limit who can view or interact with the model, but do not address the underlying need for recruiters to understand how the model's decisions are made."
      },
      {
        "options": [
          "D"
        ],
        "text": "Data augmentation methods increase the volume or diversity of training data, which addresses model performance rather than the interpretability and transparency concerns raised by recruiters."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q87",
    "question": "A data engineer is preparing to use customer transaction data for an AI initiative. The project manager wants to understand the potential implications before the data is used.\n\nWhat assessment should the data engineer conduct?",
    "options": {
      "A": "A data quality assessment.",
      "B": "A privacy impact assessment.",
      "C": "A data feasibility assessment.",
      "D": "A security audit assessment."
    },
    "correct": "B",
    "correctExplanation": "A privacy impact assessment evaluates the potential risks to data subjects associated with the collection, processing, and use of personal data. Conducting this assessment before the data is used ensures that privacy risks are identified and addressed in accordance with data protection requirements.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "A data quality assessment and a data feasibility assessment address data readiness and sufficiency, not privacy risks to data subjects."
      },
      {
        "options": [
          "D"
        ],
        "text": "A security audit evaluates vulnerabilities in infrastructure and systems. While security and privacy are related, a security audit does not specifically assess the impact of data usage on data subjects."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q88",
    "question": "An AI project manager is assembling a team for a new AI initiative. The project requires individuals who can connect the team with data governance resources and ensure data policies are followed throughout the project.\n\nWhat role should the AI project manager engage?",
    "options": {
      "A": "Data owner",
      "B": "Data steward",
      "C": "Data scientist",
      "D": "Data engineer"
    },
    "correct": "B",
    "correctExplanation": "Data stewards are the appropriate role to engage when a project needs support in applying data governance practices and connecting the team with the right governance resources. They help ensure data policies, standards, and definitions are followed throughout the project and serve as a link between project teams and the organization's broader data governance function.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A data owner is accountable for specific data assets and related decisions, but that role is not primarily responsible for connecting project teams with governance resources or guiding day-to-day adherence to data policies."
      },
      {
        "options": [
          "C",
          "D"
        ],
        "text": "A data scientist is focused on analyzing data and developing models, while a data engineer is focused on building and maintaining data pipelines and infrastructure. Although both roles work closely with data, neither is primarily responsible for governance coordination or policy enforcement."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q89",
    "question": "An AI project manager is leading an initiative to automate quality inspections at a manufacturing company. The project team has strong business knowledge but limited experience with computer vision, and the current infrastructure may not support model training workloads. Procurement confirmed that external support can be engaged if the need is clearly defined.  What should the AI project manager do first?",
    "options": {
      "A": "Start the pilot with the current team and request additionalresources if delays occur.",
      "B": "Finalize the delivery schedule first and let each teamsecure their own resources.",
      "C": "Assess required skills, infrastructure, and identify relevantresources to fill the gaps.",
      "D": "Reduce the scope so the existing team can complete thework without external resources."
    },
    "correct": "C",
    "correctExplanation": "sources to fill the gaps. The AI project manager must first assess what skills and infrastructure are required and identify the gaps that need to be filled through hardware, software procurement, and external contractors. This ensures the team and procurement have a clearly defined picture of what is needed before the pilot begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Starting the pilot with the current team and reducing the pilot scope both proceed without first assessing whether the existing team and infrastructure can support the work, risking delays or failure once gaps become apparent during execution."
      },
      {
        "options": [
          "B"
        ],
        "text": "Finalizing the delivery schedule before securing resources reverses the correct sequence."
      },
      {
        "options": [
          "D"
        ],
        "text": "Resource requirements must be understood before a realistic schedule can be committed to, particularly when external contractors and hardware procurement may be needed."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q90",
    "question": "A data scientist has completed a technical data assessment for an AI project. Leadership needs an update on the state of the data before the project can proceed.  What should the data scientist do first?",
    "options": {
      "A": "Create accuracy, completeness, and consistency reports and share findings with stakeholders",
      "B": "Compare data against requirements to identify gaps thatcould impact model training.",
      "C": "Revise executive summaries to include visualization toolsthat translate the data.",
      "D": "Verify data usage rights and ensure compliance with dataprotection and access policies."
    },
    "correct": "A",
    "correctExplanation": "The data scientist should prepare reports to communicate data insights and translate technical data concepts into business-relevant language. This ensures leadership has the information needed to make informed decisions about the project.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Revising executive summaries describes data evaluation activities that can only be conducted once these artifacts have been created."
      },
      {
        "options": [
          "B"
        ],
        "text": "Comparing data against requirements to identify gaps describes data readiness assessment activities."
      },
      {
        "options": [
          "D"
        ],
        "text": "Verifying data usage rights and ensuring compliance with data protection regulations describes data privacy and compliance activities."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q91",
    "question": "An AI project team is preparing the inventory data set for a demand forecasting model. The team cannot understand the underlying data as most of the fields are undocumented. The AI project manager must identify a resource or subject matter expert (SME) to resolve this.\n\nWho should the AI project manager engage?",
    "options": {
      "A": "AI governance SME",
      "B": "Data stewards",
      "C": "Data SME",
      "D": "AI solution architect"
    },
    "correct": "C",
    "correctExplanation": "When a project needs people who understand what the data represents, how it is used, and how it should be interpreted in context, data SMEs are the right resource to engage. They have deep knowledge of specific data domains and understand the business meaning, origin, and practical use of the data within the organization.",
    "incorrectExplanations": [
      {
        "options": [
          "D"
        ],
        "text": "An AI solution architect is primarily responsible for designing the technical solution and system architecture. That role is centered on how the AI system will be built and integrated, not on explaining the business meaning and context of the data."
      },
      {
        "options": [
          "B"
        ],
        "text": "Data stewards are responsible for supporting data governance, maintaining definitions, and helping uphold data quality standards. While they play an important role in managing data properly, they are not primarily responsible for providing the business interpretation of the data."
      },
      {
        "options": [
          "A"
        ],
        "text": "AI governance subject matter experts focus on oversight, compliance, and responsible AI practices. Their role is to help ensure governance requirements are met, not to serve as the primary source for understanding what the data means in the business context."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q92",
    "question": "An AI project team is building a patient pre-screening model for a healthcare organisation. The model draws on a database of illnesses, symptoms, and case studies from multiple sources. The AI project manager must identify a subject matter expert to manage the flow of data. What data SME should the AI project manager engage?",
    "options": {
      "A": "A data architect",
      "B": "A data scientist",
      "C": "A data engineer",
      "D": "A business analyst"
    },
    "correct": "C",
    "correctExplanation": "A data engineer builds and manages the pipelines that move, transform, and integrate data from multiple sources \u2014 exactly what's needed here. They own the flow of data between systems, not the design of storage or the analysis of its contents.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A data architect designs the overall data structure, schemas, and storage systems \u2014 not the ongoing movement and integration of data between sources."
      },
      {
        "options": [
          "B"
        ],
        "text": "A data scientist analyses data and builds models \u2014 they consume what comes through the data pipeline rather than managing the pipeline itself."
      },
      {
        "options": [
          "D"
        ],
        "text": "A business analyst gathers and translates business requirements into specifications \u2014 not technical data flow management between systems."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q93",
    "question": "An AI project manager at an e-learning company identifies that learners struggle to get timely personalised help, reducing progress and completion rates. The company is considering an AI tutor. What should the AI project manager do first?",
    "options": {
      "A": "Compare chatbot vendors and select the platform with the strongest personalisation features.",
      "B": "Analyse historical data and begin configuration based on common content questions.",
      "C": "Estimate the return on investment (ROI) based on gains from similar organisational initiatives.",
      "D": "Evaluate the team's overall readiness to implement and sustain an AI solution."
    },
    "correct": "D",
    "correctExplanation": "Before committing to any technical direction, you must assess readiness \u2014 governance, data infrastructure, technology, and change management. Without this, you risk investing significant resources in a solution the organisation cannot effectively deploy or sustain.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Vendor selection and platform comparison commit to a technical direction before knowing whether the organisation is actually ready to support and sustain it."
      },
      {
        "options": [
          "B"
        ],
        "text": "Analysing historical data and beginning configuration assumes readiness has already been confirmed \u2014 but it hasn't."
      },
      {
        "options": [
          "C"
        ],
        "text": "ROI estimates benchmarked against similar initiatives at other organisations don't reflect this organisation's specific context, readiness, or viability."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q94",
    "question": "A project team has successfully completed model evaluation and awaits the project manager's go/no-go decision. The model meets several technical targets, but some operational requirements and deployment dependencies remain unclear.\n\nWhat should the project manager do?",
    "options": {
      "A": "Conduct a comprehensive readiness assessment before operationalization.",
      "B": "Approve deployment since the model has met its technical performance targets.",
      "C": "Delay deployment until all dependencies are resolved by the technical team.",
      "D": "Escalate the unresolved dependencies to the sponsor and proceed with deployment."
    },
    "correct": "A",
    "correctExplanation": "The AI project manager must conduct a comprehensive readiness assessment before approving operationalization. Meeting technical targets alone is not sufficient to confirm the model is ready for production when operational and dependency gaps have not been resolved.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Approving deployment proceeds without confirming that the operational readiness requirements and deployment dependencies have been addressed, which introduces avoidable risk into the operationalization process."
      },
      {
        "options": [
          "C"
        ],
        "text": "Delaying deployment until all dependencies are resolved by the technical team defers accountability rather than the AI project manager conducting the readiness assessment needed to make an informed go/no-go decision."
      },
      {
        "options": [
          "D"
        ],
        "text": "Escalating the unresolved dependencies to the sponsor bypasses the readiness assessment entirely and advances operationalization despite known gaps that have not been evaluated or resolved."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q95",
    "question": "An AI project manager is leading an AI initiative that will recommend service actions for customer requests. Stakeholders ask how the team made several key technical decisions before testing begins.  What should the AI project manager do?",
    "options": {
      "A": "Share documentation of the data sources, preprocessing steps, and model selection rationale",
      "B": "Direct stakeholders to review the model's source code andassess technical specifications.",
      "C": "Escalate the request to the data science team for aresponse.",
      "D": "Provide stakeholders with the model's final accuracyscore."
    },
    "correct": "A",
    "correctExplanation": "with stakeholders. This response gives stakeholders a clear, accessible explanation of how the technical decisions were made, which directly addresses their request and supports transparency before testing begins.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Directing stakeholders to the source code and technical specifications places the burden of interpretation on stakeholders who lack the technical background to use those materials, rather than providing an explanation they can understand."
      },
      {
        "options": [
          "C"
        ],
        "text": "Escalating the stakeholder request to the data science team avoids direct engagement with stakeholders, instead of addressing their question."
      },
      {
        "options": [
          "D"
        ],
        "text": "Providing stakeholders with only the final accuracy score gives them a performance figure without the underlying rationale they actually requested."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q96",
    "question": "An AI project manager is overseeing the development of a machine learning (ML) model. Throughout the development process, the team maintains records of how model outputs were produced and why specific model choices were made.\n\nWhat is this record-keeping practice called?",
    "options": {
      "A": "Audit trails",
      "B": "Data lineage",
      "C": "Algorithm selection",
      "D": "Decision log"
    },
    "correct": "A",
    "correctExplanation": "An audit trail is the record-keeping practice of documenting how model outputs were produced and why specific model choices were made throughout the development process. A core AI/ML transparency practice that supports accountability.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Data lineage tracks the origin and movement of data through a system."
      },
      {
        "options": [
          "C"
        ],
        "text": "Algorithm selection refers to the process of choosing an appropriate algorithm for a specific use case."
      },
      {
        "options": [
          "D"
        ],
        "text": "A decision log captures individual decisions made during a project, but does not specifically refer to the comprehensive record-keeping of model outputs and development choices that defines an audit trail."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q97",
    "question": "An AI project manager is leading a customer churn prediction initiative. During data exploration, a data analyst discovers that several fields have inconsistent definitions across business units and cannot be interpreted for modeling.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Remove all fields with unclear business definitions from the data set.",
      "B": "Ask the data analyst to make reasonable assumptions about the fields.",
      "C": "Engage subject matter experts (SMEs) who understand the context and meaning of the data.",
      "D": "Begin model training using the fields that are fully documented and understood completely."
    },
    "correct": "C",
    "correctExplanation": "Engaging SMEs who understand the context and meaning of the data ensures the team has authoritative guidance on how the fields should be interpreted before any modeling decisions are made.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Removing all fields with unclear business definitions or beginning model training using only fully documented fields reduces the available data without first attempting to resolve the uncertainty, potentially excluding fields that are important to model performance once their meaning is understood."
      },
      {
        "options": [
          "B"
        ],
        "text": "Asking analysts to make reasonable assumptions independently introduces subjective interpretations that may vary across the team and are not grounded in authoritative domain knowledge, which could compromise the reliability of the modeling data."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q98",
    "question": "A data science team combined data from multiple systems for a student at-risk prediction model, but discovered inconsistent enrollment status labelling across sources. What should the data science team do next?",
    "options": {
      "A": "Validate the completeness of historical student records and extend the data set.",
      "B": "Review the range of academic advising variables and add more predictor fields.",
      "C": "Refine the model design assumptions and begin feature engineering of the data set.",
      "D": "Confirm that student status indicators are accurate and consistent across all source systems."
    },
    "correct": "D",
    "correctExplanation": "Enrollment status is the target variable the model is predicting. If labels are inconsistent across systems, the model learns from corrupted ground truth. Everything else must wait until this fundamental data quality issue is fully resolved.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Extending the dataset before fixing label inconsistency only scales the problem \u2014 you're adding more records with the same corrupted labels."
      },
      {
        "options": [
          "B"
        ],
        "text": "Adding more predictor fields is premature when the outcome variable \u2014 enrollment status \u2014 is itself unreliable and inconsistent."
      },
      {
        "options": [
          "C"
        ],
        "text": "Feature engineering on a dataset with a broken target variable produces a model built on a flawed foundation \u2014 garbage in, garbage out."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q99",
    "question": "An AI project team has deployed an AI model for a financial services company. Leadership has raised concerns about whether the model is operating consistently and in compliance with organizational policies.  What should the AI project team do?",
    "options": {
      "A": "Develop a data collection plan.",
      "B": "Review the stakeholder engagement plan.",
      "C": "Create a model retraining schedule.",
      "D": "Implement model governance controls"
    },
    "correct": "D",
    "correctExplanation": "Model governance controls ensure the model remains aligned with organizational policies, ethical standards, and regulatory requirements.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Developing a data collection plan and deploying a model retraining schedule are activities that address data needs and model performance rather than the governance and compliance concerns raised by leadership."
      },
      {
        "options": [
          "B"
        ],
        "text": "Reviewing the stakeholder engagement plan is a project management activity that does not ensure the model operates consistently and within organizational policies."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q100",
    "question": "An AI project team is finalizing the transition plan to hand over a newly deployed fraud detection system to the operations team. The AI project manager is leading the transition planning.\n\nWhat should the AI project manager include in the handover documentation?",
    "options": {
      "A": "A maintenance schedule for server hardware and network infrastructure.",
      "B": "A retraining playbook and drift monitoring procedures.",
      "C": "An access provisioning workflow and onboarding documentation.",
      "D": "An incident management process with escalation paths."
    },
    "correct": "B",
    "correctExplanation": "An AI system handover requires documentation that addresses AI-specific operational needs such as model retraining and drift monitoring. Unlike conventional IT systems, AI models degrade over time as data patterns change, requiring operational teams to understand when and how to retrain the model and monitor for performance drift.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "While hardware maintenance may support the environment in which the AI solution runs, it does not address the model-specific operational needs of a deployed AI system, such as monitoring model behavior, managing drift, or supporting ongoing model performance oversight after handover."
      },
      {
        "options": [
          "D"
        ],
        "text": "Incident processes are important for responding to operational issues, but they do not by themselves prepare the operational team to manage the unique needs of an AI model in production, including performance monitoring, retraining considerations, or model-related decision review."
      },
      {
        "options": [
          "C"
        ],
        "text": "An access provisioning workflow and onboarding documentation focus on user access, team orientation, and general readiness rather than the specialized operational requirements of a deployed AI model."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q101",
    "question": "A project manager is establishing bias mitigation processes for an AI initiative. The compliance team has asked the team to identify which practices should be implemented to address AI bias.\n\nWhat process falls outside the scope of AI bias mitigation?",
    "options": {
      "A": "Allowing individuals to appeal decisions made by the AI system.",
      "B": "Assigning human accountability for decisions made by the AI system.",
      "C": "Monitoring and adjusting AI models and data for drift over time.",
      "D": "Retiring older AI models when newer versions are released."
    },
    "correct": "D",
    "correctExplanation": "Retiring older models when newer versions are launched is a model life cycle management practice. While it is a good operational habit, it does not directly address AI bias. A newer model is not inherently less biased than an older one, and model retirement alone does not constitute a bias mitigation process.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B",
          "C"
        ],
        "text": "Allowing individuals to appeal AI decisions, assigning human accountability, and monitoring for data and model drift are all recognized practices for identifying, addressing, and mitigating AI bias throughout the model life cycle."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q102",
    "question": "An AI project is approaching closure, and responsibility for ongoing support will be transferred from the project team to an operational support team. What should the AI project manager do?",
    "options": {
      "A": "Coordinate knowledge transfer and establish ongoing support procedures.",
      "B": "Transition the solution to the operational support team and close the project.",
      "C": "Schedule a project closure meeting with relevant stakeholders to present deliverables.",
      "D": "Conduct a performance review with the operational support team before knowledge transfer."
    },
    "correct": "A",
    "correctExplanation": "Coordinating knowledge transfer and establishing ongoing support procedures ensures the operational team is fully equipped to maintain and troubleshoot the AI solution post-closure.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Handing over the system and closing the project without knowledge transfer leaves the support team unprepared to manage the model."
      },
      {
        "options": [
          "C"
        ],
        "text": "Scheduling a closure meeting presents deliverables but does not operationalize support or equip the maintenance team."
      },
      {
        "options": [
          "D"
        ],
        "text": "Conducting a performance review of the support team before knowledge transfer is premature and outside the primary operationalization objective."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q103",
    "question": "A project manager is overseeing an AI solution deployment that helps route service requests to the correct support team. The model has passed evaluation. However, infrastructure, security, and application teams are operating on separate timelines with unresolved dependencies.\n\nWhat should the project manager do next?",
    "options": {
      "A": "Begin user training before the deployment dependencies are resolved.",
      "B": "Approve the release and address integration issues after launch.",
      "C": "Conduct post-deployment verification and testing.",
      "D": "Coordinate deployment activities across all relevant teams."
    },
    "correct": "D",
    "correctExplanation": "Coordinating deployment activities across all relevant teams ensures that dependencies are resolved and teams are aligned before release, reducing the risk of deployment failures caused by missed coordination.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Beginning user training before deployment dependencies are resolved and approving the release while addressing integration issues after launch proceed without first resolving the coordination gaps that could cause deployment failures."
      },
      {
        "options": [
          "C"
        ],
        "text": "Conducting post-deployment verification and testing is a valid activity but occurs after deployment is complete, not before unresolved dependencies have been addressed during rollout planning."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q104",
    "question": "An AI project manager is leading a customer purchasing behavior prediction initiative for a global retailer. Relevant data exists across multiple platforms, business units, and regions, but no inventory of sources, owners, or locations has been completed yet.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Select an AI technique that supports predictive analytics.",
      "B": "Map the relevant data sources, owners, and storage locations.",
      "C": "Consolidate data sources, owners, and locations into one repository.",
      "D": "Begin collecting historical data for model training."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager should first identify the relevant data sources, where the data resides, and who owns or controls access to it. This is a foundational step because it establishes what data is available and accessible before the team begins collecting, consolidating, or using it for AI work.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Selecting an AI technique for predictive analytics is premature because it commits the team to a technical approach before confirming what data is actually available to support that approach."
      },
      {
        "options": [
          "C"
        ],
        "text": "Consolidating all available data into a single repository is also not the right first step. Moving data before identifying its sources, owners, and locations can lead to incomplete data capture or the use of data that has not been properly authorized."
      },
      {
        "options": [
          "D"
        ],
        "text": "Beginning to collect historical data for model training is similarly premature. Data collection should follow a clear understanding of what data exists, where it is located, and who controls it; otherwise, the team risks gathering incomplete, inconsistent, or unauthorized data."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q105",
    "question": "An AI project manager is overseeing the rollout of an AI solution that will help staff automate business processes. Some users are resistant to adopting the new tools. What should the AI project manager do to improve adoption?",
    "options": {
      "A": "Communicate the technical specifications of the solution to help users understand how it works.",
      "B": "Restrict access to the legacy system to encourage users to engage with the new solution.",
      "C": "Escalate the resistance to the project sponsor and request additional budget for incentives.",
      "D": "Provide onboarding support and practical guidance to help users engage with the solution."
    },
    "correct": "D",
    "correctExplanation": "Providing onboarding support and practical guidance directly addresses the adoption barrier \u2014 it builds confidence and reduces resistance by giving users hands-on support to engage with the new solution.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Technical specifications explain how it works from an engineering perspective, not the hands-on support users need to build confidence and reduce resistance."
      },
      {
        "options": [
          "B"
        ],
        "text": "Forcing adoption by cutting off the legacy system increases friction without resolving the underlying resistance \u2014 likely making things worse."
      },
      {
        "options": [
          "C"
        ],
        "text": "Escalating to the sponsor defers the challenge and doesn't tackle the root cause of user resistance."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q106",
    "question": "An AI project manager is designing the data collection process for a credit card fraud detection solution. The solution must analyze transactions and flag suspicious activity before they materialize.\n\nWhat should the AI project manager implement?",
    "options": {
      "A": "A nightly batch process to collect and analyze transaction records from the previous day.",
      "B": "A weekly data transfer to consolidate transaction logs from regional processing centers.",
      "C": "A monthly data collection process aligned to the financial reporting cycle.",
      "D": "A real-time data ingestion pipeline to support continuous transaction monitoring."
    },
    "correct": "D",
    "correctExplanation": "When a fraud detection solution must analyze transactions and flag suspicious activity before they are completed, the AI project manager must implement a real-time data ingestion pipeline. This would allow the solution to detect and respond to fraudulent activity as it occurs.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "A nightly batch process and a weekly data transfer introduce time delays between when transactions occur and when they are analyzed, making them unsuitable for a solution that must respond to suspicious activity in real time."
      },
      {
        "options": [
          "C"
        ],
        "text": "A monthly data collection process addresses reporting and compliance needs rather than the continuous transaction monitoring required for fraud detection."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q107",
    "question": "An AI solution is nearing transition to operational support. The AI project manager needs to create a plan that supports operational activities after handover. However, accountability for operational tasks have not been defined.\n\nWhat should the AI project manager do next?",
    "options": {
      "A": "Assess the project scope and stakeholder readiness for operational tasks.",
      "B": "Document the lessons learned from solution delivery before assigning ownership.",
      "C": "Assign ownership of ongoing operational tasks to the appropriate teams.",
      "D": "Establish ongoing maintenance and support procedures for the operational team."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must assign clear ownership of ongoing operational tasks to ensure accountability after handover. Without defined ownership, monitoring, maintenance, escalation, and support activities risk being overlooked.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Assessing the project scope during the transition stage is not a relevant solution; at this stage in the project's lifecycle any scope related activities have been conducted."
      },
      {
        "options": [
          "B"
        ],
        "text": "Documenting lessons learned is a valid transition activity but does not directly address the need to establish accountability for operational tasks after handover."
      },
      {
        "options": [
          "D"
        ],
        "text": "Establishing ongoing maintenance and support procedures addresses how operational tasks will be carried out rather than who is responsible for carrying them out, which is the core gap described in the scenario."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q108",
    "question": "A data engineer is designing a data pipeline to support data preparation for an AI initiative.  What activity falls outside the scope of the pipeline?",
    "options": {
      "A": "Extracting data from source systems.",
      "B": "Transforming data into a usable format.",
      "C": "Loading processed data into a target repository.",
      "D": "Manually entering new source data"
    },
    "correct": "D",
    "correctExplanation": "A data pipeline automates the extraction, transformation, and loading of data from source systems to a target repository. Manual data entry is performed outside the pipeline by human operators and is not a component of the automated pipeline itself, making it outside the scope of what the pipeline is designed to do.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Extracting data from source systems, transforming data into a usable format, and loading processed data into a target repository are the three core components of a data pipeline."
      },
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Together, they define the extract, transform, and load process that the pipeline automates."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q109",
    "question": "A data engineer is preparing a large data set for an AI model development project. The data set contains hundreds of columns, many of which are not relevant to the business case. What data management technique should the data engineer apply?",
    "options": {
      "A": "Data normalization",
      "B": "Attribute pruning",
      "C": "Data augmentation",
      "D": "Noise reduction"
    },
    "correct": "B",
    "correctExplanation": "Attribute pruning is a data management technique used to address the challenges of large data sets. It involves removing unnecessary attributes or columns from a data set so that only the relevant data is kept for the AI task. This makes the data set leaner, more manageable, and more focused on the features relevant to the business case.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Data normalization standardizes data values across sources to improve training efficiency."
      },
      {
        "options": [
          "C"
        ],
        "text": "Data augmentation enhances a data set by adding additional examples to increase volume and diversity."
      },
      {
        "options": [
          "D"
        ],
        "text": "Noise reduction minimizes informational, visual, or audio noise in the data to improve data quality."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q110",
    "question": "An AI project team for a manufacturing company has to predict equipment failures and reduce unplanned downtime. A data scientist has developed several candidate models. However, each model performs differently when evaluated against different subsets of the data.\n\nWhat should the AI project team do next?",
    "options": {
      "A": "Continue training all models until they produce similar performance results.",
      "B": "Compare model performance across multiple data segments.",
      "C": "Deploy the model that requires the fewest computational resources.",
      "D": "Select the model that achieved the highest performance during initial training."
    },
    "correct": "B",
    "correctExplanation": "The project manager should ensure the team compares performance across multiple segments before selecting a model. This validation step helps confirm that a model's performance is consistent and reliable rather than dependent on one particular subset of data.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Variation in performance across subsets provides useful information for model selection and does not need to be eliminated through additional training."
      },
      {
        "options": [
          "C"
        ],
        "text": "Moving to deployment is premature before model selection has occurred."
      },
      {
        "options": [
          "D"
        ],
        "text": "Selecting the model that achieved the highest performance during initial training relies on a single evaluation result, which does not account for the performance variation."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q111",
    "question": "An AI project manager is leading an AI-powered customer analytics platform. Midway through the project, a new privacy regulation introduces additional requirements. The sponsor is concerned that addressing these requirements may affect budget and schedule commitments.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Proceed with the current plan and address compliance after the initial release.",
      "B": "Evaluate the impact of the new regulation and adjust the project plan accordingly.",
      "C": "Pause all project activities until the regulation's full implications are understood.",
      "D": "Direct the legal team to manage compliance independently of the project timeline."
    },
    "correct": "B",
    "correctExplanation": "Evaluating the impact of the new regulation and adjusting the project plan accordingly ensures the project remains compliant while giving the sponsor accurate information about how the change affects budget and schedule commitments.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with the current plan and addressing compliance after the initial release ignores the new regulatory requirement, exposing the organization to compliance risk."
      },
      {
        "options": [
          "C"
        ],
        "text": "Pausing all project activities until the regulation's full implications are understood is an overly cautious response that halts progress unnecessarily when an impact assessment could be conducted without stopping all work."
      },
      {
        "options": [
          "D"
        ],
        "text": "Directing the legal team to manage compliance independently of the project timeline removes the AI project manager's responsibility to integrate regulatory changes into the overall project plan, risking misalignment between compliance efforts and project execution."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q112",
    "question": "The data science team has completed training on a new model for a demand forecasting initiative and want to confirm if it should replace the organization's existing forecasting approach.  What should the data science team do?",
    "options": {
      "A": "Conduct cross-validation testing to confirm the model'sstability across data subsets.",
      "B": "Compare the new model's performance against the existing baseline",
      "C": "Tune the model's hyperparameters to further optimize itspredictive accuracy.",
      "D": "Document the new model's training results and validationdecisions for the project record."
    },
    "correct": "B",
    "correctExplanation": "approach. Comparing the new model's performance against the current baseline provides the evidence needed to determine whether the new model offers a meaningful improvement before any replacement decision is made.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Conducting cross-validation testing or tuning hyperparameters may improve confidence in the new model's performance, but it does not provide the comparative evidence needed to confirm it outperforms the existing baseline approach."
      },
      {
        "options": [
          "D"
        ],
        "text": "Documenting the model's training results and validation decisions supports record-keeping but does not establish whether the new model should replace the current approach."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q113",
    "question": "An AI project team is planning an image recognition initiative. Before data collection begins, the team needs to determine the requirements that will support model training.  What should the AI project team define first?",
    "options": {
      "A": "The model architecture and algorithm selection criteria.",
      "B": "The infrastructure and storage capacity of the pipeline.",
      "C": "The data types and formats required for model training",
      "D": "The success criteria and benchmarks for deployment."
    },
    "correct": "C",
    "correctExplanation": "Before data collection begins, the AI project team must first define the data types and formats required to train the model. This ensures the team collects the right data in the right structure to support model development and aligns data collection activities with the initiative's objectives.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Defining model architecture and algorithm selection criteria is usually determined after the team understands the available and required training data."
      },
      {
        "options": [
          "B"
        ],
        "text": "Defining algorithms too early can lead to misalignment between the model approach and the actual data collected."
      },
      {
        "options": [
          "D"
        ],
        "text": "Infrastructure planning is important, but it comes after understanding the nature, volume, and format of the data. The data requirements drive what infrastructure and storage are needed. Deployment benchmarks are established later in the lifecycle, after the team has clarified training needs and begun shaping the solution approach. They are important, but not the first thing to define before data collection begins."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q114",
    "question": "An AI project team is preparing data for an AI model development project. The project manager needs to oversee data transformation activities to ensure the data is ready for model training. What should the AI project manager do?",
    "options": {
      "A": "Conduct final data quality assessments and validatepreprocessing results.",
      "B": "Coordinate hyperparameter tuning and optimizationactivities.",
      "C": "Lead data cleaning workflows and manage data standardization processes",
      "D": "Evaluate performance against established successcriteria."
    },
    "correct": "C",
    "correctExplanation": "The project manager should oversee data cleaning and preprocessing workflows and manage data normalization and standardization processes. This ensures that raw data is structured, consistent, and ready for use in AI model development.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Conducting final data quality assessments and validating preprocessing results describes verification activities associated with the go/no-go decision for data readiness, not data transformation management."
      },
      {
        "options": [
          "B"
        ],
        "text": "Coordinating hyperparameter tuning and optimization activities describes model training management activities."
      },
      {
        "options": [
          "D"
        ],
        "text": "Evaluating performance against established success criteria describes operationalization go/no-go activities associated with assessing model readiness for deployment."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q115",
    "question": "An AI project manager is overseeing an AI model that flags potentially fraudulent transactions. During a governance review, senior stakeholders request justification for the chosen algorithm and ask if the training data was filtered before modeling. The model performs well, but the data team has not clearly documented the selection rationale or preprocessing decisions.  What should the AI project manager do?",
    "options": {
      "A": "Focus on improving model accuracy first and documentthe technical decisions after deployment.",
      "B": "Replace the current algorithm with a simpler one sostakeholders can increase their understanding of it.",
      "C": "Establish record-keeping practices that capture modeling decisions and support accountability",
      "D": "Share model performance reports with stakeholders anddefer technical questions to the data science team."
    },
    "correct": "C",
    "correctExplanation": "The project manager must establish documentation practices that capture modeling decisions and support governance accountability. This ensures the team can respond to governance inquiries and demonstrate how and why key technical decisions were made.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Focusing on improving model accuracy and deferring documentation to after deployment addresses performance rather than the transparency gap and delays a documentation requirement that should have been addressed during development."
      },
      {
        "options": [
          "B"
        ],
        "text": "Replacing the current algorithm with a simpler one addresses explainability through technical simplification rather than through documentation and transparent reporting."
      },
      {
        "options": [
          "D"
        ],
        "text": "Sharing model performance reports and deferring technical questions to the data science team redirects governance accountability away from the project manager and does not address the underlying documentation gap."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q116",
    "question": "A retail company wants to improve its marketing campaigns by using AI to predict seasonal sales. During project planning, the project manager reviews the available historical sales data and notes that it spans less than one year. The team is preparing to begin model development.  What should the project manager address first?",
    "options": {
      "A": "Ask the team to augment the data to increase the data setsize.",
      "B": "Select a forecasting algorithm that performs well withlimited data.",
      "C": "Evaluate whether the available data is sufficient to represent seasonal sales patterns",
      "D": "Define how the prediction results will be integrated intocampaign planning workflows"
    },
    "correct": "C",
    "correctExplanation": "The AI project manager should first determine whether the dataset reflects enough seasonal variation to support reliable model development. If the available data does not adequately capture recurring seasonal patterns, the team cannot confidently design or train a model that will produce dependable results.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Augmenting the data or choosing a forecasting algorithm for limited data both assume the dataset is usable without first validating whether it is sufficient for the business objective."
      },
      {
        "options": [
          "A"
        ],
        "text": "That can lead to wasted effort or rework if the data later proves inadequate."
      },
      {
        "options": [
          "D"
        ],
        "text": "Defining how predictions will be used in campaign planning is also premature. That step relates to operational integration, while the immediate issue is whether the data can support the forecasting need in the first place."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q117",
    "question": "An AI solution that predicts late payments has gone through integration testing. The AI project team has noticed changes in model performance, but there is not a clear process for change management.  What should the AI project manager do?",
    "options": {
      "A": "Gather new data to retrain the model.",
      "B": "Establish model governance procedures",
      "C": "Replace the operational model.",
      "D": "Escalate the performance issue to leadership."
    },
    "correct": "B",
    "correctExplanation": "This response addresses the absence of a defined process for change management by establishing governance structures in place to manage the model throughout its operational life.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Retraining the model treats the symptom rather than the underlying gap in governance."
      },
      {
        "options": [
          "A"
        ],
        "text": "Replacing the current model does not resolve the missing processes that would affect any model in production."
      },
      {
        "options": [
          "D"
        ],
        "text": "Escalating the issue to leadership without taking action leaves the governance gap unaddressed and is a premature action."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q118",
    "question": "An AI project manager is developing a deployment plan for a machine learning (ML) model at a retail company. The team is evaluating whether to host the solution in the cloud or on-premises infrastructure.\n\nWhat should the AI project manager consider when selecting a hosting approach?",
    "options": {
      "A": "The model's training accuracy achieved during the development phase.",
      "B": "The availability of monitoring tools, scalability, and infrastructure support.",
      "C": "The number of features engineered during data preparation activities.",
      "D": "The stakeholder communication plan established during project initiation."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must consider the availability of monitoring tools, scalability, and infrastructure support. These factors directly affect the team's ability to deploy, operate, and maintain the solution effectively in the chosen environment.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "The model's training accuracy and the number of features engineered during data preparation are development phase considerations that have already been addressed before deployment planning begins and do not inform the hosting decision."
      },
      {
        "options": [
          "D"
        ],
        "text": "The stakeholder communication plan established during project initiation addresses how information will be shared with stakeholders rather than the infrastructure requirements that should guide the hosting approach."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q119",
    "question": "An AI project team at a retail company is drafting an AI solution that aims to reduce labor costs. The team must identify an aligned AI pattern that drives business value. What type of AI solution should the AI project team apply?",
    "options": {
      "A": "Patterns and anomalies solution",
      "B": "Hyper-personalization solution",
      "C": "Autonomous systems solution",
      "D": "Goal-driven systems solution"
    },
    "correct": "C",
    "correctExplanation": "Autonomous systems automate work that would otherwise require people. Autonomous systems are designed to reduce labor costs by minimizing the need for manual intervention. In a retail context, that can mean self-service, automated operations, or machine-led task execution, which directly supports the goal of lowering labor costs.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Patterns and anomalies solution targets reliability improvements, cost reduction through better insights, and risk identification."
      },
      {
        "options": [
          "B"
        ],
        "text": "A hyper-personalization solution focuses on improving usage, increasing conversion rates, and enhancing customer satisfaction."
      },
      {
        "options": [
          "D"
        ],
        "text": "A goal-driven systems solution targets operational optimization and competitive advantages. While it may contribute to cost reduction broadly, it does not specifically address labor cost reduction through minimizing manual intervention the way autonomous systems do."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q120",
    "question": "A project manager is overseeing an AI solution that prioritizes high-risk insurance claims for manual review. Three months after launch, operations leaders report that fewer claims are being flagged despite steady system usage.\n\nWhat should the project manager do?",
    "options": {
      "A": "Implement dashboards to track business and technical trend shifts.",
      "B": "Escalate the operational concern to leadership for resolution.",
      "C": "Analyze model performance trends and degradation patterns.",
      "D": "Generate regular performance reports for stakeholders."
    },
    "correct": "C",
    "correctExplanation": "Analyzing model performance trends and degradation patterns to determine whether the solution is performing as expected provides the evidence needed to understand the root cause before any corrective action is taken.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Implementing dashboards to track business and technical trend shifts and generating regular performance reports for stakeholders address monitoring and communication activities that do not directly investigate the performance concern identified in the scenario."
      },
      {
        "options": [
          "B"
        ],
        "text": "Escalating the operational concern to leadership defers the investigation and the project manager's responsibility to understand what is causing the decline in flagged claims."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q121",
    "question": "An AI project team is preparing to deliver a customer service assistant powered by a large language model (LLM). The AI project manager needs to identify essential resources during the planning phase.  What resources should the project manager prioritize at this stage?",
    "options": {
      "A": "Marketing specialists, customer experience architects, andchange managers.",
      "B": "Subject matter experts (SMEs), steering committeemembers, and a project transition officer.",
      "C": "Procurement officers, contract analysts, and budgetcontrol representatives.",
      "D": "Data engineers, machine learning (ML) engineers, and specialized compute infrastructure"
    },
    "correct": "D",
    "correctExplanation": "When identifying resources during early planning for an AI project powered by an LLM, the project manager should first identify the core technical resources needed to assess project feasibility, including data engineers, ML engineers, and the specialized compute infrastructure required to support model development and deployment.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Marketing specialists, customer experience architects, and change managers describe roles associated with product launch and transfer activities, not technical feasibility assessment."
      },
      {
        "options": [
          "B"
        ],
        "text": "SMEs, steering committee members, and the project transition officer describe governance and oversight roles rather than the technical resources required at this specific stage."
      },
      {
        "options": [
          "C"
        ],
        "text": "Procurement officers, contract analysts, and budget control representatives describe financial and procurement roles that become relevant after technical feasibility has been established."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q122",
    "question": "An AI project team is developing a hiring support model. During fairness testing, the AI project manager identifies that candidate recommendations are less favorable for one demographic group. The project sponsor wants to reduce the disparity without abandoning the solution.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Delay fairness reviews until pilot testing begins.",
      "B": "Replace the project with a rules-based process.",
      "C": "Add more performance metrics.",
      "D": "Apply bias mitigation techniques."
    },
    "correct": "D",
    "correctExplanation": "The project manager should apply bias mitigation techniques as soon as bias is detected during model development. The sponsor has explicitly endorsed fixing the issue rather than abandoning the solution, so the project manager must guide the team toward a responsible and appropriate response to the bias.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Delaying the fairness review is incorrect because the bias has already been confirmed in development, and deferring it until later increases the risk."
      },
      {
        "options": [
          "B"
        ],
        "text": "Replacing the project is incorrect because replacing the solution does not directly address the identified development issue."
      },
      {
        "options": [
          "C"
        ],
        "text": "Adding more performance metrics is incorrect because overall accuracy can mask unfair outcomes across groups."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q123",
    "question": "An AI project manager is reviewing a proposal to add new behavioral data to an existing AI model for a standardized testing system. The data scientist provides a rationale and supporting evidence that this addition would improve the model's prediction accuracy.  What should the AI project manager do next?",
    "options": {
      "A": "Document the decision outcome with the relevant justification and update the model version log",
      "B": "Coordinate with the data scientist to validate thebehavioral data fields before making a decision.",
      "C": "Schedule a stakeholder review meeting to present theproposal and gather input before deciding.",
      "D": "Verify that the behavioral data complies with privacyregulations before approving the addition."
    },
    "correct": "A",
    "correctExplanation": "When an AI project manager decides on a proposal to modify an existing model, the outcome and supporting justification must be recorded, and the model version log updated. This creates the required accountability documentation and audit trail.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "C"
        ],
        "text": "Coordinating with the data scientist to validate behavioral data fields or scheduling a stakeholder review would only delay the decision, since the data scientist has already provided the rationale and supporting evidence needed at this stage."
      },
      {
        "options": [
          "D"
        ],
        "text": "Verifying behavioral data compliance with privacy regulations is a valid governance activity, but it addresses a separate concern from the accountability documentation required once the approval decision has been made."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q124",
    "question": "An AI project manager defining success criteria for an AI initiative must demonstrate the solution's value to executive leadership after deployment.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Compare model outputs against technical benchmark targets.",
      "B": "Indicate whether users adopt and are satisfied with the solution.",
      "C": "Quantify the effect of the AI solution on business outcomes.",
      "D": "Specify which data elements are included in model training."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must define business impact metrics. These measures capture the effect of the solution on organizational outcomes such as revenue, cost savings, and efficiency gains, providing leadership with meaningful evidence of the initiative's value.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Comparing model outputs to technical benchmarks and measuring user adoption or satisfaction address technical performance and user experience, but neither demonstrates the business outcomes needed to show the solution's value to leadership."
      },
      {
        "options": [
          "D"
        ],
        "text": "Specifying the data elements used for model training is a data selection criterion and does not relate to measuring business outcomes after deployment."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q125",
    "question": "An AI project manager is defining success metrics for an AI project and wants to include customer satisfaction as part of the key performance indicators (KPIs).  What KPI category does customer satisfaction belong to?",
    "options": {
      "A": "Technology performance",
      "B": "Business performance",
      "C": "Model performance",
      "D": "Operational performance"
    },
    "correct": "B",
    "correctExplanation": "Customer satisfaction is categorized as a business performance KPI. Business performance KPIs measure how the AI system is delivering value to the organization and include product and service usage, return on investment, revenue and sales measures, customer engagement, customer satisfaction, system performance, and machine uptime and downtime. These measures gauge the overall success and performance of the AI solution.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Technology performance covers requirements for model operation, training time, inference speed, compute, memory, and infrastructure needs."
      },
      {
        "options": [
          "D"
        ],
        "text": "Operational performance covers measures of how the solution performs in production, such as latency, uptime, error rates, throughput, and reliability."
      },
      {
        "options": [
          "C"
        ],
        "text": "Model performance is not one of the three defined performance categories in the CPMAI framework."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q126",
    "question": "A project sponsor has requested supporting evidence before approving funding for an AI solution to automate invoice processing. The business case owner has gathered implementation costs, projected savings, and efficiency data.  What should the business case owner do next?",
    "options": {
      "A": "Estimate the financial impact of the model training phase.",
      "B": "Expand the project scope by adding features to increasebusiness value.",
      "C": "Calculate the proposed solution's return on investment (ROI",
      "D": "Analyze the outcomes of similar initiatives implemented bycompetitors."
    },
    "correct": "C",
    "correctExplanation": "). Calculating the return on investment (ROI) using the gathered implementation costs, projected savings, and efficiency data gives the sponsor the financial evidence needed to make an informed funding decision.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Estimating the financial impact of the model training phase addresses a narrow cost component rather than the comprehensive ROI the sponsor requires to approve funding."
      },
      {
        "options": [
          "B",
          "D"
        ],
        "text": "Adding features to the scope and analyzing the outcomes of similar initiatives are scope and benchmarking activities that do not satisfy the solution's financial justification and do not reflect the organization's own data."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q127",
    "question": "A data engineer is configuring sensitive training data for an AI initiative. The AI project manager has asked the engineer to ensure only authorized personnel can retrieve the data.\n\nWhat should the data engineer implement?",
    "options": {
      "A": "Data quality check procedures",
      "B": "Version control systems",
      "C": "Access controls and user permissions",
      "D": "Encryption protocols"
    },
    "correct": "C",
    "correctExplanation": "When sensitive training data is involved, implementing access controls and user permissions ensures that only authorized personnel can access the data. This is a foundational data privacy and compliance practice that protects sensitive information throughout the AI development lifecycle.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Data quality checks and version control systems address data accuracy and change tracking, respectively. Neither restricts who can access the data, which is the core requirement identified in the scenario."
      },
      {
        "options": [
          "D"
        ],
        "text": "Encryption protocols protect data during transfer and storage, but do not control who is authorized to access it. Access controls and encryption are complementary practices, but only access controls directly address the authorization requirement described in the scenario."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q128",
    "question": "An AI project manager is overseeing an AI solution that uses customer service records to train a model. During a planning review, the project team confirms the data set includes personally identifiable information (PII), but no access, storage, or use controls have been defined yet.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Remove the sensitive records from the training data set.",
      "B": "Restrict model access to a limited set of internal users only.",
      "C": "Delay the project until the sponsor approves a privacy policy.",
      "D": "Establish governance controls before development begins."
    },
    "correct": "D",
    "correctExplanation": "Establishing data governance controls before development proceeds ensures the sensitive information is protected throughout the AI lifecycle and the initiative complies with data privacy and security requirements from the outset.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Removing the sensitive records from the training data set addresses the data itself rather than establishing the governance framework needed to protect PII throughout the initiative."
      },
      {
        "options": [
          "B"
        ],
        "text": "Restricting model access to internal users only addresses one dimension of access control, but does not establish the comprehensive governance controls needed to protect PII across storage and use as well."
      },
      {
        "options": [
          "C"
        ],
        "text": "Delaying the project defers the governance responsibility to the sponsor rather than the AI project manager taking the appropriate action to establish controls before development begins."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q129",
    "question": "An AI project team completes the pre-deployment validation of a loan approval model and detects statistical differences in approval rates across applicant groups. The model has not yet been released to production. What should the AI project manager do first?",
    "options": {
      "A": "Conduct a detailed bias review to identify the source of the disparity.",
      "B": "Remove the demographic attribute and retrain the AI model.",
      "C": "Document the disparity in the risk register and proceed to deployment.",
      "D": "Adjust the model's decision threshold to standardize approval rates."
    },
    "correct": "A",
    "correctExplanation": "The project manager should first conduct a bias review across the model, data, and algorithm to identify the source of the disparity. Bias must be identified and understood before any mitigation action can be taken effectively.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Removing the demographic attribute and retraining the model applies a mitigation technique before the source of the bias has been identified, which may not resolve the underlying issue."
      },
      {
        "options": [
          "C"
        ],
        "text": "Documenting the disparity and proceeding with monitored deployment is incorrect, as known bias issues should be resolved before the model is released to production."
      },
      {
        "options": [
          "D"
        ],
        "text": "Adjusting the decision threshold to equalize approval rates applies a technical fix without first understanding the root cause of the disparity across applicant groups."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q130",
    "question": "An AI project manager is leading an initiative for a hospital network. During project execution, a new regulation for AI use in clinical settings is published that affects how the model's outputs may be used by clinical staff.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Continue project execution and address the regulation during the post-deployment compliance review.",
      "B": "Pause all project activities until legal counsel provides written approval to proceed.",
      "C": "Update the project risk register to note the new regulation and monitor for further changes.",
      "D": "Assess the new regulation's impact and coordinate with legal and compliance teams on required adjustments."
    },
    "correct": "D",
    "correctExplanation": "When a new regulation is published during project execution, the AI project manager must assess its impact on the project and engage the appropriate legal and compliance teams to determine what adjustments are required.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Continuing project execution and deferring compliance to the post-deployment review ignores an active regulatory requirement that may affect how the model is used, creating legal and operational risk."
      },
      {
        "options": [
          "B"
        ],
        "text": "Pausing all project activities until written approval is received is an overly reactive response that may cause unnecessary delays."
      },
      {
        "options": [
          "C"
        ],
        "text": "Updating the risk register is a useful documentation activity, but it is insufficient on its own, as it does not fulfill the project manager's regulatory monitoring responsibilities."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q131",
    "question": "An AI project manager is leading the kickoff meeting for a credit card chatbot initiative. The business analyst raises concerns about compliance and regulatory requirements and asks who to contact for guidance. What should the AI project manager do?",
    "options": {
      "A": "Direct the business analyst to the project sponsor.",
      "B": "Direct the business analyst to the AI solution architect.",
      "C": "Direct the business analyst to the financial industry subject matter expert (SME).",
      "D": "Direct the business analyst to the quality assurance (QA) or quality control (QC) testers."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager should direct the business analyst to the financial industry SME, as this role possesses the domain knowledge needed to identify specific compliance and regulatory obligations governing financial services AI initiatives.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "While the project sponsor handles overarching business goals and funding, they lack the specialized regulatory domain expertise required here."
      },
      {
        "options": [
          "B"
        ],
        "text": "The solution architect focuses on system design and technical architecture rather than regulatory compliance standards."
      },
      {
        "options": [
          "D"
        ],
        "text": "QA/QC testers verify technical performance and functional defect management, not high-level industry compliance obligations."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q132",
    "question": "A project manager is operationalizing an AI solution for a nonprofit organization. The project manager needs to oversee model governance. What should the AI project manager do?",
    "options": {
      "A": "Define success criteria, assess data representativeness,and validate preprocessing results.",
      "B": "Track business key performance indicators (KPIs),analyze model performance trends, and generateperformance reports.",
      "C": "Establish lifecycle management procedures, implement version control processes, and ensure governance compliance",
      "D": "Plan the transition from the project team to operationalsupport and facilitate the knowledge transfer."
    },
    "correct": "C",
    "correctExplanation": "Overseeing model governance requires the project manager to establish model lifecycle management procedures, implement model versioning and change control processes, and ensure compliance with governance policies and standards. Model governance provides controls, processes, procedures, and organizational guidance on how models are built, iterated, used, and shared.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Defining success criteria, assessing data representativeness, and validating preprocessing results are data preparation activities associated with verifying data quality prior to model training, not with governing an operationalized model."
      },
      {
        "options": [
          "B"
        ],
        "text": "Tracking KPIs, analyzing performance trends, and generating performance reports describe the activities associated with overseeing AI solution metrics not model governance."
      },
      {
        "options": [
          "D"
        ],
        "text": "Planning the transition to operational support and facilitating knowledge transfer describe transition planning activities not model governance."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q133",
    "question": "A data scientist is overseeing data evaluation for an AI project. The AI project team needs confirmation the data is suitable for model training before the development phase. What should the data scientist do?",
    "options": {
      "A": "Assess data freshness, relevance, accuracy, completeness, and consistency",
      "B": "Establish refresh procedures, manage team feeds, andcoordinate migrations.",
      "C": "Remove data access controls to encourage team reviewand data validation.",
      "D": "Compare available data against defined specifications toidentify gaps."
    },
    "correct": "A",
    "correctExplanation": "The data scientist should assess data quality dimensions and conduct exploratory data analysis to understand data characteristics. This would confirm that the data is suitable for model training before development proceeds.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Establishing data refresh procedures, managing feeds, and coordinating migrations describe data gathering and collection activities."
      },
      {
        "options": [
          "C"
        ],
        "text": "Removing data access controls and giving user permissions to encourage team review is not a recommended approach in any AI data-related environment, due to potential PII risks."
      },
      {
        "options": [
          "D"
        ],
        "text": "Comparing available data against defined specifications to identify gaps describes data readiness assessment activities."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q134",
    "question": "An AI project manager is preparing to transition a deployed AI chatbot to the operational support team at a healthcare organization. The solution is live and performing as expected, and the original project team will be reassigned within the next month.\n\nWhat should the AI project manager do next?",
    "options": {
      "A": "Establish ongoing maintenance and support procedures for the operational team.",
      "B": "Develop a stakeholder communication plan outlining post-deployment reporting frequency.",
      "C": "Create a model retraining schedule based on the chatbot's initial performance results.",
      "D": "Conduct a compliance review confirming the chatbot meets current regulatory requirements."
    },
    "correct": "A",
    "correctExplanation": "Establishing ongoing maintenance and support procedures for the operational team ensures the support team has the structured guidance needed to manage, monitor, and sustain the solution after the transition is complete.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "D"
        ],
        "text": "Developing a stakeholder communication plan and conducting a compliance review address communication and governance concerns that do not directly prepare the operational team to maintain and support the live solution after handover."
      },
      {
        "options": [
          "C"
        ],
        "text": "Creating a model retraining schedule addresses future model updates but does not establish the day-to-day maintenance and support procedures needed to manage the solution from the moment the transition is complete."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam1_q135",
    "question": "An AI project team at a logistics company is gathering data from multiple operational systems to support a new initiative. During collection, the team notices that the data set has gaps. What should the AI project team do first?",
    "options": {
      "A": "Populate the missing data with default values.",
      "B": "Identify the incomplete data source.",
      "C": "Remove the data from the repository.",
      "D": "Change the criteria used to pull the data."
    },
    "correct": "B",
    "correctExplanation": "Identifying the specific source causing incomplete data is the necessary first step to determine root causes before taking corrective remediation steps.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Imputing default values takes corrective action prematurely without understanding why or where the gaps originated."
      },
      {
        "options": [
          "C"
        ],
        "text": "Deleting records removes potential value and risks introducing bias before diagnosing the data gap source."
      },
      {
        "options": [
          "D"
        ],
        "text": "Modifying extraction criteria assumes the pipeline logic is flawed without verifying the origin of missing records."
      }
    ],
    "examSource": 1
  },
  {
    "id": "exam2_q1",
    "question": "An AI project team plans to use customer transaction records containing personally identifiable information (PII) to train a fraud detection model. The AI project manager is overseeing the privacy and security plan during the data understanding phase.\n\nWhat should the AI project manager do before data collection activities begin?",
    "options": {
      "A": "Establish encryption standards, key rotation policies, and access logging for production model artifacts.",
      "B": "Define data ownership confirmation, secure access controls, and privacy compliance procedures.",
      "C": "Schedule penetration testing, vulnerability scanning, and patch management for the deployment environment.",
      "D": "Define accuracy thresholds, precision requirements, and recall targets for the production release."
    },
    "correct": "B",
    "correctExplanation": "Before data collection begins, the AI project manager overseeing the privacy and security plan should define data ownership confirmation, establish secure access controls for AI training data, and implement privacy compliance procedures. These activities ensure that PII is handled responsibly and in accordance with data protection requirements before any data is collected or processed.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Establishing encryption standards, key rotation policies, and access logging describes security activities associated with production model artifacts, not pre-collection data planning."
      },
      {
        "options": [
          "C"
        ],
        "text": "Scheduling penetration testing, vulnerability scanning, and patch management describes deployment security activities that occur after the model is built and ready for release."
      },
      {
        "options": [
          "D"
        ],
        "text": "Setting accuracy thresholds, precision requirements, and recall targets describes model performance criteria associated with defining success metrics, not privacy and security planning."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q2",
    "question": "An AI project manager is overseeing an AI initiative with limited documentation on model selection criteria and no clear audit trail. Stakeholders have raised concerns about the data selection process and how the model reaches its decisions.  What should the AI project manager do next?",
    "options": {
      "A": "Improve model accuracy and address transparencyconcerns after deployment.",
      "B": "Implement model interpretability tools and share outputswith technical teams.",
      "C": "Share summaries of model outputs without documentingdata sources.",
      "D": "Establish interpretability mechanisms and transparent reporting practices"
    },
    "correct": "D",
    "correctExplanation": "Establishing transparent reporting practices and interpretability mechanisms ensures stakeholders can understand and trust how the model operates and makes decisions, which is a core requirement of managing AI/ML transparency.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Addressing transparency concerns after deployment defers the transparency gap to a later stage, which does not resolve the immediate stakeholder concerns or the missing documentation."
      },
      {
        "options": [
          "B"
        ],
        "text": "Implementing model interpretability tools but sharing outputs with technical teams only excludes the stakeholders and does not fulfill the transparency requirements established in the scenario."
      },
      {
        "options": [
          "C"
        ],
        "text": "Sharing summaries of model outputs without documenting data sources provides incomplete information that does not address the underlying concerns about data selection and model decision-making transparency."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q3",
    "question": "An AI project manager at a software company has been asked to build an automated defect assignment tool. The assignment rules are well defined, but the process has only been handled manually.  What should the AI project manager do first?",
    "options": {
      "A": "Explore all available and relevant AI options in the market.",
      "B": "Evaluate whether the team has sufficient defect data forthe scenario.",
      "C": "Evaluate whether automation is sufficient or",
      "D": "Begin building an AI solution based on the existingassignment rules."
    },
    "correct": "C",
    "correctExplanation": "AI is needed. The AI project manager must first evaluate whether traditional automation can meet the business need before committing to an AI solution. Not every manual process requires AI, and well-defined rules often indicate that a rules-based automation approach may be more appropriate and cost-effective.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Exploring available AI options in the market and beginning to build an AI solution both assume that AI is the right approach without first evaluating whether automation alone would be sufficient to meet the business need."
      },
      {
        "options": [
          "B",
          "D"
        ],
        "text": "Evaluating whether sufficient defect data exists addresses only one aspect of feasibility and does not answer the broader question of whether AI is appropriate for a rules-based process."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q4",
    "question": "An AI project manager is coordinating an AI initiative to predict service appointment no-shows across several locations. The available data includes only recent records from two locations, while the solution requires historical patterns across all locations and customer segments. What should the AI project manager do?",
    "options": {
      "A": "Compare the available data against the defined requirements to determine sufficiency.",
      "B": "Begin model training with the available records and review limitations during validation.",
      "C": "Limit the AI solution to the two locations that already have recent records.",
      "D": "Request an external data provider before reviewing the available internal data."
    },
    "correct": "A",
    "correctExplanation": "Comparing the available data against the defined requirements to determine whether it is sufficient is an assessment that identifies the extent of the gap and informs whether the initiative can proceed, needs additional data collection, or requires a revised scope.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Starting model training with the available records would move forward before confirming that the data meets defined requirements, creating the risk of a model that does not represent the full intended population."
      },
      {
        "options": [
          "C"
        ],
        "text": "Limiting the solution to the two locations with recent records prematurely reduces scope without performing the gap assessment first."
      },
      {
        "options": [
          "D"
        ],
        "text": "Requesting an external data provider before reviewing available internal data skips the necessary assessment step to determine what gaps actually exist."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q5",
    "question": "An AI project manager is leading a new AI initiative at a financial services company. Stakeholders from different business units have proposed several potential use cases, but no consensus has been reached on the problem to be solved.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Collect data from all business units to accelerate project execution.",
      "B": "Select the use case that appears to have the highest financial return.",
      "C": "Engage stakeholders to align on objectives and define the success criteria.",
      "D": "Request proof-of-concept models for each potential use case."
    },
    "correct": "C",
    "correctExplanation": "Engaging stakeholders to align on objectives and define success criteria ensures the initiative is grounded in a clearly understood and agreed-upon business problem before any further planning or development begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Beginning data collection from all business units and requesting proof-of-concept models for each proposed use case commit resources before the team has aligned on which problem the initiative should solve, risking wasted effort across multiple unvalidated directions."
      },
      {
        "options": [
          "B"
        ],
        "text": "Selecting the use case with the highest apparent financial return bypasses the structured stakeholder alignment process and risks choosing a direction that has not been validated against the organization's objectives."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q6",
    "question": "An AI project manager has joined a company that wants to implement AI solutions to improve operations. Before planning begins, the project sponsor wants to ensure the initiative will provide business value.  What should the AI project manager do first?",
    "options": {
      "A": "Develop a project charter that outlines the scope, timeline,and budget for the proposed initiative.",
      "B": "Schedule a kickoff meeting with the team to go over roles,responsibilities, and project objectives.",
      "C": "Define the core business need, identify relevant stakeholders, and clarify the expected outcomes",
      "D": "Review prior AI solutions to apply knowledge from thelessons learned to the proposed initiative."
    },
    "correct": "C",
    "correctExplanation": "Defining the core business need, identifying relevant stakeholders, and clarifying the expected outcomes ensures that the initiative is grounded in a real organizational need and that all parties are aligned on what the AI solution is meant to address.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Creating a project charter and holding a kickoff meeting are planning steps that should occur only after the problem is clearly defined."
      },
      {
        "options": [
          "A"
        ],
        "text": "Starting them before confirming the business need and desired outcomes can misalign the project from the outset."
      },
      {
        "options": [
          "D"
        ],
        "text": "Identifying prior AI solutions, reviewing lessons learned, and implementing them into the proposed initiative may be a useful reference activity, but it does not establish the business need or clarify what the current initiative is meant to solve."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q7",
    "question": "A compliance officer at a financial services company is conducting a risk assessment for a new AI initiative. The AI project team flags applicable regulations and internal compliance policies that could impact the project. What AI requirement should the compliance officer address?",
    "options": {
      "A": "Societal requirements",
      "B": "Transparent requirements",
      "C": "Responsible AI requirements",
      "D": "Governed AI requirements"
    },
    "correct": "C",
    "correctExplanation": "Responsible AI requirements address laws, regulations, and internal compliance policies that govern how an AI initiative must operate. When a risk assessment identifies applicable regulations and compliance policies that could impact a project, these fall under the Responsible AI category of the AI requirements framework.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Societal ethical AI requirements focus on bias, fairness, and human values."
      },
      {
        "options": [
          "B"
        ],
        "text": "Transparent AI requirements address consent, disclosure, and visibility into how the AI system operates."
      },
      {
        "options": [
          "D"
        ],
        "text": "Governed AI requirements cover system auditability, contestability, and model versioning."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q8",
    "question": "An AI project manager is reviewing a governance report for a deployed AI tutor. The report indicates a sharp decline in module performance following a recent content update that has not been validated. What should the AI project manager classify this issue as?",
    "options": {
      "A": "Data drift",
      "B": "Model drift",
      "C": "Overfitting",
      "D": "Underfitting"
    },
    "correct": "B",
    "correctExplanation": "Model drift occurs when a model's performance declines because the underlying environment or content it was trained against has changed. In this scenario, the recent content update that has not been validated against the AI tutor is the likely cause of the performance decline.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Data drift refers to a change in the statistical properties of input data received by the model, rather than a change in content or task."
      },
      {
        "options": [
          "C"
        ],
        "text": "Overfitting occurs when a model performs well on training data but poorly on unseen data due to learning patterns too specific to training, unrelated to content updates."
      },
      {
        "options": [
          "D"
        ],
        "text": "Underfitting occurs when a model is too simple to capture underlying patterns, resulting in poor performance from the outset rather than a sudden decline post-update."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q9",
    "question": "An AI project manager is leading an initiative to recommend inventory reorder quantities. The pilot team reports that users are concerned about losing authority over ordering decisions. The AI solution has not been mapped to the current workflow. What should the AI project manager do?",
    "options": {
      "A": "Move forward with deployment based on technical testing, vendor approval, and budget sign-off.",
      "B": "Assess adoption barriers, process impacts, and integration risks.",
      "C": "Ask the data science team to involve the users to train the model.",
      "D": "Replace the current purchasing workflow with the AI output process during rollout."
    },
    "correct": "B",
    "correctExplanation": "Addressing user concerns in a structured way gives the AI project manager a complete view of people, process, and integration risks that must be resolved prior to rollout.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Deploying based solely on technical/financial sign-off ignores critical user adoption and workflow integration issues raised by the pilot team."
      },
      {
        "options": [
          "C"
        ],
        "text": "Asking data scientists to involve users in training addresses model development but skips broader workflow and organizational adoption barriers."
      },
      {
        "options": [
          "D"
        ],
        "text": "Forcing a new process during rollout without assessing impact increases resistance and operational risk."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q10",
    "question": "An AI project manager is preparing for a regulatory review that requires evidence of how an AI model progressed through its lifecycle.  What should the AI project manager have in place?",
    "options": {
      "A": "Documented records of model decisions, approvals, and version history",
      "B": "Final model performance reports only.",
      "C": "Documentation of deployment activities.",
      "D": "Records maintained by individual teams without a sharedstructure."
    },
    "correct": "A",
    "correctExplanation": "A documented history of key decisions and changes made throughout the project is the comprehensive approach to support accountability and provides the audit trail regulators need to verify how the model was developed, tested, approved, and deployed.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Final model performance reports and deployment documentation capture a narrow perspective of the project lifecycle."
      },
      {
        "options": [
          "D"
        ],
        "text": "Records maintained by individual teams without a shared structure creates fragmented and inconsistent documentation that cannot reliably support a comprehensive regulatory review."
      },
      {
        "options": [
          "C"
        ],
        "text": "Leaving gaps in the regulatory evidence needed to demonstrate the full development and approval process."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q11",
    "question": "An AI project team is preparing to deploy a customer-facing recommendation solution in multiple markets. During a governance review, the compliance team informs the project manager that new AI-related regulatory requirements may affect how customer data can be used and reported.\n\nWhat should the project manager do?",
    "options": {
      "A": "Continue with the planned deployment and address any compliance issues after the solution is operational.",
      "B": "Increase model testing activities to compensate for potential regulatory changes.",
      "C": "Coordinate with legal and compliance stakeholders to assess and address the new regulatory requirements.",
      "D": "Reduce the scope of the AI solution until all future regulations become fully established."
    },
    "correct": "C",
    "correctExplanation": "Since new regulatory requirements may affect the use and reporting of customer data, the AI project manager should work with the appropriate stakeholders to evaluate the requirements and determine the actions needed to maintain compliance.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Continuing with deployment and addressing compliance issues later is incorrect because regulatory impacts should be assessed before deployment decisions are finalized."
      },
      {
        "options": [
          "B"
        ],
        "text": "Increasing model testing activities does not determine whether the solution complies with new regulatory obligations."
      },
      {
        "options": [
          "D"
        ],
        "text": "Reducing the scope of the AI solution is incorrect because the regulatory impact has not yet been assessed, and there is no indication that a scope reduction is necessary to achieve compliance."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q12",
    "question": "An AI project manager has been asked to present the return on investment (ROI) justification for a new AI-powered inventory management system at a retail company. The project sponsor requires this information to make an approval decision. What should the AI project manager present?",
    "options": {
      "A": "A stakeholder analysis identifying who benefits from theinitiative and their level of support.",
      "B": "A report that includes cost-benefit analysis, expected returns, and measurement metrics",
      "C": "A risk assessment covering implementation risks,mitigation strategies, and contingency plans.",
      "D": "A technical comparison of available AI solutions and theirrespective capabilities."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must present a financial justification that demonstrates the expected value of the investment. This includes a cost-benefit analysis, projected returns, and the metrics that will be used to measure whether the initiative delivers the expected value.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A stakeholder analysis identifies who benefits from the initiative and their level of support, but does not provide the financial evidence the sponsor needs to make an approval decision."
      },
      {
        "options": [
          "C"
        ],
        "text": "A risk assessment covers potential threats and mitigation strategies, but does not address the financial justification and ROI that the sponsor has requested."
      },
      {
        "options": [
          "D"
        ],
        "text": "A technical comparison of available AI solutions addresses solution selection rather than the financial justification needed to support the sponsor's approval decision."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q13",
    "question": "During an AI model's performance review the AI project manager discovers that parameter changes were not consistently logged, a preprocessing script does not align with the approved baseline, and peer review notes are still open. The data science team wants to move forward citing the latest model version produced the highest validation score so far. What should the AI project manager do?",
    "options": {
      "A": "Approve the model since the validation score is thehighest relevant quality indicator.",
      "B": "Require configuration, review, and performance controls are completed before approval",
      "C": "Facilitate a working session to reach consensus, recorddifferences, and re-baseline the model.",
      "D": "Rely on monitoring during the production phase to identifyany remaining quality issues."
    },
    "correct": "B",
    "correctExplanation": "The project manager must ensure that all quality controls are completed before the model advances. A strong validation score does not compensate for unresolved configuration and review gaps that could affect model reliability and traceability in production.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Accepting the model because it produced the highest validation score and relying on production monitoring to catch remaining issues both prioritize speed over quality compliance, allowing known gaps in configuration management and peer review to carry into production."
      },
      {
        "options": [
          "C"
        ],
        "text": "Facilitating a working session to reach consensus, record differences and re-baselining the model does not address the open peer review notes and re-baseling the model is a premature action that is not a recommended approach in model performance QA/QC."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q14",
    "question": "An AI project team is developing a fraud detection system that uses an unsupervised learning approach to identify unusual transactions.  What AI solution should the team apply?",
    "options": {
      "A": "Autonomous systems",
      "B": "Predictive analytics and decision support",
      "C": "Patterns and anomalies detection",
      "D": "Conversational and human interaction"
    },
    "correct": "C",
    "correctExplanation": "Designed to identify unusual behaviors, groupings, or deviations within data. Using an unsupervised learning approach to identify unusual transactions in a fraud detection system directly reflects this pattern, since the model learns to recognize normal transaction patterns and flags deviations without requiring labeled training data.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Autonomous systems are designed to perform tasks and make decisions independently without human intervention, which does not describe a fraud detection system that identifies unusual transactions."
      },
      {
        "options": [
          "B"
        ],
        "text": "Predictive analytics and decision support use historical data with known outcomes to forecast future results and support human decision-making, which requires labeled data rather than the unsupervised approach described in the scenario."
      },
      {
        "options": [
          "D"
        ],
        "text": "Conversational and human interaction supports natural language communication between users and AI systems, which is unrelated to the transaction pattern identification described in the scenario."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q15",
    "question": "An AI model has completed testing and achieved expected performance levels. The AI project team is preparing to release the model to its operational environment. What should the AI project manager do prior to deployment?",
    "options": {
      "A": "Evaluate readiness against established success criteria and operational requirements.",
      "B": "Review the project budget and resource allocation to confirm funding.",
      "C": "Increase the training dataset size before reviewing application requirements.",
      "D": "Schedule a stakeholder meeting to present model performance results and gather feedback."
    },
    "correct": "A",
    "correctExplanation": "Even when a model has achieved expected performance levels during testing, the AI project manager must evaluate deployment readiness against the established success criteria and operational requirements. This ensures the model is not only technically ready but also meets all organizational and operational standards required for production.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Reviewing the project budget and resource allocation is a project management activity, and scheduling a stakeholder meeting to present performance results is a communication activity. While both may be relevant at other stages of the project, neither evaluates whether the AI solution is operationally ready for deployment."
      },
      {
        "options": [
          "C"
        ],
        "text": "Increasing the training dataset size is a model development activity and is premature once the model has already completed testing and achieved the expected performance levels."
      },
      {
        "options": [
          "D"
        ],
        "text": "Scheduling a stakeholder meeting to present results does not evaluate operational readiness for production deployment."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q16",
    "question": "An AI project manager is leading a readmission prediction initiative at a healthcare organization. Before data preparation begins, the data scientist discovers duplicate records, conflicting codes, and inconsistent timestamp formats in the protected health information (PHI) data set.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Determine the data quality issues are sufficient to warrant a no-go decision.",
      "B": "Begin feature engineering immediately and resolve the quality issues during that phase.",
      "C": "Proceed as planned since data preparation is intended to address quality issues.",
      "D": "Delay data preparation until after the first model performance baseline is established."
    },
    "correct": "C",
    "correctExplanation": "The data preparation phase is specifically designed to address cleaning, standardization, and formatting concerns, and the presence of these issues does not warrant stopping or delaying the initiative before preparation has begun.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Determining that the data quality issues are sufficient to warrant a no-go decision escalates the finding prematurely before the data preparation phase has had the opportunity to address the identified issues through its established cleaning and preprocessing workflows."
      },
      {
        "options": [
          "B"
        ],
        "text": "Beginning feature engineering immediately bypasses the data preparation activities needed to resolve the quality issues before features are derived, which could compromise the reliability of the features produced."
      },
      {
        "options": [
          "D"
        ],
        "text": "Delaying data preparation until after the first model performance baseline is established reverses the correct sequence since data must be cleaned and prepared before model training can begin."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q17",
    "question": "A data scientist is overseeing the development and testing of an AI machine learning (ML) model. The AI project manager wants the data scientist to track how the model is performing throughout this process.\n\nWhat should the data scientist monitor?",
    "options": {
      "A": "Configuration management",
      "B": "Model testing protocols",
      "C": "Model performance metrics",
      "D": "Technical validation"
    },
    "correct": "C",
    "correctExplanation": "Model performance metrics are the measures used to evaluate how well an AI model is performing during development and testing. They provide objective evidence about whether the model is meeting expected quality thresholds, such as accuracy, precision, recall, error rate, or other criteria relevant to the use case. By monitoring these metrics throughout development and testing, the team can detect issues early, assess whether the model is improving, and confirm whether it meets the defined acceptance criteria before deployment.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Configuration management and technical validation reports do not directly measure model performance. Configuration management focuses on controlling versions, settings, and changes to model components or environments, while technical validation reports document the results of formal verification activities. Both are important for governance and quality assurance, but neither serves as the primary mechanism for tracking how well the model is performing during development and testing."
      },
      {
        "options": [
          "B"
        ],
        "text": "Model testing protocols define how the model will be tested, not how its performance is measured. Testing protocols establish the procedures, scenarios, and methods the team should follow, but they do not provide the actual results or indicators of model quality."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q18",
    "question": "An AI project team is reviewing available data for a fraud detection initiative. The team finds that older transaction records are stored in a legacy format that the proposed AI model cannot process.\n\nWhat should the AI project team do?",
    "options": {
      "A": "Proceed with model training using only the available transaction records.",
      "B": "Request the data engineering team reformats all legacy records before any work continues.",
      "C": "Compare the available data against defined requirements and assess if the gap affects viability.",
      "D": "Escalate the data gap to the project sponsor and request a budget decision."
    },
    "correct": "C",
    "correctExplanation": "Comparing the available data against defined requirements and assessing the impact of the gap on model viability provides the information needed to make an informed decision about how to proceed.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Proceeding with model training or requesting the data engineering team to reformat legacy records both act on the gap without first assessing its impact. The team cannot make an informed decision about the right course of action until the gap has been evaluated against the defined requirements."
      },
      {
        "options": [
          "D"
        ],
        "text": "Escalating to the project sponsor is premature before the team has completed its assessment."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q19",
    "question": "An AI project manager requests the project team classifies the available data before determining storage and processing needs. The available data includes images, videos, and text files.\n\nWhat type of data should the project team identify?",
    "options": {
      "A": "Structured data",
      "B": "Unstructured data",
      "C": "Semi-structured data",
      "D": "Metadata"
    },
    "correct": "B",
    "correctExplanation": "Images, videos, and text files do not follow a predefined schema or consistent format, making them unstructured data. This type of data is highly variable and requires specialized processing techniques before it can be used for AI model training.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Structured data is organized according to a fixed schema and consistent format, such as data in relational database tables. If the scenario involves information that does not follow a rigid schema, structured data would not be the best choice."
      },
      {
        "options": [
          "C"
        ],
        "text": "Semi-structured data contains some organizational elements, such as tags, labels, or markers, but does not conform to a fully rigid schema. If the scenario is referring to data that is fully organized in predefined fields, semi-structured data would not be correct."
      },
      {
        "options": [
          "D"
        ],
        "text": "Metadata is not a primary data type like structured or semi-structured data. It is data that describes other data, such as source, format, creator, or timestamp information, so it would be incorrect if the question is asking about the actual form of the data itself."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q20",
    "question": "An AI project manager at an education company is leading the development of an AI-powered student support chatbot. The chatbot will be trained on historical support tickets to answer common questions and escalate complex cases.  What should the AI project manager do first?",
    "options": {
      "A": "Develop the chatbot's implementation plan.",
      "B": "Define the chatbot's escalation rules.",
      "C": "Map the chatbot's data requirements",
      "D": "Determine the chatbot's deployment approach."
    },
    "correct": "C",
    "correctExplanation": "Before any further planning can occur, the AI project manager must first map the data requirements needed to train the chatbot. Defining the ticket types, sources, format, and quality standards ensures the team understands what data is needed to support model training before development activities begin.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Developing the implementation plan and determining the deployment approach address activities that occur later in the project lifecycle, after the data requirements have been defined and the chatbot has been built and tested."
      },
      {
        "options": [
          "B"
        ],
        "text": "Defining escalation rules addresses how the chatbot will route complex cases, which depends on first understanding the data available to train the chatbot to recognize what qualifies as a complex case."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q21",
    "question": "An AI project manager is overseeing the final stages of an AI project. The validated model is ready to move from the project team to operational support.  What should the AI project manager do?",
    "options": {
      "A": "Implement monitoring dashboards and establish alertingsystems for performance breaches.",
      "B": "Define roles and responsibilities and create handover documentation and training materials",
      "C": "Develop incident response procedures and createbusiness continuity plans for service disruptions.",
      "D": "Evaluate model performance and validate deploymentreadiness documentation."
    },
    "correct": "B",
    "correctExplanation": "When a validated AI model is ready to move from the project team to operational support, the project manager should define roles and responsibilities for the operational phase and create handover documentation and training materials. These activities ensure a structured and successful transition from project delivery to ongoing operations.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Implementing monitoring dashboards and establishing alerting systems for performance breaches describes AI solution metrics oversight activities."
      },
      {
        "options": [
          "C"
        ],
        "text": "Developing incident response procedures and creating business continuity plans describes contingency planning activities."
      },
      {
        "options": [
          "D"
        ],
        "text": "Evaluating model performance and validating deployment readiness documentation describes go/no-go decision activities that occur before the transition to operational support."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q22",
    "question": "An AI project manager collaborates with external teams to grant access permissions, storage arrangements, and version-controlled repositories before model development begins.  What activity is the AI project manager performing?",
    "options": {
      "A": "Documenting requirements relating to data elements,quality, and historical records.",
      "B": "Coordinating the AI workspace, infrastructure, and secure development environment",
      "C": "Evaluating whether the AI model is producing accurateand reliable appraisal outcomes.",
      "D": "Preparing the financial justification and expected businessvalue for executive approval."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager coordinates the AI workspace, infrastructure, and secure development environment. These activities are foundational to establishing a structured and secure space where the team can develop and manage AI models effectively.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Documenting data elements, quality requirements, and historical records addresses data requirement definition activities that belong to an earlier stage of the project, before workspace and infrastructure setup begins."
      },
      {
        "options": [
          "C"
        ],
        "text": "Evaluating whether the AI model is producing accurate and reliable appraisal outcomes is a model evaluation activity that occurs after development, not before it begins."
      },
      {
        "options": [
          "D"
        ],
        "text": "Preparing the financial justification and expected business value for executive approval is a business case activity that takes place during the planning stage, not during workspace and infrastructure coordination."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q23",
    "question": "An insurance company proposes an AI claims triage tool. During scope development, one stakeholder wants the system to prioritize claims, another wants it to automatically approve claims, and a third expects it to detect fraud.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Include prioritization, approval, and fraud detection in the initial scope to satisfy stakeholders.",
      "B": "Select the easiest capability to implement first and allow the final scope to emerge during development.",
      "C": "Define the approved use case, intended outcomes, boundaries, and excluded functions.",
      "D": "Postpone scope definition until after the first prototype demonstrates which features are feasible."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager should define the approved use case, intended outcomes, boundaries, and excluded functions. This establishes a clear and agreed-upon scope that resolves stakeholder expectations before development begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Including prioritization, approval, and fraud detection in the initial scope to satisfy stakeholders expands the scope to accommodate every request rather than defining a focused and approved use case, which increases project risk and complexity."
      },
      {
        "options": [
          "B"
        ],
        "text": "Selecting the easiest capability to implement first and allowing the final scope to emerge during development bypasses the structured scope definition process needed to align stakeholders before work begins."
      },
      {
        "options": [
          "D"
        ],
        "text": "Postponing scope definition until after the first prototype demonstrates feasibility reverses the correct sequence, since scope should guide development rather than be determined by early technical exploration."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q24",
    "question": "A data scientist is overseeing data evaluation for an AI project. The data set contains missing values, conflicting account statuses, and duplicate entries across multiple source systems.  What data challenge does this describe?",
    "options": {
      "A": "Volume",
      "B": "Veracity",
      "C": "Velocity",
      "D": "Variety"
    },
    "correct": "B",
    "correctExplanation": "Veracity refers to the accuracy, reliability, and trustworthiness of data. Issues such as missing values, conflicting account statuses, and duplicate entries are all indicators of poor data quality, which means the data has low veracity.",
    "incorrectExplanations": [
      {
        "options": [
          "D"
        ],
        "text": "Volume, velocity, and variety relate to the amount of data, the speed at which it is generated or processed, and the diversity of data formats."
      },
      {
        "options": [
          "A",
          "C"
        ],
        "text": "None of these terms refers to data quality problems like inconsistency, incompleteness, or duplication."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q25",
    "question": "A multinational company is in the data preparation phase for a resource demand forecasting model. The data scientist is under the impression that they have completed the data transformation steps but failed to document the process.\n\nWhat should the data scientist do?",
    "options": {
      "A": "Initiate model training using the completed transformation outputs.",
      "B": "Complete documentation before proceeding to the next phase.",
      "C": "Revert to the raw dataset and restart the transformation process.",
      "D": "Escalate the documentation gap to the data governance committee."
    },
    "correct": "B",
    "correctExplanation": "Documenting data transformation steps is a required practice in data preparation that is missing from the scenario. Without it the transformation process cannot be reproduced or audited, which undermines the integrity of the model development process.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Initiating model training before documentation is complete skips a critical step that ensures the data preparation process is traceable and repeatable."
      },
      {
        "options": [
          "C"
        ],
        "text": "Reverting to the raw dataset and restarting the transformation process is unnecessary, as only the documentation is missing."
      },
      {
        "options": [
          "D"
        ],
        "text": "The documentation gap is within the data scientist's responsibility to address directly before escalation is warranted."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q26",
    "question": "A data scientist is supporting an AI initiative. The AI project team is entering the data collection phase and must determine how much training data is needed to meet the project's goals.  What should the data scientist do?",
    "options": {
      "A": "Collect the largest possible volume of data to ensure themodel has sufficient training material.",
      "B": "Identify the relevant training data based on the project's objectives and expected outcomes",
      "C": "Begin model training with the available data and adjust thedata volume based on initial results.",
      "D": "Delegate data collection to the data engineering team todetermine the appropriate volume."
    },
    "correct": "B",
    "correctExplanation": "By identifying relevant training data based on the project's objectives and expected outcomes, the data scientist ensures that the data collected is purposeful and aligned with the model's goals rather than simply maximizing volume.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Collecting the largest possible volume of data or starting model training with whatever data is available puts quantity or speed ahead of relevance and alignment with the project's objectives."
      },
      {
        "options": [
          "C"
        ],
        "text": "That can lead to inefficient use of resources and weaker model performance."
      },
      {
        "options": [
          "D"
        ],
        "text": "Delegating data collection requirements entirely to the data engineering team is also not appropriate. The data scientist must first determine what data is relevant and necessary based on the project's objectives before collection requirements are defined."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q27",
    "question": "A data science team is conducting a data assessment for a retail initiative. The team uncovers missing values, inconsistent product definitions, and conflicting records across systems. Correcting these issues will require additional budget and schedule adjustments. However, the AI project sponsor wants to avoid delays.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Proceed with data preparation activities as scheduled.",
      "B": "Make a no-go decision based on the data quality findings.",
      "C": "Address the issues affecting the smallest number of records.",
      "D": "Select a modeling approach that requires less data preparation."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager should make a no-go decision based on the poor data quality and gaps. This decision to pause and adjust the project data ensures the quality of the data is improved, avoiding potential risks in the data preparation phase.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with data preparation activities is not the right next step because it moves the project forward before the team has fully assessed whether the data quality issues are serious enough to affect the reliability of the forecasting solution."
      },
      {
        "options": [
          "C"
        ],
        "text": "Addressing only the issues that affect the smallest number of records is also incorrect because the number of records alone does not determine the significance of a data quality issue. Even a smaller issue may materially affect forecast accuracy if it involves critical fields or patterns."
      },
      {
        "options": [
          "D"
        ],
        "text": "Selecting a modeling approach that requires less data preparation is not appropriate because it avoids the underlying data quality problem rather than resolving it. The team must first confirm whether the available data is fit to support a reliable forecasting solution."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q28",
    "question": "An AI project manager is preparing a go/no-go review for an AI solution that predicts machine downtime across several facilities. The model met its accuracy target on one test set, but several other readiness dimensions have not been assessed yet.  What should the AI project manager do?",
    "options": {
      "A": "Approve deployment because the model met the accuracytarget on the test.",
      "B": "Ask the data science team to add more features beforeinvolving the operations team.",
      "C": "Conduct a comprehensive readiness review before making an operational decision",
      "D": "Transfer the model to production support and track issuesafter release."
    },
    "correct": "C",
    "correctExplanation": "Conducting a readiness review addresses the go/no-go decision described in the scenario. Meeting an accuracy target on a single test set is not sufficient evidence of overall readiness, since technical, operational, and documentation factors must all be confirmed before a go/no-go decision can be made.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Approving deployment because the model met the accuracy target relies on a single performance metric without confirming the other readiness dimensions required for a sound go/no-go decision."
      },
      {
        "options": [
          "D"
        ],
        "text": "Adding more features does not improve model performance and does not address the readiness gaps identified in the scenario."
      },
      {
        "options": [
          "B"
        ],
        "text": "Transferring the model to production support and tracking issues after release proceeds with deployment despite known readiness gaps, increasing the risk of operational disruption once the model is in production."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q29",
    "question": "An AI project manager is defining the success criteria for a classification model. Stakeholders specify that the model's sensitivity must be at least 95%. What does this requirement indicate?",
    "options": {
      "A": "The model will incorrectly flag up to 5% of negative cases as positive.",
      "B": "The model will correctly detect at least 95% of true positive cases.",
      "C": "At least 95% of the model's flagged cases will be confirmed as positive.",
      "D": "At least 95% of the model's negative predictions are true negative cases."
    },
    "correct": "B",
    "correctExplanation": "Sensitivity = True Positive Rate. It measures what fraction of actual positives the model correctly catches. 95% sensitivity means the model correctly identifies at least 95% of all real positive cases, minimising false negatives.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Incorrectly flagging negative cases as positive describes the False Positive Rate \u2014 a completely different metric from sensitivity."
      },
      {
        "options": [
          "C"
        ],
        "text": "'Of all flagged cases, 95% are truly positive' describes Precision, not Sensitivity. Precision measures the quality of positive predictions, not the coverage of actual positives."
      },
      {
        "options": [
          "D"
        ],
        "text": "Correctly dismissing 95% of true negative cases describes Specificity, which measures the model's ability to identify negatives \u2014 not positives."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q30",
    "question": "An organization just got last minute approval for an AI pattern-recognition model. The project manager has been selected and advised to schedule a kick-off meeting as soon as possible to meet the project's demanding deadline.\n\nWhat should the AI project manager do next?",
    "options": {
      "A": "Locate the training data sources and select a validation strategy for the AI model.",
      "B": "Identify the business problem and collaborate with the project team to select an algorithm.",
      "C": "Define performance thresholds the model must meet before deployment.",
      "D": "Document project boundaries and deliverables to align business objectives."
    },
    "correct": "D",
    "correctExplanation": "Defining project scope requires establishing clear boundaries around what the initiative will deliver and what falls outside its boundaries. A formal scope document ensures the team and stakeholders are aligned on deliverables and expectations.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Locating training data sources and selecting a validation strategy are technical activities that occur after the project scope has been established, not before."
      },
      {
        "options": [
          "B"
        ],
        "text": "Identifying the business problem is important, but selecting an algorithm is too early and solution-focused. The project manager should first ensure the project boundaries, deliverables, and business objectives are documented so the team does not rush into a technical approach before scope is clear."
      },
      {
        "options": [
          "C"
        ],
        "text": "Defining performance thresholds is a success criterion activity that follows scope definition and requires a clear understanding of what the initiative is expected to deliver."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q31",
    "question": "An AI project team has trained a new version of a customer churn prediction model. The data science team observes a four percent improvement in F1-score over the previous version but cannot determine the specific source of the improvement results.\n\nWhat component is missing from the team's development process?",
    "options": {
      "A": "Peer review and unit testing requirements before model code is merged.",
      "B": "Higher acceptance thresholds for model performance metrics before promotion.",
      "C": "Version control for model code, training data, and the training environment.",
      "D": "Automated retraining and drift monitoring cycles for the production model."
    },
    "correct": "C",
    "correctExplanation": "When a team cannot determine whether a performance improvement results from code changes or dataset changes, the root cause is a lack of version control. Establishing version control for model code, training data, and the training environment ensures that each component is tracked independently, making it possible to attribute performance changes to their correct source.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Peer review and unit testing requirements improve code quality and catch defects but do not address the inability to trace performance changes to specific components."
      },
      {
        "options": [
          "B"
        ],
        "text": "Higher acceptance thresholds for performance metrics raise the bar for model promotion but do not resolve the attribution problem caused by untracked changes across components."
      },
      {
        "options": [
          "D"
        ],
        "text": "Automated retraining and drift monitoring address production model maintenance."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q32",
    "question": "An AI project manager at a global legal firm is leading the deployment of an AI-powered scheduling assistant. Initial pilot feedback indicates low-user adoption, as the staff continues to rely on the legacy system.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Disable access to the legacy system to encourage adoption of the new tool.",
      "B": "Analyze adoption metrics and identify barriers to user engagement.",
      "C": "Extend the pilot to gather additional insights about system adoption.",
      "D": "Instruct the development team to redesign the user interface based on staff feedback."
    },
    "correct": "B",
    "correctExplanation": "When staff are not engaging with a newly deployed AI tool, the AI project manager must first understand why. Without analyzing adoption metrics and identifying the specific barriers preventing engagement, any corrective action risks addressing the wrong problem.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Disabling access to the legacy system forces adoption without understanding or addressing the underlying barriers, which is likely to increase resistance rather than improve engagement."
      },
      {
        "options": [
          "C"
        ],
        "text": "Extending the pilot period without first analyzing the issue is a premature action."
      },
      {
        "options": [
          "D"
        ],
        "text": "Instructing the development team to redesign the interface acts on assumptions about the cause of the adoption gap."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q33",
    "question": "An AI project team is developing a content recommendation algorithm. Stakeholders are concerned that the model may reinforce skewed viewpoints by repeatedly recommending one-sided content to users.\n\nWhat should the AI project team do to mitigate this risk?",
    "options": {
      "A": "Apply regularization techniques to prevent the model from overfitting to training data.",
      "B": "Rebalance the training data to include diverse and representative content patterns.",
      "C": "Implement fairness constraints during model training to limit disproportionate outputs.",
      "D": "Add a disclaimer to the interface informing users that suggestion patterns are repetitive."
    },
    "correct": "B",
    "correctExplanation": "The project team must rebalance the training data to ensure it includes diverse and representative content patterns. This directly addresses the source of the bias before the model learns from it.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Applying regularization techniques addresses overfitting rather than the data imbalance driving the skewed recommendations."
      },
      {
        "options": [
          "C"
        ],
        "text": "Implementing fairness constraints addresses the model training process rather than correcting the data imbalance that is the root cause of the bias concern."
      },
      {
        "options": [
          "D"
        ],
        "text": "Adding a disclaimer to the interface acknowledges the issue to users but does not address or reduce the bias in the model itself."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q34",
    "question": "An AI project manager is conducting a data readiness assessment before making a decision to proceed with model development. The team has identified several data quality issues that must be resolved before the data set can be used for training.  What determines data readiness?",
    "options": {
      "A": "The algorithm selection criteria and computationalrequirements.",
      "B": "The accuracy, relevance, completeness of the availabledata set.",
      "C": "The deployment infrastructure and resource allocationplan for the initiative.",
      "D": "The stakeholder communication plan and reportingschedule for the project."
    },
    "correct": "B",
    "correctExplanation": "and completeness of the available data set. The AI project manager must assess whether the available dataset is complete, accurate, and representative of the intended use case. This evaluation helps determine whether the data is suitable to support reliable model training.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Assessing algorithm selection criteria and computational resource requirements is premature at this stage."
      },
      {
        "options": [
          "D"
        ],
        "text": "Those are technical development decisions that should be made only after the team has confirmed the data is ready for use."
      },
      {
        "options": [
          "C"
        ],
        "text": "Assessing the deployment infrastructure and resource allocation plan is also not correct because those are operational planning activities related to implementation and rollout, not to evaluating whether the dataset is fit for model development. Assessing the stakeholder communication plan and reporting schedule is likewise incorrect because those are project communication activities. They support coordination and reporting, but they do not address the data readiness assessment needed before model development can proceed."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q35",
    "question": "An AI project manager is overseeing an equipment failure prediction initiative. The model performs well on training data but performance declines when tested on operational data from different facilities. The project sponsor wants to deploy the solution to meet a strategic deadline.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Approve deployment and monitor performance after launch.",
      "B": "Compare performance against the original baseline before proceeding.",
      "C": "Retrain the model using only the most recent operational data.",
      "D": "Limit testing to the facilities where the model performed well."
    },
    "correct": "B",
    "correctExplanation": "Comparing the model's current performance against the original baseline before proceeding helps determine the extent and cause of the performance gap, providing the evidence needed to make an informed decision despite the sponsor's pressure to meet the deadline.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Approving deployment to maintain the project schedule advances the project despite a known performance gap that has not yet been understood or addressed."
      },
      {
        "options": [
          "C"
        ],
        "text": "Retraining the model using only the most recent operational data skips the comparison and investigation needed to understand why the performance gap exists before taking corrective action."
      },
      {
        "options": [
          "D"
        ],
        "text": "Limiting testing to the facilities where the model performed well avoids confronting the performance gap rather than investigating its cause across all relevant operational conditions."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q36",
    "question": "An AI project manager is leading the rollout of a new AI solution at a logistics company. End users expressed concern that the solution might significantly impact their current workflows. What should the AI project manager do?",
    "options": {
      "A": "Delay stakeholder engagement until deployment.",
      "B": "Limit user involvement to testing activities.",
      "C": "Develop a structured change management plan.",
      "D": "Focus on model accuracy improvements."
    },
    "correct": "C",
    "correctExplanation": "Developing a structured change management plan addresses user concerns, facilitates workflow transitions, and increases adoption success across the organization.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Delaying engagement alienates end users and heightens resistance to workflow changes."
      },
      {
        "options": [
          "B"
        ],
        "text": "Restricting user contact strictly to testing ignores broad organizational adoption and change management needs."
      },
      {
        "options": [
          "D"
        ],
        "text": "Improving technical model accuracy does not resolve human concerns regarding operational process alterations."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q37",
    "question": "An AI project manager works at a software company that is considering an AI-based customer support tool. The project manager works with finance and technical teams to gather cost estimates, projected benefits, and feasibility information for executive review.  What is the AI project manager doing?",
    "options": {
      "A": "Conducting market analysis and research.",
      "B": "Gathering required data for AI model development.",
      "C": "Supporting business case creation",
      "D": "Managing stakeholder engagement."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager is performing the activities that define business case creation support. This includes collaborating with finance teams on cost projections and providing technical expertise as input.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Conducting market analysis and research focuses on external competitive and industry information rather than the internal cost estimates, projected benefits, and feasibility data being gathered in the scenario."
      },
      {
        "options": [
          "B"
        ],
        "text": "Gathering required data for AI model development refers to collecting training and validation data for model development, not financial and feasibility information for an executive business case."
      },
      {
        "options": [
          "D"
        ],
        "text": "Managing stakeholder engagement focuses on communication, alignment, and relationship management with stakeholders rather than the structured collection of financial and technical information needed to support a business case."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q38",
    "question": "An AI project manager is overseeing a fraud detection initiative for an insurance company. The data science team has proposed several algorithms and stakeholders cannot reach consensus on which approach to select.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Select the algorithm with the highest complexity.",
      "B": "Let the data science team make their decision independently.",
      "C": "Select the algorithm with the lowest implementation cost.",
      "D": "Evaluate the algorithms' implementation trade-offs."
    },
    "correct": "D",
    "correctExplanation": "The AI project manager must evaluate the implementation trade-offs between algorithm accuracy, explainability, and value to make an educated algorithm selection/recommendation.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Selecting the algorithm with the highest complexity is not the right approach because greater complexity does not necessarily produce the best outcome. Choosing an algorithm based on complexity alone ignores important business, operational, and governance considerations."
      },
      {
        "options": [
          "C"
        ],
        "text": "Selecting the algorithm with the lowest implementation cost is also incorrect because cost is only one factor in the decision. Focusing only on cost can lead to a choice that does not adequately support the project's objectives, risk requirements, or governance expectations."
      },
      {
        "options": [
          "B"
        ],
        "text": "Letting the data science team make the decision independently is not appropriate because the algorithm choice should reflect more than technical judgment alone. The AI project manager is responsible for ensuring the decision also aligns with organizational goals, stakeholder needs, and governance requirements."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q39",
    "question": "A data engineer is identifying data sources for a new repository. The initiative will support a retail company's customer service chatbot designed to answer product availability and order status questions. What data sources should the data engineer prioritize?",
    "options": {
      "A": "Third-party rating websites and competitor FAQs.",
      "B": "Employee training records and internal HR documentation.",
      "C": "Customer service call logs and store inventory data.",
      "D": "Marketing campaign performance reports."
    },
    "correct": "C",
    "correctExplanation": "Customer service call logs capture the actual questions customers ask to provide realistic training examples, while store inventory data ensures the chatbot can give real-time, accurate answers regarding product availability.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Third-party ratings and competitor FAQs reflect general industry standards rather than company-specific order and inventory details."
      },
      {
        "options": [
          "B"
        ],
        "text": "HR documentation and employee training records do not contain customer interaction queries or live inventory status."
      },
      {
        "options": [
          "D"
        ],
        "text": "Marketing reports track promotional performance and interest metrics rather than specific inventory quantities and order tracking data."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q40",
    "question": "A project manager has received approval to explore a potential AI solution for a new initiative. Before committing resources, the project sponsor wants assurance that the proposed approach is viable.  What should the project manager evaluate first?",
    "options": {
      "A": "The project budget and resource availability to determine ifthe initiative can be funded.",
      "B": "The business data, technical, operational, and ethicaldimensions of the proposed AI approach.",
      "C": "The stakeholder register to identify their respectivepreferred communication style.",
      "D": "The project schedule, resource plan, and budgetallocations of the proposed AI approach."
    },
    "correct": "B",
    "correctExplanation": "viability of the proposed AI approach. Evaluating the business, data, technical, operational, and ethical dimensions provides a comprehensive picture of whether the initiative is worth pursuing and identifies potential risks or gaps early in the project lifecycle.",
    "incorrectExplanations": [
      {
        "options": [
          "D"
        ],
        "text": "Evaluating the project budget, resource availability, or the project schedule, resource plan, and budget allocations are planning activities that focus on project constraints rather than the feasibility of the proposed AI approach."
      },
      {
        "options": [
          "A"
        ],
        "text": "These activities may be relevant at other stages of the project, but not to assess whether the proposed AI approach is feasible."
      },
      {
        "options": [
          "C"
        ],
        "text": "Reviewing the stakeholder register to identify preferred communication styles is a stakeholder engagement activity that does not contribute to determining feasibility, and the stakeholder register does not capture communication preferences."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q41",
    "question": "An AI project manager is planning an AI solution to classify incoming warranty claims. The project team has business analysts and application developers, but it is unclear whether the team has the technical expertise, computing resources, or specialized labeling support needed. What should the AI project manager do?",
    "options": {
      "A": "Begin solution design using the current project team and available tools.",
      "B": "Submit a procurement request to purchase an AI platform.",
      "C": "Assess required skills, infrastructure, and tools for each phase.",
      "D": "Assign application developers to build the model after the scope is approved."
    },
    "correct": "C",
    "correctExplanation": "This response addresses the uncertainty about the team's capabilities directly, giving the project manager a clear picture of staffing, technical, and resourcing gaps before further planning decisions are made.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Beginning solution design assumes the team can execute the work despite unconfirmed capability gaps."
      },
      {
        "options": [
          "B"
        ],
        "text": "Purchasing an AI platform commits resources before actual technical needs are understood."
      },
      {
        "options": [
          "C"
        ],
        "text": "N/A"
      },
      {
        "options": [
          "D"
        ],
        "text": "Assigning application developers assumes they have necessary data science capabilities, which has not been confirmed."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q42",
    "question": "An AI project manager is overseeing the privacy and security plan for an elementary school initiative to support bilingual children. The AI project team plans to collect voice samples, transcripts, and contextual information from partner schools to improve model accuracy.  What should the AI project manager do?",
    "options": {
      "A": "Defer data governance decisions to each partner schoolsince they already manage student information.",
      "B": "Store all collected data in a shared repository to give thefull project team access during development.",
      "C": "Implement data governance protocols that specify how the data will be collected, accessed, stored, and deleted",
      "D": "Prioritize model accuracy and address collection, access,retention, and deletion protocols after the pilot."
    },
    "correct": "C",
    "correctExplanation": "When collecting sensitive data, defining how data will be collected, accessed, stored, and deleted ensures the initiative handles sensitive information responsibly and in compliance with data protection requirements throughout the AI lifecycle.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Deferring data governance decisions to partner schools assumes that existing school IT practices are sufficient for an AI initiative involving sensitive voice and contextual data, which may not meet the data protection standards required for model development."
      },
      {
        "options": [
          "B"
        ],
        "text": "Storing all collected data in a shared repository with unrestricted team access creates unnecessary exposure of sensitive data involving children and does not establish the access controls required for secure data handling."
      },
      {
        "options": [
          "D"
        ],
        "text": "Prioritizing model accuracy and deferring governance protocols until after the pilot carries known privacy and security risks into the development process without the safeguards needed to protect sensitive data from the outset."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q43",
    "question": "An AI project manager is leading an initiative for a healthcare organization. During the testing phase, the legal team reports new health-data guidance and an internal policy update. The sponsor still wants to launch in six weeks, but no one has confirmed if the new requirements are reflected in the deployment controls. What should the AI project manager do next?",
    "options": {
      "A": "Proceed with launch planning and address complianceissues during the first post-deployment review.",
      "B": "Pause deployment activities until regulators issue moredetailed implementation guidance for the newrequirements.",
      "C": "Assess the new requirements with legal and compliance teams, then update controls and monitoring before launch",
      "D": "Ask the sponsor to approve a temporary policy exceptionwhile the legal review continues in parallel."
    },
    "correct": "C",
    "correctExplanation": "When new regulatory guidance and internal policy updates are identified during testing, the project manager must engage legal and compliance teams to assess the impact on the initiative and ensure that deployment controls and monitoring mechanisms reflect the new requirements before launch. Proceeding without confirming compliance exposes the organization to regulatory and legal risk.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with launch planning and addressing compliance issues during the first post-deployment review defers a known compliance gap to after deployment, which is too late to implement the controls and documentation required by the new guidance."
      },
      {
        "options": [
          "D"
        ],
        "text": "Asking the sponsor to approve a temporary policy exception bypasses the compliance review process and does not address the underlying requirement to update deployment controls and audit evidence before launch."
      },
      {
        "options": [
          "B"
        ],
        "text": "The project manager can engage legal and compliance teams to interpret and apply the new requirements without waiting for further regulatory clarification."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q44",
    "question": "An AI project manager is reviewing whether to invest in a new AI-enabled scheduling tool. The project sponsor wants evidence that the investment is financially justified before approving implementation.  What should the AI project manager do to address the sponsor's request?",
    "options": {
      "A": "Compare the tool's features with similar products usedwithin the organization.",
      "B": "Conduct a cost-benefit analysis to determine the return on investment (ROI",
      "C": "Ask stakeholders whether they believe the tool will reduceexpenditure over time.",
      "D": "Review the implementation of similar tools by otherorganizations in relevant industries."
    },
    "correct": "B",
    "correctExplanation": "). The project manager must estimate the projected benefits and calculate the expected ROI. They must ensure the ROI determination is based on accurate financial data rather than assumptions or informal input.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Comparing interface features and reviewing track record in similar industries addresses product evaluation rather than the financial justification that leadership has specifically requested."
      },
      {
        "options": [
          "C"
        ],
        "text": "Asking stakeholders whether they believe the tool will improve planning accuracy relies on qualitative opinion rather than the quantitative financial analysis needed to support a ROI determination."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q45",
    "question": "An AI project team has deployed an AI solution that requires users to leave their primary system to access a separate platform for predictions. The AI project manager is concerned about adoption rates falling below expectations.\n\nWhat should the AI project team resolve in this scenario?",
    "options": {
      "A": "Insufficient model accuracy in generating reliable predictions.",
      "B": "Lack of integration with existing systems and workflows.",
      "C": "Inadequate stakeholder communication during the deployment phase.",
      "D": "Insufficient data preparation prior to model development."
    },
    "correct": "B",
    "correctExplanation": "When users are required to leave their primary system to access a separate platform for predictions, the AI solution is not integrated into their existing workflows. This disruption creates friction that reduces adoption and limits the solution's impact. Addressing integration with existing systems and workflows is the primary action needed to improve adoption and meet expected outcomes.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Insufficient model accuracy and insufficient data preparation are technical concerns that do not explain the adoption issue described in the scenario. The question does not indicate that predictions are inaccurate or that data preparation was inadequate."
      },
      {
        "options": [
          "C"
        ],
        "text": "Inadequate stakeholder communication may contribute to low adoption in some cases, but it does not address the core issue identified in the scenario, which is the disruption caused by requiring users to access a separate platform outside their primary system."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q46",
    "question": "An AI project manager is overseeing a deployed AI solution. The operations' team needs to be notified when model performance thresholds are breached.  What should the AI project manager do?",
    "options": {
      "A": "Implement monitoring dashboards to track business andtechnical performance.",
      "B": "Develop incident response procedures and escalationprotocols for triggered system failures.",
      "C": "Establish alerting systems that trigger notifications when key performance indicators (KPIs) drift",
      "D": "Plan the transition from the project team to operationalsupport teams."
    },
    "correct": "C",
    "correctExplanation": "When overseeing a deployed AI solution, the project manager should establish alerting systems that automatically notify the operations team when model KPIs drift below the accepted thresholds. This ensures the team can respond promptly to performance issues before they impact business outcomes.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Developing incident response procedures and escalation protocols describes contingency planning activities."
      },
      {
        "options": [
          "A"
        ],
        "text": "Implementing monitoring dashboards is a related but distinct oversight activity focused on visibility rather than automated notification."
      },
      {
        "options": [
          "D"
        ],
        "text": "Transition planning activities are associated with handover and knowledge transfer."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q47",
    "question": "A global humanitarian organization is developing an AI initiative for personalized medicine solutions. The AI project manager notes that data collection varies significantly across participating entities, raising concerns about the fairness of model recommendations across patient populations. What should the AI project manager do first?",
    "options": {
      "A": "Schedule a kickoff meeting with all stakeholders.",
      "B": "Implement a uniform data collection approach.",
      "C": "Perform data and bias checks across regional patient data sets",
      "D": "Migrate all data into a unified storage system to enableconsistent access."
    },
    "correct": "C",
    "correctExplanation": "Performing data and bias checks enables the project manager to identify demographic and representation imbalances before model development begins. Detecting bias is a responsible AI practice that prevents skewed outcomes from being embedded into the model's recommendations, which is the core concern raised in the scenario.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Scheduling a kickoff meeting with all stakeholders is a planning activity."
      },
      {
        "options": [
          "B"
        ],
        "text": "Implementing a uniform data collection approach addresses how future data will be gathered, but does not evaluate the fairness or representativeness of data that is already being collected Migrating all data into a unified storage system is an infrastructure activity that supports data access and consistency, but it does not identify or mitigate bias."
      },
      {
        "options": [
          "D"
        ],
        "text": "While stakeholder alignment is important, it does not address the bias risk that has already been recognized by the AI project manager."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q48",
    "question": "A retail company proposes an AI recommendation engine intended to drive sales growth. The executive sponsor wants to know how the team will evaluate the initiative's effectiveness.\n\nWhat should the AI project manager recommend?",
    "options": {
      "A": "Use technical model complexity as the primary success measure.",
      "B": "Establish measurable success criteria before development begins.",
      "C": "Start with a limited deployment and assess outcomes after the pilot.",
      "D": "Measure success based on stakeholder satisfaction with the final product."
    },
    "correct": "B",
    "correctExplanation": "Establishing measurable success criteria before development begins provides an objective basis for evaluating whether the initiative delivers the intended business value once it is implemented.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Using technical model complexity as the primary success measure focuses on a technical design characteristic rather than measurable criteria that reflect whether the solution achieves its business objectives."
      },
      {
        "options": [
          "C"
        ],
        "text": "Starting with a limited deployment and assessing outcomes after the pilot reverses the correct sequence, since success criteria must be defined before development to guide the initiative rather than be determined afterward."
      },
      {
        "options": [
          "D"
        ],
        "text": "Measuring success based on stakeholder satisfaction relies on subjective opinion rather than the objective, measurable criteria needed to evaluate whether the initiative achieves its intended outcomes."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q49",
    "question": "An AI project manager is evaluating an AI initiative to automate steps of the credit card approval process. Stakeholders have raised concerns about data availability, training costs, internal AI skills, and technical readiness.  What should the AI project manager do next?",
    "options": {
      "A": "Determine if the data volume and estimated training costsare acceptable.",
      "B": "Review the organization's internal AI expertise andtechnical environment.",
      "C": "Conduct a comprehensive feasibility assessment",
      "D": "Launch a pilot to validate the proposed AI solution."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must conduct a comprehensive feasibility assessment that addresses all of the areas of stakeholder concern. Evaluating only selected dimensions risks missing critical constraints that could affect the viability of the initiative.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Assessing data volume, training costs, internal AI expertise, and the technical environment addresses only part of the stakeholders' feasibility concerns."
      },
      {
        "options": [
          "D"
        ],
        "text": "Launching a pilot is premature before a comprehensive feasibility assessment."
      },
      {
        "options": [
          "B"
        ],
        "text": "A pilot assumes the initiative is viable without first confirming that the data, costs, skills, and technical environment can support it. A partial assessment does not provide the complete picture needed to make an informed continuation decision."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q50",
    "question": "An AI project team is preparing documentation for an AI initiative. The AI project manager enrolls the help of a legal compliance officer to prepare for an upcoming audit.  What should the AI project manager do?",
    "options": {
      "A": "Conduct fairness testing across population groups andreview model outputs for discriminatory patterns.",
      "B": "Track evolving AI regulations and coordinate with externalteams on governance requirements.",
      "C": "Generate accountability reports and maintain a chain of custody records for training and testing",
      "D": "Implement encryption and access controls for training dataand conduct privacy impact assessments."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager responsible for accountability documentation should prepare accountability reports for executive and regulatory review and maintain chain of custody records for training and test data. These activities directly support audit compliance by ensuring all AI model development decisions are traceable and documented.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B",
          "D"
        ],
        "text": "Conducting fairness testing and reviewing outputs for discriminatory patterns, documenting model selection criteria, and implementing encryption and access controls each describe activities associated with bias checks, transparency management, and privacy and security oversight, none of which address accountability documentation or audit trail management."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q51",
    "question": "An AI project manager is overseeing data preparation for an AI diagnostic tool. The project team has discovered image formatting inconsistencies that will delay the project by one iteration. What should the AI project manager do to inform leadership?",
    "options": {
      "A": "Send a report containing raw data logs and statistical anomaly records.",
      "B": "Provide a status update that summarizes the issues, their impact on the timeline, and next steps.",
      "C": "Delay stakeholder communication until the team has fully resolved the issue.",
      "D": "Notify leadership that the dataset is unstable and request immediate intervention to resolve the issues."
    },
    "correct": "B",
    "correctExplanation": "Effective status reporting translates technical metrics into clear business impacts, timelines, and planned action items for decision-makers.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Sending raw technical logs overloads business leaders with irrelevant details."
      },
      {
        "options": [
          "C"
        ],
        "text": "Hiding risks delays mitigation actions."
      },
      {
        "options": [
          "D"
        ],
        "text": "Overstating simple formatting delays creates unnecessary organizational panic."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q52",
    "question": "A project manager is preparing an AI initiative to prioritize service tickets so urgent requests are routed faster. Sponsors agree on the general objective, but the team has not defined the key performance indicators (KPIs) that will measure the project's success. What should the AI project manager do?",
    "options": {
      "A": "Select an algorithm based on the data scientist's preferred model performance metric.",
      "B": "Prepare the deployment dashboard after users begin working with the solution.",
      "C": "Establish the evaluation criteria for model performance, business impact, and user adoption.",
      "D": "Estimate the project budget using expected productivity savings from the solution."
    },
    "correct": "C",
    "correctExplanation": "Clear evaluation criteria give the project manager a measurable definition of success across the dimensions sponsors have not yet addressed, ensuring the initiative can be properly evaluated after deployment.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Selecting an algorithm based on a single preferred metric narrows the focus to one technical dimension before broader success criteria are established."
      },
      {
        "options": [
          "B"
        ],
        "text": "Preparing the deployment dashboard after users begin working delays success definition until after rollout, when it should be defined upfront."
      },
      {
        "options": [
          "D"
        ],
        "text": "Estimating the budget using expected productivity savings shifts focus to financial planning without defining how project success is measured."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q53",
    "question": "An AI project team at an educational company has built an AI system that recommends lessons based on maximizing course completion speed. The AI project manager wants assurance this initiative meets responsible and trustworthy AI standards.  What should the AI project team do?",
    "options": {
      "A": "Review the recommendation algorithm to confirm itoptimizes for the correct performance metric.",
      "B": "Perform bias testing to detect if the system produces disproportionate outcomes across populations",
      "C": "Conduct a stakeholder review to gather feedback onwhether the system meets the user expectations.",
      "D": "Validate the system's prediction accuracy against historicalstudent engagement patterns."
    },
    "correct": "B",
    "correctExplanation": "When an AI project manager wants assurance that an AI initiative meets responsible and trustworthy AI standards, the project team must conduct bias testing. This directly addresses the fairness and accountability requirements that define responsible AI practice.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Reviewing the algorithm or validating prediction accuracy against historical engagement data assesses technical performance, not whether the system delivers fair outcomes."
      },
      {
        "options": [
          "C"
        ],
        "text": "Gathering feedback on user expectations addresses satisfaction and usability rather than the bias and fairness concerns that responsible and trustworthy AI standards require."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q54",
    "question": "A data scientist is preparing training data for an AI model. The dataset contains numerical features with significantly different value ranges across variables.\n\nWhat should the data scientist apply to address this issue?",
    "options": {
      "A": "Data normalization",
      "B": "Data augmentation",
      "C": "Feature engineering",
      "D": "Data anonymization"
    },
    "correct": "A",
    "correctExplanation": "When numerical features have significantly different value ranges, data normalization scales them to a consistent range so the model can learn effectively across all variables. Without normalization, features with larger ranges can disproportionately influence the model's learning process.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "C"
        ],
        "text": "Data augmentation increases the amount of training data, and feature engineering creates new variables from existing data. Neither addresses the problem of inconsistent numerical ranges across the data."
      },
      {
        "options": [
          "D"
        ],
        "text": "Data anonymization is used to protect sensitive information. It does not resolve differences in numerical scales or improve model performance related to inconsistent value ranges."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q55",
    "question": "An AI project manager is selecting a modeling approach for an initiative where the training data has no predefined labels or categories.\n\nWhat type of algorithm should the AI project manager select?",
    "options": {
      "A": "Decision tree",
      "B": "Naive Bayes",
      "C": "Gaussian mixture model",
      "D": "Linear regression"
    },
    "correct": "C",
    "correctExplanation": "A Gaussian mixture model is appropriate because it is an unsupervised learning technique that works with unlabeled data. It identifies natural groupings by modeling the dataset as a combination of probability distributions, which allows it to detect hidden patterns or clusters without needing known outcome labels. That makes it the best fit for a scenario where the goal is to analyze unlabeled data and discover underlying segments or structure.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Decision trees are supervised learning algorithms that require labeled training data. They learn patterns by associating input features with known outcome categories, so they cannot be applied appropriately when no labeled examples exist."
      },
      {
        "options": [
          "B"
        ],
        "text": "Naive Bayes is also a supervised learning algorithm and depends on labeled historical data to estimate the probability of each predefined class. Without labeled data, it has no basis for learning those class relationships."
      },
      {
        "options": [
          "D"
        ],
        "text": "Linear regression is a supervised learning technique used to predict continuous numerical values from labeled data. Because it requires known target outcomes during training, it is not suitable for a scenario where the dataset is unlabeled."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q56",
    "question": "An AI project manager is leading a new AI initiative at a manufacturing company. Stakeholders have expressed different expectations about what the solution should deliver and how it should perform. What should the AI project manager do?",
    "options": {
      "A": "Proceed with deployment based on stakeholder's priorities and preferred features.",
      "B": "Select a deployment platform before stakeholder expectations are reconciled.",
      "C": "Limit scope discussions to the technical team to avoid conflicting inputs.",
      "D": "Define project boundaries, deliverables, assumptions, and constraints."
    },
    "correct": "D",
    "correctExplanation": "Defining clear project boundaries, deliverables, assumptions, and constraints establishes a shared baseline that aligns conflicting stakeholder expectations prior to development.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding without reconciled expectations creates scope creep and risks building a solution that fails business objectives."
      },
      {
        "options": [
          "B"
        ],
        "text": "Choosing technical platforms prior to aligning scope makes assumptions that may not fit agreed deliverables."
      },
      {
        "options": [
          "C"
        ],
        "text": "Excluding key business stakeholders from scope discussions leaves conflicting expectations completely unaddressed."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q57",
    "question": "An AI project manager has completed development of a robotic process automation (RPA) system to improve forecasting at a logistics company. End users currently rely on a manual process and have not integrated the new system into their operations.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Increase the system's processing speed so it completes tasks more quickly.",
      "B": "Delay rollout until the system can automate forecasting without user involvement.",
      "C": "Determine how the system will be incorporated into the existing workflows.",
      "D": "Prioritize system reliability improvements before addressing user concerns."
    },
    "correct": "C",
    "correctExplanation": "Determining how the system will be incorporated into the user's existing workflows ensures the new system is integrated in a way that supports rather than disrupts the established work patterns, improving the likelihood of adoption.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Increasing the system's processing speed addresses technical performance rather than the integration gap, preventing planners from incorporating the system into their work."
      },
      {
        "options": [
          "B"
        ],
        "text": "Delaying rollout until the system can fully automate forecasting without user involvement removes the human role entirely rather than addressing how the system should work alongside users within their existing processes."
      },
      {
        "options": [
          "D"
        ],
        "text": "Prioritizing system reliability improvements before addressing user concerns assumes that technical performance alone will resolve the adoption gap, without addressing the workflow integration issue identified in the scenario."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q58",
    "question": "An AI project team is planning an automated insurance claim approval solution. During project planning, the compliance officer raises concerns about bias in claim decisions, cybersecurity vulnerabilities, and the reputational impact of incorrect approvals.  What should the AI project team do?",
    "options": {
      "A": "Proceed with model development and address complianceconcerns during the testing phase.",
      "B": "Identify and assess the security, ethical, and operational business risks associated with the proposal",
      "C": "Reduce stakeholder involvement to accelerate projectplanning and minimize scope changes.",
      "D": "Defer risk assessment activities until the model has beenvalidated against performance benchmarks."
    },
    "correct": "B",
    "correctExplanation": "The AI project team must conduct a risk assessment before development begins. Addressing security, ethical, and operational business risks early ensures that mitigation strategies can be established before these risks affect the solution or the organization.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Proceeding with model development and deferring risk assessment after model validation carries known risks into development without mitigation, increasing the likelihood of harm, compliance failures, and reputational damage."
      },
      {
        "options": [
          "C"
        ],
        "text": "Reducing stakeholder involvement removes key voices needed to identify and assess the full range of risks associated with an automated decision-making system."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q59",
    "question": "An AI project manager has received approval to deploy a maintenance solution. The selected model meets the established performance criteria. Stakeholders want current operations to proceed without disruptions. What should the AI project manager do first?",
    "options": {
      "A": "Request the project sponsor approves a phased rolloutbefore developing a comprehensive deployment plan.",
      "B": "Develop a deployment plan that includes resource requirements, validation criteria, and rollback procedures",
      "C": "Update performance benchmarks, retrain the model, andassign operational responsibilities.",
      "D": "Transfer ownership to operational teams beforeestablishing deployment requirements."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must first develop a deployment plan before any deployment activities begin. Defining resource requirements, validation criteria, and rollback procedures ensures the deployment is structured, risks are managed, and the team has a predefined response if issues arise during release.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Requesting sponsor approval for a phased rollout and transferring ownership to operational teams before establishing deployment requirements proceed without completing the deployment plan that defines how activities will be structured and managed."
      },
      {
        "options": [
          "C"
        ],
        "text": "Updating performance benchmarks, retraining the model, and assigning operational responsibilities introduces unnecessary steps since the model has already met the established performance criteria and received stakeholder approval."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q60",
    "question": "An AI project team is preparing medical images for model training at a healthcare organization. The images contain patient personally identifiable information (PII). What should the AI project team do before model training?",
    "options": {
      "A": "Anonymize the data set",
      "B": "Sign non-disclosure agreements.",
      "C": "Confirm the data volume is sufficient to meet trainingrequirements.",
      "D": "Verify the team has the appropriate system accesspermissions."
    },
    "correct": "A",
    "correctExplanation": "Removing all identifiers from the metadata before model training begins protects patient privacy and ensures the initiative complies with data governance and protection requirements throughout the AI lifecycle.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Signing non-disclosure agreements addresses internal data access governance but does not remove patient identifiers from the data set or protect patient privacy during model training."
      },
      {
        "options": [
          "C",
          "D"
        ],
        "text": "Confirming data volume and verifying system access permissions are valid pre-training activities, but neither addresses the patient PII that must be removed before the data can be used for model training."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q61",
    "question": "An AI project manager has to prepare documentation to support an organization's go/no-go decision for an AI initiative.\n\nWhat should the AI project manager include in their report?",
    "options": {
      "A": "Model performance benchmarks, technical validation results, and quality assurance (QA).",
      "B": "An executive summary of stakeholder meeting notes and communication logs.",
      "C": "Budget estimates and resource allocation plans for the next project phase.",
      "D": "Decision rationale, supporting evidence, identified risks, and compliance considerations."
    },
    "correct": "D",
    "correctExplanation": "Accountability documentation for a go/no-go decision must capture why the decision was made, what evidence supported it, what risks were identified, and whether compliance requirements were met. This creates a comprehensive record that supports transparency, traceability, and regulatory review.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Model performance benchmarks, technical validation results, quality assurance findings, and an executive summary of stakeholder meeting notes are useful project records but do not constitute the structured accountability documentation required to support a go/no-go decision."
      },
      {
        "options": [
          "C"
        ],
        "text": "Budget estimates and resource allocation plans address financial and resource planning rather than the decision rationale and compliance considerations that accountability documentation must capture at a go/no-go decision point."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q62",
    "question": "An AI project manager is developing a deployment plan for a new AI initiative. The plan must account for potential risks that could disrupt the deployment process.\n\nWhat should the AI project manager include in the deployment plan?",
    "options": {
      "A": "The lessons learned from the previous model release.",
      "B": "A detailed deployment timeline.",
      "C": "Contingency actions in case deployment risks are realized.",
      "D": "A rollback plan for failed deployments."
    },
    "correct": "C",
    "correctExplanation": "Contingency planning involves preparing alternate courses of action to address risks that could disrupt the deployment process. Including contingency plans in the deployment plan ensures the team is prepared to respond effectively if issues arise during deployment.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Lessons learned are retrospective inputs used to improve planning; the deployment plan for this scenario should focus on contingency actions for potential risks."
      },
      {
        "options": [
          "B"
        ],
        "text": "A deployment timeline is a general project planning element that does not address AI-specific operational needs of this scenario."
      },
      {
        "options": [
          "D"
        ],
        "text": "A rollback plan defines the steps to return the solution to a prior state after release issues occur. While related to risk management, rollback is a specific recovery procedure rather than a broader contingency plan that covers alternate actions for a range of deployment risks."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q63",
    "question": "An organization is preparing to deploy a newly developed AI solution into production. Multiple technical teams are participating in the implementation effort. What should the AI project manager do?",
    "options": {
      "A": "Coordinate deployment activities and validate production performance.",
      "B": "Delegate implementation activities to the technical teams and monitor remotely.",
      "C": "Conduct a final round of training for optimal performance in the production environment.",
      "D": "Schedule a post-deployment review with all stakeholders to assess performance."
    },
    "correct": "A",
    "correctExplanation": "Active coordination of implementation tasks and validation of live performance ensures a controlled rollout across multiple cross-functional technical teams.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Hands-off remote monitoring removes the project manager from active coordination required during complex multi-team rollouts."
      },
      {
        "options": [
          "C"
        ],
        "text": "Model training is a development activity that should be completed prior to the deployment phase."
      },
      {
        "options": [
          "D"
        ],
        "text": "A post-deployment review occurs after rollout is complete, whereas coordination is required actively during deployment."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q64",
    "question": "An AI project manager is overseeing the testing of a credit risk model. During review, the project team cannot confirm which model version produced the latest validation results, and parameter changes have not been consistently recorded.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Proceed with the version that produced the highest validation score.",
      "B": "Begin user training to avoid delays to the deployment schedule.",
      "C": "Establish configuration practices so model versions are controlled and traceable.",
      "D": "Pause testing and request that the data science team restart the full validation process."
    },
    "correct": "C",
    "correctExplanation": "Establishing configuration practices ensure model versions and changes are controlled and traceable. Without this foundation, the team cannot reliably reproduce results, audit decisions, or confirm the integrity of any validation outputs.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with the version that produced the highest validation score advances testing without resolving the traceability gap, making it impossible to confirm how that result was produced or reproduce it reliably."
      },
      {
        "options": [
          "B"
        ],
        "text": "Beginning user training addresses a later phase activity before the fundamental quality control issue with model versioning has been resolved."
      },
      {
        "options": [
          "D"
        ],
        "text": "Establishing configuration practices first allows the team to resume testing with proper controls in place rather than discarding all prior work."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q65",
    "question": "An AI project manager is reviewing a production issue with a deployed AI solution. Logs reveal that a team member updated the decision algorithm without documentation or approval, causing unexpected results.\n\nWhat should the AI project manager implement to prevent this from recurring?",
    "options": {
      "A": "A peer review process requiring team sign-off before any algorithm changes are made.",
      "B": "A team training session to remind staff of existing documentation expectations.",
      "C": "A post-deployment monitoring dashboard to detect unexpected changes in model outputs.",
      "D": "A model versioning and change control process to manage and document all updates."
    },
    "correct": "D",
    "correctExplanation": "Implementing a model versioning and change control process ensures all updates to the model are tracked, documented, and approved before being applied, preventing unauthorized changes from reaching production.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A peer review process addresses the approval step but does not establish the versioning and documentation framework needed to track what was changed, when, and by whom across the model lifecycle."
      },
      {
        "options": [
          "B"
        ],
        "text": "A team training session to remind staff of existing documentation expectations addresses awareness rather than implementing the governance controls needed to prevent unauthorized changes from occurring."
      },
      {
        "options": [
          "C"
        ],
        "text": "A post-deployment monitoring dashboard detects unexpected changes in model outputs after they have already occurred but does not prevent unauthorized updates from being made in the first place."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q66",
    "question": "An AI project manager is leading a customer support chatbot initiative. During model evaluation, the chatbot must achieve 96% accuracy on both training and validation data before deployment is approved. The model achieved the target on training data but scored significantly lower on validation data.  What should the AI project manager do?",
    "options": {
      "A": "Approve deployment because the model achieved thetarget on training data.",
      "B": "Proceed with a limited rollout and address theperformance gap after release.",
      "C": "Make a no-go decision until the performance gap is resolved.",
      "D": "Adjust the performance target to align with the currentvalidation results."
    },
    "correct": "C",
    "correctExplanation": "When a model achieves the target on training data but scores significantly lower on validation data, it indicates the model has not generalized effectively to unseen data. The AI project manager must make a no-go decision and withhold deployment approval until the performance gap is addressed.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Approving deployment and proceeding with a limited rollout release advances deployment despite a known performance gap and introduces risk into a production environment before the model has met its established success criteria."
      },
      {
        "options": [
          "D"
        ],
        "text": "Adjusting the performance target to align with current validation results lowers the standard to match the model's actual performance rather than addressing the underlying issue, which undermines the integrity of the success criteria established for the initiative."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q67",
    "question": "An AI project manager is planning a new initiative and needs to define data requirements. Stakeholders have different expectations about the data needed, and no one has been identified to provide authoritative guidance on the available data.  What should the AI project manager do first?",
    "options": {
      "A": "Use historical data without validating or consulting subjectmatter experts (SMEs).",
      "B": "Allow the data science team to determine data needsindependently.",
      "C": "Engage stakeholders and SMEs who understand the context and meaning of the required data",
      "D": "Collect all available data and assess its relevance after theinitiative begins."
    },
    "correct": "C",
    "correctExplanation": "Engaging stakeholders and SMEs who understand the context and meaning of the required data ensures that data requirements are defined accurately and aligned to the initiative's objectives.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Using historical data without validating or consulting SMES and collecting all available data without assessing relevance upfront, bypasses the critical step of identifying who has the knowledge needed to guide data requirements, risking the use of irrelevant or unsuitable data."
      },
      {
        "options": [
          "B"
        ],
        "text": "Allowing the data science team to determine data needs independently excludes the business users and domain experts who understand the context and meaning of the data, which can result in technically sound but business-misaligned data requirements."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q68",
    "question": "An AI project manager is developing the scope statement for a new AI initiative at a technology company. The project sponsor wants to ensure the scope is clearly defined before development begins.  What should the AI project manager include in the scope statement?",
    "options": {
      "A": "Potential failure modes, ethical concerns, and mitigationstrategies.",
      "B": "Reporting frequency, stakeholder roles, and escalationprocedures.",
      "C": "Team members, hardware requirements, and budgetallocations.",
      "D": "Project boundaries, expected outcomes, assumptions, and constraints"
    },
    "correct": "D",
    "correctExplanation": "A scope statement for an AI initiative must ensure all stakeholders have a shared understanding of the initiative's boundaries, expected outcomes, assumptions, and constraints before development begins.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Team members, hardware requirements, and budget allocations are resource planning components that belong in a resource management plan."
      },
      {
        "options": [
          "A"
        ],
        "text": "Potential failure modes, ethical concerns, and mitigation strategies are risk assessment components that belong in a risk register."
      },
      {
        "options": [
          "B"
        ],
        "text": "Reporting frequency, stakeholder roles, and escalation procedures are communication planning components that belong in a stakeholder communication plan."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q69",
    "question": "An AI project manager is overseeing a deployed fraud detection system at a bank. During a post-deployment review, the operations team discovers that no formal escalation path exists for critical system failures. What should the AI project manager do?",
    "options": {
      "A": "Establish a verbal agreement between the operationsteam and the project sponsor on how failures will behandled.",
      "B": "Develop a structured procedure for reporting, routing, andresolving operational incidents.",
      "C": "Configure an email notification system that alerts the AIproject manager when the system goes offline.",
      "D": "Develop a structured procedure for triaging, routing, and resolving operational incidents. Developing a structure"
    },
    "correct": "D",
    "correctExplanation": "d procedure that defines how incidents are triaged, routed, and resolved ensures the organization has a formal and repeatable process for managing failures before the next operational cycle begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Establishing a verbal agreement and configuring an email notification system both address the gap informally without providing the structured and documented procedure needed to ensure consistent incident management across the organization."
      },
      {
        "options": [
          "B",
          "C"
        ],
        "text": "Scheduling a weekly review meeting where the team discusses, logs, and tracks system issues creates a reactive monitoring process but does not establish the formal escalation path needed to triage and resolve critical failures in a timely and structured manner."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q70",
    "question": "An AI project manager is leading a healthcare initiative to implement a new AI solution that recommends treatment options. Physicians have raised concerns about the potential consequences of incorrect recommendations. However, the sponsor believes these concerns should be addressed after deployment.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Prioritize rapid deployment to capture expected gains sooner.",
      "B": "Limit the risk review to cybersecurity and infrastructure concerns.",
      "C": "Evaluate the safety, ethical, and operational risks before proceeding.",
      "D": "Conduct a limited pilot before deployment to observe if potential risks materialize."
    },
    "correct": "C",
    "correctExplanation": "Incorrect treatment recommendations can directly affect patient safety, clinical decision-making, trust, compliance, and organizational liability. An AI project manager should not defer these concerns until after deployment. Responsible AI governance requires assessing risks such as harm, bias, explainability, accountability, workflow impact, and oversight needs before moving forward. Because this solution influences treatment options, pre-deployment evaluation is the most appropriate action.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Speed does not outweigh patient safety and responsible AI governance. Deploying first and addressing serious concerns later exposes patients and the organization to unnecessary risk."
      },
      {
        "options": [
          "B"
        ],
        "text": "Healthcare AI risk extends well beyond technical security and system performance, so it is not appropriate to limit the risk review to cybersecurity and infrastructure concerns. The main issue here is whether the recommendations could cause harm, create bias, or disrupt clinical operations."
      },
      {
        "options": [
          "D"
        ],
        "text": "A pilot can be useful, but it should come after an upfront risk evaluation, not instead of it. The project manager should first assess known safety, ethical, and operational risks before exposing even a limited patient population or clinical workflow to them."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q71",
    "question": "An AI project team has completed initial model training for a classification initiative. The team is now ready to move to the next stage of model development.  What should the AI project team do next?",
    "options": {
      "A": "Verify the generalization performance of the model againstunseen data.",
      "B": "Tune hyperparameters using the validation data set",
      "C": "Develop a comprehensive deployment strategy.",
      "D": "Measure data drift and concept drift in the productionenvironment."
    },
    "correct": "B",
    "correctExplanation": "After completing initial model training, the immediate next step is to tune the model's hyperparameters using the validation data set. This optimization process adjusts the model's configuration to improve performance before the model is evaluated against unseen data.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Verifying the model's generalization performance against unseen data is a subsequent step that follows hyperparameter tuning, not the immediate next step after initial training."
      },
      {
        "options": [
          "C"
        ],
        "text": "Developing a deployment strategy is a planning activity that occurs after the model has been fully trained, tuned, and validated, making it premature at this stage."
      },
      {
        "options": [
          "D"
        ],
        "text": "Measuring data drift and concept drift applies to models already deployed in a production environment, which is not the stage described in the scenario."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q72",
    "question": "A data science team has completed adjustments on a data set for an AI initiative. The AI project manager has to make a go/no-go decision before conducting data preparation.\n\nWhat should the AI project manager confirm?",
    "options": {
      "A": "The findings and quality assessments of the data set.",
      "B": "The data flow and access permissions of the data set.",
      "C": "The testing scenarios and final outputs.",
      "D": "The identified gaps and the mitigation steps."
    },
    "correct": "A",
    "correctExplanation": "Before approving a go/no-go decision the AI project manager should confirm that the findings and final quality assessments have been documented. This provides the evidence needed to verify the data set meets the required standards before the team proceeds to the next phase.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "The data flow and access permissions for the data set address governance and security concerns rather than the quality evidence needed to support a go/no-go decision on data preparation."
      },
      {
        "options": [
          "C"
        ],
        "text": "The testing scenarios and outputs without further analysis provide raw information without the evaluative conclusions needed to confirm whether the data set is ready."
      },
      {
        "options": [
          "D"
        ],
        "text": "The identified gaps and the mitigation steps describes a narrower documentation focus on issue resolution rather than the comprehensive testing findings and quality assessment needed to support the overall go/no-go decision."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q73",
    "question": "An AI-powered customer support solution has been deployed. During a performance review, stakeholders request that the operations team demonstrates the solution continues to deliver business value and that model performance remains within acceptable thresholds.  What should the operations team do?",
    "options": {
      "A": "Schedule a model retraining initiative before reviewing anyoperational results.",
      "B": "Report technical model metrics to the data science teamfor internal review.",
      "C": "Prepare a lessons learned report and postponeperformance reviews until the next project phase.",
      "D": "Track key performance indicators (KPIs) against defined success criteria and report outcomes"
    },
    "correct": "D",
    "correctExplanation": "Tracking key performance indicators (KPIs) against the defined success criteria and reporting the outcomes gives stakeholders the structured evidence needed to assess whether the solution is performing as expected.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Scheduling a model retraining initiative before reviewing operational results and reporting technical metrics to the data science team address model maintenance or internal review rather than fulfilling the stakeholder request for evidence."
      },
      {
        "options": [
          "C"
        ],
        "text": "Preparing a lessons learned report and postponing performance reviews until the next project phase defers the performance evidence that stakeholders have specifically requested."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q74",
    "question": "An AI project manager is planning an AI solution to predict equipment failures across multiple production facilities at a manufacturing company. The initiative requires a broad range of technical and operational capabilities that the current project team may not fully cover.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Assess the skill and resources needed to deliver the initiative.",
      "B": "Delay resource planning until model development begins.",
      "C": "Outsource all technical activities to external vendors.",
      "D": "Assign project roles after deployment planning is complete."
    },
    "correct": "A",
    "correctExplanation": "Assessing the skills and resources needed to deliver the initiative ensures gaps are identified early so the right people, tools, and infrastructure can be secured before development begins.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "D"
        ],
        "text": "Delaying resource planning until model development begins and assigning project roles after deployment planning is complete defers critical resource decisions to later stages, risking gaps in capability and accountability when they are most needed."
      },
      {
        "options": [
          "C"
        ],
        "text": "Outsourcing all technical activities to external vendors assumes the full solution should be externally resourced without first assessing what capabilities already exist internally and where specific gaps actually require external support."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q75",
    "question": "A data science team reports that historical candidate records from recruitment are missing rubric scores, assessor comments, and contextual metadata. What should the AI project manager communicate to non-technical leadership?",
    "options": {
      "A": "Missing data fields can result in reduced signal quality, increased noise, and bias risk.",
      "B": "Incomplete evidence can undermine confidence in the fairness of the process.",
      "C": "Resolving record gaps can delay model preparation and affect the planned timeline.",
      "D": "Inputs from multiple sources can lead to handoff issues and inconsistencies in operational execution."
    },
    "correct": "B",
    "correctExplanation": "Leadership needs business language, not technical jargon. Framing missing data as a fairness risk connects directly to outcomes leadership cares about \u2014 candidate trust, potential legal exposure, and organisational credibility in the recruitment process.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "'Signal quality', 'noise', and 'bias risk' are technical terms that don't land meaningfully for a non-technical executive audience and won't drive the right response."
      },
      {
        "options": [
          "C"
        ],
        "text": "Timeline impact is a valid concern, but it focuses on schedule rather than the substantive business ethics and fairness risk that leadership needs to understand and act on."
      },
      {
        "options": [
          "D"
        ],
        "text": "Handoff and operational consistency issues are process concerns, not the business-level fairness risk that should be driving leadership's decision-making."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q76",
    "question": "An AI project manager is leading an initiative where data is spread across multiple digital storage environments. The project team needs to identify where the relevant data is stored before selection begins.\n\nWhat should the AI project manager do first?",
    "options": {
      "A": "Assess the available cloud storage and distributed repositories.",
      "B": "Select the machine learning (ML) model suited to the business problem.",
      "C": "Clean and deduplicate the source records before confirming storage locations.",
      "D": "Engage the data governance team to establish data usage policies."
    },
    "correct": "A",
    "correctExplanation": "When data is spread across multiple digital storage environments, the project manager must first assess the available cloud storage and distributed repositories to identify where the relevant data resides. This foundational step ensures the team knows where to access the data before selection begins.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Selecting a ML model is premature before the data sources have been identified and assessed."
      },
      {
        "options": [
          "C"
        ],
        "text": "Cleaning and deduplicating source records addresses data quality rather than identifying where the data is stored."
      },
      {
        "options": [
          "D"
        ],
        "text": "Engaging the data governance team to establish usage policies is a compliance activity that follows data source identification."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q77",
    "question": "An AI project manager is preparing to roll out a new AI solution at a financial services company. The project sponsor is concerned that staff may resist adopting the AI solution if it disrupts their existing work patterns.\n\nWhat should the AI project manager do to support adoption?",
    "options": {
      "A": "Retrain the model using additional data to improve output accuracy.",
      "B": "Reduce the solution's feature set to simplify the user experience.",
      "C": "Identify and address barriers related to systems and workflows.",
      "D": "Expand the project scope to include additional business use cases."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must identify and address specific barriers that could prevent engagement with the new solution. Compatibility with existing systems and workflows is a primary adoption barrier that must be understood and resolved for effective change management.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Retraining the model and reducing the solution's feature set address technical and design concerns that do not directly resolve the workflow compatibility barriers driving staff resistance."
      },
      {
        "options": [
          "D"
        ],
        "text": "Expanding the project scope introduces additional complexity that is likely to increase resistance rather than support adoption."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q78",
    "question": "A data scientist is setting up the model training environment for a new AI initiative. The AI project manager wants to ensure the infrastructure supports both initial training and future retraining needs.  What should the data scientist establish?",
    "options": {
      "A": "A single pipeline to simplify the model developmentprocess.",
      "B": "Multiple pipelines to support iterative model development cycles",
      "C": "A data collection plan to ensure sufficient training data isavailable.",
      "D": "Multiple data collection pipelines to ensure sufficient datais available."
    },
    "correct": "B",
    "correctExplanation": "AI Models require continuous refinement and updating over time. Establishing multiple pipelines allows the team to support both the initial model development and subsequent iterations as the project evolves.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A single pipeline is insufficient to handle the ongoing development needs of an AI initiative."
      },
      {
        "options": [
          "D"
        ],
        "text": "Multiple data collection pipelines do not provide the model development infrastructure needed to support ongoing iterations."
      },
      {
        "options": [
          "C"
        ],
        "text": "A model evaluation framework addresses only one aspect of the development process and does not provide the infrastructure needed to support iterative development cycles."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q79",
    "question": "An AI project team is developing an AI model. The project manager needs to oversee model quality assurance (QA) to ensure the model is developed and validated in a controlled way. What should the project manager do?",
    "options": {
      "A": "Establish testing protocols and implement standardized governance for model versions, parameters, and coding standards",
      "B": "Evaluate performance against established success criteriato verify model documentation.",
      "C": "Monitor training progress and coordinate training dataversioning and experiment tracking.",
      "D": "Research similar available algorithms and evaluate trade-offs between model complexity, performance, andinterpretability."
    },
    "correct": "A",
    "correctExplanation": "The project manager should establish model testing protocols and QA procedures, implement configuration management for model versions and parameters, and ensure adherence to coding standards and best practices. These activities ensure the model is developed and validated in a controlled way throughout the development process.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Evaluating performance is an operationalization go/no-go activity associated with assessing model readiness for deployment."
      },
      {
        "options": [
          "C"
        ],
        "text": "Monitoring training progress, coordinating training data versioning, and experiment tracking describe model training management activities."
      },
      {
        "options": [
          "D"
        ],
        "text": "Researching algorithms to evaluate trade-offs describes algorithm selection activities associated with overseeing model techniques."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q80",
    "question": "An AI project manager has been assigned to lead an AI initiative to improve a mortgage bank's home appraisal process. Stakeholders have proposed different AI use cases.  What should the AI project manager do?",
    "options": {
      "A": "Begin model development using the current appraisalprocess.",
      "B": "Facilitate the creation of AI-related epics and user stories.",
      "C": "Conduct stakeholder interviews to understand business pain points",
      "D": "Schedule a kickoff meeting to align the team on theapproach."
    },
    "correct": "C",
    "correctExplanation": "When multiple AI use cases have been proposed but no clear business problem has been defined, the AI project manager must first conduct stakeholder interviews to understand the underlying business pain points. This ensures the initiative is grounded in a real organizational need before any planning, model selection, or development activities begin.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Using the existing appraisal process and scheduling a kickoff meeting to align the team on the approach, proceed without first establishing a clear understanding of the business problem, risking misalignment between the initiative and actual stakeholder needs."
      },
      {
        "options": [
          "B"
        ],
        "text": "Without first conducting stakeholder interviews, the team cannot develop meaningful epics and user stories that reflect the actual needs of the initiative."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q81",
    "question": "An AI project manager is leading a predictive maintenance initiative across multiple manufacturing sites. The AI project team has strong business knowledge but limited machine learning (ML) expertise, and the current infrastructure cannot support model training workloads.  What should the AI project manager do?",
    "options": {
      "A": "Delay resource planning until model development activitiesbegin.",
      "B": "Reduce the project scope to match the capabilities of theexisting team.",
      "C": "Start data collection activities and address resource gapsat a later phase.",
      "D": "Assess the skills gap and technical requirements beforedevelopment begins."
    },
    "correct": "D",
    "correctExplanation": "gaps and technical requirements before development begins. Assessing the skill gaps and technical requirements before development begins ensures the initiative has the people and resources needed to proceed before gaps affect delivery.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Delaying resource planning until model development and beginning data collection leaves known capability gaps unresolved, increasing the risk of delays and budget overruns when those gaps become critical."
      },
      {
        "options": [
          "B"
        ],
        "text": "Reducing project scope to match existing team capabilities addresses the symptom rather than identifying and filling the gaps needed to deliver the initiative as approved."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q82",
    "question": "An AI project manager is leading an AI initiative to predict equipment failure across several plants at a manufacturing company. The team must determine how frequently sensor readings should be collected and over what time span historical data should be gathered. What should the AI project manager define?",
    "options": {
      "A": "The stakeholder communication plan for the initiative.",
      "B": "The temporal and granularity requirements for the data.",
      "C": "The model evaluation metrics for the initiative.",
      "D": "The deployment infrastructure requirements."
    },
    "correct": "B",
    "correctExplanation": "Defining temporal and granularity requirements ensures data collection reflects appropriate time intervals and historical depth needed for effective predictive maintenance.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Communication plans handle reporting rather than data frequency."
      },
      {
        "options": [
          "C"
        ],
        "text": "Evaluation metrics measure model outputs after data collection."
      },
      {
        "options": [
          "D"
        ],
        "text": "Infrastructure requirements focus on production deployment environments, which comes later."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q83",
    "question": "An AI project manager is overseeing a customer churn prediction initiative at a telecommunications company. The model achieves strong results during initial training, but the team has not yet confirmed whether performance holds across different customer segments and time periods.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Approve deployment based on the initial training results.",
      "B": "Conduct cross-validation testing across different segments and time periods.",
      "C": "Retrain the model using only the most recent customer data.",
      "D": "Limit testing to the customer segment with the strongest initial results."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must conduct cross-validation testing before any deployment decision is made. This ensures the model's performance is reliable across the full range of conditions it will encounter in production, not just the conditions reflected in the initial training results.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Approving deployment based on the initial training results risks deploying a model that has not been confirmed to generalize beyond the specific conditions of its initial training."
      },
      {
        "options": [
          "C"
        ],
        "text": "Retraining the model using only the most recent customer data does not address the need to validate performance across different segments and time periods, and may introduce new gaps if other segments are excluded."
      },
      {
        "options": [
          "D"
        ],
        "text": "Limiting testing to the customer segment with the strongest initial results avoids confirming whether the model performs reliably across the full customer population, leaving unknown risks in other segments."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q84",
    "question": "An AI project manager has gathered business requirements and validated the success criteria for a new AI initiative. The project team is ready to move to the next phase of the project.   What should the AI project manager do next?",
    "options": {
      "A": "Conduct a stakeholder meeting to validate projectassumptions.",
      "B": "Implement an AI model that addresses the identifiedbusiness requirements.",
      "C": "Document the business requirements and success criteriain the project charter.",
      "D": "Collaborate with the project team to develop an AI solution concept"
    },
    "correct": "D",
    "correctExplanation": "Once business requirements have been gathered and success criteria validated, the logical next step is for the AI project manager to collaborate with the project team to develop an AI solution concept. This initial concept outlines how an AI-based approach will address the business requirements and meet the defined success criteria, and serves as the foundation for further development and stakeholder review.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Conducting a stakeholder meeting to validate assumptions and documenting the business requirements and success criteria in the project charter are activities that should have been completed before reaching this stage."
      },
      {
        "options": [
          "B"
        ],
        "text": "Implementing an AI model jumps ahead in the project lifecycle."
      },
      {
        "options": [
          "A"
        ],
        "text": "The team has not evaluated which AI approach best fits the business requirements, making implementation premature at this stage."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q85",
    "question": "An AI project manager is leading an AI initiative at a transportation company. The team has collected data and needs to confirm it can support the planned solution before development proceeds. What should the AI project manager do?",
    "options": {
      "A": "Proceed with model development since data collection has been completed.",
      "B": "Compare the collected data against the defined requirements.",
      "C": "Defer the data assessment until after the model has been trained and tested.",
      "D": "Select a deployment strategy in parallel with data evaluation activities."
    },
    "correct": "B",
    "correctExplanation": "Comparing the collected data against the defined requirements to confirm it can support the planned solution identifies whether the data is sufficient and representative of what the initiative needs before any further development activity begins.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Proceeding with model development assumes that completing collection is the same as confirming sufficiency, which skips the necessary comparison against requirements."
      },
      {
        "options": [
          "C"
        ],
        "text": "Deferring data assessment reverses the correct sequence, allowing investment in development before confirming the data can support the solution."
      },
      {
        "options": [
          "D"
        ],
        "text": "Selecting a deployment strategy in parallel is premature since deployment planning depends on first confirming that the data meets requirements."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q86",
    "question": "An AI project team has accumulated a large volume of data across multiple collection cycles. The team is preparing for the next development iteration and engages a data scientist to determine how to handle the data. What should the data scientist do?",
    "options": {
      "A": "Reduce the data volume randomly to improve processingspeed.",
      "B": "Increase storage capacity to accommodate theaccumulated data.",
      "C": "Collect additional data to improve model performance.",
      "D": "Evaluate and prioritize data based on quality and relevance"
    },
    "correct": "D",
    "correctExplanation": "When preparing for a new development iteration, the data scientist must first assess the accumulated data to determine what is useful, relevant, and of sufficient quality to support model development.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Reducing data volume randomly and collecting additional data are ineffective approaches that ignore data quality and relevance, which are the critical factors when preparing for a new iteration."
      },
      {
        "options": [
          "B"
        ],
        "text": "Increasing storage capacity addresses infrastructure concerns but does not help the team determine which data is worth using in the next iteration."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q87",
    "question": "An AI project manager is leading an AI initiative for a financial services company. During development, the compliance team identifies a new industry policy that requires additional documentation and periodic assessment before the AI solution can be released.  What should the AI project manager do?",
    "options": {
      "A": "Proceed with development because the original projectscope was already approved.",
      "B": "Have the project team improve performance metricsbefore reviewing the new requirements.",
      "C": "Remove sensitive data from the training set and proceedwith the current release schedule.",
      "D": "Collaborate with legal and compliance teams to address the new requirements"
    },
    "correct": "D",
    "correctExplanation": "The AI project manager must engage with legal and compliance teams to ensure the initiative meets the updated requirements before proceeding. Addressing compliance obligations proactively protects the organization from regulatory risk and ensures the solution can be released in accordance with current policy.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Proceeding with development and having the project team improve performance metrics before reviewing the new requirements defers or avoids the compliance response that is required when a new policy is identified during development."
      },
      {
        "options": [
          "C"
        ],
        "text": "Removing sensitive data from the training set addresses a data governance concern that is unrelated to the documentation and periodic assessment obligations introduced by the new policy."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q88",
    "question": "A data scientist on an AI project team detects potential bias in the training data during the project's development phase.  What should the data scientist do first?",
    "options": {
      "A": "Implement bias detection metrics and monitoring systemsacross the data pipeline.",
      "B": "Analyze the training data to identify demographic bias and representation imbalances",
      "C": "Apply bias mitigation techniques to address representationgaps in the training data.",
      "D": "Perform fairness testing across different population groupsto measure bias impact."
    },
    "correct": "B",
    "correctExplanation": "When potential bias is detected in training data, the data scientist must first analyze the training data to identify the specific nature and source of the bias. Bias must be identified and understood before it can be measured, mitigated, or monitored.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C",
          "D"
        ],
        "text": "Implementing bias detection metrics and monitoring systems, applying bias mitigation techniques, and performing fairness testing across population groups are all activities that follow initial identification and analysis of bias issues and cannot be executed without understanding the specific bias present in the data."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q89",
    "question": "An AI project manager is reviewing a proposal to automate insurance claim requests. The project team has not confirmed if the available data, computing capacity, or organizational readiness can support an AI solution. Several stakeholders want to implement the solution without evaluating alternatives.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Approve the AI concept for pilot development.",
      "B": "Assess the data, technical, and organizational feasibility of the approach.",
      "C": "Expand the use case to include insurance fraud detection.",
      "D": "Select the model architecture before completing the feasibility assessment."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must assess the data, technical, and organizational feasibility of the proposed approach before proceeding. This ensures the initiative is viable and that AI is the appropriate solution rather than a default assumption driven by stakeholder enthusiasm.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Approving the AI concept for pilot development and selecting the model architecture before completing the feasibility assessment commits to a technical direction without first confirming whether the data, infrastructure, and organizational conditions can support it."
      },
      {
        "options": [
          "C"
        ],
        "text": "Expanding the use case to include insurance fraud detection increases scope and complexity without first confirming that the original proposal is feasible, which compounds the risk of proceeding without proper evaluation."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q90",
    "question": "An AI project team discovers a high volume of false positives during a simulation exercise for a newly deployed fraud detection system. The risk mitigation strategy for this type of breakdown has not been tested.\n\nWhat should the AI project team do next?",
    "options": {
      "A": "Validate the contingency procedures against the identified failure scenario.",
      "B": "Document the gap in the risk register and identify a response plan.",
      "C": "Continue following the existing procedures until a formal review is scheduled.",
      "D": "Escalate the issue to the project sponsor and request additional resources."
    },
    "correct": "A",
    "correctExplanation": "Contingency procedures that have not been validated cannot be relied upon during an actual AI system failure. Testing and validating the procedures ensures they are effective before a real incident occurs.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "C"
        ],
        "text": "Documenting the gap in the risk register and continuing to operate under existing procedures both defer action without confirming whether the procedures work under actual failure conditions."
      },
      {
        "options": [
          "D"
        ],
        "text": "Escalating to the project sponsor is premature before the team validates the contingency procedures."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q91",
    "question": "A project to develop an AI-based fraud detection system for a community bank is underway. Before development, the AI project team used available data from larger commercial banks. The model performed well during training and testing but failed during validation.  What should the AI project team have done before development started?",
    "options": {
      "A": "Verify that the available data from larger commercial bankswas accurate and complete.",
      "B": "Evaluate whether buying an existing fraud detectionproduct would be better than building one in-house.",
      "C": "Increase the amount of training data so the modelperforms better in real-world validation.",
      "D": "Determine the data requirements for the AI model based on the target use case and business context"
    },
    "correct": "D",
    "correctExplanation": "The team should have defined the data requirements based on the specific context of a community bank, rather than on data available from larger commercial banks. Data requirements must be mapped to the target use case and business context to ensure the model is trained on data that reflects the environment in which it will operate.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Verifying that the available data from larger commercial banks was accurate and complete addresses data quality, but not data relevance."
      },
      {
        "options": [
          "B"
        ],
        "text": "Evaluating whether to buy an existing product rather than build one addresses a strategic sourcing decision that is unrelated to the data requirements gap identified in the scenario."
      },
      {
        "options": [
          "C"
        ],
        "text": "Increasing the amount of training data addresses data volume but not the misalignment between the data used and the target use case, which was the root cause of the validation failure. Even accurate and complete data from another business context may not meet the requirements of a community bank's fraud detection model."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q92",
    "question": "An AI project manager is overseeing the development of a loan approval solution. During a stakeholder review, business leaders raise concerns about the rationale behind the training data and model selection decisions. What should the AI project manager do?",
    "options": {
      "A": "Increase the amount of training data used by the model toimprove stakeholder confidence.",
      "B": "Create transparent records of data selection criteria and model selection rationale",
      "C": "Delay stakeholder communications until model evaluationactivities are completed.",
      "D": "Improve model performance before addressingstakeholder concerns about transparency."
    },
    "correct": "B",
    "correctExplanation": "The AI project manager must create transparent records that document how these decisions were made. This fulfills the transparency requirement that enables stakeholders to understand and trust how the AI solution was built.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Increasing training data volume and improving model performance address technical concerns rather than the transparency gap that stakeholders have specifically raised during the review."
      },
      {
        "options": [
          "C"
        ],
        "text": "Delaying stakeholder communications until model evaluation is complete withholds information that stakeholders need now and does not address the transparency concern that has already been identified."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q93",
    "question": "An AI project manager is leading a customer churn prediction initiative at a telecommunications company. The team has identified more than twenty possible data sources, but gathering all of them would significantly increase costs and require additional privacy reviews.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Gather all available data sources regardless of cost or privacy implications.",
      "B": "Collect the data sources that directly support the defined project objectives.",
      "C": "Limit the data selection process to prioritize only cost-effective sources.",
      "D": "Begin training with the data sources currently available and add more later."
    },
    "correct": "B",
    "correctExplanation": "Collecting only the data sources that directly support the defined project objectives ensures data is purposeful and aligned with the initiative's scope rather than driven by the assumption that more data automatically produces better results.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Gathering all available data sources regardless of cost or privacy implications ignores the financial and governance constraints identified and does not differentiate between data that supports the objective and data that does not."
      },
      {
        "options": [
          "C"
        ],
        "text": "Limiting the data selection process to prioritize only cost-effective sources focuses only on the financial implications rather than driven by the business objectives."
      },
      {
        "options": [
          "D"
        ],
        "text": "Beginning model training with currently available data proceeds without a deliberate data collection strategy, risking gaps or misalignment between the data and the initiative's objectives."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q94",
    "question": "An AI chatbot project has the potential to cut costs by 40%, but requires an expensive large language model (LLM) license and high computational resources. The project sponsor wants the AI project manager to confirm if the return on investment (ROI) will be positive.  What should the AI project manager do?",
    "options": {
      "A": "Create a cost-benefit analysis",
      "B": "Develop a risk mitigation plan.",
      "C": "Conduct a feasibility assessment.",
      "D": "Prepare a business case narrative."
    },
    "correct": "A",
    "correctExplanation": "A cost-benefit analysis calculates expected benefits from the AI solution, estimates the total cost of ownership, including infrastructure and licensing, and provides the financial data needed to define business impact metrics and validate success thresholds. In this scenario, a cost-benefit analysis will answer the sponsor's questions about the ROI remaining positive regardless of the high costs associated with the initiative.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "C",
          "D"
        ],
        "text": "A risk mitigation plan, feasibility assessment, and business case narrative focus on risk, feasibility, and overall justification, but they do not directly answer whether the initiative's ROI will remain positive."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q95",
    "question": "An AI project manager is leading an AI initiative at a financial services company. The project team disoveres that the company's data is scattered across outdated systems with missing records and inconsistent formatting. What should the AI project manager do first?",
    "options": {
      "A": "Proceed to model development with the available data toavoid delays.",
      "B": "Assess the data quality and availability issues across the existing systems",
      "C": "Engage the IT team to migrate all data into a new storagesystem immediately.",
      "D": "Request additional data from external sources tosupplement the existing gaps."
    },
    "correct": "B",
    "correctExplanation": "When data is scattered across outdated systems with missing records and inconsistent formatting, the project manager must first assess the extent of the quality and availability issues before any other action can be taken.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Proceeding to model development and requesting additional external data are premature actions that bypass the necessary assessment of existing data quality and availability issues."
      },
      {
        "options": [
          "C"
        ],
        "text": "Engaging the IT team to migrate all data into a new storage system addresses infrastructure concerns but does not resolve the underlying quality and availability issues."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q96",
    "question": "An AI project manager conducted a retrospective after piloting an AI tutoring assistant for an online class. Instructors reported that some learners used the tutor to obtain direct answers to graded assignments, raising academic integrity concerns. What lesson learned should the AI project manager document?",
    "options": {
      "A": "Academic integrity should be considered during future implementations.",
      "B": "The development team failed to anticipate how learners would misuse the tutor.",
      "C": "Academic integrity boundaries must be built into AI tutor behavior from the outset.",
      "D": "The model should be fine tuned to provide less specific responses."
    },
    "correct": "C",
    "correctExplanation": "Proactively incorporating domain guardrails into fundamental system behavior prevents academic integrity breaches prior to deployment.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Vague statements fail to offer actionable direction for future builds."
      },
      {
        "options": [
          "B"
        ],
        "text": "Assigning blame avoids constructive process improvement."
      },
      {
        "options": [
          "D"
        ],
        "text": "Applying narrow technical tuning misses structural safeguards needed in design phases."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q97",
    "question": "An AI project manager is managing a team that operates across multiple regions with differing regulatory requirements. The project documentation does not reflect the various compliance requirements and there is an upcoming audit at the end of this quarter. What should the AI project manager do next?",
    "options": {
      "A": "Standardize compliance practices based on one region'sapproach.",
      "B": "Prioritize technical and physical delivery and rely onauditors to identify compliance gaps during reviews.",
      "C": "Track regulatory updates and collaborate with relevant stakeholders to maintain audit-ready documentation",
      "D": "Update compliance artifacts only when an audit explicitlyrequests them."
    },
    "correct": "C",
    "correctExplanation": "The project manager should track regulatory updates and collaborate with relevant stakeholders to ensure documentation is audit-ready by addressing the compliance gap before the audit occurs.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Standardizing based on one region's approach ignores the differing regulatory requirements across regions."
      },
      {
        "options": [
          "B"
        ],
        "text": "Prioritizing technical delivery and relying on auditors to identify gaps is reactive and does not address the known documentation gap."
      },
      {
        "options": [
          "D"
        ],
        "text": "Updating compliance artifacts only when explicitly requested by auditors fails to maintain the ongoing compliance monitoring required by the task."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q98",
    "question": "An AI project team is developing an AI model for predictive maintenance. Historical data is available from different regions but uses inconsistent date and time formats. The project manager must ensure the data meets the model training requirements.  What should the AI project manager do first?",
    "options": {
      "A": "Standardize inconsistent data formats across regionalsources.",
      "B": "Compare data against defined specifications to identify deficiencies",
      "C": "Collect additional data from sources with incompleterecords.",
      "D": "Evaluate computational needs to configure data storageinfrastructure."
    },
    "correct": "B",
    "correctExplanation": "When historical data from different regions uses inconsistent formats, the project manager must first compare the available data against defined requirements and specifications. This is the foundation to determine if the data meets solution needs before any preparation or collection activities take place.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Standardizing inconsistent data formats describes a data preparation activity that occurs after data readiness has been confirmed."
      },
      {
        "options": [
          "C"
        ],
        "text": "Collecting additional historical data from sources with incomplete records describes a data-gathering activity associated with executing data collection processes."
      },
      {
        "options": [
          "D"
        ],
        "text": "Evaluating computational needs to configure data storage infrastructure describes a workspace and infrastructure activity unrelated to assessing whether data meets model training requirements."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q99",
    "question": "A data scientist is preparing data for an AI model development initiative. Before model development begins, the data scientist must confirm whether the available data is sufficient for the selected modeling approach.\n\nWhat should the data scientist assess?",
    "options": {
      "A": "The data sources selected for inclusion in the model training pipeline.",
      "B": "The preprocessing steps applied to improve data quality before training.",
      "C": "The accuracy and consistency of values across the available dataset.",
      "D": "The volume of available data relative to the model's requirements."
    },
    "correct": "D",
    "correctExplanation": "The data scientist must assess whether the amount of available data is sufficient for the selected modeling approach. Different models require different volumes of data to learn effectively, and if the dataset is too small, the model may not perform reliably or generalize well. For that reason, evaluating whether the available data volume matches the needs of the chosen model is a critical step before moving further into development.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "The data sources selected for inclusion focus on where the data comes from, not whether there is enough of it to support the modeling approach. Source selection is important for relevance and coverage, but it does not by itself determine whether the dataset is large enough for the model to produce dependable results."
      },
      {
        "options": [
          "B"
        ],
        "text": "Processing concerns how the data is cleaned, transformed, or prepared for use. These steps can improve usability and consistency, but they do not answer the key question of whether the total volume of data is sufficient for the selected model."
      },
      {
        "options": [
          "C"
        ],
        "text": "The accuracy and consistency of values are data quality dimensions, not measures of data sufficiency. A dataset may be accurate and consistent but still be too small to support the model effectively."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q100",
    "question": "An AI project manager is supporting an initiative for a financial services company. The project sponsor wants clarification on how the organization will know if the solution is achieving its intended outcomes. What should the AI project manager do?",
    "options": {
      "A": "Establish measurable business and technical performance indicators.",
      "B": "Measure success by whether the project meets the original deadline.",
      "C": "Define success criteria after deployment once initial results are available.",
      "D": "Measure success using the complexity of the model architecture."
    },
    "correct": "A",
    "correctExplanation": "Establishing measurable business and technical performance indicators provides an objective framework to verify whether the solution fulfills its intended goals and technical constraints.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Meeting project deadlines measures schedule adherence rather than the quality or business impact of the actual solution."
      },
      {
        "options": [
          "C"
        ],
        "text": "Success criteria must be established upfront so the team has clear baselines prior to launching the system."
      },
      {
        "options": [
          "D"
        ],
        "text": "Model architectural complexity is a technical design attribute rather than an indicator of real-world business performance."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q101",
    "question": "A project manager is preparing an AI initiative to automate the classification of supplier invoices. Stakeholders are requesting fraud detection, payment approval, vendor scoring, and contract analysis. However, the budget and data only support invoice classification during the first release. What should the project manager do?",
    "options": {
      "A": "Include all requested capabilities in the first release to meet stakeholder expectations.",
      "B": "Define the project's boundaries, deliverables, and assumptions aligned with the business objective.",
      "C": "Ask the technical team to select the model architecture before confirming the project deliverables.",
      "D": "Start development with invoice classification and add the remaining features during testing."
    },
    "correct": "B",
    "correctExplanation": "Establishing a clear, documented scope before development begins bridges the gap between stakeholder requests and what the budget and available data can realistically support.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Including all requested features disregards identified budget and data constraints, leading to project failure or overrun."
      },
      {
        "options": [
          "C"
        ],
        "text": "Selecting model architecture before confirming deliverables puts technical decisions ahead of scope definition."
      },
      {
        "options": [
          "D"
        ],
        "text": "Adding features informally during testing leads to scope creep rather than controlled, baseline scope management."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q102",
    "question": "A project manager has been asked to lead a new AI initiative at a logistics company. Before any development begins, the project sponsor wants assurance that the proposed AI approach is suitable for the business problem and available data.  What should the AI project manager do?",
    "options": {
      "A": "Begin development using the available data and assessfeasibility after initial results.",
      "B": "Select the most advanced AI technique available tomaximize the solution's capabilities.",
      "C": "Use an AI approach that was successfully implemented ina previous project.",
      "D": "Assess whether the proposed approach is technically viable and supported by available data"
    },
    "correct": "D",
    "correctExplanation": "The AI project manager must assess if the approach is suited for the business problem, technically viable, and supported by the available data. The feasibility assessment ensures the team does not commit resources to an approach that is unsuitable or unsupported.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Selecting the most advanced AI technique and using an approach from a previous project both bypass the feasibility evaluation step by defaulting to complexity or familiarity rather than assessing suitability for the current business problem and data."
      },
      {
        "options": [
          "A"
        ],
        "text": "Beginning development and assessing feasibility after initial results reverses the appropriate sequence."
      },
      {
        "options": [
          "C"
        ],
        "text": "Feasibility should be confirmed before development begins, not after resources have already been committed."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q103",
    "question": "A learning company launched an AI tutor to support students enrolled in an online course. The AI project team documented the solution's contingency plan. What should the AI project team do next?",
    "options": {
      "A": "Review the plan against current system features and workflows.",
      "B": "Test and validate the plan under realistic operating conditions.",
      "C": "Update the plan to reflect known risks.",
      "D": "Share the plan with relevant teams across operations."
    },
    "correct": "B",
    "correctExplanation": "Documentation alone doesn't prove a plan works. Testing under realistic conditions validates whether the procedures actually function before a real incident occurs \u2014 turning a plan on paper into a plan that actually works in practice.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Reviewing against current features is a useful maintenance step, but it doesn't confirm whether the plan actually works when a real incident strikes."
      },
      {
        "options": [
          "C"
        ],
        "text": "Updating for known risks improves the plan's content, but still doesn't validate that the documented procedures function correctly under real-world conditions."
      },
      {
        "options": [
          "D"
        ],
        "text": "Sharing promotes awareness, but distributing an untested plan before validation gives teams a false sense of readiness."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q104",
    "question": "An AI project manager at a software company is planning to automate a manual employee appraisal process. Several years of appraisal records were lost in a fire.  What should the AI project manager do first?",
    "options": {
      "A": "Select an AI approach for performance prediction.",
      "B": "Evaluate the quality and completeness of the availableappraisal data.",
      "C": "Procure an automation tool from an authorized vendor.",
      "D": "Define how automated appraisal results will fit into HRworkflows."
    },
    "correct": "B",
    "correctExplanation": "ing the quality and completeness of the available appraisal data. The AI project manager must first evaluate the quality and completeness of the remaining data before any further planning or development activities begin. Understanding what data is available and whether it is sufficient and reliable is foundational to determining whether the initiative can proceed and what approach is appropriate.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "C"
        ],
        "text": "Selecting an AI approach and procuring a tool from an authorized vendor assumes the available data is sufficient to support the initiative without first confirming its quality and completeness, risking investment in a solution that cannot be trained or validated effectively."
      },
      {
        "options": [
          "D"
        ],
        "text": "Defining how automated appraisal results will fit into existing workflows addresses solution integration rather than the data readiness concern that must be resolved before any design or integration decisions are made."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q105",
    "question": "An AI project manager is drafting a high-level architecture for an AI-enabled mentoring platform. The platform will match mentors and mentees, support goal setting, and track progress against objectives. What should the AI project manager include in the architecture draft?",
    "options": {
      "A": "The wireframes and navigation flows for the user interfaces.",
      "B": "The major system components and how they interact.",
      "C": "The specific development tasks and how they are sequenced.",
      "D": "The data privacy policies and how they govern participant access."
    },
    "correct": "B",
    "correctExplanation": "High-level architecture focuses on defining core system modules, subsystems, and the interaction channels between them before detailed technical or operational design starts.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Wireframes represent UI/UX design artifacts."
      },
      {
        "options": [
          "C"
        ],
        "text": "Sequenced development tasks belong in project execution schedules."
      },
      {
        "options": [
          "D"
        ],
        "text": "Data privacy policies belong under project governance and compliance frames."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q106",
    "question": "A project manager is leading an AI project for a manufacturing company to predict equipment failures. During the final data readiness review, the team discovers that most of the available data was collected from newer equipment. However, the older equipment experiences the highest failure rates.\n\nWhat should the AI project manager do next?",
    "options": {
      "A": "Apply additional preprocessing to the newer equipment data so the dataset is more consistent.",
      "B": "Assess whether the available data represents the equipment population and evaluate potential bias.",
      "C": "Begin model training and address concerns if model performance declines.",
      "D": "Rush data quality control activities and proceed with model development."
    },
    "correct": "B",
    "correctExplanation": "The project manager must assess whether the dataset adequately represents the full equipment population before proceeding. This step identifies potential bias in the model's ability to predict failures for older equipment, which is critical given that this is the population of greatest concern.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Preprocessing the overrepresented data more does not compensate for the lack of data on older equipment."
      },
      {
        "options": [
          "C"
        ],
        "text": "Beginning model training and addressing representativeness concerns if performance declines is a reactive approach."
      },
      {
        "options": [
          "D"
        ],
        "text": "Data quality control activities should never be rushed, as it may potentially introduce additional risks relating to data quality."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q107",
    "question": "An AI project team is preparing to deploy an AI solution that prioritizes service requests across multiple business units. The AI project manager must ensure clear coordination pathways are established in case issues arise.  What should the AI project team do?",
    "options": {
      "A": "Train end users on the new workflow and collect feedbackon user interface satisfaction.",
      "B": "Expand the pilot to additional departments before defininghow the production rollout will occur.",
      "C": "Finalize model documentation, archive developmentartifacts, and prepare materials for future audit review.",
      "D": "Develop a deployment plan that defines infrastructure readiness, rollback procedures, and validation criteria"
    },
    "correct": "D",
    "correctExplanation": "The AI project team must develop a deployment plan that addresses infrastructure readiness, defines rollback procedures, and establishes validation criteria. This ensures the team is prepared to deploy within the available windows and respond effectively if issues occur during release.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Training end users and collecting interface feedback are adoption and usability activities that support post-deployment acceptance."
      },
      {
        "options": [
          "B"
        ],
        "text": "Expanding the pilot to additional departments before defining the production rollout reverses the correct sequence."
      },
      {
        "options": [
          "C"
        ],
        "text": "Finalizing model documentation, archiving development artifacts, and preparing audit materials are closure and governance activities that do not address the deployment coordination and contingency planning. The deployment plan must be defined before the rollout scope is expanded."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q108",
    "question": "An AI project team has successfully deployed an AI model. Now, the data engineer needs to conduct post-deployment verification.  What should the data engineer do?",
    "options": {
      "A": "Confirm system functionality and performance in the production environment",
      "B": "Review training data quality and validate preprocessingresults.",
      "C": "Configure data pipelines and data refresh procedures forproduction feeds.",
      "D": "Analyze training data distributions to identify gaps in thedata set."
    },
    "correct": "A",
    "correctExplanation": "Post-deployment verification requires the data engineer to confirm that the deployed AI model is functioning as intended and performing within acceptable parameters in the production environment. This includes checking that the system is functioning correctly, that integrations are working, and that the model is performing within acceptable operational and technical thresholds after release. The purpose of this step is to verify that deployment was successful and that the solution is stable, reliable, and ready for ongoing use in real- world conditions.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Reviewing training data quality and configuring data pipelines are pre-deployment activities."
      },
      {
        "options": [
          "D"
        ],
        "text": "While training data quality is important to model development, it does not directly verify whether the deployed model is functioning properly after release."
      },
      {
        "options": [
          "C"
        ],
        "text": "Data pipelines must be set up so the model can receive, process, and use data correctly, but this is not the same as verifying that the fully deployed solution is functioning as expected in production. Analyzing training data distributions relates to understanding the characteristics of the data used during model development. It helps with model design, validation, and training decisions, but it does not confirm that the model is operating correctly in the production environment after deployment."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q109",
    "question": "A new AI project manager joins a credit card fraud detection initiative. During onboarding, the project manager discovers that key project documentation is missing, making it difficult to understand how the system was built and how decisions were made.  What should the AI project manager do?",
    "options": {
      "A": "Establish version controls for AI models, data, and audit trails to improve traceability",
      "B": "Retrain the AI model regularly using the latest fraud datato keep the system relevant.",
      "C": "Consult the data science team, review existing outputs,and reconstruct the process informally.",
      "D": "Request that the data science team create handoverdocumentation from their collective memory."
    },
    "correct": "A",
    "correctExplanation": "When key project documentation is missing, and it is unclear how the system was built and how decisions were made, the AI project manager must establish version controls for models and data and create audit trails to restore traceability and accountability going forward.",
    "incorrectExplanations": [
      {
        "options": [
          "C",
          "D"
        ],
        "text": "Consulting the data science team and requesting handover documentation from collective memory both rely on informal reconstruction rather than establishing the structured version controls and audit trails needed for accountability and traceability."
      },
      {
        "options": [
          "B"
        ],
        "text": "Retraining the AI model regularly addresses model relevance but does not resolve the missing documentation and traceability gap identified during onboarding."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q110",
    "question": "An AI project manager at a retail company is preparing the go/no-go decision for deploying a prediction model. The model has met its performance benchmarks, but two required pre-deployment reviews have not been completed.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Approve the deployment based on the model's performance benchmarks.",
      "B": "Delay the decision until all pre-deployment reviews are completed.",
      "C": "Request the project team to re-run validation tests before proceeding.",
      "D": "Submit the deployment request and complete the reviews in parallel."
    },
    "correct": "B",
    "correctExplanation": "A go/no-go decision requires that all pre-deployment requirements be satisfied before approval. Meeting benchmarks is not sufficient to approve deployment when required reviews remain incomplete.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Approving deployment based on performance benchmarks alone is not correct because strong model performance by itself does not satisfy all pre-deployment requirements. Moving forward before the required reviews are complete creates unnecessary risk."
      },
      {
        "options": [
          "D"
        ],
        "text": "Submitting the deployment request while completing reviews in parallel is also incorrect because it allows deployment activities to proceed before all approval conditions have been met. Pre-deployment reviews must be completed first to ensure the solution is ready and properly authorized."
      },
      {
        "options": [
          "C"
        ],
        "text": "Requesting the team to re-run validation tests is not the right next step because the issue is not model performance. The decision is being blocked by incomplete reviews, so repeating validation does not address the actual problem."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q111",
    "question": "During an AI model's data quality review the AI project manager learns that several fields contain inconsistent values, some records are outdated, and one key customer group appears underrepresented. The data science team wants to proceed citing the volume and accessibility of the dataset, but the project team has not conducted the necessary risk assessments.  What should the AI project manager do?",
    "options": {
      "A": "Assess all relevant data quality dimensions before proceeding",
      "B": "Proceed with preparation and mitigate data issues aftertraining.",
      "C": "Increase the data volume to compensate for the identifiedgaps.",
      "D": "Select a complex algorithm to compensate for datadeficiency."
    },
    "correct": "A",
    "correctExplanation": "The AI project manager must ensure all relevant data quality dimensions are assessed before the project moves forward. Proceeding without this assessment risks embedding known quality issues into the model development process.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Proceeding with preparation and mitigating data issues after training carries known quality risks into model development without first understanding their full impact, which could compromise model reliability and fairness."
      },
      {
        "options": [
          "D"
        ],
        "text": "Increasing data volume and selecting a complex algorithm both attempt to workaround the identified quality gaps rather than addressing them directly."
      },
      {
        "options": [
          "C"
        ],
        "text": "Volume does not resolve inconsistency, outdated records, or underrepresentation, and algorithm complexity cannot compensate for underlying data quality deficiencies."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q112",
    "question": "An AI project manager is overseeing the data collection phase of an AI model for a logistics company. The model will use historical shipment data that contains personally identifiable information (PII) from customers and vendors. What should the AI project manager do next?",
    "options": {
      "A": "Establish secure data handling procedures such as encryption and access controls",
      "B": "Analyze training data for demographic imbalances andperform fairness testing.",
      "C": "Conduct transparent reporting on data sources andpreprocessing steps.",
      "D": "Track evolving data protection regulations to ensureongoing compliance."
    },
    "correct": "A",
    "correctExplanation": "The project manager should implement encryption and access controls for AI training data and establish secure data handling procedures throughout the AI lifecycle. These activities ensure that PII from customers and vendors is protected before data collection begins.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "C",
          "D"
        ],
        "text": "Analyzing training data for demographic imbalances, conducting transparent reporting on data sources, and tracking data protection regulations each describe activities associated with bias checks, transparency management, and regulatory compliance monitoring, none of which address the immediate need to secure personally identifiable information before data collection begins."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q113",
    "question": "A global logistics company has recruited an AI project team to assess whether an AI solution can optimize last-mile delivery routing.\n\nWhat should the AI project team do first?",
    "options": {
      "A": "Define the project schedule and assign roles and responsibilities.",
      "B": "Evaluate the technical feasibility of the proposed AI solution.",
      "C": "Select the appropriate machine learning (ML) algorithm for routing optimization.",
      "D": "Develop a business case with projected cost savings for the proposed solution."
    },
    "correct": "B",
    "correctExplanation": "Before committing to an AI initiative, the project management team must first determine whether the solution is technically viable. This includes evaluating whether the necessary data and infrastructure exist to support development. Without this assessment, any further planning or development activity is premature.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Defining the project schedule and assigning roles are planning activities that should follow a feasibility assessment, not precede it."
      },
      {
        "options": [
          "C",
          "D"
        ],
        "text": "Selecting a machine learning algorithm and developing a business case both assume the solution is viable before that viability has been confirmed, making them premature at this stage."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q114",
    "question": "An AI project manager is overseeing a deployed AI solution at a financial services company and wants to confirm the solution continues to deliver expected value. The team is establishing a monitoring process for the production environment.\n\nWhat should the AI project manager confirm?",
    "options": {
      "A": "Model training logs from the original development phase.",
      "B": "Infrastructure costs associated with running the solution in production.",
      "C": "Model performance against the success criteria defined before deployment.",
      "D": "The number of user requests submitted to the model each day."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must monitor model performance against the success criteria defined before deployment. This provides an objective basis for evaluating whether the solution is achieving its intended outcomes rather than relying on informal observations or secondary metrics.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Model training logs from the original development phase reflect historical development activities rather than the current production performance that must be monitored to confirm ongoing value delivery."
      },
      {
        "options": [
          "B"
        ],
        "text": "Infrastructure costs associated with running the solution address operational expenses rather than whether the solution is performing as expected against its defined success criteria."
      },
      {
        "options": [
          "D"
        ],
        "text": "The number of user requests submitted to the model each day measures usage volume rather than whether the solution is delivering the expected business and technical outcomes."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q115",
    "question": "An AI project manager at a healthcare organization is preparing a status briefing for the project sponsor as model testing is about to begin. Their goal is to ensure the sponsor understands the data governance approach.\n\nWhat should the AI project manager include in the briefing?",
    "options": {
      "A": "Justifications as to why the project should move forward regardless of the data quality.",
      "B": "A summary of the data assessment, the current data readiness, and a recommendation.",
      "C": "The rationale for why the tool was selected, the projected output, and a recommendation.",
      "D": "Detailed documentation of the steps taken to validate the data and model."
    },
    "correct": "B",
    "correctExplanation": "Summarizing the data assessment findings, communicating the current state of data readiness, and providing a clear recommendation translates technical findings into business-relevant information that allows the sponsor to make an informed decision about how to proceed.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Detailed reasons why the project should move forward, even though the output was not accurate, misrepresent the purpose of a status briefing by advocating for continuation rather than providing an objective summary of findings and a recommendation based on the evidence."
      },
      {
        "options": [
          "C"
        ],
        "text": "The rationale for why the tool was selected and the projected output focuses on earlier project decisions and forward-looking projections rather than the current data readiness status that the sponsor needs to understand."
      },
      {
        "options": [
          "D"
        ],
        "text": "Detailed documentation of the steps taken to validate the data and model provides technical process detail that is not appropriately framed in the business-relevant language a sponsor needs for a status briefing."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q116",
    "question": "An AI project manager is reviewing a deployed AI recommendation engine six months after launch. System uptime and response times remain within agreed service levels, but business stakeholders report declining customer engagement and lower conversion rates.\n\nWhat should the AI project manager do?",
    "options": {
      "A": "Retrain the model and monitor technical metrics.",
      "B": "Review business outcomes and model performance metrics.",
      "C": "Recommend replacing the recommendation engine.",
      "D": "Defer reporting until the next scheduled quarterly meeting."
    },
    "correct": "B",
    "correctExplanation": "Reviewing both business outcomes and model performance metrics will determine whether the solution continues to deliver value.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Retraining the model and monitoring technical metrics assumes the model itself is the cause without first reviewing the data needed to confirm where the performance gap originates."
      },
      {
        "options": [
          "C"
        ],
        "text": "Recommending replacing the recommendation engine is a premature and extreme action taken without first investigating the root cause of the declining business outcomes."
      },
      {
        "options": [
          "D"
        ],
        "text": "Deferring reporting until the next scheduled quarterly meeting delays the evidence executives need now to understand whether the solution continues to deliver value as described in the original business case."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q117",
    "question": "An AI project manager discovers that employees' personally identifiable information (PII) is being recorded in system log files during a quality control check. What should the AI project manager do?",
    "options": {
      "A": "Proceed with the current approach because the log files are not exposed to external users.",
      "B": "Escalate the issue to the sponsor and wait for direction before taking any corrective action.",
      "C": "Stop logging personal employee data and implement controls to protect sensitive information in the log files.",
      "D": "Assess if the logged employee data creates significant privacy risk and apply protection measures as needed."
    },
    "correct": "C",
    "correctExplanation": "PII in log files demands immediate action \u2014 stop the logging and implement controls. Privacy obligations don't hinge on whether files are externally visible. The PM has the authority and responsibility to act without waiting for sponsor approval.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Internal access does not remove privacy liability. PII in log files is a compliance concern regardless of who can currently see those files."
      },
      {
        "options": [
          "B"
        ],
        "text": "Waiting for sponsor direction unnecessarily delays a response to a confirmed, known privacy risk the PM is fully empowered to address immediately."
      },
      {
        "options": [
          "D"
        ],
        "text": "When PII is already confirmed in the logs, conducting a threshold risk assessment is an unnecessary detour \u2014 confirmed PII requires immediate action, not a conditional one."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q118",
    "question": "Three months after operationalization, leadership requests the AI project manager provide evidence. They need reassurance that the AI solution is delivering the expected business value and operational performance. What should the AI project manager do?",
    "options": {
      "A": "Monitor key performance indicators (KPIs) through dashboards and reporting mechanisms.",
      "B": "Schedule a stakeholder meeting to discuss the solution's performance based on team observations.",
      "C": "Request the data engineering team to run a new data quality assessment on the production data.",
      "D": "Review the original success criteria defined during planning and compare them to current outputs."
    },
    "correct": "A",
    "correctExplanation": "Monitoring KPIs and model performance through dashboards and reporting mechanisms provides continuous, quantifiable evidence needed to demonstrate that the solution delivers expected business value.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Scheduling a meeting based on team observations relies on qualitative opinions rather than objective, current performance metrics."
      },
      {
        "options": [
          "C"
        ],
        "text": "Requesting a data quality assessment addresses data readiness rather than proving business value and operational performance."
      },
      {
        "options": [
          "D"
        ],
        "text": "Reviewing original criteria against outputs is a point-in-time historical comparison rather than continuous active monitoring of live operational performance."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q119",
    "question": "An AI project manager is leading a customer churn reduction initiative. After defining the business problem, the project team proposes several approaches including a prediction model, a recommendation engine, and a rules-based workflow.\n\nWhat should the AI project manager do next?",
    "options": {
      "A": "Collaborate with the team to draft an AI solution concept aligned to the business need.",
      "B": "Expand the scope to include all proposed features.",
      "C": "Begin model training with the available customer data.",
      "D": "Document the proposed approaches and defer selection until after data preparation."
    },
    "correct": "A",
    "correctExplanation": "Collaborating with the team to draft an AI solution concept that aligns with the defined business need ensures the selected approach is grounded in the business problem before any technical development begins.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Expanding the scope to include all proposed approaches commits to multiple technical directions without first determining which approach fits the business need, increasing complexity and risk without a clear rationale."
      },
      {
        "options": [
          "C"
        ],
        "text": "Beginning model training with available customer data advances development before a solution concept has been drafted and evaluated against the business need, risking investment in a direction that may not address the defined problem."
      },
      {
        "options": [
          "D"
        ],
        "text": "Documenting the proposed approaches and deferring selection until after data preparation reverses the correct sequence since the solution concept should guide data preparation, not follow it."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q120",
    "question": "An AI project team has deployed a machine learning (ML) model to predict customer purchasing behavior based on age and location. During a post-deployment review, the team observes unexpected changes in how the model is performing.  What should the AI project team monitor to identify the root cause?",
    "options": {
      "A": "System response time",
      "B": "Data drift",
      "C": "Precision",
      "D": "Prediction accuracy"
    },
    "correct": "B",
    "correctExplanation": "When a deployed model begins performing unexpectedly, the AI project team should monitor data drift to identify whether the input data distribution has shifted from what the model learned during training. A shift in the distribution of age and location data in production could explain why the model's purchasing behavior predictions are no longer reliable.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "System response time measures how quickly the system processes requests and does not provide insight into why model predictions may have changed."
      },
      {
        "options": [
          "D"
        ],
        "text": "Precision and prediction accuracy are performance metrics that confirm a problem exists but do not identify the root cause."
      },
      {
        "options": [
          "C"
        ],
        "text": "Data drift is the underlying cause that these metrics would reflect as a consequence."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q121",
    "question": "An AI project manager is evaluating a request to handle a repetitive customer communication task. The task involves sending the same scheduled message to all customers on a recurring basis with no variation in content or personalization.\n\nWhat should the AI project manager recommend?",
    "options": {
      "A": "Automated machine learning (AutoML)",
      "B": "A natural language processing (NLP) model",
      "C": "A simple automation tool",
      "D": "A recommendation engine"
    },
    "correct": "C",
    "correctExplanation": "Sending the same scheduled message on a recurring basis with no variation in content or personalization does not require intelligence, learning, or adaptation. A simple automation tool can reliably perform this repetitive, rule-based task without the complexity or cost of an AI solution.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Automated machine learning (AutoML) and recommendation engines involve learning from data to make predictions or personalized decisions, which is unnecessary for a task that requires no variation or customer-specific judgment."
      },
      {
        "options": [
          "B"
        ],
        "text": "A natural language processing (NLP) model is designed to understand or generate human language in context, which is not needed when the same fixed message is sent to every customer without modification."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q122",
    "question": "An AI project manager wants to implement AI tools to improve software delivery throughput. Financial leaders are concerned that the business case does not clearly define the expected business value, costs, and success measures of this initiative.  What should the AI project manager do next?",
    "options": {
      "A": "Prepare a visual presentation that highlights examples ofsuccessful AI adoption in software delivery.",
      "B": "Work with finance stakeholders to estimateimplementation costs and revisit expected benefits after apilot.",
      "C": "Establish a limited AI pilot that demonstrates the initiative'svalue and gather additional evidence before completingthe business case.",
      "D": "Collaborate with relevant stakeholders to define the financial justification and performance metrics needed for the business case"
    },
    "correct": "D",
    "correctExplanation": "When the business case does not clearly define expected business value, costs, and success measures, the project manager should collaborate with finance stakeholders to define the financial justification and performance metrics needed for the business case. Supporting business case development requires gathering financial data, projecting benefits, and establishing measurable success criteria in direct response to stakeholder concerns.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Preparing a visual presentation that highlights examples of successful AI adoption does not address the financial leaders' specific concerns about business value, costs, and success measures."
      },
      {
        "options": [
          "B"
        ],
        "text": "Working with finance stakeholders to estimate costs and revisit benefits after a pilot defers the business case work rather than resolving the identified gaps."
      },
      {
        "options": [
          "C"
        ],
        "text": "Establishing a limited AI pilot to demonstrate value and gather evidence delays completing the business case and does not address the financial leaders' concerns about the current business case definition."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q123",
    "question": "An AI project manager is leading a medical image recognition initiative at a healthcare organization. During model training, the project experiences repeated failures due to insufficient computing resources, causing delays and budget overruns.  What should the AI project manager do to prevent this?",
    "options": {
      "A": "Decrease the model complexity to reduce the resourcerequirements for training.",
      "B": "Conduct additional stakeholder reviews to align on trainingtimelines and resource expectations.",
      "C": "Assess requirements and provision adequate infrastructure before training begins",
      "D": "Establish a cloud provider partnership to access on-demand resources during development."
    },
    "correct": "C",
    "correctExplanation": "The AI project manager must assess those requirements and ensure adequate infrastructure is provisioned before training begins. This proactive step prevents the repeated failures, delays, and budget overruns that result from insufficient computing resources being identified only after training has started.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "D"
        ],
        "text": "Reducing model complexity and establishing a cloud provider partnership options both address the resource gap indirectly rather than proactively assessing and provisioning the infrastructure needed to support the planned training workload."
      },
      {
        "options": [
          "B"
        ],
        "text": "Conducting additional stakeholder reviews improves communication and alignment on timelines, but does not resolve the underlying infrastructure gap that caused the training failures."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q124",
    "question": "An AI project manager is working with the project team to define the success criteria for a new AI initiative. The project sponsor has requested that all criteria be specific and measurable.  What should the AI project manager define as the success criteria?",
    "options": {
      "A": "Mostly available systems, quick response times, andsuccessful synchronization with connected systems.",
      "B": "99% system availability, response times under 2 seconds, and a 98% synchronization success rate with connected systems",
      "C": "Often available systems, response times under 2 seconds,and somewhat synchronized connected systems.",
      "D": "99% system availability, quick response times, andsuccessful synchronization with connected systems."
    },
    "correct": "B",
    "correctExplanation": "The sponsor asked for criteria that are specific and measurable. A 99% availability rate, a 2-second response time threshold, and a 98% synchronization success rate each provide a clear benchmark against which actual performance can be measured. This is the only option where all three components are expressed as precise, quantifiable targets.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Terms such as \"mostly,\" \"often,\" \"quick,\" and \"somewhat\" do not provide clear, quantifiable benchmarks and cannot be objectively measured or evaluated."
      },
      {
        "options": [
          "A"
        ],
        "text": "Although \"response times under 2 seconds\" is measurable, \"often available\" and \"somewhat synchronized\" are still unclear and not objectively measurable."
      },
      {
        "options": [
          "D"
        ],
        "text": "Success criteria must be measurable across all elements, not just one. \"Quick response times\" and \"successful synchronization\" are too vague to serve as complete success criteria. Only one criterion, \"99% system availability,\" is measurable for this option."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q125",
    "question": "An AI project manager is overseeing the deployment of a credit card fraud detection system. The model meets performance targets in testing, but during rollout some users are unable to complete the activities needed to manage fraud alerts.  What should the AI project manager do next?",
    "options": {
      "A": "Review the volume of historical fraud data.",
      "B": "Review the model retraining frequency.",
      "C": "Review user roles and permissions",
      "D": "Review the model accuracy target."
    },
    "correct": "C",
    "correctExplanation": "When intended users are unable to complete activities needed during deployment, the most likely cause is a configuration issue with user roles and permissions. Reviewing access and permission settings ensures that all intended users have the appropriate level of access to perform their required functions within the deployed system.",
    "incorrectExplanations": [
      {
        "options": [
          "A",
          "B"
        ],
        "text": "Reviewing the volume of historical fraud data and reviewing the model retraining frequency address data and model maintenance concerns that are unrelated to the access issue preventing users from completing their required activities."
      },
      {
        "options": [
          "D"
        ],
        "text": "Reviewing the model accuracy target addresses performance criteria that have already been met during testing and does not resolve the operational access issue identified during deployment."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q126",
    "question": "An AI project manager is coordinating the transition of a patient follow-up reminder system from the project team to the operational team at a healthcare organization. What should the AI project manager do next?",
    "options": {
      "A": "Conduct a final model performance review beforetransferring ownership.",
      "B": "Schedule a post-deployment audit to assess systemaccuracy after transition.",
      "C": "Document lessons learned and archive project artifacts forfuture projects.",
      "D": "Establish ongoing maintenance and support procedures for the operational team"
    },
    "correct": "D",
    "correctExplanation": "The AI project manager must ensure that ongoing maintenance and support procedures are in place before handover is complete. This ensures the operational team has the guidance needed to sustain the solution effectively.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Conducting a final model performance review and a post- deployment audit are evaluation activities that should be completed before the transition to operations begins."
      },
      {
        "options": [
          "B"
        ],
        "text": "A post-deployment audit may be valuable for verifying performance and governance after the solution is live, but it does not directly equip the operational team to take ownership of ongoing support and maintenance during the transition."
      },
      {
        "options": [
          "C"
        ],
        "text": "Documenting lessons learned and archiving project artifacts are activities that support organizational learning, governance, and future project work rather than operational readiness. By the time handover is underway, the model should already have passed its required performance reviews and been approved for operational use. Performing this review during handover would mean the solution was transitioned before readiness was fully confirmed. Although they are important for closing the project properly, they do not directly help the operational team understand how to run, maintain, troubleshoot, and support the live AI solution after handover."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q127",
    "question": "A project manager at a production company has deployed an AI solution. They are responsible for ensuring it continues to deliver value over time.  What should the AI project manager do?",
    "options": {
      "A": "Monitor the solution's business performance, technical behavior, and reliability on an ongoing basis",
      "B": "Improve performance by retraining the AI model, updatethe training data, and adjust the algorithm.",
      "C": "Assess the solution's performance results to sharefindings with stakeholders and the project sponsor.",
      "D": "Review the budget, assess resource allocation, andrequest additional funding on an ongoing basis."
    },
    "correct": "A",
    "correctExplanation": "Continuously monitoring the solution's business performance, technical behavior, and reliability allows the project manager to detect issues early, ensure the solution meets organizational expectations, and take corrective action when needed.",
    "incorrectExplanations": [
      {
        "options": [
          "B"
        ],
        "text": "Retraining the AI model, updating the training data, and adjusting the algorithm are corrective actions."
      },
      {
        "options": [
          "C"
        ],
        "text": "Assessing the solution's performance results and sharing findings with the project sponsor does not ensure the solution continues to deliver value."
      },
      {
        "options": [
          "D"
        ],
        "text": "These activities are premature without first establishing whether a performance issue exists. Financial planning activities do not directly address the project manager's responsibility to oversee the performance and reliability of the deployed AI solution."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q128",
    "question": "An AI project manager at a manufacturing company is drafting an AI solution to optimize machine scheduling on a production line. The solution must minimize downtime and adapt continuously as production conditions change.\n\nWhat should the AI project manager propose?",
    "options": {
      "A": "Reinforcement learning",
      "B": "Supervised regression",
      "C": "Unsupervised learning",
      "D": "Computer vision"
    },
    "correct": "A",
    "correctExplanation": "Reinforcement learning is designed for problems requiring continuous adaptation and sequential decision-making based on environmental feedback. Optimizing machine scheduling while adapting to changing production conditions is a direct application of this approach.",
    "incorrectExplanations": [
      {
        "options": [
          "B",
          "C"
        ],
        "text": "Supervised regression and unsupervised learning do not support continuous adaptation to changing conditions."
      },
      {
        "options": [
          "D"
        ],
        "text": "Computer vision is designed for image-based tasks and has no application to scheduling optimization."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q129",
    "question": "An AI project manager is overseeing the development of an automated grading assistant. The project team standardised score scales to prepare historical data for training. The project sponsor wants to confirm the transformation work can be repeated. What should the AI project manager do?",
    "options": {
      "A": "Compare the documented transformation logic against what the team actually implemented.",
      "B": "Review the transformation code with a second team member to confirm accuracy.",
      "C": "Execute the transformation pipeline again on the source data and confirm the outputs match.",
      "D": "Test the transformation process on a new sample of data to confirm it generalises well."
    },
    "correct": "C",
    "correctExplanation": "Reproducibility means: same inputs \u2192 same outputs, every time. The only way to empirically prove it is to re-run the pipeline on the same source data and verify that the results are identical. That's the direct test of repeatability.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Comparing documented logic to the implementation checks design correctness, not whether the pipeline produces consistent repeated outputs from the same data."
      },
      {
        "options": [
          "B"
        ],
        "text": "A peer code review catches errors and validates accuracy, but it does not prove the process generates the same results every time it runs."
      },
      {
        "options": [
          "D"
        ],
        "text": "Testing on a new data sample evaluates generalisation or robustness \u2014 a separate, different goal from reproducibility, which requires the same input."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q130",
    "question": "A data engineer is configuring access to customer records containing personally identifiable information (PII) for AI model training. The data set includes names, email addresses, and account numbers.\n\nWhat should the data engineer do?",
    "options": {
      "A": "Anonymize the data after model training is complete.",
      "B": "Anonymize the data and establish access controls.",
      "C": "Increase the size of the training dataset before model development.",
      "D": "Replace all production data with synthetic data."
    },
    "correct": "B",
    "correctExplanation": "Anonymizing the data and establishing access controls before training begins protects sensitive customer information throughout the training process and ensures the initiative complies with data privacy and security requirements from the outset.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Anonymizing the data after model training is complete protects the data too late, since the sensitive information remains exposed throughout the entire training process."
      },
      {
        "options": [
          "C"
        ],
        "text": "Increasing the size of the training data set before model development addresses data volume rather than the privacy and security risk created by the personally identifiable information already present in the customer records."
      },
      {
        "options": [
          "D"
        ],
        "text": "Replacing all production data with synthetic data is an extreme and unnecessary measure that does not appropriately address the need to secure the existing customer data being used for this specific initiative."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q131",
    "question": "An AI project manager is leading an initiative to predict equipment maintenance needs across multiple facilities. Relevant records are spread across a cloud sensor platform, a maintenance database, a third-party repair provider, and archived legacy logs.  What should the AI project manager do next?",
    "options": {
      "A": "Compare candidate model techniques using the availablesensor records.",
      "B": "Inventory the data sources, storage locations, owners, and access permissions",
      "C": "Define model accuracy targets and thresholds using priormaintenance outcomes.",
      "D": "Transfer available records into the AI workspace forpreparation."
    },
    "correct": "B",
    "correctExplanation": "When relevant records are spread across multiple systems, the AI project manager must first inventory all data sources, storage locations, owners, and access permissions. This ensures the team knows what data is available, where it lives, and who must approve access.",
    "incorrectExplanations": [
      {
        "options": [
          "C"
        ],
        "text": "Comparing possible model techniques or setting model accuracy targets too early pushes the team into technical and design decisions before they have confirmed what data is actually available and accessible."
      },
      {
        "options": [
          "D"
        ],
        "text": "Transferring records into the AI workspace before confirming data locations and access permissions also skips a necessary step."
      },
      {
        "options": [
          "A"
        ],
        "text": "That creates a risk that the selected approach will not align with the real data environment. It can lead to incomplete transfers or the use of data that has not yet been authorized for access."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q132",
    "question": "An AI project manager is drafting an AI solution for a marketing team that needs to assign customers to predefined segments based on structured behavioral and demographic data. Each customer must be placed into one of several existing categories to receive targeted promotions. What type of AI model should the AI project manager recommend?",
    "options": {
      "A": "Regression model",
      "B": "Clustering model",
      "C": "Classification model",
      "D": "Reinforcement learning model"
    },
    "correct": "C",
    "correctExplanation": "Classification models are designed to predict which predefined class a data point belongs to, making them the correct fit for assigning customers to existing segments for targeted promotions.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "A regression model predicts continuous numerical values, making it unsuitable for a customer segmentation task where outcomes are fixed and discrete."
      },
      {
        "options": [
          "B"
        ],
        "text": "A clustering model groups data points based on similarity without using predefined categories."
      },
      {
        "options": [
          "D"
        ],
        "text": "A reinforcement learning model learns through interaction with an environment and sequential decision-making, which is not applicable to the task of assigning customers to predefined categories. Clustering does not meet the requirements of this scenario."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q133",
    "question": "An AI solution predicts shipment delays for a logistics operation. The model is ready for production use, but the support team has not received handover materials, maintenance procedures, or clear ownership for monitoring issues after launch.  What should the AI project manager do?",
    "options": {
      "A": "Release the AI solution into the deployment environment.",
      "B": "Coordinate knowledge transfer and support procedures",
      "C": "Retrain the model before assigning operationalresponsibilities.",
      "D": "Close the project once the model is ready for deployment."
    },
    "correct": "B",
    "correctExplanation": "This response addresses the support team's lack of handover materials, maintenance procedures, and clear ownership directly, ensuring the AI solution can be properly supported once it moves into the production environment.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Releasing the AI solution into the deployment environment without resolving the support gaps already identified is not a recommended approach for managing an AI transition plan."
      },
      {
        "options": [
          "C"
        ],
        "text": "Retraining the model before assigning operational responsibilities focuses on a technical task that does not address the transition and support issues."
      },
      {
        "options": [
          "D"
        ],
        "text": "Closing the project once the model is ready for deployment treats the initiative as finished while the support team still lacks what it needs to maintain the solution after launch."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q134",
    "question": "An AI project manager is rushing to develop the scope statement for an AI initiative. The project team has not defined the success criteria or performance metrics for the AI solution yet.  What is the risk of proceeding without this information?",
    "options": {
      "A": "The potential to exceed the project's budget and requireadditional funding.",
      "B": "The inability to align resource allocation to the businessobjectives.",
      "C": "The team's inability to determine if the AI solution isdelivering business value.",
      "D": "The disengagement of stakeholders from the project priorto deployment."
    },
    "correct": "C",
    "correctExplanation": "whether the AI solution is delivering business value. The project manager must establish success criteria and performance metrics to align the project with business objectives. Without these defined measures, the team has no way to evaluate whether the AI solution is achieving the intended outcomes or delivering value to the organization.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "The potential to exceed the project's budget and require additional funding describes a financial risk that is not directly caused by the absence of success criteria and performance metrics."
      },
      {
        "options": [
          "B"
        ],
        "text": "The inability to align resource allocation to business objectives describes a planning risk associated with resource management, not scope definition."
      },
      {
        "options": [
          "D"
        ],
        "text": "The disengagement of stakeholders from the project before deployment describes an adoption and change management risk associated with stakeholder engagement activities."
      }
    ],
    "examSource": 2
  },
  {
    "id": "exam2_q135",
    "question": "A global bank uses an AI anti-money-laundering model across several regions. During a regulatory review, the team discovers that local changes to model thresholds and versions were made without being recorded centrally. What was missing from the AI project team's approach?",
    "options": {
      "A": "A regional autonomy policy allowing local teams to optimize model settings independently.",
      "B": "A governance process for documenting and approving model changes across regions.",
      "C": "A faster release cycle allowing compliance teams to compare model variants in production.",
      "D": "A requirement that each region maintain separate support and change management teams."
    },
    "correct": "B",
    "correctExplanation": "A centralized governance process for documenting and approving model changes ensures compliance, traceability, and accountability across all operating regions.",
    "incorrectExplanations": [
      {
        "options": [
          "A"
        ],
        "text": "Autonomy policies exacerbate undocumented modifications."
      },
      {
        "options": [
          "C"
        ],
        "text": "Accelerated release cycles introduce untracked variants without oversight."
      },
      {
        "options": [
          "D"
        ],
        "text": "Decentralized support teams further fragment governance rather than establishing unified central control."
      }
    ],
    "examSource": 2
  }
];

export const QUESTION_COUNT = QUESTIONS.length;
