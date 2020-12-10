import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express, { Application } from 'express';
import { buildSchema } from 'type-graphql';

export class Server {
	private app: Application;
	private server: ApolloServer;
	private port: string | number;

	constructor(port: string | number) {
		port = port;
	}

  public bootstrap = async () => {
    let { port, app, server } = this;
    
    app = express();
    server = new ApolloServer({
      schema: await buildSchema({ resolvers: [__dirname + '/resolvers/*.ts'] }),
      introspection: true,
      playground: true,
      tracing: true,
    });

    app.use(cors());

    app.get('/', (_, res) => {
      res.send(`
			  <div>
				  <h1>Friendify Server GraphQL Edition</h1>
				  <h3>I will not tell you were to go from here</h3>
			  </div>
		  `);
    });

    server.applyMiddleware({ app: app });
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}/graphql`);
    });
  }
}
