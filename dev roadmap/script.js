function exibirNomes() {
  let nomes = document.getElementById("nomes").value;
  nomes = nomes.split(",");

  for (i = nomes.length - 1; i >= 0; i--) {
    document.getElementById("resultados").innerHTML += nomes[i] + "<br>";
  }
}
function calcularQuadrado() {
  let numeros = document.getElementById("valoresInformados").value;

  numeros = numeros.split(",");

  const quadrado = numeros.map((numero) => {
    document.getElementById("resultados").innerHTML +=
      "O quadrado de " + numero + " é " + numero * numero + "<br>";
  });
}

function verificarMaior() {
  numeros = document.getElementById("valoresInformados").value;
  numeros = numeros.split(",");
  let maior = parseInt(numeros[0]);

  for (i = 1; i < numeros.length; i++) {
    if (parseInt(numeros[i]) > maior) {
      maior = parseInt(numeros[i]);
    }
  }
  alert("O maior número é " + maior);
}

function verificarIdades() {
  let idades = document.getElementById("txtIdades").value;
  idades = idades.split(",");
  var maior = 0;
  var menor = 0;
  for (i = 0; i < idades.length; i++) {
    if (parseInt(idades[i]) >= 18) {
      maior++;
    } else {
      menor++;
    }
  }
  document.write("Maiores: " + maior + " - Menores: " + menor);
}

const fabrica = [
  { marca: "heineken", quantidade: 10, tipo: "lata" },
  { marca: "skol", quantidade: 12, tipo: "garrafa" },
  { marca: "skinka", quantidade: 14, tipo: "lata" },
];

const numeros= [1,2,3,6]