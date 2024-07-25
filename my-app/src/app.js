import { useEffect, useReducer } from 'react';
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

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

export const App = () => {
	const [userData, dispatch] = useReducer(reducer, {});

	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnoterUserFromServer();
		dispatch(anotherUserDataFromServer);
	};

	return (
		<AppContext.Provider value={{ userData, dispatch }}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</AppContext.Provider>
	);
};
