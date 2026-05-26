const connection = require('../database/connection');

exports.getBikes = (req, res) => {

    const sql = `
        SELECT b.*, c.nome AS categoria
        FROM bikes b
        LEFT JOIN categorias c ON b.categoria_id = c.id
    `;

    connection.query(sql, (err, results) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json(results);
    });
};

exports.createBike = (req, res) => {

    const {
        nome,
        marca,
        preco,
        bateria,
        autonomia,
        estoque,
        descricao,
        imagem,
        categoria_id
    } = req.body;

    const sql = `INSERT INTO bikes
        (nome, marca, preco, bateria, autonomia, estoque, descricao, imagem, categoria_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(
        sql,
        [nome, marca, preco, bateria, autonomia, estoque, descricao, imagem, categoria_id],
        (err, result) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: 'Bike cadastrada!',
                id: result.insertId
            });
        }
    );
};

exports.updateBike = (req, res) => {

    const { id } = req.params;

    const {
        nome,
        marca,
        preco,
        bateria,
        autonomia,
        estoque,
        descricao,
        imagem,
        categoria_id
    } = req.body;

    const sql = `UPDATE bikes
        SET nome=?, marca=?, preco=?, bateria=?, autonomia=?, estoque=?, descricao=?, imagem=?, categoria_id=?
        WHERE id=?`;

    connection.query(
        sql,
        [nome, marca, preco, bateria, autonomia, estoque, descricao, imagem, categoria_id, id],
        (err, result) => {

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: 'Bike atualizada!'
            });
        }
    );
};

exports.deleteBike = (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM bikes WHERE id=?';

    connection.query(sql, [id], (err, result) => {

        if(err){
            return res.status(500).json(err);
        }

        res.json({
            message: 'Bike deletada!'
        });
    });
};
