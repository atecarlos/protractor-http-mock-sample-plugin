# Protractor Mock Sample Plugin

This is a sample plugin and only intended to be used as an example of how to create a plugin for [protractor-http-mock](https://github.com/atecarlos/protractor-http-mock).

## What are plugins for?

Plugins allow you to extend the matching capabilities of `protractor-http-mock` to allow for custom logic unique to your application. In other words, it allows you to extend the rules used to match a request from your application to a provided mock request on your test.

## Creating your own plugin

Create an NPM module that provides an object with a `match` function:

	module.exports = {
		match: function(mockRequest, requestConfig){

		}
	};

`mockRequest` object is the mock currently being checked to see if it matches the actual request your app made.

`requestConfig` is the config object from the request the app made.

`protractor-http-mock` expects a truthy or falsy value to indicate a successfull match or not.

## Note

Note that your plugin code will only execute if all other standard checks pass since it runs at the end of the chain.