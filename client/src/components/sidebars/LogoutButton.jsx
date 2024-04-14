import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
	const {logout,loading } = useLogout();
	const handleLogout = ()=>{
		const conf = confirm("Are you sure you want to log out?");

		if(conf){
			logout();
		}
	}
	return (
		<div className='mt-auto'>
			{loading ? <span className="loading loading-spinner"></span> : <BiLogOut onClick={handleLogout} className='w-6 h-6 text-white cursor-pointer' />}
		</div>
	);
};
export default LogoutButton;