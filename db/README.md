# MongoDB and Docker
The local, development database in this folder is configured as a Docker container, taken from an official [`mongo:4.4.4-bionic`](https://hub.docker.com/_/mongo) image of MongoDB.

### Installation
Instructions may differ depending on the operating systems, but given that the group uses Windows 10 and MacOS, the installation should be relatively straightforward. You will need to download the package for the recent most Docker for Desktop from the [official website](https://www.docker.com/products/docker-desktop) and follow the installation process. During installation process or after initializing Docker for the first time, Windows users may be prompted to install [WSL2](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux). If asked, the installer/application should provide the link to the required resources. Alternatively, you can follow Microsoft's [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) on how to configure WSL2, or [multiple](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) [other](https://www.windowscentral.com/how-install-wsl2-windows-10) [guides](https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/) on how to accomplish this.

### Commands
Docker Compose simplifies container management by separating the information dense parameters away from the commands. Parameters that would otherwise need to be manually provided in the regular Docker commands via input flags, are instead kept in the YAML configuration file. Given this dependency, Docker Compose requires to either execute the commands in the terminal while beinng inn the same folder as the configuration file, or use an [alternative syntax](https://docs.docker.com/compose/cli-command/) (experimental and not recommended). With this in mind, the common ways of managing the containers are listed below, while further overview can be found in the [online documentation](https://docs.docker.com/compose/reference/overview/).

##### Run the container
> docker-compose up

This command runs the docker container with the container’s inner console (in our case, MongoDB's daemon terminal) attached to the terminal. The command uses `docker-compose.yml` to instantiate the database, users, ports, volumes, and other configurations if container have not been instantiated before. Otherwise, the container reuses configurations, logs annd data stored in the volume managed by docker called `db_dit192_data`.

##### Run the container in the background
> docker-compose up -d

or 

> docker-compose up --detach 

The addition of the `-d` or `--detach` flags allows to run the container in the background without attaching the container's inner console to the terminal.

##### Stop the container
> docker-compose down

This command shuts down the container that runs in the background. Alternativly, if you have the container running attached to your terminal, you can use `Control-C` to safely stop the container.

##### Stop and reset container data
> docker-compose down -v

This command not only shuts down the container that runs in the background, but also removes the managed volume that contains container's data. This command can be executed even if container is not running. The effects of this command are irreverisble as the volume is completely destroyed in the process. Next time the container is turned on via `docker-compose up`, the script will instantiate a new, clean version of the container and the volume.

### Database credentials
The development database by default uses no authentication credentials, making it easier for the local instance of the backend to interface and maninpulate the data. That said, `db/` folder contains a hidden `.env` file used by the backend application. The file contains two variables:

- MONGO_DATABASE: `"team4db"` - specifies the default database name to use for the project
- MONGO_PORT: `37017` - specifies the default port used by the container. The port is deliberately changed to `37017` (from MongoDB's default `27017`) in order to prevent potential collissions with the native MongoDB server.

### How to connect
- Hostname: `localhost`
- Database: `team4db`
- Username: not needed
- Password: not needed
- Port: `37017`
- URI: `mongodb://localhost:37017/team4db`
