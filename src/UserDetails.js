import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AddressForm from './components/AddressForm';
import CompanyForm from './components/CompanyForm';
import UserForm from './components/UserForm';

const UserDetails = () => {
	const [user, setUser] = useState({});
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState(false);
	const [storedUsers, setStoredUsers] = useState(
		JSON.parse(sessionStorage.getItem('we-users'))
	);

	const { id: userId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (userId) {
			setIsEditing(false);

			if (storedUsers) {
				setUser(
					storedUsers.find(
						(user) => user.id === Number.parseInt(userId)
					)
				);
			} else {
				fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
					.then((response) => {
						if (!response.ok)
							throw new Error('Network response was not ok');
						return response.json();
					})
					.then((data) => setUser(data))
					.catch((error) =>
						console.error('Failed to fetch user data: ', error)
					);
			}
		} else {
			setIsEditing(true);
		}
	}, [userId, storedUsers]);

	const saveUserData = () => {
		const updatedData = {
			...user,
			id: userId
				? Number.parseInt(userId)
				: storedUsers[storedUsers.length - 1].id + 1 ||
					Math.floor(Math.random() * 99),
		};

		if (userId) {
			const updatedUsers = userId
				? storedUsers.map((user) =>
						user.id === updatedData.id ? updatedData : user
					)
				: [...storedUsers, updatedData];

			sessionStorage.setItem('we-users', JSON.stringify(updatedUsers));
			setStoredUsers(updatedUsers);
		} else {
			sessionStorage.setItem(
				'we-users',
				JSON.stringify([...storedUsers, updatedData])
			);
			navigate(`/user/${updatedData.id}`);
			window.location.reload();
		}
	};

	const handleInputChange = (field, value) => {
		setUser((prevUser) => ({
			...prevUser,
			[field]: value,
		}));
	};

	const handleAddressChange = (field, value) => {
		setUser((prevUser) => ({
			...prevUser,
			address: {
				...prevUser.address,
				[field.includes('geo') ? 'geo' : field]: field.includes('geo')
					? {
							lat: field.includes('lat')
								? value
								: prevUser.address?.geo?.lat || '',
							lng: field.includes('lng')
								? value
								: prevUser.address?.geo?.lng || '',
						}
					: value,
			},
		}));
	};

	const handleCompanyChange = (field, value) => {
		setUser((prevUser) => ({
			...prevUser,
			company: {
				...prevUser.company,
				[field]: value,
			},
		}));
	};

	const areInputsValid = () => {
		let inputsValid = true;
		const inputs = document.querySelectorAll(
			'#user-details input, #user-details textarea'
		);

		inputs.forEach((input) => {
			if (input.value.trim() === '') {
				inputsValid = false;
				input.classList.add('border-red-500');
			} else {
				input.classList.remove('border-red-500');
			}
		});

		return inputsValid;
	};

	const handleSaveClick = () => {
		if (!areInputsValid()) {
			setError(true);
		} else {
			saveUserData();
			setError(false);
		}
	};

	const handleCancelClick = () => {
		if (!userId) {
			navigate('/');
		}

		setUser(
			storedUsers.find((user) => user.id === Number.parseInt(userId))
		);
		setIsEditing(false);
		setError(false);
	};

	const handleDelete = () => {
		const filteredUsers = storedUsers.filter(
			(user) => user.id !== Number(userId)
		);
		sessionStorage.setItem('we-users', JSON.stringify(filteredUsers));
		setStoredUsers(filteredUsers);
		navigate('/');
	};

	return (
		<div className="container max-w-3xl mx-auto mt-20">
			<header className="pl-16 text-white">
				<h1 className="text-2xl font-bold">User details</h1>
				<Link className="text-sm hover:text-[#e1261c]" to={'/'}>
					← Back
				</Link>
			</header>

			<main className="mt-4 p-10 bg-white rounded-xl shadow-lg">
				<div id="user-details" className="space-y-6">
					<UserForm
						userId={userId}
						user={user}
						isEditing={isEditing}
						onChange={handleInputChange}
					/>

					<AddressForm
						address={user?.address}
						isEditing={isEditing}
						onChange={handleAddressChange}
					/>

					<CompanyForm
						company={user?.company}
						isEditing={isEditing}
						onChange={handleCompanyChange}
					/>
				</div>

				{error && (
					<p className="mt-4 text-red-500">
						Please fill all of the fields.
					</p>
				)}

				<div className="flex gap-3 mt-4">
					{isEditing ? (
						<>
							<button
								className="px-2 py-1 bg-[#e1261c] text-white rounded hover:scale-105"
								onClick={handleSaveClick}
							>
								Save
							</button>
							<button
								className="px-2 py-1 border rounded hover:scale-105"
								onClick={handleCancelClick}
							>
								Cancel
							</button>
							{userId && (
								<button
									className="ml-auto px-2 py-1 bg-[#e1261c] text-white rounded hover:scale-105"
									onClick={handleDelete}
								>
									Delete
								</button>
							)}
						</>
					) : (
						<button
							className="px-2 py-1 bg-[#e1261c] text-white rounded hover:scale-105"
							onClick={() => setIsEditing(true)}
						>
							Edit
						</button>
					)}
				</div>
			</main>
		</div>
	);
};

export default UserDetails;
