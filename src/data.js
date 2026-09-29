// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Ayush Sahu',
  role: 'CS Undergrad & MS by Research @ IIIT Hyderabad',
  tagline:
    'I build full-stack web apps and AI-powered systems — from RAG chatbots to deep learning models and low-level networked systems in C.',
  email: 'ayush.sahu@research.iiit.ac.in',
  phone: '+91 7999340667',
  location: 'Hyderabad, India',
  github: 'https://github.com/AyushxCentury',
  linkedin: 'https://www.linkedin.com/in/ayush-sahu-136446255/',
  resume: `${import.meta.env.BASE_URL}Ayush_Sahu_Resume.pdf`,
}

export const education = [
  {
    school: 'International Institute of Information Technology, Hyderabad',
    degree: 'B.Tech in Computer Science + MS by Research in Computational Natural Science',
    period: 'Oct 2022 – Present',
    score: 'CGPA: 7.55',
  },
  {
    school: 'BSP Senior Secondary School Sector X, Bhilai',
    degree: 'Class XII',
    period: 'Apr 2020 – Jul 2022',
    score: 'Percentage: 94.2%',
  },
]

export const experience = [
  {
    company: 'Patenti Technology Solutions',
    role: 'Software Engineering Intern',
    period: 'Jan 2024 – Apr 2024',
    location: 'Remote',
    points: [
      'Built CoviCare, an AI-powered medical chatbot handling 500+ COVID-19 FAQs with a curated knowledge base of 10k+ Wikipedia entries.',
      'Designed a 3-layer NLP pipeline with BERTScore filtering, RAG via ChromaDB, and Gemini API integration.',
      'Developed a Django + Bootstrap web app with authentication and conversation history, optimizing retrieval to cut latency by 80%.',
    ],
    tags: ['Django', 'RAG', 'ChromaDB', 'Gemini API', 'BERTScore'],
  },
]

// TODO: replace each `link` with the exact repository URL.
export const projects = [
  {
    title: 'TCN — The Contact Network',
    stack: ['Python', 'Flask', 'SQLite', 'BeautifulSoup'],
    points: [
      'Full-stack web app for student and faculty management with a responsive HTML/CSS/JS front-end.',
      'Automated faculty data collection via web scraping and implemented robust CRUD operations.',
    ],
    link: 'https://github.com/AyushxCentury',
  },
  {
    title: 'IPL Database',
    stack: ['Python', 'Flask', 'MySQL'],
    points: [
      'CLI software for Indian Premier League database management with well-defined entities, relations, and functional requirements.',
    ],
    link: 'https://github.com/AyushxCentury',
  },
  {
    title: 'Simple Network File System',
    stack: ['C', 'Sockets', 'Linux System Calls'],
    points: [
      'Basic NFS enabling remote file access and manipulation using a client-server architecture.',
      'Server processes file operations; client supports commands like read, write, and delete.',
    ],
    link: 'https://github.com/AyushxCentury',
  },
  {
    title: 'Location Predictor from Images',
    stack: ['Python', 'ResNet', 'Deep Learning'],
    points: [
      'ResNet-based model predicting latitude, longitude, camera angle, and region ID from images and metadata of a large campus dataset.',
      'Multi-output regression and classification combining spatial and visual features.',
    ],
    link: 'https://github.com/AyushxCentury',
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'C/C++', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { group: 'Frameworks & Libraries', items: ['Django', 'Flask', 'Pandas', 'Scikit-learn'] },
  { group: 'Tools & Platforms', items: ['Git', 'MySQL', 'SQLite', 'ChromaDB'] },
]

export const coursework = [
  {
    group: 'Computer Science',
    items: ['Computer Programming', 'Data Structures & Algorithms', 'Algorithm Analysis and Design', 'Design and Analysis of Software Systems'],
  },
  { group: 'Machine Learning', items: ['Statistical Methods in AI', 'Machine, Data and Learning'] },
  {
    group: 'Mathematics',
    items: ['Discrete Structures', 'Linear Algebra', 'Probability & Random Process', 'Real Analysis'],
  },
]

export const achievements = [
  { title: 'JEE Mains', detail: 'AIR 8760 · 99.04 percentile' },
  { title: 'JEE Advanced', detail: 'Qualified · AIR 6013' },
  { title: 'Sports Council Core Member', detail: 'IIIT Hyderabad — organised events with 1000+ participants' },
  { title: 'Captain, Chhattisgarh Chess Team', detail: '63rd SGFI National School Games, Warangal' },
]
