// import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ images, title, description, tech, url }) => {
  return (
    <div>
      <h1 className="project-card-title">{title}</h1>
      {url.url !== '' ? (
        <a className="link" href={url.url}>
          Deployed on
          <span className="deploy-url"> {url.on}</span>
          <img className="logo" src={url.icon}></img>
        </a>
      ) : (
        <div></div>
      )}

      <div className="img-holder">
        {images.map((image) => (
          <a className="img-wrap" href={url.url}>
            <img className="project-img" src={image}></img>
          </a>
        ))}
      </div>

      <div className="project-card-description">{description}</div>

      <div className="tech">
        {tech.map((obj) => (
          <div className="tech-square">
            <img src={obj.icon} className="tech-icon" alt={obj.name}></img>
            <p class="img-description">{obj.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
