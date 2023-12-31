const express = require("express");
const pool = require("../db.js");

const router = express.Router();

router.get("/ping", async (req, res) => {
   try {
       const [rows] = await pool.query("SELECT * FROM cosas");
       console.log(rows);
       res.json(rows);
   } catch (error) {
       console.error("Error al obtener datos:", error);
       res.status(500).send("Error interno del servidor");
   }
});

module.exports = router;
