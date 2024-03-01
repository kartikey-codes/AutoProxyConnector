export function GridBackgroundDemo() {
  // Define CSS styles as a string
  const styles = `
    @keyframes scroll {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .animate-scrolling-text {
      animation: scroll 20s linear infinite; /* Maintain duration for consistent speed */
    }

    .scrolling-text-container {
      white-space: nowrap; /* Prevent line breaks */
    }
  `;

  return (
    <div className="h-screen w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center pt-40 overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 pointer-events-none bg-black" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 30%, white)' }}></div>
      <p className="text-4xl sm:text-7xl font-bold z-30 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 absolute top-10 w-full text-center">
        Proxy <span className="font-bold text-yellow-500">Auto</span> Connector
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between relative w-full px-8 pb-8 md:pb-4">
        {/* Description */}
        <div className="text-lg text-gray-300 md:text-left md:mr-4 mb-4 md:mb-0 max-w-[70%] md:w-auto">
          Proxy Auto Connector is a tool designed to automate the process of connecting to <span className="font-bold text-yellow-500">Cloudflare WARP</span> on Windows. It simplifies the setup and scheduling of tasks, ensuring seamless and secure connectivity to Cloudflare WARP, thus enhancing your online privacy and security.
        </div>
        {/* Download button */}
        <div className="flex flex-col items-center md:items-start w-full px-8 mt-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            <a href="https://drive.google.com/file/d/12JrQSuzLPkmWqsbmid6TfCI3wRrffEWg/view?usp=sharing" download>
              Download ProxyAutoConnector
            </a>
          </button>
        </div>
      </div>
      {/* Inject CSS styles using style tag */}
      <style>{styles}</style>
      {/* Infinite horizontal information display bar */}
      <div className="h-[2rem] w-full bg-yellow-500 border border-gray-400 absolute bottom-0 left-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-full animate-scrolling-text flex items-center justify-start scrolling-text-container">
          <span className="text-black px-4 py-2 font-bold">THIS TOOL IS FOR WINDOWS PLATFORM ONLY</span>
          <span className="text-black px-4 py-2 font-bold">CLOUDFLARE WARP IS A PREREQUISITE</span>
          <span className="text-black px-4 py-2 font-bold">AUTOMATE YOUR CONNECTION PROCESS</span>
          <span className="text-black px-4 py-2 font-bold">ENHANCE YOUR ONLINE SECURITY</span>
        </div>
      </div>
    </div>
  );
}
