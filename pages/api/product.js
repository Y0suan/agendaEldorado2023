import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();



    if (method === 'GET') {
        if (req.query?.id) {
          try {
            const product = await Product.findOne({ _id: req.query.id });
            console.log('Producto encontrado por ID:', product);
            res.json(product);
          } catch (error) {
            res.status(500).json({ error: 'Error al obtener el producto.' });
          }
        } else if (req.query?.search) { // Handle search logic here
          try {
            const searchQuery = req.query.search;
            const products = await Product.find({
                $or: [
                    { interes: new RegExp(searchQuery, 'i') }, // Búsqueda insensible a mayúsculas y minúsculas
                    { sintesis: new RegExp(searchQuery, 'i') },
                ]
            });
            console.log('Productos encontrados por búsqueda:', products);
            res.json(products);
          } catch (error) {
            res.status(500).json({ error: 'Error al buscar productos.' });
          }
        } else {
          try {
            const products = await Product.find();
            console.log('Todos los productos:', products);
            res.json(products);
          } catch (error) {
            res.status(500).json({ error: 'Error al obtener los productos.' });
          }
        }
      }
      

    if (method === 'POST') {
        const {
            interes, sintesis, motivo, direccion, lugar, fecha, participants,
        } = req.body;

        try {
            const productDoc = await Product.create({
                interes, sintesis, motivo, direccion, lugar, fecha, participants,
            });
            res.json(productDoc);
        } catch (error) {
            res.status(500).json({ error: `Error al crear el producto: ${error.message}` });
        }
    }

    if (method === 'PUT') {
        const {
            interes, sintesis, motivo, direccion, lugar, fecha, participants, _id,
        } = req.body;

        try {
            await Product.updateOne({ _id }, {
                interes, sintesis, motivo, direccion, lugar, fecha, participants,
            });
            res.json(true);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el producto.' });
        }
    }

    if (method === 'DELETE') {
        if (req.query?.id) {
            try {
                await Product.deleteOne({ _id: req.query.id });
                res.json(true);
            } catch (error) {
                res.status(500).json({ error: 'Error al eliminar el producto.' });
            }
        }
    }
}
