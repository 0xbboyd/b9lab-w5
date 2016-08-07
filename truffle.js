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
        "app.css": [
            "stylesheets/app.css"
        ],
        "images/": "images/"
    },
    networks: {
      "development": {
        network_id: 14658 // b9labs test net
      }
    }
    rpc: {
        host: "localhost",
        port: 8545
    }
};
