import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Search = ({ onSearchChange }) => (
	<div className="flex justify-between items-center mb-4">
		<label className="sr-only" htmlFor="search">
			Search by name or username
		</label>
		<input
			id="search"
			className="w-64 py-2 px-3 rounded"
			type="text"
			placeholder="Search by name or username"
			onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
		/>
		<Link
			id="add-user-btn"
			className="h-fit px-2 py-0.5 text-white bg-[#e1261c] rounded-md hover:scale-105"
			to={'/user'}
		>
			＋ Add new user
		</Link>
	</div>
);

export default Search;
