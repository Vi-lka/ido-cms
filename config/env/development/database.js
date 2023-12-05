module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'ido-cms'),
			user: env('DATABASE_USERNAME', 'ido'),
			password: env('DATABASE_PASSWORD', '2XXm9cD9meQzJ68'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
