import { IPlanoDeContas } from './IPlanoDeContas';

export interface IContasAPagar {
	descricao: string;
	data: Date;
	valor: number;
	contapagar: IPlanoDeContas;
	status: boolean;
}
