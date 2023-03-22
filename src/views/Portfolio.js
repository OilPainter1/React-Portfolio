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
                description="Allows users to search a city by name and get the weather for that city at the time of search"
                technologies="HTML, CSS, JavaScript, Fetch API, Document Object Model (DOM)"
            ></PortfolioBlock>
        </div>
        <div className="col">
            <PortfolioBlock
                    img="../../public"
                    src= "TimerAppScreenshot.png"
                    link= "https://oilpainter1.github.io/Timer-App/"
                    alt="Timer"
                    name="Timer"
                    github="See on github"
                    githubURL="https://github.com/OilPainter1/Timer-App"
                    description="Allows users to set, start, and stop a timer"
                    technologies="HTML, CSS, JavaScript, jQuery, jQuery UI, Bulma, Moment.js">
            </PortfolioBlock>
            </div>
        <div className="col">
            <PortfolioBlock
                img="../../public"
                src= "techBlog.png"
                link= "https://young-bayou-28621.herokuapp.com/"
                alt="techBlog"
                name="techBlog"
                github="See on github"
                githubURL="https://github.com/OilPainter1/techBlog"
                description="This was my first full-stack app. A user can sign up and then make posts to their dashboard that persist in a database. The user can then log out and log back in to see their past posts"
                technologies="Express.js, handlebars.js, Sequelize">
            </PortfolioBlock>
        </div>
        </div>
        <hr></hr>
        <div className="row align-items-center">
            <div className="col">
                <PortfolioBlock
                    img="../../public"
                    src= "Smaller-Team-Generator-Screenshot.png"
                    alt="Team-Profile-Generator"
                    name="Team Profile Generator"
                    github="See on github"
                    githubURL="https://github.com/OilPainter1/Team-Profile-Generator"
                    description="A command line application that allows a user to input data about employees and then genrates an html page that displays the user input"
                    technologies="Node.js, npm Inquirer, npm Jest">

                </PortfolioBlock>
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
                description="This is the first website about me that I made"
                technologies="HTML, CSS"
            ></PortfolioBlock>
        </div>
            <div className="col">
                <PortfolioBlock
                    img="../../public"
                    src="employee-cms.png"
                    name="Employee Database CLI"
                    github="See on github"
                    githubURL="https://github.com/OilPainter1/Employee-Tracker-CMS"
                    description="A command line program that allows users to add to and read from a database that consists of departments, roles, and employees"
                    technologies="Node.js, npm Inquirer, MySQL">
                </PortfolioBlock>
            </div>
        </div>
        </div>
    )
}

export default Portfolio