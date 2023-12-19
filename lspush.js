class LSPush {
  constructor() {
    this.stokaj = localStorage; // Kreye yon referans pou stokaj lokal
  }

  // Metòd pou ajoute yon kle ak valè nan stokaj lokal
  ajoute(kle, valè) {
    if (!this.stokaj.getItem(kle)) {
      this.stokaj.setItem(kle, valè);
    }
  }

  // Metòd pou modifye yon valè deja egzistante nan stokaj lokal
  modifye(kle, valè) {
    if (this.stokaj.getItem(kle)) {
      this.stokaj.setItem(kle, valè);
    }
  }

  // Metòd pou rekipere yon valè baze sou yon kle nan stokaj lokal
  rekipere(kle) {
    return this.stokaj.getItem(kle);
  }

  // Metòd pou efase yon valè soti nan stokaj lokal
  efase(kle) {
    this.stokaj.removeItem(kle);
  }

  // Metòd pou rekipere tout done ki disponib nan stokaj lokal
  rekipereToutStokaj() {
    const kleYo = Object.keys(this.stokaj);
    const toutStokaj = {};

    kleYo.forEach(kle => {
      toutStokaj[kle] = this.stokaj.getItem(kle);
    });

    return toutStokaj;
  }
}

// Itilizasyon san HTML ak pa rechaje paj la:
function itilizeLSPush() {
  let stokaj = new LSPush();
  stokaj.ajoute('non', 'Lovens');
  stokaj.modifye('lotNon', 'Lobama');
  //let valeModifye = stokaj.modifye('lotNon')
  let valeurRekipere = stokaj.rekipere('non');
console.log(valeurRekipere); // Afiche Lovens nan konsòl la
  //stokaj.efase('non');

  let toutStokaj = stokaj.rekipereToutStokaj();
  console.log(toutStokaj); // Afiche tout stokaj la nan konsòl la
}

// Apele fonksyon an
itilizeLSPush();
