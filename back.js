// 1
function calcInversion() {
  let cap = Number(document.getElementById("inpCapital").value);
  let gan = cap * 0.02;
  let tot = cap + gan;
  document.getElementById("outCapital").innerText = "Ganancia: " + gan + " | Total: " + tot;
}

// 2
function calcSueldo() {
  let sueldoBase = Number(document.getElementById("inpSueldoBase").value);
  let venta1 = Number(document.getElementById("inpVentaUno").value);
  let venta2 = Number(document.getElementById("inpVentaDos").value);
  let venta3 = Number(document.getElementById("inpVentaTres").value);
  let com = (venta1 + venta2 + venta3) * 0.10;
  let tot = sueldoBase + com;
  document.getElementById("outSueldo").innerText = "Comisión: " + com + " | Total: " + tot;
}

// 3
function calcDescuento() {
  let compra = Number(document.getElementById("inpCompra").value);
  let pagoFinal = compra - (compra * 0.15);
  document.getElementById("outCompra").innerText = "Pago final: " + pagoFinal;
}

// 4
function calcNota() {
  let par1 = Number(document.getElementById("inpParcialUno").value);
  let par2 = Number(document.getElementById("inpParcialDos").value);
  let par3 = Number(document.getElementById("inpParcialTres").value);
  let exa = Number(document.getElementById("inpExamen").value);
  let trab = Number(document.getElementById("inpTrabajo").value);

  let prom = (par1+par2+par3)/3;
  let nota = (prom*0.55) + (exa*0.30) + (trab*0.15);

  document.getElementById("outNota").innerText = "Calificación final: " + nota.toFixed(2);
}

// 5
function calcEdad() {
  let nacimiento = Number(document.getElementById("inpNac").value);
  let actual = Number(document.getElementById("inpActual").value);
  let edad = actual - nacimiento;
  document.getElementById("outEdad").innerText = "Edad: " + edad + " años";
}

// 6
function convPalabras() {
  let entrada = document.getElementById("inpPalabras").value.split(",");
  let numeros = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
  let salida = entrada.map(p => {
    let i = numeros.indexOf(p.trim().toLowerCase());
    return i === -1 ? -1 : i;
  });
  document.getElementById("outPalabras").innerText = "Resultado: [" + salida.join(", ") + "]";
}

// 7
function calcHoras() {
  let horas = Number(document.getElementById("inpHoras").value);
  let pagoHora = Number(document.getElementById("inpPagoHora").value);
  let tot;
  if (horas <= 40) {
    tot = horas * pagoHora;
  } else {
    let extras = horas - 40;
    if (extras <= 8) {
      tot = (40*pagoHora) + (extras*pagoHora*2);
    } else {
      tot = (40*pagoHora) + (8*pagoHora*2) + ((extras-8)*pagoHora*3);
    }
  }
  document.getElementById("outHoras").innerText = "Pago total: " + tot;
}

// 8
function calcUtilidad() {
  let salario = Number(document.getElementById("inpSalario").value);
  let antig = Number(document.getElementById("inpAntig").value);
  let porc = 0;
  if (antig < 1) porc = 0.05;
    else if (antig < 2) porc = 0.07;
    else if (antig < 5) porc = 0.10;
    else if (antig < 10) porc = 0.15;
  else porc = 0.20;
  let util = salario * porc;
  document.getElementById("outUtilidad").innerText = "Utilidad: " + util;
}

// 9 Formulario
const campoNombre = document.getElementById("txtNombre");
const campoCorreo = document.getElementById("txtCorreo");
const campoPass = document.getElementById("txtPass");
const campoComentarios = document.getElementById("txtComentarios");
const chkCondiciones = document.getElementById("chkAcepto");
const formRegistro = document.getElementById("formRegistro");
const salidaForm = document.getElementById("outForm");

const errNom = document.getElementById("errNombre");
const errCor = document.getElementById("errCorreo");
const errPass = document.getElementById("errPass");
const errCom = document.getElementById("errComentarios");
const errChk = document.getElementById("errChk");

const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const patronPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

function valNombre() {
  const val = campoNombre.value.trim();
  if (val === "") {
    errNom.innerText = "El nombre es obligatorio.";
    return false;
  }
  errNom.innerText = "";
  return true;
}

function valCorreo() {
  const val = campoCorreo.value.trim();
  if (val === "") {
    errCor.innerText = "El email es obligatorio.";
    return false;
  }
  if (!patronCorreo.test(val)) {
    errCor.innerText = "El email no tiene formato válido.";
    return false;
  }
  errCor.innerText = "";
  return true;
}

function valPass() {
  const val = campoPass.value;
  if (val.length < 6) {
    errPass.innerText = "La contraseña debe tener al menos 6 caracteres.";
    return false;
  }
  if (!patronPass.test(val)) {
    errPass.innerText = "La contraseña debe contener minúscula, mayúscula y un dígito.";
    return false;
  }
  errPass.innerText = "";
  return true;
}

function valComentarios() {
  const val = campoComentarios.value.trim();
  if (val === "") {
    errCom.innerText = "Los comentarios son obligatorios.";
    return false;
  }
  if (val.length > 50) {
    errCom.innerText = "Los comentarios no deben exceder 50 caracteres.";
    return false;
  }
  errCom.innerText = "";
  return true;
}

function valChk() {
  if (!chkCondiciones.checked) {
    errChk.innerText = "Debes aceptar las condiciones del servicio.";
    return false;
  }
  errChk.innerText = "";
  return true;
}

campoNombre.addEventListener("blur", valNombre);
campoCorreo.addEventListener("blur", valCorreo);
campoPass.addEventListener("blur", valPass);
campoComentarios.addEventListener("blur", valComentarios);
chkCondiciones.addEventListener("change", valChk);

formRegistro.addEventListener("submit", function(e) {
  e.preventDefault();
  const v1 = valNombre();
  const v2 = valCorreo();
  const v3 = valPass();
  const v4 = valComentarios();
  const v5 = valChk();
  if (v1 && v2 && v3 && v4 && v5) {
    salidaForm.innerText = "Formulario válido. (Simulación: envío exitoso)";
  } else {
    salidaForm.innerText = "Formulario inválido. Revisa los errores mostrados.";
  }
});

// 10
function quitarScripts(html) {
  if (!html) return html;
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

document.getElementById("btnLimpiarHtml").addEventListener("click", function() {
  const entrada = document.getElementById("entradaHtml").value;
  const limpio = quitarScripts(entrada);
  document.getElementById("outHtml").innerText = limpio.trim() === "" ? "⚠️ Todo era script, no quedó contenido." : limpio;
});
