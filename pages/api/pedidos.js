import connectDB from "../../lib/mongodb";
import Pedido from "../../models/Pedido";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const novoPedido = new Pedido(req.body);
    await novoPedido.save();
    return res.status(201).json({ message: "Pedido criado com sucesso!" });
  }

  if (req.method === "GET") {
    const pedidos = await Pedido.find();
    return res.status(200).json(pedidos);
  }

  res.status(405).json({ error: "Método não permitido" });
}
