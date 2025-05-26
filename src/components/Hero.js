"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="section pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I&apos;m <span className="text-blue-600">Sudikonda Ajay Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">
              MERN Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Seasoned software engineer with 4+ years of experience in building scalable, responsive web applications using modern technologies.
            </p>
           <div className="flex space-x-4">
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href="#contact" className="btn btn-primary">
      <span className='text-blue-500 font-bold'>Contact Me</span>
    </Link>
  </motion.div>

  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link href="#projects" className="btn btn-outline">
      <span className='text-blue-500 font-bold'>View Projects</span>
    </Link>
  </motion.div>
</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl ">
              <Image
                src="/images/ajay-profile.jpg" 
                alt="Sudikonda Ajay Kumar" 
                 width={256}
                 height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;