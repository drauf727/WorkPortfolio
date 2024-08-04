import "../portfolio.css"
import PortfolioCard from "../components/portfoliocards";
import tutorhub from "../assets/tutorhub.gif";
import journeysend from "../assets/journeysend.gif";
import fivedayweather from "../assets/5dayweather.png"; 
import dailymotivation from "../assets/dailymotivation.png";
import ourspace from "../assets/ourspace.png";
import letsblog from "../assets/letsblog.png";

const Portfolio = () => {
  const projects = [
    {
      title: "TutorHub",
      description: "Web application allowing musical tutors and students to connect",
      image: tutorhub,
      github: "https://github.com/drauf727/tutorHub",
      deployed: "https://tutorhub-spk8.onrender.com/",
    },
    {
      title: "Journey's End",
      description: "Web application allowing you to check events and weather in a city",
      image: journeysend,
      github: "https://github.com/drauf727/Journeys-End",
      deployed: "https://drauf727.github.io/Journeys-End/",
    },
    {
      title: "5 Day Weather Forecast",
      description: "Choose your city and get a 5 day forecast",
      image: fivedayweather,
      github: "https://github.com/drauf727/5-Day-Weather-Forecast",
      deployed: "https://drauf727.github.io/5-Day-Weather-Forecast/",
      },
      {
        title: "Daily Motivation",
        description: "Get a burst of positivity with quotes on success",
        image: dailymotivation,
        github: "https://github.com/drauf727/Daily-Motivation",
        deployed: "https://drauf727.github.io/Daily-Motivation/",
        },
        {
          title: "OurSpace",
          description: "Tech blog allowing you to chat with other software engineers",
          image: ourspace,
          github: "https://github.com/drauf727/OurSpaceTechBlog",
          deployed: "https://ourspacetechblog.onrender.com/",
          },
          {
            title: "LetsBlog",
            description: "Basic blogging platform for users to share whats on their mind",
            image: letsblog,
            github: "https://github.com/drauf727/Let-s-Blog",
            deployed: "https://drauf727.github.io/Let-s-Blog/",
            }
  ];

  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;