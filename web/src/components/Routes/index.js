import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NaoVendidosList from '../Detalhes/NaoVendidosList';
import UltimaSemanaList from '../Detalhes/UltimaSemanaList';
import VeiculosPorDecada from '../Detalhes/VeiculosPorDecada';
import VeiculosPorMarca from '../Detalhes/VeiculosPorMarca';
import VeiculosForm from '../Veiculos/VeiculosForm';
import VeiculosList from '../Veiculos/VeiculosList';

export function MainFrame() {
  return (
    <Switch>
      <Route exact path="/veiculos" >
        <VeiculosList />
      </Route>
      <Route exact path="/ultima-semana" >
        <UltimaSemanaList />
      </Route>
      <Route exact path="/nao-vendidos" >
        <NaoVendidosList />
      </Route>
      <Route exact path="/por-decada" >
        <VeiculosPorDecada />
      </Route>
      <Route exact path="/por-marca" >
        <VeiculosPorMarca />
      </Route>
      <Route exact path="/veiculos/:id" >
        <VeiculosForm />
      </Route>
      <Route exact path="/veiculos/new" >
        <VeiculosForm />
      </Route>
    </Switch>
  )
}