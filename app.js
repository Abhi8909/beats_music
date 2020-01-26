let http = require("http");
let routes = require("./routes");

http
  .createServer(function(req, res) {
    if (routes[req.pathname])
      routes[req.pathname]({ abhishek: "gupta" }, () => {
        res.end("Hello World\n");
      });
    else res.end("Not found\n");
  })
  .listen(3000, () => {
    console.log("Server is listening at port at 3000");
  });
