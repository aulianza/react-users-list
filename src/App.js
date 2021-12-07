import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const addNewUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};

	return (
		<div>
			<AddUser onAddNewUser={addNewUserHandler} />
			{usersList.length > 0 && <UsersList users={usersList} />}
		</div>
	);
};

export default App;
