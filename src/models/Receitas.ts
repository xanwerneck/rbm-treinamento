import { IReceitas } from "./interfaces/IReceitas";

export default class getReceitas implements IReceitas
{
    descricao: string;
    data: Date;
    status: boolean;
    planContas : String;
    valor: Number;

    public constructor(descricao: string, data: Date, status: boolean, planContas: String, valor : Number) {
        this.descricao = descricao;
        this.data = data;
        this.status = status;
        this.planContas = planContas;
        this.valor = valor;
    }
}