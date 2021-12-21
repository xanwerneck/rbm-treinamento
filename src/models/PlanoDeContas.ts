import { IPlanoDeContas } from "./interfaces/IPlanoDeContas";
import { v4 as uuidv4 } from 'uuid';
import { collection, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore/lite';
import { firestoreDB } from '../config/DataBase';

const KeyWord = 'planodecontas'

export default class PlanoDeContas implements IPlanoDeContas
{
    id : string;
    nome: string;
    tipo: string;
    status: boolean;
    public constructor(_nome: string, _tipo: string){
        this.id = uuidv4()
        this.nome = _nome
        this.tipo = _tipo
        this.status = true
    }

    public async get() {
		const contas = collection(firestoreDB, KeyWord);
		const contasDocs = await getDocs(contas);
		const contasList = contasDocs.docs.map(doc => ({id : doc.id, ...doc.data()} as IPlanoDeContas));
		return contasList;
	}
	
	public async create() {
		return await setDoc(doc(firestoreDB, KeyWord, this.id), { ...this })
	}
	
	public async remove() {
		return await updateDoc(doc(firestoreDB, KeyWord, this.id), { status : false })
	}
}