//var dataTable = [];
var id = 1;
const onSubmit = (ev) => {
  ev.preventDefault();
  const data = new FormData(ev.currentTarget);

  var values = { id };
  data.forEach((value, name) => {
    values = { ...values, [name]: value };
  });
  //dataTable.push(values);
  id++;
  showData(values);
  reset();
};

const showData = (values) => {
  const valuesArray = Object.entries(values);
  document.getElementById("tbody").innerHTML += `
    <tr id="tr${values.id}">
    ${valuesArray.map((value) => `<td>${value[1]}</td>`).join("\n")}
      <td>
        <button 
          class='btn btn-option' 
          onclick='handleEdit(${values.id}, ${JSON.stringify(values)})'>
          Editar 
        </button>
        <button 
          class='btn btn-option' 
          onclick='handleDelete(${values.id},tr${values.id})'>
          Apagar
        </button>
      </td>
    </tr>
    `;
};

const handleEdit = (id, values) => {
  const ID = parseInt(id);
  toggleButton(ID);
  // const values = dataTable.find((value) => value.id === ID);
  setOldValues(values);
};

const handleDelete = (id, tr) => {
  const ID = parseInt(id);
  tr.remove();
  //dataTable = dataTable.filter((value) => value.id !== ID);
};

const setOldValues = (values) => {
  const valuesArray = Object.entries(values);
  valuesArray.forEach((value) => {
    if (value[0] !== "id") document.getElementById(value[0]).value = value[1];
  });
};

const setNewValues = (oldId, tr) => {
  const form = document.getElementById("form");
  var newValues = { id: oldId };
  for (const i of form.children) {
    if (i.id) newValues = { ...newValues, [i.name]: i.value };
  }
  /* dataTable  = dataTable.map((value) =>
    value.id === id ? (value = newValues) : value
  ); */
  const valuesArray = Object.entries(newValues);

  tr.innerHTML = `
  ${valuesArray.map((value) => `<td>${value[1]}</td>`).join("\n")}
  <td>
    <button class='btn btn-option' onclick='handleEdit(${
      newValues.id
    }, ${JSON.stringify(newValues)})'>Editar </button>
    <button class='btn btn-option' onclick='handleDelete(${newValues.id},tr${
    newValues.id
  })'>Apagar</button>
  </td>`;
  toggleButton();
  reset();
};

const reset = () => {
  document.getElementById("reset").click();
  document.getElementById("name").focus();
};

const handleReset = () => {
  toggleButton();
  reset();
};

const toggleButton = (id) => {
  const button = document.getElementById("submit");
  if (id) {
    button.type = "button";
    button.style = " background-color: #407094;";
    button.innerHTML = "Editar";
    button.setAttribute("onclick", `setNewValues(${id}, tr${id})`);
  } else {
    button.type = "submit";
    button.style = "background-color: #31b454;";
    button.innerHTML = "Salvar";
    button.removeAttribute("onclick");
  }
};
