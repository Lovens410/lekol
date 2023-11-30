let nonbOdinate = Math.floor(Math.random() * (500 - 1 + 1) + 1) // entèval [1 - 500]
//alert(nonbOdinate) //pou afiche nom odinatè a



let chans = 5 // kantite chans itilizatè a genyen
do {
	let nonbChwazi =parseInt(prompt("Ki nonb ou chwazi itlizatè ?"))  // mande itilizatè a antre yon nomb
	if(nonbOdinate === nonbChwazi)
	{
		console.log("Bravo, ou genyen")
	}else if(nonbOdinate > nonbChwazi){
		console.log("Dezole, nonb ou chwazi a pi piti. Eseye anko, ou rete " + chans  + " chans")
	}
	else {
		console.log("Dezole, nonb ou chwazi a pi gran. Eseye anko, ou rete " + chans  + " chans")
	}

	chans --         //dekremantasyon chans itilizatè a aprè chak esèy
}while(chans > 0)

if(chans === 0)      // kondisyon pou itilizatè a paka kontinye jwe
   {
	console.log("Dezole, ou pa rive genyen. Nonb lan se: " + nonbOdinate) 
   }
   

