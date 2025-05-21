import { Vortex } from "../ui/vortex.tsx";

const VortexDemo = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Ready to get started?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Experience the new way of working with our platform. We are here to help you.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="#"
             className="flex items-center justify-center w-fit mt-8 mx-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 dark:hover:from-blue-700 dark:hover:to-cyan-600 focus:outline-none dark:focus:ring-primary-800 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            Connect us now
          </a>
        </div>
      </Vortex>
    </div>
  );
}

export default VortexDemo;
