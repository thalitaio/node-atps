import Database from "./Database.js";
import ClienteTable from "./ClienteTable.js";

Database
    .sync()
    .then(() => console.log("Tabela Atualizada."))
    .catch( ()=> console.log("Erro ao atualizar a tabela."));