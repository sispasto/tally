class HistorialCotizacionesComponent extends HTMLElement {
  async connectedCallback() {
    const containerSelector = this.getAttribute("container");
    const container = document.querySelector(containerSelector);

    if (!container) {
      console.error("Contenedor de historial de cotizaciones no encontrado");
      return;
    }

    try {
      // 1. Cargar el HTML de la vista
      const res = await fetch("view/historialCotizaciones.html");
      const html = await res.text();

      const template = document.createElement("template");
      template.innerHTML = html;

      // 2. Extraer y remover los scripts
      const scripts = template.content.querySelectorAll("script");
      scripts.forEach((s) => s.remove());

      // 3. INYECTAR EL HTML EN EL DOM PRIMERO (Síncronamente)
      this.innerHTML = "";
      this.appendChild(template.content.cloneNode(true));

      // 4. Limpiar scripts dinámicos previos
      container
        .querySelectorAll("script[data-dynamic]")
        .forEach((s) => s.remove());

      // 5. VOLVER A INYECTAR LOS SCRIPTS (Esto registrará window.nsHistorialCotizaciones)
      // Usamos un bucle para asegurar que se añadan al DOM antes de continuar
      scripts.forEach((old) => {
        const s = document.createElement("script");
        s.textContent = old.textContent;
        s.setAttribute("data-dynamic", "true");
        container.appendChild(s);
      });

      // 6. ¡AHORA SÍ! La estructura ya existe físicamente en el DOM.
      // Llamamos a la carga de datos de manera segura asegurando que el script ya compiló.
      requestAnimationFrame(() => {
        if (window.nsHistorialCotizaciones) {
          window.nsHistorialCotizaciones.cargarCotizaciones();
        } else if (typeof nsHistorialCotizaciones !== "undefined") {
          nsHistorialCotizaciones.cargarCotizaciones();
        }
      });
    } catch (e) {
      console.error("Error cargando historialCotizaciones", e);
    }
  }
}
