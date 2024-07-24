import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const CurrentUser = ({ currentUser }) => {
	const { name } = useContext(AppContext);
	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	);
};
