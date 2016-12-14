var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to="/?city=Samarkand">Samarkand, Uzbekistan</Link>
				</li>
				<li>
					<Link to="/?city=Minsk">Minsk, Belarus</Link>
				</li>
				<li>
					<Link to="/?city=New York">New York, USA </Link>
				</li>
				<li>
					<Link to="/?city=Jerusalim">Jerusalim, Israel </Link>
				</li>
			</ol>
		</div>
	);
}

module.exports = Examples;
