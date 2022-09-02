let date1 = new Date();
try{ 

	
 function replace(){
	  var str = document.getElementById("tex").value    
	 var split = str.split("");
	 var vowel = "aeiou";
	 var vowels = vowel.split("");
	 
	for(var i =0; i<split.length; i++){
		for(var j =0; j<vowels.length; j++){	
			if(split[i]===vowels[j] ){
				split= split.slice(i);
				i = split.length
				break;
			}
			
		}

	}
	

	var result;
	result= "r" + split.join("");
	for(var k =0; k<vowels.length; k++){
		if(str[0]==vowels[k]){
			result = str
		}
	}
	
	var cut = result.split("");
	var count =0;
	for(var n of cut){
		if(n=="a" || n == "e" || n == "i" || n == "o" || n == "u"){
			count ++ ;
		}
	}
	
	if(count==0){
		result ="r";
	}
	if(str==""){
		result = "*** please enter a word";
	}
	
	document.getElementById("answer").innerHTML ="the sooby doo of " + "<b><u>"+str+"</u></b>" + " is " + "<b><u>"+result+"</u></b>"+
	"<br><br>" +'  <progress  min ="0" max = "100" value ="100">' +"</progress> <br>100%"
 } 
 

	
}catch(e){
	alert(e.message);
} 
let date2 = new Date()
console.log(date2 - date1)

