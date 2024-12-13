import hero from '../assets/hero.jpg';
import { AiOutlineLinkedin,AiOutlineGithub} from "react-icons/ai";
export default function Hero(){
  return<section className="flex flex-col md:flex-row :fl px-5 py-32 bg-primary justify-center">
    <div className="md:w-1/2 hover:scale-110 transition-transform duration-300 ease-out">
    <h1 className=" text-white text-4xl font-hero-font">Hi,
    <br/> Iam Bharath A I<p className=" text-white text-2xl ">I am a Frontend Developer and Data Scientist</p>
    </h1>
    <div className="flex py-9">
        <a href="https://www.linkedin.com/in/bharath-azhagu-kumar-9098a0259/" target="_blank" className='pr-5 hover:text-white'><AiOutlineLinkedin size='40'/></a>
        <a href="https://github.com/Bharath-A-I"className='hover:text-white' target="_blank"rel="noopener noreferrer"><AiOutlineGithub size='40'/></a>
    </div>
   </div>
    <img className="w-1/3" src={hero}/>

  </section>  
}