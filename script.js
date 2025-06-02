// Datos ficticios simulando un backend
const grupos = [
    { id: 1, nombre: 'Grupo A', modalidad: 'Presencial', horario: '08:00 - 10:00', nroEstudiantes: 30 },
    { id: 2, nombre: 'Grupo B', modalidad: 'Virtual', horario: '10:00 - 12:00', nroEstudiantes: 25 },
  ];
  
  const estudiantes = [
    { id: 1, nombre: 'Juan Pérez', grupoId: 1 },
    { id: 2, nombre: 'María López', grupoId: 2 },
  ];
  
  const asistencias = [
    { fecha: '2025-05-25', grupoId: 1,estudianteId: 1, presentes: "presente" },
    { fecha: '2025-05-25', grupoId: 2,estudianteId: 2, presentes: "falta" },
  ];
  
  const calificaciones = [
    { estudianteId: 1, grupoId: 1, nota: 18 },
    { estudianteId: 2, grupoId: 2, nota: 17 },
  ];
  
  // Utilidades
  function obtenerGrupoPorId(id) {
    return grupos.find(g => g.id === id)?.nombre || 'Desconocido';
  }
  
  function obtenerEstudiantePorId(id) {
    return estudiantes.find(e => e.id === id)?.nombre || 'Desconocido';
  }
  
  // Renderizado en interfaz_grupos.html
  function mostrarGrupos() {
    const tbody = document.getElementById('tabla-grupos');
    if (!tbody) return;
  
    tbody.innerHTML = '';
    grupos.forEach(grupo => {
      tbody.innerHTML += `
        <tr>
          <td class="p-2 border">${grupo.nombre}</td>
          <td class="p-2 border">${grupo.modalidad}</td>
          <td class="p-2 border">${grupo.horario}</td>
          <td class="p-2 border text-center">${grupo.nroEstudiantes}</td>
        </tr>`;
    });
  }
  
  // Renderizado en interfaz_asistencias.html
  function mostrarAsistencias() {
    const tbody = document.querySelector('#tabla-asistencias');
    if (!tbody) return;
  
    tbody.innerHTML = '';
    asistencias.forEach(a => {
      const grupo = obtenerGrupoPorId(a.grupoId);
      const estudiante = obtenerEstudiantePorId(a.estudianteId);
      const total = grupos.find(g => g.id === a.grupoId)?.nroEstudiantes || 0;
      tbody.innerHTML += `
        <tr>
          <td>${a.fecha}</td>
          <td>${grupo}</td>
          <td>${estudiante}</td>
          <td>${a.presentes}</td>
        </tr>`;
    });
  }
  
  // Agregar nueva asistencia
  function agregarAsistencia(fecha, grupoId,estudianteId, presentes) {
    asistencias.push({ fecha, grupoId,estudianteId, presentes });
    mostrarAsistencias();
  }
  
  // Renderizado en interfaz_calificaciones.html
  function mostrarCalificaciones() {
    const tbody = document.querySelector('#tabla-calificaciones');
    if (!tbody) return;
  
    tbody.innerHTML = '';
    calificaciones.forEach(c => {
      const estudiante = obtenerEstudiantePorId(c.estudianteId);
      const grupo = obtenerGrupoPorId(c.grupoId);
      tbody.innerHTML += `
        <tr>
          <td>${estudiante}</td>
          <td>${grupo}</td>
          <td>${c.nota}</td>
        </tr>`;
    });
  }
  
  // Agregar calificación
  function agregarCalificacion(estudianteId, grupoId, nota) {
    calificaciones.push({ estudianteId, grupoId, nota });
    mostrarCalificaciones();
  }
  