import networking from "../../images/network.png"
import machineLearning from "../../images/deep-learning.png"
import coding from "../../images/code.png"
import solution from "../../images/solution.png"

const MissionB = () => {
    return (
      <>
        <div className="flex flex-row gap-24">
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#ffbc08] via-[#fcac04] to-[#f48604] px-16 py-8 sm:px-4 sm:gap-2 sm:rounded-2xl gap-6 rounded-lg  md:w-[300px] md:h-[700px] shadow-xl">
            <img src={networking} className="align-top"></img>
            <span className="w-[260px] h-[800px]"><p className="text-gray-700 font-medium text-2xl mr-auto text-left ">Establish and cultivate a professional and supportive network for machine learning enthusiasts and practitioners within the academic community of San Jose State University.
            </p></span>
          {/* <img src={icon} alt="networking" className="w-32 h-32 sm:w-16 sm:h-16" /> */}
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#ffbc08] via-[#fcac04] to-[#f48604] px-16 py-8 sm:px-4 sm:gap-2 sm:rounded-2xl gap-6 rounded-lg md:w-[300px] md:h-[700px] shadow-xl">
          <img src={machineLearning} className="align-top"></img>
          <span className="w-[260px] h-[800px]"><p className="text-gray-700 font-medium text-2xl mr-auto text-left ">To equip students with practical machine learning skills that will empower them to excel in real-world applications and contribute to cutting-edge technological advancements in various industries.
            </p></span>
          {/* <img src={icon} alt="networking" className="w-32 h-32 sm:w-16 sm:h-16" /> */}
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#ffbc08] via-[#fcac04] to-[#f48604] px-16 py-8 sm:px-4 sm:gap-2 sm:rounded-2xl gap-6 rounded-lg md:w-[300px] md:h-[700px] shadow-xl">
          <img src={coding} className="align-top"></img>
            <span className="w-[260px] h-[800px]"><p className="text-gray-700 font-medium text-2xl mr-auto text-left ">To address and find solutions to globally impactful problems, actively engage with underrepresented communities, and creating an environment where their voices and perspectives are valued and integrated into the decision-making processes.
            </p></span>
            
          {/* <img src={icon} alt="networking" className="w-32 h-32 sm:w-16 sm:h-16" /> */}
          </div>
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#ffbc08] via-[#fcac04] to-[#f48604] px-16 py-8 sm:px-4 sm:gap-2 sm:rounded-2xl gap-6 rounded-lg md:w-[300px] md:h-[700px] shadow-xl">
          <img src={solution} className="align-top"></img>
          <span className="w-[260px] h-[800px]"><p className="text-gray-700 font-medium text-2xl mr-auto text-left ">We aim to substantiate our community's exceptional expertise in machine learning through rigorous research, practical implementations, and knowledge sharing.
            </p></span>
          {/* <img src={icon} alt="networking" className="w-32 h-32 sm:w-16 sm:h-16" /> */}
          </div>
        </div>
      </>
    )
}

export default MissionB

