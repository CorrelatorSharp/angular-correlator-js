
[![Build Status](https://travis-ci.org/CorrelatorSharp/angular-correlator-js.svg?branch=master)](https://travis-ci.org/CorrelatorSharp/angular-correlator-js)

# angular-correlator-js

A simple angular module providing support for the [correlator sharp package](https://github.com/ivanz/CorrelatorSharp).


## Installation

This package is in beta and while it has been stable for awhile, caution should be taken when integrating it into production projetcs.

`npm install angular-correlator-js --save`


## Usage

You can use the provided service to interact with the current scope and create new sub scopes.

```javascript

	angular
		.module('myApp', [ 'correlator-js' ])
		.controller('myController', ['$scope', 'csActivityScope', function ($scope, csActivityScope) {

            // The id of the 'myController_child' scope.
            $scope.stateChangeCorrelationId = csActivityScope.current.id.value;

            // Change the current scope.        
            csActivityScope.new('myController');

            // Nest a context as a child scope.
            csActivityScope.child('myController_child');

            // The id of the 'myController_child' scope.
            $scope.currentCorrelationId = csActivityScope.current.id.value;

            // The id of the 'myController' scope.
            $scope.parentCorrelationId = csActivityScope.current.parent.id.value;

            // Generate a new root scope
            csActivityScope.create('myApp');
		}]);

```