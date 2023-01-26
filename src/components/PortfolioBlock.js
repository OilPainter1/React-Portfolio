import Info from "./infoBlock"

function PortfolioBlock(project){
    return <div>
        <div>
            <img href={project.img} src={project.src}alt={project.alt}>
    
            </img>
        </div>
        <div>
            <Info info={project.name} link={project.link}></Info>
        </div>
    </div>
}

export default PortfolioBlock