
import { Link } from "react-router-dom";
import systemImage from '../../assets/programmer.jpg'
import CardStack from './cardStack';
import ExperienceSection from './experience';

const Content = () => {
    return (
        <div className="content  text-white flex-grow-10  p-4 text-center flex flex-col items-center justify-center">
            <div className="intro">
                <h1 className="text-3xl  font-bold mt-8 ">Software Engineer | Proficient in Frontend & Backend Development</h1>
                <p className="font-semibold mt-8">Making every click an amazing innovation through Design and Code.  </p>
                <CardStack />
                <Link 
                  to="/cv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 inline-block"
                >
                    <button className="bg-[#AC4746] text-white font-bold px-4 py-2 rounded-md">
                        Download my CV
                    </button>
                </Link>
               <img className="max-w-70 mx-auto mt-8 rounded-full shadow-lg sm:max-w-150" src={systemImage} alt="Software Engineer"
                style={{
                     maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                        WebkitMaskImage:
                       "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
  }}
/>
            </div>
            <div className="w-full border-b-4 border-black shadow-md my-5"></div>
            <ExperienceSection />
   
        </div>
    );
};

export default Content;