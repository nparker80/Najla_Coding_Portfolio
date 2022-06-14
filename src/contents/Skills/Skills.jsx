import Skill from './Skill'

function Skills() {
  return (
    <div className="skills">
      <h2>I have experience with these technologies</h2>
      <div className="skillsGrid">
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="The logo icon for react" title="React" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="The logo icon for HTML 5" title="HTML 5" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="The logo icon for CSS3" title="CSS 3" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for JavaScript" title="JavaScript" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="The logo icon for GitHub" title="GitHub" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="The logo icon for MongoDB" title="MongoDB" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="The logo icon for NodeJS" title="Node JS" />
      </div>
    </div>
  )
}
export default Skills