let vert=1;

function palielinat() {
  vert++;
  izvadit(vert);
}

function samazinat() {
  if (vert === 1) {
    window.alert("Skaitlim jau ir mazākā vērtība!");
  } else {
    vert--;
    izvadit(vert);
  }
}

function izvadit(vert) {
  document.getElementById("vertiba").value = vert;
}
