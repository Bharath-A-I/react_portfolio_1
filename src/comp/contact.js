export default function Contact(){
    return(<section id="contact">
        <div className="bg-primary">
            <h2 className="text-white font-bold text-5xl mb-6 relative group hover:scale-110 transition-transform duration-200 ease-in-out text-center">Contact Me..
                <span className="absolute left-0 bottom-0 w-1 h-1  duration-200 transition-all group-hover:w-full"></span>
            </h2>
            <p className="text-white text-2xl mt-4"> Got a question Feel free to reach out!</p>
            <div className="max-w-2xl mx-auto bg-primary">
                <form className="space-y-6 mt-5">
                    <div>
                        <label className="block text-left font-semibold text-white mb-1">
                            Your Name</label>
                            <input type="text"  className="rounded-md flex justify-center"placeholder="Enter your name"/>

                    </div>
                    <div>
                        <label className="block text-left font-semibold text-white mb-1">
                            Email ID </label>
                            <input type="text" className="rounded-md flex justify-center"placeholder="Enter your email"/>
                            
                    </div>
                    <div>
              <label className="block text-left font-semibold text-white mb-1">
                Your Message
              </label>
              <textarea
                placeholder="Write your message"
                rows="5"
                className="w-full  rounded-md"
              />
            </div>
            </form>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 mt-2 py-4  bg-secondary text-white py-2 rounded-md group-hover:bg-white transition-colors"
              >
                Send Message
              </button>
            </div>
                <div>
                    <h2 className="text-white font-bold">Email:</h2>
                    <p className="text-white"><a href="#">bharathazhagukumar@gmail.com</a></p>
                </div>
            </div>
        </div>

    </section>);
}