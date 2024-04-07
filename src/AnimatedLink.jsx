
import { motion } from 'framer-motion';

const AnimatedLink = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex items-center "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-gradient-to-r from-blue-500 to-indigo-500  rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >

        <motion.a
          href="https://drive.google.com/file/d/18ZAaXOlgvk4U6ot_kFyRj38uaLN8xZ8c/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white text-[16px] transition duration-300"
        >
          View Resume
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLink;
