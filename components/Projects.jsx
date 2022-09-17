// import iconCss from '../public/iconCSS.png'
// import iconHTML from '../public/iconHTML.png'
// import iconJavaScript from '../public/iconJavaScript.png'

const Projects = [
  {
    title: 'Strava Segmnt Slayr',
    description: `A tool to search, sort, and see how you'd compete on Strava segments. Utilizing Strava's API, chart.js, & an accurate engineering model, users can create a power zone graph and estimate the watts required to smash segments on the bike!`,
    url: '',
    images: ['/projectImages/SSS-1.webp'],
    index: 1,
    tech: [
      { name: 'JavaScript', icon: '/icons/iconJavaScript.png' },
      { name: 'HTML', icon: '/icons/iconHTMl.png' },
      { name: 'CSS', icon: '/icons/iconCSS.png' },
      { name: 'Chart.js', icon: '/icons/iconChartJs.png' }
    ]
  },
  {
    title: 'The Living Room',
    description: `A simple social media concept for families to share what's most important to them: pictures, recipes, memories, & plans. Members can also view their lineage in a family tree, and add memories about other family members that will be listed inside their individual member pages `,
    url: '',
    images: [],
    index: 2,
    tech: [
      { name: 'React.js', icon: '/icons/iconreact.png' },
      { name: 'MongoDB', icon: '/icons/iconMongo.png' },
      { name: 'Node.js', icon: 'icons/iconnode.png' }
    ]
  },
  {
    title: `Coach's Corner`,
    description:
      'A gamified coaching app for athletes and coaches. Allows coaches to see player skills, update them, and store them. Players will be given assignments and exercise drills by the coach, ranking up their skills through assingment completion, and allowing the coach to track their progress',
    url: '',
    images: [
      '/projectImages/CC-2.webp',
      '/projectImages/CC-1.webp',
      '/projectImages/CC-3.webp'
    ],
    index: 3,
    tech: [
      { name: 'React.js', icon: '/icons/iconreact.png' },
      { name: 'PostgreSQL', icon: 'icons/iconPostGresql.png' },
      { name: 'Node.js', icon: 'icons/iconnode.png' },
      { name: 'JWT', icon: 'icons/iconJWT.png' }
    ]
  },
  {
    title: 'Wabi-Sketch',
    description: `Built around the Japanese aesthetic 'Wabi-sabi' (侘寂) & its acceptance and appreciation of transience and imperfection, Wabi-Sketch aims to be a place where users can take a small of their day to experience the simple enjoyment of sketching, without any other goal in mind. Users can share sketches with friends, & build on ones sent to them. Users may participate in sketching with a daily prompt, and realtime chat features.`,
    url: 'https://wabi-sketch-client.herokuapp.com/',
    images: [
      '/projectImages/wabi-sketch-2.webp',
      '/projectImages/wabi-sketch-5.webp',
      '/projectImages/wabi-sketch-6.webp'
    ],
    index: 4,
    tech: [
      { name: 'React.js', icon: '/icons/iconreact.png' },
      { name: 'PostgreSQL', icon: 'icons/iconPostGresql.png' },
      { name: 'Node.js', icon: 'icons/iconnode.png' },
      { name: 'JWT', icon: 'icons/iconJWT.png' },
      { name: 'Socket.io', icon: 'icons/iconSocketIO.png' }
    ]
  }
]

export default Projects

// ;PostgreSQL | Express | React.js | Node.js
