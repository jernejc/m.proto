'use strict';

var Dispatcher = require('../dispatchers/default');
var listConstants = require('../constants/list');
var assign = require('object-assign');

module.exports = {

	getAll: function(direction) {
		console.log('List actions, getAll');
		
		// To-do, implement AJAX call
		/**
			$.get('', {}).then(function(result){
				Dispatcher.handleViewAction({
					actionType: listConstants.TOGGLE,
					items: result
				});	
			})
		**/

		var result = JSON.parse('[{"id":"1","title":"Title of the property","description":"Subtitle or short description for the property","price":"500.000","agent":"Some agent"},{"id":"2","title":"Title of the property","description":"Subtitle or short description for the property","price":"400.000","agent":"Some agent"},{"id":"3","title":"Title of the property","description":"Subtitle or short description for the property","price":"200.000","agent":"Some agent"},{"id":"4","title":"Title of the property","description":"Subtitle or short description for the property","price":"100.000","agent":"Some agent"}]');
		
		Dispatcher.handleViewAction({
			actionType: listConstants.GET_ALL,
			items: result
		});	

	}

};
