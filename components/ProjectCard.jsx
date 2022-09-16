const ProjectCard = ({ images, title, description }) => {
  return (
    <div>
      <div className="project-card-title">{title}</div>
      <div className="project-card-description">{description}</div>
      {images.map((image) => (
        <img src={image}></img>
      ))}
    </div>
  )
}

export default ProjectCard
