import connectDB from "../../lib/mongodb";
import Cliente from "../../models/Cliente";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const novoCliente = new Cliente(req.body);
      await novoCliente.save();
      return res.status(201).json({ message: "Cliente criado com sucesso!" });
    } catch (error) {
      return res.status(400).json({ error: "Erro ao criar cliente" });
    }
  }

  if (req.method === "GET") {
    try {
      const clientes = await Cliente.find();
      return res.status(200).json(clientes);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao buscar clientes" });
    }
  }

  return res.status(405).json({ error: "Método não permitido" });
}
