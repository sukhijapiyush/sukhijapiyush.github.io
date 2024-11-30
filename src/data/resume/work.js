/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'EXL Service',
    position: 'Lead Data Scientist',
    url: 'https://www.exlservice.com/',
    startDate: '2023-10-09',
    endDate: undefined,
    summary: 'Led and delivered innovative GenAI and AI-driven solutions across finance, HR, and contract management, streamlining operations, improving compliance, enhancing predictive accuracy, and fostering technology adoption through dynamic training programs.',
    highlights: [
      'Led the team in taking a GenAI solution from Proof of Concept (POC) to MVP for Digital Finance suite, optimizing financial operations and enhancing data-driven decision-making.',
      'Directed the creation of an intelligent tool for HR clients, automating employee audits and improving compliance by identifying discrepancies in travel and expense reports.',
      'Crafted and led the implementation of an addon GenAI solution to the Client Dashboard system, enabling ad-hoc questions and reducing the time spent on granular information retrieval, leading to increased efficiency.',
      'Developed and showcased advanced forecast models to predict payment outcomes in data processing systems, which were pivotal in client demonstrations and enhancing the accuracy of financial predictions.',
      'Led the development of a contract management solution that utilized information extraction techniques to automate the creation of new contracts, facilitating better negotiations and clause management.',
      'Implemented a dynamic training program, empowering both business and team members to understand and adapt to new requirements, significantly improving the adoption of new technologies and methodologies.',
    ],
  },
  {
    name: 'Tata Consultancy Services',
    position: 'Data Scientist',
    url: 'https://www.tcs.com/',
    startDate: '2019-07-22',
    endDate: '2023-06-19',
    summary: 'Collaborated cross-functionally, supervised high-priority situations, optimized workflow, conducted requirement gathering, established communication protocols, and developed ML models to enhance a Life Science project.',
    highlights: [
      'Developed an automated NLP pipeline for topic modeling and sentiment analysis to daily process medical device complaints data, optimizing resolution processing by segmenting complaints and sorting by sentiment for a restricted application.', 'Crafted a streamlined search engine with Doc2Vec, elevating supplier and product information retrieval resulting in a 50 % reduction in information retrieval time.', 'Revamped supplier performance prediction using XGBoost, mitigating disruptions, fostering strategic partnerships, and enabling proactive issue resolution during COVID- 19, enhancing data - driven decision - making and reducing the cost overhead by 30 % in 2 months.', 'Conducted A / B testing on a warehouse website redesign, using rigorous hypothesis testing to assess the impact on average orders shipped per site, resulting in a substantial 18 % increase in revenue metrics.', 'Developed a BERT - based Ticket Classification System, reducing miss assignments by 50 %, enhancing customer satisfaction, and streamlining ticket management in response to increased ticket influx during COVID - 19.', 'Orchestrated a dynamic training program, empowering business users to fluently articulate requirements and expectations for AI, Data Science, and Machine Learning solutions resulting in a 30 % reduction in project rework request.',
    ],
  },
];

export default work;
