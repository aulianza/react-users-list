import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import style from "./AddUser.module.css";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid Input",
				message: "Input cant be empty",
			});
			return;
		}
		if (enteredAge < 1) {
			setError({
				title: "Invalid Age",
				message: "Age cant be less than 0",
			});
			return;
		}

		// pass into parent component
		props.onAddNewUser(enteredUsername, enteredAge);

		// reset input value
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangehandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangehandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const handleCloseModal = () => setError();

	return (
		<>
			{error && (
				<ErrorModal
					title={error?.title}
					message={error?.message}
					onClickCloseModal={handleCloseModal}
				/>
			)}
			<Card className={style.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={usernameChangehandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						value={enteredAge}
						type="number"
						onChange={ageChangehandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
