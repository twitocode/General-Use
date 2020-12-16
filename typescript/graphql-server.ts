import { ApolloServer } from 'apollo-server';
import { Request, Response } from 'express';
import { connect } from 'mongoose';
import { buildSchema } from 'type-graphql';

export class Server {
	private server: ApolloServer;
	private port: string | number;

	constructor(port: string | number) {
		this.port = port;
	}

	public bootstrap = async () => {
		let { server, port } = this;

		server = new ApolloServer({
			schema: await buildSchema({ resolvers: [__dirname + '/resolvers/*.ts'] }),
			introspection: true,
			playground: true,
			tracing: true,
			context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
		});

		const { url } = await server.listen(port);
		console.log(`Listening at ${url}`);

		/*
			try {
				await connect(process.env.MONGO!, {
					useNewUrlParser: true,
					useUnifiedTopology: true,
					useFindAndModify: true,
				});

				console.log('Connected to DB');
			} catch (err) {
				console.log(err.message);
			}
		*/
	};
}
