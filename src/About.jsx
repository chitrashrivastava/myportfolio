import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedLink from './AnimatedLink';
const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="about py-12 text-white"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      data-scroll
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between"
          variants={containerVariants}
        >
          <motion.div
            className="content md:w-1/2 mb-8 md:mb-0"
            variants={boxVariants}
          >
            <p className="text-gray-100 text-[18px]">
              I am a dedicated scholar enrolled at the esteemed Lakshmi Narain College of Technology, RGPV, where I am presently engaged in
              the pursuit of a Master's degree in the intersection of
              Computer Applications.
            </p>
            <div className="box-container mt-6 flex flex-col md:flex-col">
              <div className="box mr-6">
                <p className="text-gray-200">
                  <span className="font-semibold text-[18px]">Age: 21</span>
                </p>
              </div>
              <div className="box text-[18px]">
                <p className="text-gray-200">
                  <span className="font-semibold">Phone:</span> 7225884673
                 
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold">Email:</span>{' '}
                  chitrashrivastava64@gmail.com
                </p>
              </div>
            </div>
     <AnimatedLink/>
            
            
          </motion.div>
        </motion.div>

        <motion.h1
          className="heading text-4xl font-bold mt-12"
          variants={boxVariants}
        >
          <span className="text-yellow-300">My</span> Skills
        </motion.h1>

        <div className="row-2 mt-8">
          <motion.div
            className="flex flex-col gap-4 justify-center items-center w-full md:flex-row"
            variants={boxVariants}
          >
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
              <motion.div
                className="bg-gradient-to-b from-blue-400 to-blue-600 p-6 rounded-lg shadow-lg"
                variants={boxVariants}
              >
                <h3 className="text-[15px] font-semibold mb-2">
                  MERN Stack Development
                </h3>
              </motion.div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
              <motion.div
                className="bg-gradient-to-b from-purple-400 to-purple-600 p-6 rounded-lg shadow-lg"
                variants={boxVariants}
              >
                <h3 className="text-[15px] font-semibold mb-2">DBMS</h3>
              </motion.div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
              <motion.div
                className="bg-gradient-to-b from-pink-400 to-pink-600 p-6 rounded-lg shadow-lg"
                variants={boxVariants}
              >
                <h3 className="text-[15px] font-semibold mb-2">C/C++</h3>
              </motion.div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
              <motion.div
                className="bg-gradient-to-b from-green-400 to-green-600 p-6 rounded-lg shadow-lg"
                variants={boxVariants}
              >
                <h3 className="text-[15px] font-semibold mb-2">Python</h3>
              </motion.div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
              <motion.div
                className="bg-gradient-to-b from-yellow-400 to-yellow-600 p-6 rounded-lg shadow-lg"
                variants={boxVariants}
              >
                <h3 className="text-[15px] font-semibold mb-2">
                 Java
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;