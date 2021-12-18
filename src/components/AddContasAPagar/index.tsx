import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../helpers/UserContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { IPlanoDeContas } from '../../models/interfaces/IPlanoDeContas';
import { getPlanoDeContas } from '../../models/firestore/PlanoDeContasStore';

interface IContasAPagar {
	descricao: string;
	data: Date;
	valor: number;
	contapagar: IPlanoDeContas;
	status: boolean;
}

class ContaAPagar implements IContasAPagar {
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

export default function AddContasAPagar() {
	const [planosdecontas, setPlanodecontas] = useState(new Array<IPlanoDeContas>()); // O que ta no banco

	const [descricao, setDescricao] = useState('');
	const [data, setData] = useState<Date>(new Date());
	const [valor, setValor] = useState(0);
	const [planoEscolhido, setPlanoEscolhido] = useState<IPlanoDeContas>({ nome: 'teste', tipo: 'testee', status: true });

	const [contapagar, setContapagar] = useState<Array<ContaAPagar>>([]);

	function handleSubmit(event: any) {
		event.preventDefault();
		// console.log(descricao);
		// console.log(valor);
		// console.log(contapagar);
		// console.log(data);
		setContapagar([...contapagar, new ContaAPagar(descricao, valor, planoEscolhido, data)]);
	}

	useEffect(() => {
		console.log(contapagar);
	}, [contapagar]);

	useEffect(() => {
		getPlanoDeContas()
			.then((data) => setPlanodecontas(data))
			.catch();
	}, []);

	return (
		<>
			<Box
				component='form'
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
			>
				<div>
					<TextField
						id='outlined-required'
						label='Descrição'
						defaultValue=''
						value={descricao}
						onChange={(text) => setDescricao(text.target.value)}
					/>

					<TextField
						id='outlined-select-currency'
						select
						label='Tipo de Conta'
						// defaultValue={planosdecontas[0].nome}
						value={planoEscolhido}
						onChange={(option: any) => setPlanoEscolhido(option.target.value)}
						helperText='Selecione o tipo de conta'
					>
						{planosdecontas.map((option: IPlanoDeContas, key: number) => (
							<MenuItem key={key} value={option.nome}>
								{option.nome}
							</MenuItem>
						))}
					</TextField>
				</div>
				<div>
					<TextField
						id='outlined-required'
						label='Valor'
						defaultValue=''
						value={valor}
						onChange={(text) => setValor(parseFloat(text.target.value))}
					/>
					<TextField
						id='outlined-required'
						type='date'
						defaultValue=''
						value={data}
						onChange={(elemento: any) => setData(elemento.target.value)}
					/>
				</div>
				<div>
					<Stack direction='row'>
						<Button variant='contained' endIcon={<SaveIcon />} onClick={(e) => handleSubmit(e)}>
							Salvar
						</Button>
					</Stack>
				</div>
			</Box>
		</>
	);
}
