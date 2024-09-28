/* eslint-disable react/prop-types */

const UserForm = ({ userId, user, isEditing, onChange }) => (
	<div className="flex flex-col gap-2 p-6 bg-gray-50 rounded-lg shadow-md">
		<div>
			{userId && !isEditing && (
				<h2 className="mb-1 text-2xl font-semibold">{user?.name}</h2>
			)}
			{isEditing && (
				<p className="flex gap-1 text-slate-600">
					<strong>User: </strong>
					<input
						type="text"
						className="w-80 rounded px-2"
						value={user?.name || ''}
						onChange={(e) => onChange('name', e.target.value)}
						disabled={!isEditing}
					/>
				</p>
			)}
		</div>
		<div className="text-slate-600">
			<strong>Username: </strong>
			<input
				type="text"
				className="w-80 rounded px-2"
				value={user?.username || ''}
				onChange={(e) => onChange('username', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="text-slate-600">
			<strong>Email: </strong>
			<input
				type="email"
				className="w-80 rounded px-2"
				value={user?.email || ''}
				onChange={(e) => onChange('email', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="text-slate-600">
			<strong>Phone: </strong>
			<input
				type="tel"
				className="w-80 rounded px-2"
				value={user?.phone || ''}
				onChange={(e) => onChange('phone', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="text-slate-600">
			<strong>Website: </strong>
			<input
				type="url"
				className="w-80 rounded px-2"
				value={user?.website || ''}
				onChange={(e) => onChange('website', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
	</div>
);

export default UserForm;
