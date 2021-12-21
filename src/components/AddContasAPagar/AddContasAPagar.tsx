import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { IPlanoDeContas } from '../../models/interfaces/IPlanoDeContas';
import { ContasAPagar } from '../../models/ContasAPagar';
import PlanoDeContas from '../../models/PlanoDeContas';

export default function AddContasAPagar() {
	const [planosdecontas, setPlanodecontas] = useState(new Array<IPlanoDeContas>());

	const [descricao, setDescricao] = useState('');
	const [data, setData] = useState<Date>(new Date());
	const [valor, setValor] = useState(0);
	const [planoEscolhido, setPlanoEscolhido] = useState('');

	function handleSubmit(event: any) {
		event.preventDefault();

		let contas : ContasAPagar = new ContasAPagar(descricao, data, valor, planoEscolhido);
		contas.create()
		.then(() => {
			alert('Contas a pagar cadastrado com sucesso!')
			setData(new Date());
			setDescricao('');
			setValor(0);
			setPlanoEscolhido('');
		})
		.catch(error => {
			alert('Ocorreu um erro')
		})
		
	}

	useEffect(() => {
		const planoDeContas : PlanoDeContas = new PlanoDeContas('','')
		planoDeContas.get()
		.then(data => {
			setPlanodecontas(data)
		})
		.catch(error => alert('Erro ao buscar os planos de contas'))
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
