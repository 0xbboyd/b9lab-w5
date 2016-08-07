
import "./NameRegister.sol";

contract Registrar is NameRegister {
	event Changed(string indexed name);
	event ReverseChanged(address indexed addr, string indexed name);

	function owner(string _name) constant returns (address o_owner);
	function addr(string _name) constant returns (address o_address);
	function subRegistrar(string _name) constant returns (address o_subRegistrar);
	function content(string _name) constant returns (bytes32 o_content);

	function name(address _owner) constant returns (string o_name);
}
