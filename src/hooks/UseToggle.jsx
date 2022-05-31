import { useState } from 'react';

export const useToggle = (_value) => {
	const [value, setValue] = useState(_value);
	const toggleValue = () => {
		setValue(!value);
	};
	return [value, toggleValue];
};
