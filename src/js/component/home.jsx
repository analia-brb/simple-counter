import React from "react";


//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="container bg-dark" style={{height:"150px"}}>
			<div className="row text-light text-center"><h1>Simple Counter</h1></div>
			<div className="row d-flex justify-content-center">
				<div className="bg-secondary d-flex justify-content-center align-items-center m-2" style={{color: "white", height: "50px", width: "60px", fontSize: "30px"}}>🕥</div>
				<div className="bg-secondary d-flex justify-content-center align-items-center m-2" style={{color: "white", height: "50px", width: "50px", fontSize: "30px"}}>{props.prop6}</div>
				<div className="bg-secondary d-flex justify-content-center align-items-center m-2" style={{color: "white", height: "50px", width: "50px", fontSize: "30px"}}>{props.prop5}</div>
				<div className="bg-secondary d-flex justify-content-center align-items-center m-2" style={{color: "white", height: "50px", width: "50px", fontSize: "30px"}}>{props.prop4}</div>
				<div className="bg-secondary d-flex justify-content-center align-items-center m-2" style={{color: "white", height: "50px", width: "50px", fontSize: "30px"}}>{props.prop3}</div>
				<div className="bg-secondary d-flex justify-content-center align-items-center m-2" style={{color: "white", height: "50px", width: "50px", fontSize: "30px"}}>{props.prop2}</div>
				<div className="bg-secondary d-flex justify-content-center align-items-center m-2" style={{color: "white", height: "50px", width: "50px", fontSize: "30px"}}>{props.prop1}</div>
							</div>
			

		</div>
		
	);
};

export default Home;
