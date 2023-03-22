import InfoFooter from "./footerBlock"

function PortfolioBlock(project){
    return <>
        <div className="container">
            <h2 className="fw-bold text-dark">{project.name}</h2>
            <img className="img-thumbnail"href={project.img} src={project.src}alt={project.alt}>
    
            </img>
        </div>
        <div className="container">
            <InfoFooter info={project.name} link={project.link} highlight="btn btn-primary"></InfoFooter>
            <InfoFooter info ={project.github} link={project.githubURL} highlight="btn btn-secondary"></InfoFooter>
            <p>{project.description}</p>
        </div>
    </>
}

export default PortfolioBlock