import FaqItem from "./FaqItem";
import { useState } from "react";

const FaqCard = () => {

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  const faqdata = [
    {
      id: 1,
      title: "What is Frontend Mentor, and how will it help me?",
      content: `Frontend Mentor offers realistic coding challenges to help developers improve their 
       frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
       all levels and ideal for portfolio building.`,
    },
    {
      id: 2,
      title: "Is Frontend Mentor free?",
      content: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.`,
    },
    {
      id: 3,
      title: "Can I use Frontend Mentor projects in my portfolio?",
      content: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!`,
    },
    {
      id: 4,
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      content: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.`,
    },
  ];

  return (
    <>
      <main className="bg-light card-container border rounded-4 shadow">
        <header className="d-flex align-items-center">
          <img src="/assets/images/icon-star.svg" alt="star-icon" />
          <h1 className="mb-0 mx-4" style={{fontWeight:700}}>FAQs</h1>
        </header>
        <div className="my-accordion">
            {faqdata.map((data) => (
             <FaqItem data={data} key={data.id} isActive={data.id === activeAccordion}
             onAccordionClick={() => handleAccordionClick(data.id)}
             />
            ))}
        </div>
      </main>
    </>
  );
};

export default FaqCard;
