import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Faqs from "@/constants/Faqs";

const FaqSection = () => {
  return (
    <div className="w-[70%] sm:w-1/2" aria-label="faq section">
      <h2 className="sub-heading">
        Check out the following FAQs to answer your burning questions! 🙋‍♂️
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {Faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={faq.question}>
            <AccordionTrigger aria-label="question">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent aria-label="answer">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
