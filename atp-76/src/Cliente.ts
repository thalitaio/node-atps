// Crie uma classe cliente, com atributos privados, getters e setters, adicionando a tipagem dos atributos, dos parâmetros e dos retornos. 

class Cliente{
    private _nome:string;
    private _sobrenome:string;
    private _email:string;
    private _id:number;

    
    public get nome() : string {
        return this._nome;
    }
    
    public set nome(v : string) {
        this._nome = v;
    }

    
    public set sobrenome(v : string) {
        this._sobrenome = v;
    }
    
    public get sobrenome() : string {
        return this._sobrenome;
    }
    
    
    public set email(v : string) {
        this._email = v;
    }
    
    public get email() : string {
        return this._email;
    }

    
    public set id(v : number) {
        this._id = v;
    }
    
    public get id() : number {
        return this._id;
    }
    
}

export default Cliente;