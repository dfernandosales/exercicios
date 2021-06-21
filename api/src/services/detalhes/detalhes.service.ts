// Initializes the `detalhes` service on path `/detalhes`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Detalhes } from './detalhes.class';
import hooks from './detalhes.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'detalhes': Detalhes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/detalhes', new Detalhes(app));

  // Get our initialized service so that we can register hooks
  const service = app.service('detalhes');

  service.hooks(hooks);
}
