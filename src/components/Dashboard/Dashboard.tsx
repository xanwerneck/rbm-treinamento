import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import './Dashboard.css';  

export default function DashQuadros() {
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
          <Button size="small"><b>R$ 0,00</b></Button>
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
          <Button size="small"><b>R$ 0,00</b></Button>
        </CardActions>
      </Card>
      </div>
    </div>

    
  );
}