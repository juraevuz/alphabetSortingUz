letters = ["oʻ","gʻ","ʼ","sh","ch","a","b","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
lettersAsNumbers = ["25.","26.","29.","27.","28.","00.","01.","02.","03.","04.","05.","06.","07.","08.","09.","10.","11.","12.","13.","14.","15.","16.","17.","18.","19.","20.","21.","22.","23.","24."];

autoCorrect = function(text){
	var text = text.replace(/ʻ|‘|’|'|`/g,"ʼ");
	var text = text.replace(/([GOgo])ʼ/g,"$1ʻ");
	var text = text.replace(/«|"([^»])/g, '“$1');
	var text = text.replace(/([^"])"|»/g, '$1”');
	return text;
};

function replaceArray(text,a1,a2) {
	for(var i = 0; i < a1.length; i++) {
		var pat = new RegExp(a1[i], "g");
		text = text.replace(pat, a2[i]);
	}
	return text;
}

function doSort(field, string) {
	var string = string.toLowerCase();
	var string = autoCorrect(string);
	var words = string.split(/\n/g);
	var words = sortWords(words);
	var output = words.join("\n");
	field.value = output;
}

function sortWords(words) {
	for (var key in words){
		words[key] = replaceArray(words[key], letters, lettersAsNumbers);
	};
	words.sort();
	for (var key in words){
		words[key] = replaceArray(words[key], lettersAsNumbers, letters);
	};
	return words;
}