"use client"
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What types of hosting plans do you offer?',
      answer: 'We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans.',
    },
    {
      id: 2,
      question: 'What is the uptime guarantee for your hosting services?',
      answer: 'We guarantee an uptime of 99.9% for all our hosting services.',
    },
    {
      id: 3,
      question: 'Do you provide website migration assistance?',
      answer: 'Yes, we offer free website migration assistance for new customers.',
    },
    {
      id: 4,
      question: 'What security measures do you have in place?',
      answer: 'We employ advanced security measures including firewalls, DDoS protection, and regular security audits.',
    },
  ];

  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className=" overflow-hidden">
      <section className="max-w-5xl mx-auto py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-bllue font-bold">Frequently asked questions</h2>
          <p className="text-lg font-medium text-dark dark:text-light">Questions related to web hosting</p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-2 py-4">
          <div className="mx-auto w-full max-w-5xl gap-10 grid grid-cols-1  rounded-lg ">
            {questions.map((faq, index) => (
              <motion.div initial={{ opacity: 0, x: 50 }}
              whileInView={{ x: 0, y: 0,opacity: 1, transition: { duration: 1, delay: index * 0.2, } }}
              viewport={{ once: true }} key={faq.id} className={` rounded-xl ${index < questions.length - 1 ? 'border-dark dark:border-light' : ''}`}>
                <button
                  className="flex w-full border border-dark dark:border-light items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-dark dark:text-light focus:outline-none p-5"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronLeft className={` size-5 text-dark dark:text-light ${expandedIndex === index ? '' : '-rotate-90'}`} />
                </button>
                {expandedIndex === index && (
                  <div className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-dark/70 dark:text-light/70 font-medium">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
