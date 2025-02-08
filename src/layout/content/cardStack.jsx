import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import passportImage from '../../assets/passport 1_page-0001.jpg'

const CardStack = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev < 4 ? prev + 1 : prev));
    }, 2000); // Change cards every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 1,
      content: (
        <div className="flex flex-col p-4">
          <img className="h-30 w-30 mx-auto mt-8 rounded-full object-cover" src={passportImage} alt="Software Engineer" />
          <h2 className="text-white font-bold mt-4 text-lg">Anthony M. Maina</h2>
        </div>
      ),
    },
    {
        id: 2,
        content: <p className="text-white p-4">👋 Hi, I&apos;m a passionate software engineer and a graduate with a bachelor&apos;s degree in Computer Science from Dedan kimathi University of Technology...</p>,
      },
    {
      id: 3,
      content: <p className="text-white p-4">💻 I am currently a software developer working with ReactJs, Angular, NodeJs, Graph-Ql, Postgres, MsSQL, Azure Functions, .Net, Go and Typescript...</p>,
    },
    {
      id: 4,
      content: <p className="text-white p-4">I am Proficient in Frontend & Backend Development and 🚀 Love building scalable and performant apps......</p>,
    },
    {
      id: 5,
      content: <p className="text-white p-4">📧 Let&apos;s connect and build something amazing!</p>,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[600px] mx-auto mt-8">
    {cards.map((card, index) => (
      <motion.div
        key={card.id}
        className="w-full bg-white/10 backdrop-blur-lg rounded-lg shadow-md flex items-center justify-center text-center border-[#AC4746] p-4 min-h-[120px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: index <= activeCard ? 1 : 0,
          y: index <= activeCard ? 0 : 20,
        }}
        transition={{ duration: 1 }}
      >
        {card.content}
      </motion.div>
    ))}
  </div>
);
};

export default CardStack;