/* eslint-disable react/prop-types */

const AddressForm = ({ address, isEditing, onChange }) => (
	<div className="flex flex-col gap-2 p-6 bg-gray-50 rounded-lg shadow-md">
		<h2 className="text-xl font-bold mb-2">Address</h2>
		<div className="text-slate-600">
			<strong>Street: </strong>
			<input
				type="text"
				className="w-80 rounded px-2"
				value={address?.street || ''}
				onChange={(e) => onChange('street', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="text-slate-600">
			<strong>Suite: </strong>
			<input
				type="text"
				className="w-80 rounded px-2"
				value={address?.suite || ''}
				onChange={(e) => onChange('suite', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="text-slate-600">
			<strong>City: </strong>
			<input
				type="text"
				className="w-80 rounded px-2"
				value={address?.city || ''}
				onChange={(e) => onChange('city', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="text-slate-600">
			<strong>Zipcode: </strong>
			<input
				type="text"
				className="w-80 rounded px-2"
				value={address?.zipcode || ''}
				onChange={(e) => onChange('zipcode', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="text-slate-600">
			<strong>Coordinates: </strong>
			<input
				type="text"
				className={
					'rounded pl-2' + (isEditing ? ' w-40 mr-2 pr-2' : '')
				}
				value={address?.geo?.lat || ''}
				size={(!isEditing && address?.geo?.lat?.length) || 10}
				onChange={(e) => onChange('geo-lat', e.target.value)}
				disabled={!isEditing}
			/>
			;
			<input
				type="text"
				className={'rounded px-2' + (isEditing ? ' w-40 ml-2' : '')}
				value={address?.geo?.lng || ''}
				size={(!isEditing && address?.geo?.lng?.length) || 10}
				onChange={(e) => onChange('geo-lng', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
	</div>
);

export default AddressForm;
