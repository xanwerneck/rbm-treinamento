import { IPlanoDeContas } from "./interfaces/IPlanoDeContas";

export default class getPlanoDeContas implements IPlanoDeContas
{
    nome: string;
    tipo: string;
    status: boolean;
    public constructor(_nome: string, _tipo: string, _status: boolean){
        this.nome = _nome
        this.tipo = _tipo
        this.status = _status
    }
}