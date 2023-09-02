import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                Hello World!
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              
            </div>
            <div>
              <p>
                {" "}
                Hi, I'm Daniel Stratford, <br></br>
                
                Currently in my final year with the Open University, 
                A software developer with experience in building Responsive Web apps. 
                I am a strong believer that UI/UX principles make or break a project. 
                <br></br>
                I have basic back-end knowledge with Java, Python, Mongo and MySQL knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;