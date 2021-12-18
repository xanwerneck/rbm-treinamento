import { IContasAReceber } from "./interfaces/iContasAReceber";

export default class getContasAReceber implements IContasAReceber
{
    descricao : String
    data : Date
    status : Boolean
    planodecontas: String
    valor: Number

    public constructor(descricao: String, data: Date, status: Boolean, planodecontas: String, valor: Number){
        this.descricao = descricao
        this.data = data 
        this.status = status
        this.planodecontas = planodecontas
        this.valor = valor
    }
}