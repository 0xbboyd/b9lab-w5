//sol Registrar
// Simple URL registrar for content hashes.
// @authors:
//   Gav Wood <g@ethdev.com>

/*contract FixedFeeRegistrar{function name(address _owner)constant returns(string );function setOwner(string _name,address _newOwner);function setAddr(string _name,address _a);function addr(string _name)constant returns(address );function subRegistrar(string _name)constant returns(address );function reserve(string _name);function disown(string _name,address _refund);function setName(string _name);function setSubRegistrar(string _name,address _registrar);function content(string _name)constant returns(bytes32 );function owner(string _name)constant returns(address );function record(string _name)constant returns(address o_addr,address o_subRegistrar,bytes32 o_content,address o_owner);function setContent(string _name,bytes32 _content);}*/
import "./GlobalRegistrar.sol";

contract UrlHint {
  address registrar;

	struct Reg {
		bytes32 url;
		address owner;
	}

	function UrlHint(address globalRegistrar)
	{
    registrar = globalRegistrar;
		GlobalRegistrar reg = GlobalRegistrar(globalRegistrar);
		reg.reserve.value(5 ether)("urlhinter");
		reg.setAddress("urlhinter", this);
		reg.setName("urlhinter");
		reg.setOwner("urlhinter", msg.sender);
	}

	function kill() {
		if (msg.sender == m_owner)
		{
			suicide(m_owner);
			GlobalRegistrar(registrar).disown("urlhinter");
		}
	}

	function url(bytes32 _hash) constant returns (bytes32) {
		return urls[_hash].url;
	}

	function owner(bytes32 _hash) constant returns (address) {
		return urls[_hash].owner;
	}

	function suggestUrl(bytes32 _hash, bytes32 _url) {
		if (urls[_hash].url == "" || urls[_hash].owner == msg.sender) {
			urls[_hash].owner = msg.sender;
			urls[_hash].url = _url;
		}
	}

	address m_owner = msg.sender;
	mapping (bytes32 => Reg) urls;
}
