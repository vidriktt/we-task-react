/* eslint-disable react/prop-types */

const UsersTable = ({ users, onUserClick }) => (
	<table className="table-fixed w-full text-sm text-left">
		<thead className="text-sm">
			<tr>
				<th scope="col" className="p-1 pl-2 w-2">
					ID
				</th>
				<th scope="col" className="p-1 pl-2 w-8">
					Name
				</th>
				<th scope="col" className="p-1 pl-2 w-8">
					Username
				</th>
			</tr>
		</thead>
		<tbody>
			{users.map((user) => (
				<tr
					key={user.id}
					id={`user-${user.id}`}
					className="cursor-pointer border-t hover:bg-gray-50 hover:transition hover:duration-100"
					onClick={() => onUserClick(user.id)}
				>
					<td className="p-2">{user.id}</td>
					<td className="p-2">{user.name}</td>
					<td className="p-2">{user.username}</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default UsersTable;
