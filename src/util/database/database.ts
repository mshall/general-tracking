import { Sequelize, ModelCtor } from 'sequelize-typescript';
import appConfig from '../../config';
import CoffeePod from '../../database/dbmodel/tracking-stream.model';

const sequelize = new Sequelize(
  appConfig.database.database,
  appConfig.database.username,
  appConfig.database.password, {
  host: appConfig.database.host,
  port: appConfig.database.port,
  dialect: "mysql",
  dialectOptions: {
    options: {
      useUTC: false,
      dateFirst: 1,
    },
  },
  timezone: '+04:00',
});

sequelize
  .authenticate()
  .then((err) => {
    console.info('Sequelize.intialize -> Connection successful');
  })
  .catch((err) => {
    console.error('Sequelize.intialize -> Unable to connect to database', err);
  });
export function addModel(model: ModelCtor): any {
  return sequelize.addModels([model]);
}

export { sequelize };
