const onSubmit = (event) => {
  event.preventDefault();

  const mounth = [
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

  const privacy = {
    accept:
      "Que bom que você leu e concorda com nossa política de privacidade. Seu formulário SERÁ submetido para cadastro",
    deny: "É uma pena você não concordar com nossa política de privacidade. INFELIZMENTE  seu formulário NÃO SERÁ  submetido para cadastro",
  };
  const data = new FormData(event.currentTarget);
  const setValue = (value) => value;
  var values;
  data.forEach((value, name) => {
    values = setValue({ ...values, [name]: value });
  });
  console.log(values);
  const count = parseInt(values.question);
  let i,
    x = 0,
    z = 1;

  document.getElementById("plano").innerHTML = "";
  if (count == 0) {
    document.getElementById("plano").innerHTML = "O tempo não foi informado!";
  } else {
    for (i = 0; i < count; i++) {
      if (x == 0) {
        document.getElementById("plano").innerHTML += "<br> Ano " + z + "<br>";
      }

      if (x < 12) {
        document.getElementById("plano").innerHTML += mounth[x] + ", ";
      }
      x++;
      if (x == 12) {
        x = 0;
        z++;
      }
    }
  }

  document.getElementById("nameOk").innerHTML = values.name;
  document.getElementById("emailOk").innerHTML = values.email;
  document.getElementById("cityOk").innerHTML = values.city;
  document.getElementById("left").style = "display:none";
  document.getElementById("form-submit").style = "display:block";
  document.getElementById("optionOk").innerHTML = values.news
    ? " RECEBER "
    : " NÃO RECEBER ";
  document.getElementById("privacyOk").innerHTML = values.form_accept
    ? privacy.accept
    : privacy.deny;
};
