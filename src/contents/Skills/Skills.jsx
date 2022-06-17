import Skill from './Skill'
import './Skills.scss';

function Skills() {
  return (<div class="condiv skills">
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
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="The logo icon for Bootstrap" title="Bootstrap" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="The logo icon for Express" title="Express" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" alt="The logo icon for Heroku" title="Heroku" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="The logo icon for GraphQL" title="GraphQL" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="The logo icon for jQuery" title="jQuery" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="The logo icon for Jest" title="Jest" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="The logo icon for MySQL" title="MySQL" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="The logo icon for Visual Studio Code" title="VS Code" />
        <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="The logo icon for Sequelize" title="Sequelize" />
      </div>
    </div>
  </div>
  )
}
export default Skills