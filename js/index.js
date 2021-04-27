tinymce.init({
  selector: "#descripcion-txtarea",
  height: 200,
  menubar: false,
  plugins: [
    "advlist autolink lists link image charmap print preview anchor",
    "searchreplace visualblocks code fullscreen",
    "insertdatetime media table paste code help wordcount",
  ],
  toolbar:
    "undo redo | formatselect | " +
    "bold italic backcolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist outdent indent | " +
    "removeformat | help",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
});

const pokemones = [];
const cargarTabla = ()=>{
  
  const tbody = document.querySelector("#tbody-tabla");

  //tbody.innerHTML = 
  for (let i = 0; i < pokemones.length; ++i){
    let p = pokemons[i];
    let tr = document.createElement("tr");

    let tdNro = document.createElement("td");
    let tdNombre = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    let tdAcciones = document.createElement("td");
    
    tdNro.innerText = i + 1;
    tdNombre.innerText = p.nombre;
    tdTipo.innerText = p.tipo;
    tdDescripcion.innerText = p.Descripcion;
    tdAcciones.innerText = p.acciones;

    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdTipo);
    

    tbody.appendChild(tr);
  }
};
document.querySelector("#registrar-btn").addEventListener("click", () => {
  let nombre = document.querySelector("#nombre-txt").value;
  let tipo = document.querySelector("#tipo-select").value;
  let legendario = document.querySelector("#legendario-si").checked;
  let descripcion = tinymce.get("descripcion-txtarea").getContent();

  let pokemon = {};

  pokemon.nombre = nombre;
  pokemon.tipo = tipo;
  pokemon.legendario = legendario;
  pokemon.descripcion = descripcion;

  pokemones.push(pokemon);
  Swal.fire("Resultado exitoso!", "Pokemon registrado", "success");
});
