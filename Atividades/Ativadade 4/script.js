const onSubmit = (event) => {
  event.preventDefault();

  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const data = new FormData(event.currentTarget);
  const name = data.get("name");
  const email = data.get("email");
  const city = data.get("city");
  const news = data.get("news");
  const question = data.get("question");
  const count = parseInt(question);

  let i,
    x = 0,
    z = 1;
  for (i = 0; i < count; i++) {
    if (x == 0) {
      document.getElementById("plano").innerHTML += "<br> Ano " + z + "<br>";
    }

    if (x < 12) {
      document.getElementById("plano").innerHTML += meses[x] + ", ";
    }
    x++;
    if (x == 12) {
      x = 0;
      z++;
    }
  }
  document.getElementById("nameOk").innerHTML = name;
  document.getElementById("emailOk").innerHTML = email;
  document.getElementById("cityOk").innerHTML = city;
  document.getElementById("left").style = "display:none";
  document.getElementById("form-submit").style = "display:block";
};
