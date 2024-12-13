import {motion} from 'framer-motion';
export default function Skills(){
    const skills=[{
        name:"Python",level:"80%"},{name:"C programming",level:"60%"},
        {name:"Java Programming",level:'65%'},{name:"HTML",level:"70%"},{
            name:"CSS",level:'70%'},{name:"Javascript",level:"60%"},{name:"ReactJS",level:"45%"},{
                name:"Power BI",level:"50%"},{name:"Microsoft Excel",level:"50%"}];
                return (
                    <section className="py-16 bg-primary" id="skills">
                       <motion.div
          className="text-5xl font-bold mb-6 text-gray-800"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeIn" }}
        >
                      <div className="container mx-auto text-center">
                        <h2 className="text-5xl text-white font-bold mb-6 hover:scale-110 transition-transform duration-300 ease-out">Skills</h2>
                        <p className="text-white text-2xl mb-10">
                          These are the technologies and tools I have expertise in:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                          {skills.map((skill, index) => (
                            <div
                              key={index}
                              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow relative group hover:scale-110 transition-transform duration-300 ease-out"
                            >
                              <p className="text-lg font-semibold text-gray-700 mb-4">{skill.name}</p>
                
                              {/* Progress Bar */}
                              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                                <div
                                  className={`h-2.5 rounded-full ${skill.level >= 70 ? 'bg-teal-500' : skill.level >=50 ? 'bg-blue-500':'bg-green-400'} hover:scale-110 transition-transform duration-300 ease-out`}
                                  style={{ width: `${skill.level}` }}
                                />
                              </div>
                
                              {/* Tooltip for Level */}
                              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-2 text-xs font-medium text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Level: {skill.level}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      </motion.div>
                    </section>
                  );
                }