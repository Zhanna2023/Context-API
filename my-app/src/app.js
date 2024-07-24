import { Header, UserBlock } from './components';
import styles from './app.module.css';

const getUserFromServer = () => ({
	id: 'a1100',
	name: 'Иван',
	age: 23,
	email: 'Ivan@mail.ru',
	phone: '+7-999-99-99',
});

export const App = () => {
	const { name, age, emeil, phone } = getUserFromServer();

	return (
		<div className={styles.app}>
			<Header currentUser={name} />
			<hr />
			<UserBlock name={name} age={age} email={emeil} phone={phone} />
		</div>
	);
};
