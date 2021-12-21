export interface IContas {
	id : string
	descricao: string;
	data: Date;
	valor: number;
	tipo: string;
	status: boolean;

	create : Function;
	get : Function;
	remove : Function;
}
