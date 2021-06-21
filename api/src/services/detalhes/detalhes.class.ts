import { Paginated, Params } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { VeiculosModel } from '../../models/veiculos.model';
import moment from "moment-timezone";

interface PorMarca {
  marca: string;
  quantidade: number;
}

interface PorDecada {
  decada: number;
  quantidade: number;
}

export class Detalhes {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  async find(params: Params): Promise<any> {
    console.log(await this.countRegistradosUltimaSemana());
    if (params.query?.type == "NAO_VENDIDOS") {
      return this.countNaoVendidos()
    } else if (params.query?.type == "POR_MARCA") {
      return this.countPorFabricante();
    } else if (params.query?.type == "ULTIMA_SEMANA") {
      return this.countRegistradosUltimaSemana();
    }else if (params.query?.type == "POR_DECADA") {
      return this.countPorDecada();
    }
  }

  countNaoVendidos = async (): Promise<Paginated<VeiculosModel>> => {
    return (await this.app.service('veiculos').find({ query: { vendido: false } })) as Paginated<VeiculosModel>;
  }

  countRegistradosUltimaSemana = async (): Promise<Paginated<VeiculosModel>> => {
    return (
      await this.app.service('veiculos')
        .find({  query: { createdAt: { $gte: moment().subtract(7,"days").tz("America/Sao_Paulo").startOf("day").format("YYYY-MM-DDTHH:mm:ss") } } })) as Paginated<VeiculosModel>;
  }

  countPorFabricante = async (): Promise<PorMarca[]> => {
    const todos: VeiculosModel[] = (await this.app.service('veiculos').find({ paginate: false })) as VeiculosModel[];
    let countPorFabricante: PorMarca[] = [];
    todos.forEach(i => {
      if (countPorFabricante.filter(t => t.marca === i.marca).length > 0) {
        const index = countPorFabricante.findIndex(t => t.marca === i.marca);
        countPorFabricante[index].quantidade += 1;
      } else {
        countPorFabricante.push({ marca: i.marca, quantidade: 1 });
      }
    });
    return countPorFabricante;
  }

  countPorDecada = async (): Promise<PorDecada[]> => {
    const todos: VeiculosModel[] = (await this.app.service('veiculos').find({ paginate: false })) as VeiculosModel[];
    let countPorDecada: PorDecada[] = [];
    todos.forEach(i => {
      if (countPorDecada.filter(t => Math.floor(i.ano/10) === t.decada).length > 0) {
        const index = countPorDecada.findIndex(t => t.decada === Math.floor(i.ano/10));
        countPorDecada[index].quantidade += 1;
      } else {
        countPorDecada.push({ decada: Math.floor(i.ano/10), quantidade: 1 });
      }
    });
    return countPorDecada;
  }
}
