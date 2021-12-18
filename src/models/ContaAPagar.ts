import { IContasAPagar } from './interfaces/IContasAPagar';
import { IPlanoDeContas } from './interfaces/IPlanoDeContas';

export class ContaAPagar implements IContasAPagar {
	descricao: string;
	valor: number;
	contapagar: IPlanoDeContas;
	data: Date;
	status: boolean;
	public constructor(_descricao: string, _valor: number, _contapagar: IPlanoDeContas, _data: Date) {
		this.descricao = _descricao;
		this.valor = _valor;
		this.contapagar = _contapagar;
		this.data = _data;
		this.status = true;
	}
}
