import { useState } from "react";


const GenderCheckbox = ({setValue}) => {
	const [select1,setSelect1] = useState(false);
	const [select2,setSelect2] = useState(false);


	const handleChange = (e) => {
		if (e.target.id === "male") {
			setSelect1(true);
			setSelect2(false);
		}
		else {
			setSelect2(true);
			setSelect1(false);
		}
		setValue(e.target.id);
	}
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${select1 ? "selected" : ""}`}>
					<span className='label-text'>Male</span>
					<input type='checkbox' id="male" onChange={handleChange} checked={select1} className='checkbox border-slate-900 ' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${select2 ? "selected" : ""}`}>
					<span className='label-text'>Female</span>
					<input type='checkbox' id="female" onChange={handleChange} checked={select2} className='checkbox border-slate-900' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
