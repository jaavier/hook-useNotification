import React, { useEffect, useState } from 'react';

const Context = React.createContext();

function NotificationProvider({ children }) {
	const [ notifications, setNotifications ] = useState([]);
	const addNotification = (temporalNotification) => {
		setNotifications([ ...notifications, temporalNotification ]);
	};
	useEffect(() => {}, [ notifications ]);

	const value = {
		notifications,
		addNotification
	};
	return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useNotification() {
	return React.useContext(Context);
}

export { NotificationProvider, useNotification };
