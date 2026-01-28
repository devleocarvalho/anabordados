import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
  cliente: String,
  produto: String,
  quantidade: Number,
  data: { type: Date, default: Date.now },
});

export default mongoose.models.Pedido || mongoose.model("Pedido", PedidoSchema);
