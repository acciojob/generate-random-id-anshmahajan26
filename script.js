function makeid(l) {
  // write your code here
	let res ="";
	let char_list ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoopqrstuvwxyz1234567890";
	for(let i =0; i<l; i++){
		res+= char_list.char_At(Math.floor(Math.random()*char_list.length
										  )
							   )
	}
	return res;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
