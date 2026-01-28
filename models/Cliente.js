import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  endereco: String,
});

export default mongoose.models.Cliente || mongoose.model("Cliente", ClienteSchema);
