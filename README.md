# ![WGO](http://adrianospadoni.net/images/wgo.png)

WGO is a website built by Adriano Spadoni using Yeoman + Angular. You can check it out on the  [live url](http://adrianospadoni.net).
It consists in a integration between Flickr api and Nokia maps (HERE).

## Development tools
 
![ANGULAR](http://adrianospadoni.net/images/vendor/angular.png) 
![ANGULAR](http://adrianospadoni.net/images/vendor/jasmine.png)
![YEOMAN](http://adrianospadoni.net/images/vendor/compass.png)
![YEOMAN](http://adrianospadoni.net/images/vendor/yeoman.png)
![YEOMAN](http://adrianospadoni.net/images/vendor/nodejs.png)
![YEOMAN](http://adrianospadoni.net/images/vendor/git.png)


## Installing

* Install [yeoman](http://yeoman.ie) through [npm](http://nodejs.org):

`npm install -g yeoman`

* Download the project

`https://github.com/drix/wgo`

* Or clone using the follow command and you are ready to go

`git clone git@github.com:drix/wgo.git`

## Automation

* Run locally using grunt:

`grunt server`

* Unit tests:

`grunt test`

* Make the distribution package:

`grunt`

## Deploying 

For deploy to the server, you need first create a file `.ftppass` in the root of the project with the follow info 

`{
  "adrianospadoni.net": {
    "username": "aspadoni",
    "password": [PASSWORD GOES HERE]
  }
}`

And then just run:

`grunt deploy`

That's it! it's alive!

##  License

 MIT License




Thanks!

