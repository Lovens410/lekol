function valideNimewoTelefon(nimewo) {
    if (nimewo.startsWith('509')) {
        // Verifikasyon pou nimewo ki gen prensip 509
        if (nimewo.length === 11 && (nimewo[3] === '3' || nimewo[3] === '4')) {
            return true;
        } else {
            return false;
        }
    } else {
        // Verifikasyon pou nimewo ki pa gen 509
        if (nimewo.length === 8 && (nimewo[0] === '3' || nimewo[0] === '4')) {
            return true;
        } else {
            return false;
        }
    }
}

let nimewoTest = prompt("Antre yon nimewo:"); // Mande itilizate a antre nimewo a
let valide = valideNimewoTelefon(nimewoTest);

if (valide) {
    console.log(` ${nimewoTest} valide.`);
    alert(` ${nimewoTest} valide.`);
} else {
    console.log(`${nimewoTest} pa valide.`);
    alert(`${nimewoTest} pa valide. `);
}
