//Aqui es donde se desarrolla la lógica de negocio
import { randomUUID } from 'node:crypto';

// forma de leer json en ESModules siguiendo utilizando requiere que de forma nativa es capaz de tratar json (por ahora)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url); //aqui se encuentra la direccion del archivo actual
const lotes = require('../lotes.json'); // creando metodo require de manera manual

export class LoteModel {
    static getAll ({ descripcion, precio, tamaño }) {
        let lotesFiltrados = lotes;
        if (descripcion) {
            lotesFiltrados = lotes.filter(
                lote => lote.descripcion.toLocaleLowerCase().includes(descripcion.toLocaleLowerCase())
            );
        }
        if (precio) {
            lotesFiltrados = lotes.filter(
                lote => lote.precio.toLocaleLowerCase().includes(precio.toLocaleLowerCase())
            );
        }
        if (tamaño) {
            lotesFiltrados = lotes.filter(
                lote => lote.tamaño.toLocaleLowerCase().includes(tamaño.toLocaleLowerCase())
            );
        }
        return lotesFiltrados;
    };

    static getById ({ id }) {
        const lote = lotes.find(lote => lote.id === id);
        return lote;
    };

    static create ({ input }) {
        const { descripcion , ubicacion, precio, tamaño, estado } = input;
        const newLote = {
            id: randomUUID(), // universal unic identifier
            descripcion,
            ubicacion,
            precio,
            tamaño,
            estado
        };
        lotes.push(newLote);
        return newLote;
    };

    static update ({ id, input }) {
        const loteIndex = lotes.findIndex(lote => lote.id === id);
        if (loteIndex === -1) {
            return { success: false, message: 'Lote no encontrado'};
        };
        const lote = lotes[loteIndex];
        const { descripcion, ubicacion, precio, tamaño, estado} = input;
        if (descripcion) lote.descripcion = descripcion;
        if (ubicacion) lote.ubicacion = ubicacion;
        if (precio) lote.precio = precio;
        if (tamaño) lote.tamaño = tamaño;
        if (estado) lote.estado = estado;
        return { success: true, message: 'Lote actualizado', lote};
    };

    static delete ({ id }) {
        const loteIndex = lotes.findIndex( lote => lote.id === id);
        if (loteIndex === -1) return false;
        lotes.splice(loteIndex, 1);
        return true;
    };
};