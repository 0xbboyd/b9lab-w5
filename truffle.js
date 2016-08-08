module.exports = {
    build: {
        "index.html": "index.html",
        "client-sig.html": "client-sig.html",
        "app.js": [
            "javascripts/app.js"
        ],
        "geth-sig.js": [
            "javascripts/geth-sig.js"
        ],
        "client-sig.js": [
            "javascripts/_vendor/lightwallet/index.js",
            "javascripts/_vendor/hooked-web3-provider/index.js",
            "javascripts/client-sig.js"
        ],
        "registrar.js": [
          "javascripts/registrar.js"
        ],
        "app.css": [
            "stylesheets/app.css"
        ],
        "images/": "images/"
    },
    networks: {
      "stage": {
        network_id: 14658, // b9labs test net
        // host: "192.168.1.16",
        // port: 8545
      },
      "development": {
        network_id: "default"
      }
    },
    rpc: {
        host: "localhost",
        port: 8545
    }
};
