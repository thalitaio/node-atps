import ClienteTable from "./../db/ClienteTable.js";

class ClienteRepository{

    async findAll(){
        const lista = await ClienteTable.findAll({raw:true});
        return lista;
    }

    async create(model){
        return await ClienteTable.create(model);
    }

    async update(model){
        return await ClienteTable.update(model,{
            where:{id:model.id}
        });
    }

    async delete(id){
        return await ClienteTable.destroy({
            where:{id:parseInt(id)}
        });        
    }
}

export default ClienteRepository;