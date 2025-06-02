function fazerLogin() {
    const tipo = document.getElementById("tipoUsuario").value;
  
    if (tipo === "paciente") {
      window.location.href = "MenuPrincipal.html"; // Página do paciente
    } else if (tipo === "profissional") {
      window.location.href = "Profissional.html"; // Página exclusiva do profissional de saúde
    } else if (tipo === "admin") {
      window.location.href = "Administrador.html"; // Página do administrador
    }
  }
  
