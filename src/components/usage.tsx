export function Usage() {
    return (
      <div className="h-screen w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center pt-8 overflow-hidden">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 pointer-events-none bg-black" style={{ maskImage: 'radial-gradient(ellipse at center, transparent 70%, white)' }}></div>
        <div className="text-lg text-gray-200 md:text-left md:mr-4 mb-4 md:mb-0 max-w-[70%] md:w-auto">
          <h1 className="text-3xl font-bold text-yellow-500 mb-4">Usage</h1>
          <p>
            Before proceeding, make sure to{" "}
            <span className="font-bold">
              download Cloudflare WARP for Windows
            </span>
            :
          </p>
          <p className="mt-2">
            You can download Cloudflare WARP for Windows{" "}
            <a
              href="https://1111-releases.cloudflareclient.com/windows/Cloudflare_WARP_Release-x64.msi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold"
            >
              here
            </a>
            .
          </p>
          <p className="mt-4">
            Once Cloudflare WARP is installed, proceed with the following steps:
          </p>
          <ol className="list-decimal ml-6">
            <li>
              <strong>Download the Setup:</strong>
              <p>
                Download the setup executable by clicking the button above and
                install it on your computer.
              </p>
            </li>
            <li>
              <strong>Run Task Scheduler:</strong>
              <ul className="list-disc ml-6">
                <li>
                  Navigate to the folder where AutoCloudfareConnect is installed
                  (default location:{" "}
                  <code>C:\Program Files (x86)\AutoCloudfareConnect</code>).
                </li>
                <li>
                  Run the <code>task_scheduler.exe</code> file.
                </li>
                <li>
                  The scheduled task will be created automatically to connect to
                  Cloudflare's WARP service daily at the specified time (default
                  is 00:14).
                </li>
              </ul>
            </li>
            <li>
              <strong>Verification:</strong>
              <ul className="list-disc ml-6">
                <li>Open Windows Task Scheduler.</li>
                <li>
                  Go to Task Scheduler Library and find the details for the{" "}
                  <code>AutoConnectCloudflare</code> task.
                </li>
                <li>
                  If you want to adjust the connection time, you can go to Actions
                  and edit the trigger to your preferred time.
                </li>
                <li>
                  Verify the path of the <code>connect_cloudflare.exe</code> in
                  the Actions tab of the Windows Task Scheduler.
                </li>
              </ul>
            </li>
          </ol>
        </div>
  
        {/* Footer */}
        <div className="flex flex-col items-center justify-center absolute bottom-0 left-0 w-full">
          <div className="text-gray-300 font-medium">Made with ❤️ by Kartikey</div>
          <div className="text-center font-medium">
            <a
              href="https://www.linkedin.com/in/kartikey-bhatnagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline mx-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kartikey-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline mx-4"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/kartickeyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:underline mx-4"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    );
  }
  