import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card50 from "../../assets/images/portfolio-images/card-50.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card49 from "../../assets/images/portfolio-images/card-49.png";
import card13 from "../../assets/images/portfolio-images/card-13.png";
import card51 from "../../assets/images/portfolio-images/card-51.png";

const projectData = [
  {
    id: 1,
    image: card49,
    category: "Web Dev",
    title: " Dashboard",
    description:
      "I developed a delivery package tracking system for a logistics company, where I handled data fetching, data cleaning and processing, extracted relevant information, and presented key insights through an interactive dashboard for monitoring deliveries.",
    link: "box.html",
  },
  {
    id: 2,
    image: card50,
    category: "Web Dev",
    title: "Javascript Time Estimator",
    description:
      "Since time estimation is crucial in web development, I built a website that estimates how long a JavaScript project may take to complete. This tool helped me plan my work more effectively and can also support future students in managing their projects.",
    link: "https://yassine-elamri34.github.io/JavaScript-Final-Project/",
  },
  {
    id: 3,
    image: card51,
    category: "Web Dev",
    title: "Web Design Project",
    description:
      "I developed a flip memory card game to showcase my coding skills, mainly focusing on advanced CSS techniques and animations learned during my studies.",
    link: "https://yassine-elamri34.github.io/Final-Web-Design-Project/",
  },
  
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            My portfolio showcases hands-on experience gained through real-world projects and coursework. Each project represents a unique challenge that allowed me to refine my technical, analytical, and creative skills.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
      <a
  href="#portfolio"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
>
  More Project
</a>

      </div>
    </div>
  );
};

export default Portfolio;
