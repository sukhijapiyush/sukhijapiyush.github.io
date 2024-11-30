/**
 * @typedef {Object} Publication
 * Conforms to https://jsonresume.org/schema/
 * @property {string} name - Name of the publication
 * @property {string} description - Description of the publication
 * @property {string} publisher - Publisher of the publication
 */
const publications = [
  {
    name: 'Assessment of Classification Algorithms using Low-Level Features for MIR',
    description: 'This research paper evaluates different classification algorithms by utilizing low-level features specifically designed for Music Information Retrieval (MIR). It explores the effectiveness of these algorithms in handling audio files, comparing their performance to existing text and image-based classification methods employed by companies.',
    publisher: 'NCREEE 19',
  },
  {
    name: 'Biclustеring Algorithms: Anаlysing Stаtisticаl Symmеtry',
    description: 'This research paper delves into the analysis and comparison of various Bi-clustering algorithms, specifically designed for the clustering of 2-D data sets. It focuses on the statistical symmetry aspect and explores how these algorithms handle the interdependencies among multiple features within the data.',
    publisher: "AICAI'2019",
  },
  {
    name: 'Intrusion Detection Systems using Artificial Immune System',
    description: 'This research paper investigates the development of an Intrusion Detection System (IDS) inspired by the functioning of the natural immune system. It explores the application of an artificial immune system, specifically utilizing the concept of negative selection, to enhance the capabilities of the IDS for detecting and preventing intrusions.',
    publisher: 'ICICC , IJARCSSE',
  },
];

export default publications;
