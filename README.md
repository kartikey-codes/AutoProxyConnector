# Auto Proxy Connector

Auto Proxy Connector is an open-source software tool designed to simplify the process of connecting to Cloudflare's WARP service on Windows. By automating the connection process, users can enjoy enhanced privacy and security without the hassle of manual setup.

## Tech Stack

- **Frontend**: React.js
- **Additional Tools**: Typescript, HTML, CSS

## Features

- **Easy Installation**: Users can download Cloudflare WARP for Windows directly from the application.
- **Automated Connection**: Set up a scheduled task to connect to Cloudflare's WARP service daily at a specified time.
- **Customization Options**: Adjust connection time and verify configuration through Windows Task Scheduler.

## Usage

### Installation

1. **Download Cloudflare WARP for Windows:**
   - Before proceeding, make sure to download Cloudflare WARP for Windows from the provided link.

2. **Install Auto Proxy Connector:**
   - Download the setup executable from the [latest release](https://github.com/kartikey-codes/Auto_Proxy_Connector/releases).
   - Run the setup executable and follow the installation instructions.

### Configuration

1. **Run Task Scheduler:**
   - Navigate to the folder where Auto Proxy Connector is installed (default location: `C:\Program Files (x86)\Auto_Proxy_Connector`).
   - Run the `task_scheduler.exe` file.
   - A scheduled task will be created automatically to connect to Cloudflare's WARP service daily at the specified time (default is 00:14).

2. **Verification:**
   - Open Windows Task Scheduler.
   - Go to Task Scheduler Library and find the details for the `AutoConnectCloudflare` task.
   - To adjust the connection time, go to Actions and edit the trigger to your preferred time.
   - Verify the path of the `connect_cloudflare.exe` in the Actions tab of the Windows Task Scheduler.

## Acknowledgements

- [Cloudflare](https://www.cloudflare.com/) for providing the underlying service and inspiration for this project.
- [Manu Arora](https://github.com/manuarora700) for building Accertify UI, whose components have been used in this project.

---
Made with ❤️ by Kartikey
