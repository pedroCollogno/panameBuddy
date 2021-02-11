import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Map</Link>
				</li>
				<li>
					<Link to="/favorites">My favorite stations</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
