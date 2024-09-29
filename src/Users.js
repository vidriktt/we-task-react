import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './components/Search';
import UsersTable from './components/UsersTable';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const storedUsers = sessionStorage.getItem('we-users');

		if (storedUsers) {
			setUsers(JSON.parse(storedUsers));
			setLoading(false);
		} else {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					sessionStorage.setItem('we-users', JSON.stringify(data));
					setUsers(data);
					setLoading(false);
				})
				.catch((error) => {
					console.error('Error when fetching users: ', error);
					setLoading(false);
				});
		}

		document.title = 'WE Users';
	}, []);

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(searchTerm) ||
			user.username.toLowerCase().includes(searchTerm)
	);

	const handleUserClick = (userId) => {
		navigate(`/user/${userId}`);
	};

	return (
		<div>
			<header className="container max-w-3xl mx-auto mt-20 pl-16 text-white">
				<h1 className="text-2xl font-bold">Users</h1>
			</header>
			<main className="container max-w-3xl mx-auto mt-4 p-10 bg-white rounded-xl shadow-lg shadow-slate-700 animate-[fadeIn_300ms_ease-in-out]">
				<Search onSearchChange={setSearchTerm} />
				{loading ? (
					<div className="animate-spin rounded-full h-8 w-8 mt-4 mx-auto border-t-4 border-solid border-[#e1261c]"></div>
				) : (
					<UsersTable
						users={filteredUsers}
						onUserClick={handleUserClick}
					/>
				)}
			</main>
		</div>
	);
};

export default Users;
