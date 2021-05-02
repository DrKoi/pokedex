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
  //1. Obtener una referencia a la tabla
  let tbody = document.querySelector("#tbody-tabla");
  
  tbody.innerHTML = "";
  //2. Recorrer la lista de pokemones
  for (let i = 0; i < pokemones.length; ++i){
    let p = pokemones[i];
    //3. Por cada pokemon generar una fila de la tabla (tr)
    let tr = document.createElement("tr");
    //4. Por cada artributo generar un td de la tabla
    let tdNro = document.createElement("td");
    let tdNombre = document.createElement("td");
    let tdTipo = document.createElement("td");
    let tdDescripcion = document.createElement("td");
    let tdAcciones = document.createElement("td");

    //Definir lo que va en la tabla
    tdNro.innerText = i + 1;
    tdNombre.innerText = p.nombre;
    
    let tipo = document.createElement("i");
    if (p.tipo == "1"){ //fuego
      tipo.classList.add("fas", "fa-fire", "fuego", "fa-3x");
    }else if (p.tipo == "2"){ //agua
      tipo.classList.add("fas", "fa-tint", "agua", "fa-3x");
    }else if (p.tipo == "3"){ //planta
      tipo.classList.add("fas", "fa-leaf", "planta", "fa-3x");
    }else if (p.tipo == "4"){ //normal
      tipo.classList.add("fab", "fa-galactic-republic", "normal", "fa-3x");
    }else if (p.tipo == "5"){ //hielo
      tipo.classList.add("fas", "fa-snowflake", "hielo", "fa-3x");
    }else if (p.tipo == "6"){ //fantasma
      tipo.classList.add("fas", "fa-ghost", "fantasma", "fa-3x");
    }else if (p.tipo == "7"){ //siquico
      tipo.classList.add("fas", "fa-brain", "psiquico", "fa-3x");
    }else if (p.tipo == "8"){ //lucha
      tipo.classList.add("fas", "fa-fist-raised","lucha", "fa-3x");
    }else if (p.tipo == "9"){ //volador
      tipo.classList.add("fas", "fa-feather", "volador", "fa-3x");
    }else if (p.tipo == "10"){ //electrico
      tipo.classList.add("fas", "fa-bolt", "electrico", "fa-3x");
    }else if (p.tipo == "11"){ //tierra
      tipo.classList.add("fas", "fa-mountain", "tierra", "fa-3x");
    }else if (p.tipo == "12"){ //roca
      tipo.classList.add("fas", "fa-dice-d20", "roca", "fa-3x");
    }else if (p.tipo == "13"){ //siniestro
      tipo.classList.add("fas", "fa-moon", "siniestro", "fa-3x");
    }else if (p.tipo == "14"){ //dragon
      tipo.classList.add("fas", "fa-dragon", "dragon", "fa-3x");
    }else if (p.tipo == "15"){ //hada
      tipo.classList.add("fas", "fa-bahai", "hada", "fa-3x");
    }else if (p.tipo == "16"){ //acero
      tipo.classList.add("fab", "fa-jira", "acero", "fa-3x");
    }else if (p.tipo == "17"){ //bicho <i class="fas fa-bug"></i>
      tipo.classList.add("fas", "fa-bug", "bicho", "fa-3x");
    }else { //veneno
      tipo.classList.add("fas", "fa-skull", "veneno", "fa-3x");
    }

    tdTipo.appendChild(tipo);
    //appendChild cuando quiero agregar un elemento dentro de otro
    //innerText cuando quiero definir un texto
    //innerHTML cuando quiero definir directamente el html

    tdDescripcion.innerHTML = p.descripcion;
    //TODO: Qué hago con las acciones
    //5. Agregar los td al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdTipo);
    tr.appendChild(tdAcciones);
    //6. Agregar el tr a la tabla
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
  cargarTabla();
  Swal.fire("Resultado exitoso!", "Pokemon registrado", "success");
});
