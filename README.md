TypeScript with Grunt
=====================


##Links

- [Automating TypeScript with Node And Grunt](http://jessefreeman.com/dev-techniques/automating-typescript-with-node-and-grunt/)
- [grunt-typescript](https://npmjs.org/package/grunt-typescript)
- [gruntjs / grunt-init-gruntfile](https://github.com/gruntjs/grunt-init-gruntfile)

##package.json

	{
	  "name": "grunt-ts",
	  "version": "0.1.0",
	  "description": "TypeScript with Grunt",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "repository": "",
	  "author": "Alexandre Anastassov",
	  "license": "BSD",
	  "devDependencies": {
	    "grunt": "~0.4.2",
	    "grunt-contrib-watch": "~0.5.3",
	    "grunt-contrib-connect": "~0.6.0",
	    "grunt-open": "~0.2.3",
	    "grunt-typescript": "~0.2.7"
	  }
	}


##Commands

###Global
	npm install -g grunt-cli
	npm install -g grunt-init
	npm install -g typescript

###Local
	npm install grunt --save-dev
	npm install grunt-contrib-watch --save-dev
	npm install grunt-contrib-connect --save-dev
	npm install grunt-open --save-dev
	npm install grunt-typescript --save-dev