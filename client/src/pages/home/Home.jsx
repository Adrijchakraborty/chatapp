
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebars/Sidebar";

const Home = () => {
	return (
		<div className='flex h-[650px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;