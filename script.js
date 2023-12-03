

let atisYo = new Array("BIC", "Belo", "Tifane", "Emeline Michel")
console.log(atisYo)
let atis1 = atisYo[0]
let atis2 = atisYo[1]
let atis3 = atisYo[2]


let rules = [
	"is a guest",
	"is admin",
	"is supervisor",
	"is secretary"
	]


rules[2] = "Director"
console.log(rules)

let idx = rules.findIndex(el => el === "is admin")
console.log(idx)
let idx1 = atisYo.findIndex(el => el === "BIC")
console.log(idx1)


let atisYo1 = new Array("BIC", "Belo", "Tifane", "Emeline Michel")
console.log(atisYo1)
atisYo1.join("-")

let chenn = "1 2 3 4"
console.log(chenn)
chennDekoupe = chenn.split(" ")
console.log(chennDekoupe)

nouvoChenn = chennDekoupe.join("-")
console.log(nouvoChenn)

let zile = ["Zile Lagonav", "Zile Kayimit", "Ilavach"]



 zileYo = zile.concat("Latoti")
  zileYo.sort()
  zileYo.reverse()
 console.log(zileYo)


 function diferans(num1, num2){
 	return num1 - num2
 }

 let tabloLaj = [100, 42, 25, 65, 22, 13]

console.log(tabloLaj)
 tabloLaj.sort(diferans)
 console.log(tabloLaj)


let tablo = [100, 42, 25, 65, 22, 13]
 /*
console.log(tablo)
let maxVal = tablo[0]

for(let i = 0; i < tablo.length; i++){
	if(tablo[i] > maxVal){
		 maxVal = tablo[i]
	}
	
}console.log(`Pi gran valè a se ${maxVal}`)

*/

 let minVal = Math.min.apply(null, tablo)
  let maxVal = Math.max.apply(null, tablo)
