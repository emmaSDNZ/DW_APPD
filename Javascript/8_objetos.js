/*

**NIVEL BASICO

E_1 Gestión de Contactos:

Crea un objeto contacto que represente a una persona con propiedades nombre, telefono, y direccion. 
Imprime el número de teléfono y luego modifica la dirección a un nuevo valor.
Imprime el objeto completo después de la modificación.


E_2 Lista de Compras:

Crea un objeto listaCompras que contenga un arreglo de productos. Agrega un nuevo producto a la
 lista y luego imprime la lista completa de compras


E_3: Sistema de Evaluación de Estudiantes:

Crea un objeto estudiante con propiedades nombre, cursos, y un método agregarNota que permita 
agregar una nota a un curso específico. Luego, imprime las notas de cada curso.

SOLUCION:
let estudiante = {
    nombre: "María",
    cursos: {
        matemáticas: [],
        programación: []
    },
    agregarNota: function(curso, nota) {
        if (this.cursos[curso]) {
            this.cursos[curso].push(nota);
        } else {
            console.log("Curso no encontrado.");
        }
    }
};

estudiante.agregarNota("matemáticas", 85);
estudiante.agregarNota("programación", 90);
console.log(estudiante.cursos);
// Salida: { matemáticas: [85], programación: [90] }

E_4 Gestión de Biblioteca:

Crea un objeto biblioteca que contenga un arreglo de libros, donde cada libro tenga propiedades como 
titulo, autor, y disponibilidad. Implementa un método prestarLibro que cambie la disponibilidad del 
libro a false cuando se presta y una función listarLibros que imprima todos los libros disponibles.


**NIVEL INTERMEDIO

E_5 Sistema de Gestión de Proyectos:

Crea un objeto proyecto que contenga propiedades nombre, descripcion, y miembros (un arreglo de nombres
 de miembros del equipo). Implementa métodos agregarMiembro y listarMiembros. 
 Asegúrate de que no se puedan agregar miembros duplicados.


 SOLUCION: 
 let proyecto = {
    nombre: "Desarrollo de Aplicación",
    descripcion: "Aplicación para gestión de tareas.",
    miembros: [],
    agregarMiembro: function(nombre) {
        if (!this.miembros.includes(nombre)) {
            this.miembros.push(nombre);
            console.log(`${nombre} ha sido agregado al proyecto.`);
        } else {
            console.log(`${nombre} ya es miembro del proyecto.`);
        }
    },
    listarMiembros: function() {
        console.log("Miembros del proyecto:");
        this.miembros.forEach(miembro => {
            console.log(`- ${miembro}`);
        });
    }
};

proyecto.agregarMiembro("Ana");
proyecto.agregarMiembro("Carlos");
proyecto.agregarMiembro("Ana"); // Miembro duplicado
proyecto.listarMiembros();


E_6 Gestión de Eventos: 

Crea un objeto evento con propiedades nombre, fecha, y un arreglo de asistentes. Implementa métodos 
agregarAsistente y listarAsistentes. Verifica que no se puedan agregar asistentes duplicados.

E_7 Sistema de Reservas en un Restaurante:

Crea un objeto restaurante con propiedades nombre, ubicacion, y un arreglo reservas. 
Implementa un método realizarReserva que permita agregar una reserva (nombre y número de personas) 
y otro método listarReservas para mostrar todas las reservas.



**NIVEL AVANZADO: obligatorio


E_8  Sistema de Gestión de Inventario
Crea un objeto inventario que contenga un arreglo de productos, donde cada producto tenga 
propiedades como nombre, cantidad, y precio. Implementa métodos para:

agregarProducto(nombre, cantidad, precio): Agrega un nuevo producto al inventario.
actualizarCantidad(nombre, cantidad): Actualiza la cantidad de un producto específico.
calcularValorTotal(): Calcula y retorna el valor total del inventario.


E_9 Sistema de Reservas de Hoteles
Crea un objeto hotel que contenga propiedades como nombre, ubicacion, y un arreglo habitaciones,
donde cada habitación tenga propiedades como numero, tipo, precio, y disponibilidad. 
Implementa métodos para:

1. reservarHabitacion(numero, dias): Cambia la disponibilidad de la habitación y calcula el costo total de la reserva.
2. listarHabitacionesDisponibles(): Muestra todas las habitaciones que están disponibles.


E_10  Sistema de Gestión de Tareas
Crea un objeto gestorDeTareas que contenga un arreglo de tareas, donde cada tarea tenga propiedades 
como titulo, descripcion, completada, y prioridad. Implementa métodos para:

agregarTarea(titulo, descripcion, prioridad): Agrega una nueva tarea.
completarTarea(titulo): Marca una tarea como completada.
listarTareas(completadas): Muestra todas las tareas, pudiendo filtrar por completadas o pendientes.

Resolucion: 

let gestorDeTareas = {
    tareas: [],
    agregarTarea: function(titulo, descripcion, prioridad) {
        this.tareas.push({ titulo, descripcion, completada: false, prioridad });
        console.log(`Tarea "${titulo}" agregada.`);
    },
    completarTarea: function(titulo) {
        for (let tarea of this.tareas) {
            if (tarea.titulo === titulo) {
                tarea.completada = true;
                console.log(`Tarea "${titulo}" marcada como completada.`);
                return;
            }
        }
        console.log(`Tarea "${titulo}" no encontrada.`);
    },
    listarTareas: function(completadas) {
        console.log(completadas ? "Tareas completadas:" : "Tareas pendientes:");
        this.tareas.forEach(tarea => {
            if (tarea.completada === completadas) {
                console.log(`- ${tarea.titulo} (Prioridad: ${tarea.prioridad})`);
            }
        });
    }
};

// Ejemplo de uso:
gestorDeTareas.agregarTarea("Estudiar JavaScript", "Repasar objetos y funciones", "Alta");
gestorDeTareas.agregarTarea("Hacer la compra", "Comprar frutas y verduras", "Media");
gestorDeTareas.completarTarea("Estudiar JavaScript");
gestorDeTareas.listarTareas(false);
gestorDeTareas.listarTareas(true);

*/