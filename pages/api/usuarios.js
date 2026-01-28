import connectDB from "../../lib/mongodb";
import Usuario from "../../models/Usuario";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    return res.status(201).json({ message: "Usuário criado com sucesso!" });
  }

  if (req.method === "GET") {
    const usuarios = await Usuario.find();
    return res.status(200).json(usuarios);
  }

  res.status(405).json({ error: "Método não permitido" });
}
