import './Dashboard.css';  
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import VisualizarSaldo from '../VisualizaSaldo/VisualizaSaldo';
import { useEffect, useState } from 'react';
import { ContasAReceber } from '../../models/ContasAReceber';
import { ContasAPagar } from '../../models/ContasAPagar';
import { IContas } from '../../models/interfaces/IContas';

export default function DashBoard() {
  const [receitas, setReceitas] = useState(0)
  const [despesas, setDespesas] = useState(0)

  useEffect(() => {
    const contasAReceber : ContasAReceber = new ContasAReceber('',new Date(),0,'')
    contasAReceber.get()
    .then(data => {
      let rec = 0
      data.map((conta : IContas) => {
        rec += conta.valor
      })
      setReceitas(rec)
    })

    const contasAPagar : ContasAPagar = new ContasAPagar('',new Date(),0,'')
    contasAPagar.get()
    .then(data => {
      let des = 0
      data.map((conta : IContas) => {
        des += conta.valor
      })
      setDespesas(des)
    })
  }, [])
  return (
    <div style={{}}>
      <h4>Dashboard</h4>
      <div className='rowC'>
      <Card
        style={{
          width: 400,
          backgroundColor: "#FFAC9E",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Saldo
          </Typography>
          <Typography variant="h5" component="h2">
          <b>DESPESAS</b>
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
             
          </Typography>
          <Typography variant="body2" component="p">
             Valor: 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><b>R$ {despesas}</b></Button>
        </CardActions>
      </Card>
      <div id="separacao"></div>
      <Card
        style={{
          width: 400,
          backgroundColor: "#7AF5AF",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Saldo
          </Typography>
          <Typography variant="h5" component="h2">
           <b>RECEITA</b>
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
             
          </Typography>
          <Typography variant="body2" component="p">
             Valor: 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><b>R$ {receitas}</b></Button>
        </CardActions>
      </Card>      
      </div>
      <VisualizarSaldo receitas={receitas} despesas={despesas} />
    </div>

    
  );
}