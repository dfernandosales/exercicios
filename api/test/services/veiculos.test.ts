import { Paginated } from '@feathersjs/feathers';
import assert from 'assert';
import app from '../../src/app';
import {VeiculosModel} from '../../src/models/veiculos.model';

describe('\'veiculos\' service', () => {
  it('registered the service', () => {
    const service = app.service('veiculos');
    assert.ok(service, 'Registered the service');
  });

  it('should create veiculo', async () => {
    const veiculosService = app.service('veiculos');
    veiculosService.create({veiculo:'TESTE',marca:'TESTE',ano:2020,descricao:'TESTE DESCRICAO',vendido:false});
    const veiculos = (await veiculosService.find()) as Paginated<VeiculosModel>;
    assert(veiculos.total > 0 );
  });
});
