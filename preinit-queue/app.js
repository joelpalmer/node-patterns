const http = require("http");
const routes = require("./routes");
const asyncModule = require("./asyncModuleWrapper");

asyncModule.initialize(() => {
	console.log("Async module initialized");
});

http
	.createServer((req, res) => {
		if (req.method === "GET" && req.url === "/time") {
			return routes.time(req, res);
		}
		res.writeHead(404);
		res.end("Not found");
	})
	.listen(8000, () => console.log("Started"));
