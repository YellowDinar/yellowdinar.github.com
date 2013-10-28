function sort(){
	var text = document.getElementById('first');
	var array = text.value.split(" ");
	for(var i = 0, len = array.length; i < len; i++){
		array[i] = Number(array[i]);	
	}
	for (var i = array.length - 1; i > 0; i--) {
	        for (var j = 0; j < i; j++) {
	            if (array[j] > array[j+1]) {
				var x = array[j];
				array[j] = array[j + 1];
				array[j + 1] = x;
			}
		}
	}
	alert(array);
}

function factorial(){
	var text = document.getElementById('second');
	var p = 1;
	for(var i = text.value; i > 0; i--){
		p *= i;
	}
	alert(p);
}

function fibonacci(N, f0, f1, i){
	if (i <= N){
		var x = f0;
		f0 = f1;
		f1 += x;
		i++; 
		fibonacci(N, f0, f1, i);
	}else{
		alert(f1);
	}
}

