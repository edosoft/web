# Edosoft Factory corporative website

Corporative website for Edosoft Factory.

## Project structure

    .
    ├── build                   # Compiled website
    ├── node_modules            # Folder with the downloaded Node.js modules
    ├── src                     # Source files for the website
    │   ├── app                 # HTML templates and Angular related code
    │   ├── assets              # Media files used in the webpage
    │   ├── js                  # Javascript code for the app
    │   ├── less                # LESS/CSS files with the webpages' style
    │   └── index.html          # <head> of the generated HTML code
    ├── vendor                  # Folder with the downloaded Bower modules
    ├── bower.json              # File with Bower packages
    ├── Gruntfile.js            # File with Grunt tasks and plugins
    ├── package.json            # File with Node.js packages
    └── s3_website.yml          # AWS S3 configuration file (used by Jenkins)

## Quick Start
This website has been built using Node.js, Bower and Grunt. 

First, a Node.js installation is required. It can be installed following the instructions [here](https://nodejs.org/en/download/package-manager/).
After Node.js is installed, Grunt, Karma and Bower are also required. They can be installed globally with the following command:

```sh
$ sudo npm -g install grunt-cli karma bower
```

Afterwards, use the following commands on a directory of your choice to set up the development environment:

```sh
$ git clone https://github.com/edosoft/web-sites.git
$ cd web-sites/edosoft
$ npm install
$ bower install
$ grunt watch
```

Finally, open `website/build/index.html` in your browser. Alternatively, the `grunt watch` command should open a new tab on your browser with the compiled page.

Happy hacking!