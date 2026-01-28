import connectDB from "../../lib/mongodb";
import Cliente from "../../models/Cliente";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    return res.status(201).json({ message: "Cliente criado com sucesso!" });
  }

  if (req.method === "GET") {
    const clientes = await Cliente.find();
    return res.status(200).json(clientes);
  }

  res.status(405).json({ error: "Método não permitido" });
}
