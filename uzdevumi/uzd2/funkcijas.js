let masivs = [];

function pievienot(){

}

function aizpildaMasivu(sk){
    for(let i=0;i<sk;i++){
        masivs[i]=i+1;
    }
}

function iegutPecIndex(p) {
  return masivs[p];
}

function mainitPecIndex(p, vertiba) {
  masivs[p] = vertiba;
}

function dzestPecIndex(p) {
  masivs[p] = masivs.splice(p, 1);
}

function printMasivs(){
    console.log(masivs);
}

function izvaditMasivu(){
    for(let i=0;i<masivs.length;i++){
        document.getElementById("vieta").innerHTML+=masivs[i];
    }

}

function atrastVertibasIndexu(vertiba) {
  for (let i = 0; i < masivs.length; i++) {
    
    }
  }
}
