# MongoDB and Docker
The local, development database in this folder is configured as a Docker container, taken from an official [`mongo:4.4.4-bionic`](https://hub.docker.com/_/mongo) image of MongoDB.

### Installation
Instructions may differ depending on the operating systems, but given that the group uses Windows 10 and MacOS, the installation should be relatively straightforward. You will need to download the package for the recent most Docker for Desktop from the [official website](https://www.docker.com/products/docker-desktop) and follow the installation process. During installation process or after initializing Docker for the first time, Windows users may be prompted to install [WSL2](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux). If asked, the installer/application should provide the link to the required resources. Alternatively, you can follow Microsoft's [official documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) on how to configure WSL2, or [multiple](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) [other](https://www.windowscentral.com/how-install-wsl2-windows-10) [guides](https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/) on how to accomplish this.

### Configuring the container
The communication between the database and backend depends on two shared parameters: 1) which port the container exposes the database at, and 2) what is the default name of the database that should be used for application's data. In order to align these system components in a neat way, both the `docker-compose.yml` script and `backend/` are configured to get these variables from a shared `.env` configuration file (**note**: specifically called `.env`, not `mongodb.env`, `env.env`, or `file.env`). By default, `.env` is not pushed into the repository in order to allow every developer to configure their development environment in the way they want. This means that before you can start using this Docker container and Backend server, you need to create the `.env` file in the `./team-4-visitor-app/db` folder.

The file should contain two variables:
- **MONGO_DATABASE**: specifies the default database name to use for the project.
- **MONGO_PORT**: specifies the default access port used by the container. You can configure any open/unused port between `0` and `65353`, though the port range below `1023` is usually reserved by the common applications and OS services. The default port that the native MongoDB server uses is `27017`, which means that if you have the native server already installed and running on your machine, the container will fail to instantiate due to the port already being taken by MongoDB server. One recommendation is to set the port number to `37017`, `47017`, or `57017`. However, if one of these ports is already bound to another service, just specify any other open, unused port - after all, these are your personal configurations, relevant only to your development environment.

As an example, the contents of a proper `.env` file would look like this:

```
MONGO_DATABASE="team4db"
MONGO_PORT=37017
```

Make sure that this file is saved in the `./team-4-visitor-app/db` folder, e.g. with the final path to the file (from repository's POV) being `./team-4-visitor-app/db/.env`. After this is done, you can proceed with actually running the container and executing the commands below.

### Common Commands
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

### Connection credentials for external DB visualizers
- Hostname: `localhost`
- Database: `your MONGO_DATABASE value from .env file`
- Username: leave this blank
- Password: leave this blank
- Port: `<your MONGO_PORT value from .env file>`
- URI: `mongodb://localhost:Port_value_above/Database_value_above`
