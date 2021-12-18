import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../../helpers/UserContext"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { IPlanoDeContas } from "../../models/interfaces/IPlanoDeContas";
import { getPlanoDeContas } from "../../models/firestore/PlanoDeContasStore";

interface IContasAPagar {
  descricao: string;
  data: Date;
  valor: number;
  planoConta: IPlanoDeContas;
  status: boolean;
}

class ContaAPagar implements IContasAPagar {
  descricao: string;
  valor: number;
  planoConta: IPlanoDeContas;
  data: Date;
  status: boolean;
  public constructor(_descricao: string, _valor: number, _planoConta: IPlanoDeContas, _data: Date) {
    this.descricao = _descricao;
    this.valor = _valor;
    this.planoConta = _planoConta;
    this.data = _data;
    this.status = true;
  }
}


/* const ContaAPagar = [
  {
    value: '1',
    label: 'Internet',
  }, {
    value: '2',
    label: 'Luz',
  },]; */
export default function AddContasAPagar() {

  const [planosdecontas, setPlanodecontas] = useState(new Array<IPlanoDeContas>());
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState(new Date());
  const [valor, setDate] = useState();
  const [planoconta, setPlanoconta] = useState<IPlanoDeContas>();

  const [currency, setCurrency] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    // new ContaAPagar(descricao, valor, planoconta, data);
  }




  useEffect(() => {
    getPlanoDeContas()
      .then(data =>
        setPlanodecontas(data)
      )
      .catch()

  }, [])

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>

          <TextField
            id="outlined-required"
            label="Descrição"
            defaultValue=""
            value={descricao}
            onChange={(text) => setDescricao(text.target.value)}
          />

          <TextField
            id="outlined-select-currency"
            select
            label="Tipo de Conta"
            value={planoconta}
            onChange={handleChange}
            helperText="Selecione o tipo de conta"
          >

            {planosdecontas.map((option: IPlanoDeContas) => (
              <MenuItem key={option.nome} value={option.nome}>
                {option.nome}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="outlined-required"
            label="Valor"
            defaultValue=""
            value={valor}
            onChange={(text) => setDescricao(text.target.value)}
          />
          <TextField
            id="outlined-required"
            label="Data"
            defaultValue=""
            value={data}
            onChange={(text) => setDescricao(text.target.value)}
          />

        </div>
        <div>
          <Stack direction="row">
            <Button variant="contained" endIcon={<SaveIcon />} onClick={(e) => handleSubmit(e)}>
              Salvar
            </Button>
          </Stack></div>
      </Box>
    </>
  )
}