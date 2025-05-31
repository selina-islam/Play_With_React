import React from "react";
import { faqdata } from "./data"; // faq data import korchi
import FaqCompo from "./FaqCompo"; // ekta component import korchi

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="py-6 text-3xl font-bold text-center text-gray-800">
        frequently asked questions
      </h1>

      {/* sob faq item map kore faqcompo te pathacchi */}
      <div className="space-y-4">
        {faqdata.map((faq) => (
          <FaqCompo key={faq.id} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
