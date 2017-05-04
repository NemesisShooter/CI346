# Programming Languages, Concurrency and Client Server Computing

## I do not use WildFly for this project instead i use SpringBoot

## Setup
This guide gives instructions on setting up this project on `Windows`.

* Install [apache-maven-3.3.9-bin.zip](http://www.mirrorservice.org/sites/ftp.apache.org/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.zip), download the .zip and follow the instructions found [here](https://maven.apache.org/install.html).
* * Java: `JAVA_HOME` should point to `C:\Program Files\Java\jdk-version`.
* * Maven: `PATH` should have `;path/to/apache-maven-3.3.9/` appended to the end.
* Intall [NodeJS + NPM](https://nodejs.org/en/) to get access to extra packages like Webpack, Bootstrap and ReactJS.

## Database
I am using USBwebserver to create database.

Settings:
Apachi port: 8888
MySQL port: 3300

To install database:
1. Log in to web interface of USBwebserver.
2. In the web interface of USBwebserver click Databases and create database called "employees".
3. Inside the database click "Import", then in the project folder go to folder called "DB" and import file called "employees.sql".
4. The database all set and running.

## Run configuration
In eclipse create run configuration similar to this:
https://puu.sh/vFnDz/49abbf31a1.png

Use jdk 1.8.0_xxx