import { IContas } from './interfaces/IContas';
import { v4 as uuidv4 } from 'uuid';
import { collection, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { firestoreDB } from '../config/DataBase';

const KeyWord = 'contasapagar'

export class ContasAPagar implements IContas {
	id: string;
	descricao: string;
	data: Date;
	valor: number;
	tipo: string;
	status: boolean;
	public constructor(_descricao:string, _data:Date, _valor:number, _tipo:string)
	{
		this.id        = uuidv4()
		this.descricao = _descricao
		this.data      = _data
		this.valor     = _valor
		this.status    = true
		this.tipo      = _tipo
	}	

	public async get() {
		const contas = collection(firestoreDB, KeyWord);
		const contasDocs = await getDocs(contas);
		const contasList = contasDocs.docs.map(doc => ({id : doc.id, ...doc.data()} as IContas));
		return contasList;
	}
	
	public async create() {
		return await setDoc(doc(firestoreDB, KeyWord, this.id), { ...this })
	}
	
	public async remove() {
		return await updateDoc(doc(firestoreDB, KeyWord, this.id), { status : false })
	}

}
