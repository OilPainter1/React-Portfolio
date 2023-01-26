import Info from "./infoBlock"

function PortfolioBlock(project){
    return <div>
        <div>
            <img src={project.img} alt={project.alt}>
    
            </img>
        </div>
        <div>
            <Info info={project.name} link={project.link}></Info>
        </div>
    </div>
}

export default PortfolioBlock