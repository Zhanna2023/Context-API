import { useState, useEffect } from 'react';
import { Header, UserBlock } from './components';
import styles from './app.module.css';
import { AppContext } from './context';

const getUserFromServer = () => ({
	id: 'a1100',
	name: 'Иван',
	age: 23,
	email: 'Ivan@mail.ru',
	phone: '+7-999-99-99',
});

const getAnoterUserFromServer = () => ({
	id: 'a1100',
	name: 'Василий',
	age: 23,
	email: 'Ivan@mail.ru',
	phone: '+7-999-99-99',
});

export const App = () => {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		setUserData(userDataFromServer);
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnoterUserFromServer();
		setUserData(anotherUserDataFromServer);
	};

	return (
		<AppContext.Provider value={userData}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContext.Provider>
	);
};
