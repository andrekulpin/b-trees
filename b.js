module.exports = toBtree;

function toBtree( arr ){

	var L = arr.length;

	var H = Math.floor( Math.log2( L ) ) + 1;

	function split( arr ){
		if(arr.length > 1){
			return [arr.splice(0, arr.length / 2), arr];
		}
		return arr[0];
	}
	
	var output = [];

	while( H-- ){
		var el;
		var slice;
		var clone = slice || [ arr.slice() ];
		var slice = [];
		while( el = clone.shift() ){
			output.push( el );
			newEl = el.slice();
			var ss = split( newEl )
			ss.length && slice.push(...ss);
		}
	}
	
	return output;
}
