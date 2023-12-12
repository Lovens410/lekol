/* 
Pandan wap tann koreksyon 2 TP yo, pou jodi a. Rezoud enonse sa, epi soumèt li nan lyen sa https://bit.ly/lyen-pwoje-code9

NB: Pa bliye vizyone vizyone kou a ak pase kwiz yo, pou platfòm nan pa bloke w

Ou gen yon sekans karaktè ki separe ak espas. Men kòman eskrip la prezante:

Yon karaktè reprezante direksyon mouvman wap fè a (> demare pou ale adwat | < demare pou ale agoch)
Yon kantite deplasman ou dwe fè.
Yon karaktè ki sèvi referans apati kibò w dwe deplase.
Ekzanp:

``` ">2T" : 2 deplasman adwat apati karaktè "T" a, ki vin bay "V" "<5S" : 5 deplasman agoch soti nan karaktè "S" la, ki vin bay "N" Men kèk done (INPUT) ak repons yo (OUTPUT): ">5K <0Y <3W <3K <6U <3Q" ap bay "PYTHON" "14P <1V <1H >4O" ap bay "BUGS"

```

Lè w fin fè algorit la, teste l ak sa yo:

"<1T >7H >3C <5Y >13J <2C <5W >4A" ki ap bay "SOFTWARE"

">3A >0A <1U <10K >1A <9J <0S <16U" ki ap bay "DATABASE"

NB: Fè tèt ou travay, pa al itilize Entèlijans Atifisyèl
*/

function deplase(chenn) {
    
    const alfabe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rezilta = '';

    // Separe chak pati nan chenn karakte a
    const mouvman = chenn.split(' ');

    
    for (let i = 0; i < mouvman.length; i++) {
        //  chanjman direksyon an (> oswa <), kantite deplasman, ak referans la
        const mouv = mouvman[i];
        const direksyon = mouv[0];
        const kantite = parseInt(mouv.slice(1), 10);
        const referans = mouv.slice(-1);

        // Endis nan tablo alfabe a pou referans lan
        let endisKouran = alfabe.indexOf(referans);

        // deplasman pou chanje pozisyon karakte a 
        if (direksyon === '>') {
            endisKouran = (endisKouran + kantite) % 26; // (26 = 26 alfabe yo)
        } else if (direksyon === '<') {
            endisKouran = (endisKouran - kantite + 26) % 26; 
        }

      
        rezilta += alfabe[endisKouran];
    }

   
    return rezilta;
}

// itilize konsol pou w teste pwogram lan
console.log(deplase("<1T >7H >3C <5Y >13J <2C <5W >4A")); // Output: "SOFTWARE"
console.log(deplase(">3A >0A <1U <10K >1A <9J <0S <16U")); // Output: "DATABASE"
