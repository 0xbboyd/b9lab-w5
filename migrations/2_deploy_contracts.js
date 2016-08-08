module.exports = function(deployer, network) {
    var registrar;
    // deploy registrar
    deployer.deploy(GlobalRegistrar).then(function() {
            return GlobalRegistrar.deployed().address;
        }).then(function(registrarAddress) {
            console.log('registrar address ', registrarAddress);
            registrar = GlobalRegistrar.at(registrarAddress);
            // deploy url hint
            return deployer.deploy(UrlHint);
        }).then(function(tx) {
            console.log('deploy urlhint tx', tx);
            // register url hint
            return registrar.reserve(
                "urlhint", {
                    from: web3.eth.accounts[0]
                });
        }).then(function(txn1) {
            console.log('register urlhint tx ', txn1)
            return registrar
                .setAddress(
                    "urlhint",
                    UrlHint.deployed().address,
                    true, {
                        from: web3.eth.accounts[0]
                    });
        })
        .then(function(txn2) {
            console.log('setAddress urlhint tx ', txn2);
            return deployer.deploy(ConvertLib);
        }).then(function() {
            return deployer.autolink();
        }).then(function() {
            // deploy MetaCoin
            return deployer.deploy(MetaCoin);
        }).then(function() {
            // register metacoin
            return registrar.reserve(
                "MetaCoin", {
                    from: web3.eth.accounts[0]
                });
        }).then(function(txn1) {
            console.log(txn1)
            return registrar
                .setAddress(
                    "MetaCoin",
                    MetaCoin.deployed().address,
                    true, {
                        from: web3.eth.accounts[0]
                    });
        })
        .then(function(txn2) {
            console.log(txn2);
        });
};
