import Image from "next/image";

function Microkuma() {
	return (
		<>
			<button className="microkuma">
				<Image className="logo" src={"/logo.png"} width={32} height={32} alt="" />
			</button>
		</>
	);
}

export default Microkuma;
