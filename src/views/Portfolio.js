import PortfolioBlock from "../components/PortfolioBlock"

function Portfolio() {
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
                github= "See on github"
                githubURL="https://github.com/OilPainter1/Weather-App"
            ></PortfolioBlock>
        </div>
        <div className="col">
            <PortfolioBlock
                img="../../public"
                src="firstWebpage.png"
                link="https://oilpainter1.github.io/Module-2-Challenge/"
                alt="firstWebpage"
                name="First Webpage"
                github="See on github"
                githubURL="https://github.com/OilPainter1/Module-2-Challenge"
            ></PortfolioBlock>
        </div>
        <div className="col">
            <PortfolioBlock
                img="../../public"
                src= "techBlog.png"
                link= "https://young-bayou-28621.herokuapp.com/"
                alt="techBlog"
                name="techBlog"
                github="See on github"
                githubURL="https://github.com/OilPainter1/techBlog">

            </PortfolioBlock>
        </div>
        </div>
        <hr></hr>
        <div className="row align-items-center">
            <div className="col">
                <PortfolioBlock
                    img="../../public"
                    src= "body-of-cards.png"
                    link= "https://krenbot.github.io/body-of-cards/"
                    alt="techBlog"
                    name="Body of Cards"
                    github="See on github"
                    githubURL="https://github.com/Krenbot/body-of-cards">

                </PortfolioBlock>
            </div>
            <div className="col">
            <PortfolioBlock
                    img="../../public"
                    src= "bookNook.png"
                    link= "https://book-nook.herokuapp.com/login"
                    alt="bookNook"
                    name="Book Nook"
                    github="See on github"
                    githubURL="https://github.com/Krenbot/book-nook">
            </PortfolioBlock>
            </div>
            <div className="col">
                <PortfolioBlock
                    img="../../public"
                    src="employee-cms.png"
                    name="Employee Database CLI"
                    github="See on github"
                    githubURL="https://github.com/OilPainter1/Employee-Tracker-CMS">


                </PortfolioBlock>
            </div>
        </div>
        </div>
    )
}

export default Portfolio