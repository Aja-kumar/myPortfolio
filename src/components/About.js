"use client"

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-gray-500 p-2">
  About <span className="text-blue-500">Me</span>
</h2>

        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img 
                src="/images/ajay-profile.jpg" 
                alt="Sudikonda Ajay Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">MERN Stack Developer with 4+ Years of Experience</h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate software engineer dedicated to building complex, scalable, and resilient software systems. 
              With a strong focus on user experience and performance, I specialize in creating responsive web applications 
              using modern technologies like React.js, Next.js, Node.js, and MongoDB.
            </p>
            <p className="text-gray-600 mb-4">
              My approach combines technical expertise with empathy-driven communication and problem-solving skills. 
              I take pride in my ability to understand user needs and translate them into efficient, maintainable code.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond coding, I enjoy mentoring junior developers and contributing to architectural decisions that 
              improve both developer productivity and application performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-semibold">Name:</span> Sudikonda Ajay Kumar</p>
                <p><span className="font-semibold">Email:</span> ajaysudikonda1312@gmail.com</p>
                <p><span className="font-semibold">Phone:</span> +91 7989770773</p>
              </div>
              <div>
                <p><span className="font-semibold">Experience:</span> 4+ Years</p>
                <p><span className="font-semibold">Education:</span> B.Tech in Mechanical Engineering</p>
                <p><span className="font-semibold">Location:</span> Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;