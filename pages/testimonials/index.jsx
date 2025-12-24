import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        
        {/* Heading */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-6"
        >
          Testimonials <span className="text-accent">Coming Soon</span>
        </motion.h2>

        {/* Coming Soon Message */}
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-xl text-white/70 text-lg leading-relaxed"
        >
          Client testimonials coming soon. Meanwhile, feel free to explore my
          projects, GitHub repositories, and technical skills.
        </motion.p>

      </div>
    </div>
  );
};

export default Testimonials;
