import React, {useState} from 'react';
import Button from "./UI/Button";

const SignIn = () => {
	const [enteredName, setEnteredName]=useState('');
	console.log(enteredName);

	const handleName =(e)=>{
		setEnteredName(e.target.value)
	}


	const handleForm =(e)=>{
		e.preventDefault();
		setEnteredName('')
	}
	return (
		<div className="pt-20 flex justify-center items-center ">
			<div className="flex justify-center items-center bg-stone-50 w-full md:w-3/5">
				<form className="flex flex-col pb-20 w-full mx-4 md:mx-12 lg:mx-60" onSubmit={handleForm}>

					<h4 className="font-bold my-4"> Register </h4>
					<div className="flex flex-col py-4">
						<label htmlFor="name" className="py-2">Name</label>
						<input type="text" id="name" placeholder=" Name" className="py-2" autoFocus required value={enteredName}
						onChange={handleName}
						/>
					</div>
					<div className="flex flex-col py-4">
						<label htmlFor="email" className="py-2">Email</label>
						<input type="email" id="email" placeholder=" John@gmail.com" className="py-2" required/>
					</div>
					<div className="flex flex-col py-4">
						<label htmlFor="card-number" className="py-2">Card number</label>
						<input type="password" id="card-number" placeholder=" 0404 4545 6868 7812" className="py-2" required/>
					</div>
					<div className="flex flex-col py-4">
						<label htmlFor="card-name" className="py-2">Name on card</label>
						<input type="text" id="card-name" placeholder=" John Doe" className="py-2" required/>
					</div>



					<div className="flex flex-col md:flex-row md:justify-between">
						<div>
							<label htmlFor="expires" className="py-2">Expires</label>
							<input type="password" id="expires" placeholder=" 01/19"  className="py-2" required/>
						</div>
						<div>
							<label htmlFor="security" className="py-2">Security</label>
							<input type="password" id="security" placeholder="  * * *" required className="py-2"/>
						</div>

					</div>
					<div className='my-8'>
						<Button>Next</Button>
					</div>

				</form>
			</div>
		</div>
	);
};

export default SignIn;
