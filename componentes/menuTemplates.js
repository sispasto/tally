export const MENUS = {
  // MENU POR DEFECTO (INVITADO)
  DEFAULT: `
    <ul class="navbar-nav flex-grow-1 pe-3">
      <li class="nav-item mb-2">
        <a class="nav-link active d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(getHome)">
          <i class="bi bi-house text-dark"></i> <span class="text-dark fw-semibold">Inicio</span>
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link d-flex align-items-center gap-2" href="#" onclick="showLoginModal()">
          <i class="bi bi-person-lock text-dark"></i> <span class="text-dark fw-semibold">Ingresar</span>
        </a>
      </li>
    </ul>`,

  // ROL EMPRESA (CON EXCLUSIVIDAD EN MÓDULOS FINANCIEROS SOLICITADOS)
  EMPRESA: `
    <ul class="navbar-nav flex-grow-1 pe-3 custom-menu">
      <li class="nav-item mb-2">
        <a class="nav-link active d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(getHome)">
          <i class="bi bi-house-door text-warning-emphasis"></i> <span class="text-dark fw-semibold">Inicio</span>
        </a>
      </li>

      <li class="nav-item menu-section mt-2">
        <a class="nav-link section-header d-flex justify-content-between align-items-center text-dark fw-medium" 
          href="javascript:void(0)" onclick="PpalMenu.toggleSubMenu('catFinanzas', event)">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-wallet2 text-success"></i> Módulos Financieros
          </span>
          <i class="bi bi-chevron-right chevron-icon" style="font-size: 0.7rem;"></i>
        </a>
        <div class="collapse show" id="catFinanzas">
          <ul class="list-unstyled submenu-list ms-3 border-start border-warning-subtle">
            <li>
              <a class="nav-link text-secondary py-2 ps-2 d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(gestionarCotizaciones)">
                <i class="bi bi-file-earmark-text text-muted"></i> Cotizaciones
              </a>
            </li>
            <li>
              <a class="nav-link text-secondary py-2 ps-2 d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(gestionarFacturas)">
                <i class="bi bi-receipt text-muted"></i> Facturación
              </a>
            </li>
            <li>
              <a class="nav-link text-secondary py-2 ps-2 d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(gestionarCuentasPorCobrar)">
                <i class="bi bi-person-dash text-danger-emphasis"></i> Cuentas por Cobrar
              </a>
            </li>
            <li>
              <a class="nav-link text-secondary py-2 ps-2 d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(gestionarCuentasPorPagar)">
                <i class="bi bi-person-plus text-primary-emphasis"></i> Cuentas por Pagar
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="nav-item mt-4 border-top border-light-subtle pt-3">
        <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#" onclick="PpalMenu.ejecutarAccion(showChangePasswordModal)">
          <i class="bi bi-shield-lock text-dark"></i> <span>Seguridad</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-danger d-flex align-items-center gap-2" href="#" onclick="logout()">
          <i class="bi bi-power"></i> <span class="fw-medium">Finalizar Sesión</span>
        </a>
      </li>
    </ul>`,

  // ROL MENSAJERO
  MENSAJERO: `
    <ul class="navbar-nav flex-grow-1 pe-3 custom-menu">
      <li class="nav-item mb-2">
        <a class="nav-link active d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(getHome)">
          <i class="bi bi-house-door text-dark"></i> <span class="text-dark fw-semibold">Inicio</span>
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#" onclick="PpalMenu.ejecutarAccion(getPlanillasMensajero)">
          <i class="bi bi-search"></i> <span>Consultar Planillas</span>
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#" onclick="PpalMenu.ejecutarAccion(efectividadMensajero)">
          <i class="bi bi-bar-chart-line"></i> <span>Efectividad reparto</span>
        </a>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#" onclick="PpalMenu.ejecutarAccion(geolocalizar)">
          <i class="bi bi-pin-map text-warning-emphasis"></i> <span>Geolocalizar barrios</span>
        </a>
      </li>
      <li class="nav-item mt-4 border-top border-light-subtle pt-3">
        <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#" onclick="PpalMenu.ejecutarAccion(showChangePasswordModal)">
          <i class="bi bi-key"></i> <span>Cambiar Clave</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-danger d-flex align-items-center gap-2" href="#" onclick="logout()">
          <i class="bi bi-box-arrow-right"></i> <span class="fw-medium">Salir</span>
        </a>
      </li>
    </ul>`,

  // ROL ADMINISTRADOR (MANTIENE LA AUDITORÍA DE FACTURACIÓN)
  ADMIN: `
    <ul class="navbar-nav flex-grow-1 pe-3 custom-menu">
      <li class="nav-item mb-2">
        <a class="nav-link active d-flex align-items-center gap-2" href="#" onclick="PpalMenu.ejecutarAccion(getHome)">
          <i class="bi bi-shield-check text-success"></i> <span class="text-dark fw-semibold">Inicio (Panel Admin)</span>
        </a>
      </li>
      <li class="nav-item menu-section">
        <a class="nav-link section-header d-flex justify-content-between align-items-center text-dark fw-medium" 
           href="javascript:void(0)" onclick="PpalMenu.toggleSubMenu('catAdminConfig', event)">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-gear-fill text-secondary"></i> Configuración
          </span>
          <i class="bi bi-chevron-right chevron-icon" style="font-size: 0.7rem;"></i>
        </a>
        <div class="collapse" id="catAdminConfig">
          <ul class="list-unstyled submenu-list ms-3 border-start border-warning-subtle">
            <li><a class="nav-link text-secondary py-1 ps-2" href="#" onclick="PpalMenu.ejecutarAccion(gestionarEmpresas)">Gestionar Empresas</a></li>
            <li><a class="nav-link text-secondary py-1 ps-2" href="#" onclick="PpalMenu.ejecutarAccion(configurarTarifas)">Maestro de Tarifas</a></li>
            <li><a class="nav-link text-secondary py-1 ps-2" href="#" onclick="PpalMenu.ejecutarAccion(gestionarZonas)">Zonas y Cobertura</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item menu-section mt-2">
        <a class="nav-link section-header d-flex justify-content-between align-items-center text-dark fw-medium" 
           href="javascript:void(0)" onclick="PpalMenu.toggleSubMenu('catAdminAudit', event)">
          <span class="d-flex align-items-center gap-2">
            <i class="bi bi-journal-text text-secondary"></i> Auditoría Global
          </span>
          <i class="bi bi-chevron-right chevron-icon" style="font-size: 0.7rem;"></i>
        </a>
        <div class="collapse" id="catAdminAudit">
          <ul class="list-unstyled submenu-list ms-3 border-start border-warning-subtle">
            <li><a class="nav-link text-secondary py-1 ps-2" href="#" onclick="PpalMenu.ejecutarAccion(verLogsSistema)">Logs del Sistema</a></li>
            <li><a class="nav-link text-secondary py-1 ps-2" href="#" onclick="PpalMenu.ejecutarAccion(reporteGeneralVentas)">Reporte Consolidado</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item mt-4 border-top border-light-subtle pt-3">
        <a class="nav-link d-flex align-items-center gap-2 text-dark" href="#" onclick="PpalMenu.ejecutarAccion(showChangePasswordModal)">
          <i class="bi bi-lock"></i> <span>Seguridad Admin</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-danger d-flex align-items-center gap-2" href="#" onclick="logout()">
          <i class="bi bi-power"></i> <span class="fw-medium">Cerrar Sesión</span>
        </a>
      </li>
    </ul>`,
};

const PpalMenu = {
  // Cambiado internamente a PpalMenu para que coincida exactamente con las llamadas del HTML
  toggleSubMenu: (id, event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    const elemento = document.getElementById(id);
    if (elemento) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(elemento);
      bsCollapse.toggle();
    }
  },

  ejecutarAccion: (callback) => {
    if (typeof callback === "function") callback();
    const el = document.getElementById("offcanvasDarkNavbar");
    const instance = bootstrap.Offcanvas.getInstance(el);
    if (instance) instance.hide();
  },

  mostrarMenuPorRol: (rol, nombreUsuario = "") => {
    const contenedor = document.querySelector(
      "#offcanvasDarkNavbar .offcanvas-body",
    );
    const tituloMenu = document.getElementById("offcanvasDarkNavbarLabel");
    const textUser = document.getElementById("textUser");

    if (!contenedor) return;

    if (textUser) {
      textUser.innerHTML = `<i class="bi bi-person-circle me-2"></i> ${nombreUsuario.toUpperCase()}`;
      textUser.style.fontSize = "1.1rem";
      textUser.style.letterSpacing = "1px";
    }

    if (tituloMenu) {
      tituloMenu.innerHTML = `<i class="bi bi-person-circle me-2"></i> ${nombreUsuario.toUpperCase()}`;
      tituloMenu.style.fontSize = "1.1rem";
      tituloMenu.style.letterSpacing = "1px";
    }

    const r = Number(rol);
    if (r === 1) contenedor.innerHTML = MENUS.EMPRESA;
    else if (r === 2) contenedor.innerHTML = MENUS.MENSAJERO;
    else if (r === 3) contenedor.innerHTML = MENUS.ADMIN;
    else PpalMenu.mostrarMenuInvitado();
  },

  mostrarMenuInvitado: () => {
    const contenedor = document.querySelector(
      "#offcanvasDarkNavbar .offcanvas-body",
    );
    const tituloMenu = document.getElementById("offcanvasDarkNavbarLabel");
    const textUser = document.getElementById("textUser");

    if (tituloMenu) {
      tituloMenu.innerHTML = `<i class="bi bi-wallet2 me-2"></i> TALLY`;
      tituloMenu.style.fontSize = "1.1rem";
      tituloMenu.style.letterSpacing = "1px";
    }

    if (contenedor) contenedor.innerHTML = MENUS.DEFAULT;

    if (textUser) {
      textUser.innerHTML = `<i class="bi bi-wallet2 me-2"></i> TALLY`;
      textUser.style.fontSize = "1.1rem";
      textUser.style.letterSpacing = "1px";
    }
  },
};

// EXPOSICIÓN GLOBAL UNIFICADA TOTALMENTE FUNCIONAL
window.PpalMenu = PpalMenu;
