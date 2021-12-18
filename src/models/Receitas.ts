import { IReceitas } from "./interfaces/IReceitas";

export default class getReceitas implements IReceitas
{
    id : Number;
    descricao: string;
    data: Date;
    status: boolean;
    planContas : String;
    valor: Number;

    public constructor(id : Number, descricao : string, data: Date, status: boolean, planContas: String, valor : Number) {
        this.id = id;
        this.descricao = descricao;
        this.data = data;
        this.status = status;
        this.planContas = planContas;
        this.valor = valor;
    }
}