import InfoFooter from "./footerBlock"

function PortfolioBlock(project){
    return <>
        <div className="container">
            <img className="img-thumbnail"href={project.img} src={project.src}alt={project.alt}>
    
            </img>
        </div>
        <div>
            <InfoFooter info={project.name} link={project.link} highlight="btn btn-primary"></InfoFooter>
        </div>
    </>
}

export default PortfolioBlock