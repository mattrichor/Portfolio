import Tabs from './Tab'
import TabPane from './TabPane'

const Skills = () => {
  return (
    <div className="skills-container">
      <Tabs>
        <TabPane name="Programming Languages" key="1">
          <img
            className="skill-icon"
            src="/icons/iconHTML.png"
            alt="html logo"
          ></img>
          HTML |
          <img
            className="skill-icon"
            src="/icons/iconCSS.png"
            alt="css logo"
          ></img>
          CSS |{' '}
          <img
            className="skill-icon"
            src="/icons/iconJavaScript.png"
            alt="javascript logo"
          ></img>
          JavaScript |{' '}
          <img
            className="skill-icon"
            src="/icons/iconreact.png"
            alt="react logo"
          ></img>
          React.js |{' '}
          <img
            className="skill-icon"
            src="/icons/iconVue.png"
            alt="vue logo"
          ></img>
          Vue.js |{' '}
          <img
            className="skill-icon"
            src="/icons/skills/python.png"
            alt="python logo"
          ></img>{' '}
          Python3 |{' '}
          <img
            className="skill-icon"
            src="/icons/skills/django.png"
            alt="django logo"
          ></img>{' '}
          Django
        </TabPane>
        <TabPane name="Frameworks & Libraries" key="2">
          <img
            className="skill-icon"
            src="/icons/iconnode.png"
            alt="node.js logo"
          ></img>
          Node.js |{' '}
          <img
            className="skill-icon"
            src="/icons/skills/Express.png"
            alt="express logo"
          ></img>
          Express |{' '}
          <img
            className="skill-icon-nextjs"
            src="/icons/skills/next.png"
            alt="next.js logo"
          ></img>
          Next.js |{' '}
          <img
            className="skill-icon"
            src="/icons/skills/mongoose.svg"
            alt="mongoose logo"
          ></img>
          Mongoose
        </TabPane>
        <TabPane name="Database" key="3">
          <img
            className="skill-icon"
            src="/icons/iconMongo.png"
            alt="mongodb logo"
          ></img>
          MongoDB |{' '}
          <img
            className="skill-icon"
            src="/icons/iconPostGresql.png"
            alt="postgresql logo"
          ></img>
          PostgreSQL
        </TabPane>
        <TabPane name="Tools" key="4">
          <img
            className="skill-icon"
            src="/icons/skills/git.png"
            alt="git logo"
          ></img>
          Git |{' '}
          <img
            className="skill-icon"
            src="/icons/skills/github.png"
            alt="github logo"
          ></img>
          GitHub |{' '}
          <img
            className="skill-icon"
            src="/icons/skills/api.png"
            alt="api logo"
          ></img>
          RESTful APIs
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Skills
