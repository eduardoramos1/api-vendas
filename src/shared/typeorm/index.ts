import { createConnection } from 'typeorm';

//  ao Fazer isso ele procura na raiz do projeto(ou onde está o package.json) o arquivo chamado ormconfig.json
createConnection();
