(function () {

	var callback;
	var url = "http://graphics8.nytimes.com//packages/html/1min/elections/2012/fivethirtyeight/fivethirtyeight-ccol-top.js"

	// Data is loaded from http://elections.nytimes.com/2012/cards/38-fivethirtyeight-ccol-top.js
	// using JSONP, with the padding 'eg2012.cards['38-fivethirtyeight-ccol-top'].load'
	window.eg2012 = {
		cards: {
			"38-fivethirtyeight-ccol-top": {
				load: function (data) {
					callback(data);
				}
			}
		}
	};

	window.fivethirtyeight = {
		load: function (fn) {
			callback = fn;
			addScriptTag(url);
		}
	};

	function addScriptTag(src) {
		var head = "head" in document ? document.head : document.getElementsByTagName("head")[0];
		var tag = document.createElement("script");
		tag.src = src;
		head.insertBefore(tag, head.firstChild);
	}

}());
