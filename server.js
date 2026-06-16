const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/nfe", async (req, res) => {
    try {
        const { chave } = req.body;

        const resposta = await axios.post(
      "https://consultadanfe.com/api/v1/consulta",
      {
        chave,
      }
        );
        res.json(resposta.data);
    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            erro: "Erro ao consultar NF-e",
        });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
