const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering', 'Data Science'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Git/GitHub',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Data Science'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering', 'Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Cloud'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Bootstrap',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'JQuery',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'PLSQL',
    competency: 3,
    category: ['Databases'],
  },
  // Visualization
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Visualization'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Visualization'],
  },
  {
    title: 'Seaborn',
    competency: 3,
    category: ['Visualization'],
  },
  {
    title: 'Plotly',
    competency: 3,
    category: ['Visualization'],
  },
  {
    title: 'Streamlit',
    competency: 3,
    category: ['Visualization'],
  },
  {
    title: 'Tableau',
    competency: 1,
    category: ['Visualization'],
  },
  // ML Engineering
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'PyCaret',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'MlFlow',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['Computer Vision'],
  },
  {
    title: 'SKImage',
    competency: 3,
    category: ['Computer Vision'],
  },
  {
    title: 'ImageIO',
    competency: 3,
    category: ['Computer Vision'],
  },
  {
    title: 'PIL',
    competency: 3,
    category: ['Computer Vision'],
  },
  // NLP
  {
    title: 'NLTK',
    competency: 3,
    category: ['NLP'],
  },
  {
    title: 'Spacy',
    competency: 4,
    category: ['NLP'],
  },
  {
    title: 'Gensim',
    competency: 2,
    category: ['NLP'],
  },
  // Pipelines
  {
    title: 'Airflow',
    competency: 3,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
