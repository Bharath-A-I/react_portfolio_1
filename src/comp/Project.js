import {motion} from 'framer-motion';
export default function Project(){
   const projdata=[
    {
        title:"Churn Prediction Model",
        description:"Developed a machine learning model to predict customer churn, leveraging data preprocessing, and classification algorithms. Improved business retention strategies by identifying at-risk customers and providing actionable insights.",

    },
    {
        title:"Sales Insights Analysis",
        description:" Designed an interactive Power BI dashboard to analyze sales performance across regions, products, and time periods. Provided actionable insights to stakeholders, such as identifying top-performing products, underperforming regions, and trends in customer behavior, enabling data-driven decision-making.",

    },
    {
        title:"TNEB Bill Calculator",
        description:"Developed an intuitive web application for calculating Tamil Nadu Electricity Board (TNEB) bills. Users can input their electricity consumption in units, and the calculator dynamically computes the bill based on TNEB's tariff rates, providing a user-friendly and accurate billing experience.",
        },
    {
        title:"Insurance Claim Prediction",
        description:"Built a machine learning model using the Random Forest Classifier to predict insurance claims. Addressed class imbalance using oversampling techniques and model evaluation metrics to ensure robust predictions. This project helped identify high-risk claims efficiently, optimizing the claim processing workflow.",

    },
   ]
   return(

    <section className="py-16 bg-primary" id="projects">
        <div className="text-center mb-10">
        <motion.div
          className="text-5xl font-bold mb-6 text-gray-800"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h1 className="text-white text-5xl font-bold mb-2 hover:scale-110 transition-transform duration-300 ease-out">Projects</h1>
            <p className="text-white text-2xl">
            A showcase of some of the projects I've worked on.
          </p>
          </motion.div>
        </div>
        <motion.div
          className=" mb-6 text-gray-800"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 ">
            {projdata.map((project,index)=>(<div key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lr transition-shadow hover:scale-110 transition-transform duration-300 ease-out">
                <div className="p-6">
              <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
              <p className=" text-1xl font-about-font">{project.description}</p>
            </div>
            </div>
                ))}
        </div>
        </motion.div>
    </section>
   
   );
}