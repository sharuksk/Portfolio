import lkscrap from "../assets/lkscrap.jpg";
import todo from "../assets/todo.jpg";
import traffic from "../assets/traffic.jpg";
import imgtobas64 from "../assets/imgtobase64.png"
import selfless from "../assets/selfless.jpeg"
import talentQatarIcon from "../assets/talentQatarIcon.png"
import youCommerceIcon from "../assets/youCommerceIcon.png"

const ProjectData = [
    {
        id:1,
        projectName:"You Commerce",
        demo:"https://ecommerce-fullpack.onrender.com/app/",
        imgsrc:youCommerceIcon,
        desc:"Complete ECommerce Website",
        projectDetails: "A full-featured e-commerce platform built with modern web technologies, featuring user authentication, product catalog, shopping cart, and secure payment processing."
    },
    {
        id:2,
        projectName:"Talent Qatar",
        demo:"https://talent-qatar.onrender.com/",
        imgsrc:talentQatarIcon,
        desc:"Interview Hosting Platform",
        projectDetails: "An innovative platform for hosting virtual job interviews, enabling recruiters to conduct seamless remote interviews with video, chat, and assessment tools."
    },
    {
        id:3,
        projectName:"Personless Merchandise Store",
        demo:"https://main--merchandise-store.netlify.app/",
        imgsrc:selfless,
        desc:"PersonLess Merchandise Purchasing",
        projectDetails: "A unique merchandise store concept allowing users to purchase items anonymously, focusing on privacy and simplified checkout processes."
    },
    {
        id:4,
        projectName:"LinkedIN scraping",
        demo:"https://github.com/sharuksk/LinkedIN-Scrap",
        imgsrc:lkscrap,
        desc:"LinkedIN scraping tool (backend)",
        projectDetails: "A backend scraping tool designed to extract professional data from LinkedIn profiles, useful for recruitment analytics and networking insights."
    },
    {
        id:5,
        projectName:"Traffic Analytics",
        demo:"https://traffic-analysis.netlify.app/",
        imgsrc:traffic,
        desc:"Traffic Analytics",
        projectDetails: "A web-based analytics dashboard that visualizes website traffic data, providing insights into user behavior, page views, and engagement metrics."
    },
    {
        id:6,
        projectName:"Image to Base64",
        demo:"https://main--best-image-base64-converter.netlify.app/",
        imgsrc:imgtobas64,
        desc:"Image to Base64",
        projectDetails: "A simple and efficient online tool for converting image files to Base64 encoded strings, commonly used in web development for embedding images directly in code."
    },
    
]

export default ProjectData;
