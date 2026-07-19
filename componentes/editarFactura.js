class EditarFacturaComponent extends HTMLElement {
  async connectedCallback() {
    const containerSelector = this.getAttribute("container");
    const container = document.querySelector(containerSelector);

    if (!container) {
      console.error("Contenedor de edición de facturas no encontrado");
      return;
    }

    try {
      // 1. Cargar el HTML de la vista de edición
      const res = await fetch("view/editarFactura.html");
      const html = await res.text();

      const template = document.createElement("template");
      template.innerHTML = html;

      // 2. Extraer y remover scripts para procesarlos
      const scripts = template.content.querySelectorAll("script");
      scripts.forEach((s) => s.remove());

      // 3. Inyectar HTML limpio
      this.innerHTML = "";
      this.appendChild(template.content.cloneNode(true));

      // 4. Limpiar scripts dinámicos previos
      container
        .querySelectorAll("script[data-dynamic]")
        .forEach((s) => s.remove());

      // 5. Inyectar y ejecutar scripts en contexto global
      scripts.forEach((old) => {
        const s = document.createElement("script");
        s.textContent = old.textContent;
        s.setAttribute("data-dynamic", "true");
        container.appendChild(s);
      });
    } catch (e) {
      console.error("Error cargando editarFactura", e);
    }
  }
}

// Registro del Custom Element
customElements.define("editar-factura", EditarFacturaComponent);

// 🚀 Función Global de Navegación desde la lista de facturas
function gestionarEdicionFactura(idFactura) {
  let main = document.getElementById("App");
  // Asumiendo que removeALLChilds es tu función helper global
  if (typeof removeALLChilds === "function") {
    removeALLChilds(main);
  } else {
    main.innerHTML = "";
  }

  const frmEditar = document.createElement("editar-factura");
  frmEditar.setAttribute("container", "#App");
  main.appendChild(frmEditar);

  // Le damos un respiro muy breve para que conecte y se inyecte el script antes de cargar datos
  setTimeout(() => {
    if (typeof nsEditarFactura !== "undefined") {
      nsEditarFactura.cargarDatosFactura(idFactura);
    }
  }, 100);
}
