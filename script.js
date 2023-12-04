/*let shortPassword = generatePassword(12, true, true, true)
// length=12, uppercase=true, digits=true, specialChars=true
// Afiche : j2#Am7Bg*HA=
*/


let shortPassword = generatePassword(12, true, true, true)

function generatePassword(length, upperCase, digits, specialChars){

	let alfabe = "abcdefghijklmnopqrstuvwxyz"
	let modpas = ""

	
	if(upperCase){
		alfabe += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	}
		

	if(digits){
		alfabe += "0123456789"
	}
	
	if(specialChars){
		alfabe += "@#!$%^&*()_|}{}:;?/.>,<"
	}

    let i = 0
	while(i < length)
    {
    	const jenere = Math.floor(Math.random() * alfabe.length)
    	modpas += alfabe[jenere]
    	i++
    }
     
    return modpas

}

console.log(shortPassword)
	



