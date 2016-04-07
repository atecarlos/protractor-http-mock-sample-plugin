module.exports = {
	match: function(mockRequest, requestConfig){
		var match = true;

		if(requestConfig.plugin  && mockRequest.plugin){
			return mockRequest.plugin.check;
		}

		return match;
	}
};