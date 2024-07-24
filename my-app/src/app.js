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

export const App = () => {
	const userData = getUserFromServer();

	return (
		<AppContext.Provider value={userData}>
			<div className={styles.app}>
				<Header />
				<hr />
				<UserBlock />
			</div>
		</AppContext.Provider>
	);
};
