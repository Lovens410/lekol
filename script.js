

/*let shortPassword = generatePassword(8) 
// 8 la pou paramèt length
// Afiche: anfuwpru

*/

let shortPassword = generatePassword(8)

function generatePassword(length) {

	let alfabe = "abcdefghijklmnopqrstuvwxyz"
	let modpas = ""
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

