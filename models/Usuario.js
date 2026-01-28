import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
});

export default mongoose.models.Usuario || mongoose.model("Usuario", UsuarioSchema);
