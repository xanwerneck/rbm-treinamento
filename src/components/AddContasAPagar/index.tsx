import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../helpers/UserContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { IPlanoDeContas } from '../../models/interfaces/IPlanoDeContas';
import { getContaAPagar, getPlanoDeContas, setContaAPagar } from '../../models/firestore/PlanoDeContasStore';
import { ContaAPagar } from '../../models/ContaAPagar';

export default function AddContasAPagar() {
	const [planosdecontas, setPlanodecontas] = useState(new Array<IPlanoDeContas>()); // O que ta no banco

	const [descricao, setDescricao] = useState('');
	const [data, setData] = useState<Date>(new Date());
	const [valor, setValor] = useState(0);
	const [planoEscolhido, setPlanoEscolhido] = useState<IPlanoDeContas>({ nome: 'teste', tipo: 'testee', status: true });

	function handleSubmit(event: any) {
		event.preventDefault();
		setContaAPagar(new ContaAPagar(descricao, valor, planoEscolhido, data));
		setData(new Date());
		setDescricao('');
		setValor(0);
		setPlanoEscolhido({ nome: '', tipo: '', status: true });
	}

	useEffect(() => {
		// console.log('undefined?', getContaAPagar());
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