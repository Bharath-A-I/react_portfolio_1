import aboutimg from '../assets/About.jpeg';
export default function About(){
    return <section className="flex flex-col md:flex-row  bg-primary px-5 " id="about">
        
        <h1 className='text-white  border-b-3 mb-5 mt-6 text-5xl font-bold text-center hover:scale-110 transition-transform duration-300 ease-out'>About Me</h1>
        <div className="mt-6 flex justify-center items-center  md:w-1/3 md:h-1/3 lg:w-48 lg:h-48">
            <img src={aboutimg} className="my-4 w-1/3 h-36 rounded-full md:w-1/3 md:h-1/3 lg:w-48 lg:h-48 hover:scale-110 transition-transform duration-500 ease-out"></img>
        </div>
        <div className='md:w-1/2 flex justify-center hover:scale-110 transition-transform duration-300 ease-out'>
        <div className='px-20 flex flex-col justify-center font-about-font text-3xl'>
            <p className='pt-3  text-white'>Hi, I'm Bharath, a frontend developer and data scientist passionate about creating intuitive web applications and solving
                 problems through data insights.</p>
                <p className='pt-3  text-white'>I'm currently pursuing Bachelor of Technology at St.Joseph's Institute of Technology specializing Artificial Intelligence and Data Science</p>
            <p className='pt-3 text-white'>I blend modern technologies and data science tools to deliver impactful solutions while constantly learning and innovating.

</p>
            </div>
        </div>
        
    </section>
}