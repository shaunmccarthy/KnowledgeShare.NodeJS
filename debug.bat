set PORT=1982
start supervisor --debug server.js
start node-inspector --web-port=1982
start http://localhost:1982/debug?port=5858
start http://localhost:1983
