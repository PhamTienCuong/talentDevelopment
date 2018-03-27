module.exports = {
	http_port: 3000,
	view_engine : 'ejs',
	default_state: {
		mode: 'schedule',
		on: { time_hour: 18, time_minute: 30 },
		off: { time_hour: 5, time_minute: 00 }
	},
	db : {
		user: "root",
		password: "",
		dbname: "dbtalentdevelopment",
		host: "localhost"
	},
	crypto_key: 'Talent Development Project',
	json_token_secret: 'Talent Development Project Json Token Secret'
}