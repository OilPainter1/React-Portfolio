import PortfolioBlock from "../components/PortfolioBlock"

function AboutMe() {
    return (
    <div className="container text-center">
    <div className="row align-items-center">
        <div className="col">
            <PortfolioBlock
                img="../../public"
                src="weatherApp.png"
                link="https://oilpainter1.github.io/Weather-App/"
                alt="weatherApp"
                name="Weather Forecast App"
            ></PortfolioBlock>
        </div>
        <div className="col">
            <PortfolioBlock
                img="../../public"
                src="firstWebpage.png"
                link="https://oilpainter1.github.io/Module-2-Challenge/"
                alt="firstWebpage"
                name="First Webpage"
            ></PortfolioBlock>
        </div>
        <div className="col">
            <PortfolioBlock
                img="../../public"
                src= "techBlog.png"
                link= "https://young-bayou-28621.herokuapp.com/"
                alt="techBlog"
                name="techBlog">

            </PortfolioBlock>
        </div>
        <div className="row align-items-center">
        <div className="col">
            <PortfolioBlock
                img="../../public"
                src= "techBlog.png"
                link= "https://young-bayou-28621.herokuapp.com/"
                alt="techBlog"
                name="techBlog">

            </PortfolioBlock>
        </div>
        </div>
      </div>
      <div className="col">
        One of three columns
      </div>
      <div className="col">
        One of three columns
      </div>
    </div>
    )
}

export default AboutMe