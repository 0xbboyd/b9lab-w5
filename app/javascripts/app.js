var accounts;
var account;
var balance;
var metaCoinAddress;

function setStatus(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
};

function refreshBalance() {
    var meta = MetaCoin.at(metaCoinAddress);

    meta.getBalance.call(account, {
        from: account
    }).then(function(value) {
        var balance_element = document.getElementById("balance");
        balance_element.innerHTML = value.valueOf();
    }).catch(function(e) {
        console.log(e);
        setStatus("Error getting balance; see log.");
    });
};

function sendCoin() {
    var meta = MetaCoin.at(metaCoinAddress);

    var amount = parseInt(document.getElementById("amount").value);
    var receiver = document.getElementById("receiver").value;

    setStatus("Initiating transaction... (please wait)");

    meta.sendCoin(receiver, amount, {
        from: account
    }).then(function() {
        setStatus("Transaction complete!");
        refreshBalance();
    }).catch(function(e) {
        console.log(e);
        setStatus("Error sending coin; see log.");
    });
};
