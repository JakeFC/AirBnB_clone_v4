# AirBnB Clone - Web Dynamic

#### What is this repository?
This is 

![alt text](https://github.com/JakeFC/AirBnB_clone_v4/blob/master/readme_used.jpg?raw=true)

## Environment
* OS: Ubuntu 14.04 LTS
* language: Python 3.4.3
* web server: nginx/1.4.6
* application server: Flask 0.12.2, Jinja2 2.9.6

#### Deploying to server

```
$ fab -f 3-deploy_web_static.py deploy -i {my_ssh_private_key} -u ubuntu
```

#### Installing Flask

JQuery version - `<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>`

Install flasgger

```
$ sudo apt-get install -y python3-lxml
$ sudo pip3 install flask_cors # if it was not installed yet
$ sudo pip3 install flasgger

```

on jsonschema exception

```
$ sudo pip3 uninstall -y jsonschema 
$ sudo pip3 install jsonschema==3.0.1

```

for no pathlib2 error

```

$ sudo pip3 install pathlib2

```

#### Setting up MySQL database

```
$ cat setup_mysql_dev.sql | mysql -uroot -p
```

#### Filling the database with example information (optonal)

```
$ curl -o 100-dump.sql "https://s3.amazonaws.com/intranet-projects-files/holbertonschool-higher-level_programming+/290/100-hbnb.sql"
$ cat 100-dump.sql | mysql -uroot -p
```

#### Running server flask application

```
$ HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_PORT=5001 python3 -m api.v1.app
```

#### Running local flask api

```
$ HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.4-hbnb
```

#### Usage
* Web application: After deployment and running both flask apps, visit address http://0.0.0.0:5000/4-hbnb/ to use web interface for filtering
* MySQL console application: see [AirBnB_clone_v2](https://github.com/JakeFC/AirBnB_clone_v2)
* File-storage console application: see [AirBnB_clone](https://github.com/JakeFC/AirBnB_clone)


Task1: attach cache_id to the render_template, using UUID(uuid.uuid4())

```

guillaume@ubuntu:~/AirBnB_v4$ curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="../static/styles/4-common.css?f834413e-0aa9-4767-b64a-c92db9cb1f82" />
    <link rel="stylesheet" type="text/css" href="../static/styles/3-header.css?f834413e-0aa9-4767-b64a-c92db9cb1f82" />

```

Task2: adding clickable checkboxes to amenities see file templates/1-hbnb.html

Task3: update the API entry point

Task4: instead of loading the place from back-end, now load from front-end

Task5: the filter implemented, checking the amenities would get different searching results

## Bugs
No known bugs at this time.

## Authors
* Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)
* Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)
* Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)
* David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)
* Jacob Chavera - jacobchavera@yahoo.com
* Simon Sun - sunmingyu.97@gmail.com
* Second part of Airbnb: Joann Vuong
## License
Public Domain. No copy write protection.
