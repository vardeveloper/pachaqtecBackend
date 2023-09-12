import { LoteModel } from "../models/loteModel.js";

export class LoteController {
    static getAll (req, res) {
        const { descripcion, precio, tamaño } = req.query;
        const lotes = LoteModel.getAll({ descripcion, precio, tamaño });
        return res.json(lotes);
    };

    static getById (req, res) {
        const { id } = req.params;
        const lote = LoteModel.getById({ id });
        if (lote) return res.json(lote);
        res.status(404).json({ message: 'Lote no encontrado'});
    };

    static create (req, res) {
        const newLote = LoteModel.create({ input: req.body });
        return res.status(201).json(newLote);
    };

    static update (req, res) {
        const { id } = req.params;
        const updateLote = LoteModel.update({ id: id, input: req.body});
        return res.json(updateLote);
    };

    static delete (req, res) {
        const { id } = req.params;
        const result = LoteModel.delete({ id });
        if (result === false) {
            return res.status(404).json({ message: 'Lote no encontrado'});
        };
        return res.json({ message: 'Lote eliminado'});
    };
};