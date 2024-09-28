/* eslint-disable react/prop-types */

const CompanyForm = ({ company, isEditing, onChange }) => (
	<div className="flex flex-col gap-2 p-6 bg-gray-50 rounded-lg shadow-md">
		<h2 className="text-xl font-bold mb-2">Company</h2>
		<div className="text-slate-600">
			<strong>Name: </strong>
			<input
				type="text"
				className="w-80 rounded px-2"
				value={company?.name || ''}
				onChange={(e) => onChange('name', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="flex gap-1 text-slate-600">
			<strong>Catchphrase: </strong>
			<textarea
				className="w-80 h-7 rounded px-2"
				value={company?.catchPhrase || ''}
				onChange={(e) => onChange('catchPhrase', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
		<div className="flex gap-1 text-slate-600">
			<strong className="text-nowrap">Business summary: </strong>
			<textarea
				className="w-80 h-7 rounded px-2"
				value={company?.bs || ''}
				onChange={(e) => onChange('bs', e.target.value)}
				disabled={!isEditing}
			/>
		</div>
	</div>
);

export default CompanyForm;
