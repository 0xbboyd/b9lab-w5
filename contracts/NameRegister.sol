
contract NameRegister {
	function addr(string _name) constant returns (address o_owner);
	function name(address _owner) constant returns (string o_name);
}
