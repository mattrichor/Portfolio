// import withAutoplay from 'react-awesome-slider/dist/autoplay'

// const AutoplaySlider = withAutoplay(AwesomeSlider)

const ProjectCard = ({ images, title, description, tech }) => {
  return (
    <div>
      <h1 className="project-card-title">{title}</h1>
      <div className="img-holder">
        {images.map((image) => (
          <img className="project-img" src={image}></img>
        ))}
      </div>

      <div className="project-card-description">{description}</div>

      <div className="tech">
        {tech.map((obj) => (
          <div className="tech-square">
            <img src={obj.icon} className="tech-icon" alt={obj.name}></img>
            {/* <div className="tech-name">{obj.name}</div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
