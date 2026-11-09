/* =====================================================
   SELECCIÓN DE ELEMENTOS HTML

===================================================== */
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const navLinks = document.querySelectorAll(".nav-link");

const mensajeTextarea = document.getElementById("mensaje");
const contadorMensaje = document.getElementById("contador-mensaje");

const contactForm = document.getElementById("contact-form");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorMensaje = document.getElementById("error-mensaje");
const formFeedback = document.getElementById("form-feedback");

/* =====================================================
   APERTURA Y CIERRE DEL MENÚ

===================================================== */
function toggleMenu() {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
  );
}

menuToggle.addEventListener("click", toggleMenu);

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (mainNav.classList.contains("is-open")) {
      toggleMenu();
    }
  });
});

/* =====================================================
   CONTADOR DE CARACTERES

===================================================== */
function actualizarContador() {
  const longitud = mensajeTextarea.value.length;
  contadorMensaje.textContent = longitud + " / 300 caracteres";
}

mensajeTextarea.addEventListener("input", actualizarContador);

/* =====================================================
   VALIDACIÓN DEL FORMULARIO

===================================================== */
function validarEmail(email) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email);
}

function limpiarErrores() {
  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorMensaje.textContent = "";
  nombreInput.closest(".form-group").classList.remove("has-error");
  emailInput.closest(".form-group").classList.remove("has-error");
  mensajeTextarea.closest(".form-group").classList.remove("has-error");
  formFeedback.className = "form-feedback";
  formFeedback.textContent = "";
}

function mostrarError(campo, mensajeError, elementoError) {
  elementoError.textContent = mensajeError;
  campo.closest(".form-group").classList.add("has-error");
}

function validarFormulario() {
  limpiarErrores();
  let esValido = true;

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const mensaje = mensajeTextarea.value.trim();

  if (nombre === "") {
    mostrarError(nombreInput, "El nombre es obligatorio.", errorNombre);
    esValido = false;
  }

  if (email === "") {
    mostrarError(emailInput, "El correo electrónico es obligatorio.", errorEmail);
    esValido = false;
  } else if (!validarEmail(email)) {
    mostrarError(emailInput, "Introduce un correo electrónico válido.", errorEmail);
    esValido = false;
  }

  if (mensaje === "") {
    mostrarError(mensajeTextarea, "El mensaje es obligatorio.", errorMensaje);
    esValido = false;
  } else if (mensaje.length > 300) {
    mostrarError(mensajeTextarea, "El mensaje no puede superar los 300 caracteres.", errorMensaje);
    esValido = false;
  }

  return esValido;
}

/* =====================================================
   MENSAJES DE ERROR Y ÉXITO

===================================================== */
contactForm.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (validarFormulario()) {
    formFeedback.textContent =
      "Mensaje preparado correctamente (demostración). En un proyecto real se enviaría al servidor.";
    formFeedback.className = "form-feedback success";
    contactForm.reset();
    actualizarContador();
  } else {
    formFeedback.textContent = "Por favor, corrige los errores del formulario.";
    formFeedback.className = "form-feedback error";
  }
});
