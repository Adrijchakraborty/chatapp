import { useStateContext } from "../../context/Responsive";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	const {resp} = useStateContext()
	return (
		<div className={`border-r border-slate-500 p-4 ${!resp ? "hidden" : "flex flex-col"} md:flex flex-col`}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;