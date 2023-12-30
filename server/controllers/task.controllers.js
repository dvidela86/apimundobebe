import { Router } from "express"
import pool from "../db.js"




export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT * FROM cosas ORDER BY nombre"
        );
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const getTask = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM cosas WHERE id = ?", [
          req.params.id,
        ]);
    
        if (result.length === 0)
          return res.status(404).json({ message: "Producto no encontrado" });
    
        res.json(result[0]);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const createTask = async (req, res) => {
    try {
        const { nombre, descripcion, stock, porcentaje, proveedor, proveedor2, fecha, url, precio, precio2 } = req.body;
        const [result] = await pool.query(
          "INSERT INTO cosas(nombre, descripcion, stock, porcentaje, proveedor, proveedor2, fecha, url, precio, precio2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [nombre, descripcion, stock, porcentaje, proveedor,proveedor2, fecha, url, precio, precio2]
        );
        res.json({
          id: result.insertId,
          nombre,
          descripcion,
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query("UPDATE cosas SET ? WHERE id = ?", [
          req.body,
          req.params.id,
        ]);
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const deleteTask = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM cosas WHERE id = ?", [
          req.params.id,
        ]);
    
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Producto no encontrado" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const deleteeTasks = async (req, res) => {
    try {
        const { nombre, descripcion, stock, porcentaje, proveedor, fecha, url, precio } = req.body;
        const [result] = await pool.query(
          "DELETE FROM cosas"          
        );
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}


//endpoints detalles productos

export const getDetalles = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT * FROM detalles"
        );
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}


export const getDetalle = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM detalles WHERE id_detalle = ?", [
          req.params.id,
        ]);
    
        if (result.length === 0)
          return res.status(404).json({ message: "Producto no encontrado" });
    
        res.json(result[0]);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const createDetalle = async (req, res) => {
    try {
        const { producto, detalle, nro_factura, precio, cantidad } = req.body;
        const [result] = await pool.query(
          "INSERT INTO detalles(producto, detalle, nro_factura, precio, cantidad) VALUES (?, ?, ?, ?, ?)",
          [producto, detalle, nro_factura, precio, cantidad]
        );
        res.json({
          id_detalle: result.insertId,
          producto,
          detalle,
          nro_factura,
            precio,
            cantidad,
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

