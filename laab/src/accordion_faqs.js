import React, { useState } from 'react';
import './accordion.css';

const faqs = [
  {
    question: "Why does the playground need to be rebuilt?",
    answer:
      "The equipment that was installed in 2021 was not commercial grade and has deteriorated rapidly. We want to put in something that will be safe and last."
  },
  {
    question: "Won’t this equipment be broken in a year like the last playground was?",
    answer:
      "No! The new equipment is from Kompan, a leading commercial playground manufacturer based in Europe, who has taken the heavy use (and potential misuse) of the playground into account and suggested pieces that are durable and low-maintenance. They built the playground at ACST in Tunis and know our climate and community well."
  },
  {
    question: "Will the playground still be free, or will it now be pay-for-play, like Park Essada?",
    answer:
      "Because it will be funded by the community, the playground will remain free for everyone."
  },
  {
    question: "Why aren’t you using a local manufacturer for the equipment?",
    answer:
      "Unfortunately, there is not a local manufacturer of playground equipment that is designed to hold up to the kind of use our playground gets. We want to invest once in equipment designed to last for a decade or longer."
  },
  {
    question: "How do I know my donation won’t be used for another purpose, like paying salaries or funding another municipal project?",
    answer:
      "All donations are being held by us, the community organizers, not the municipality. We will buy the equipment directly from the manufacturer, and pay contractors for installation and surfacing directly. 100% of funds raised — whether that’s $5,000 or $100,000 — will go to improving the playground."
  },
  {
    question: "Is the Municipality on board? What is their contribution?",
    answer:
      "Yes. We have worked with relevant officials at the municipality who welcome the new project. The municipality funded stage 1 of the project, which was to repair the current play structures and install swings. However, a capital overhaul of the playground is far outside the budget for a small municipality in a country struggling with a public funding crisis."
  },
  {
    question: "Can the local business I own sponsor the playground in some way?",
    answer:
      "Yes! We are partnering with several local businesses to match funds raised by the community and help get us closer to our goal. Please reach out."
  },
  {
    question: "Who is organizing this new playground?",
    answer:
      "An all-volunteer group of neighbors and friends of the park: Linda Barhoumi, Erin Brown, Katherine Li Johnson and Racem Souayah."
  }
];

const AccordionFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="accordion-section">
      <h2 className="accordion-title">Frequently asked questions</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <button
              className={`accordion-question ${activeIndex === index ? 'open' : ''}`}
              onClick={() => toggleIndex(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="accordion-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccordionFAQs;
