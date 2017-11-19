module.exports = {
  "port": process.env.PORT || 3000,
  "open": false,
  "logLevel": "silent",
  "server": {
    "baseDir": "src",
    "routes": {
      "/node_modules": "node_modules"
    }
  }
}
