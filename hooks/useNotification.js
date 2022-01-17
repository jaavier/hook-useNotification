import React, { useState } from 'react';

const Context = React.createContext();

function NotificationProvider({ children }) {
	const [ notifications, setNotifications ] = useState([]);
	const addNotification = (temporalNotification) => {
		setNotifications([ ...notifications, temporalNotification ]);
	};
	const value = { notifications, addNotification };
	return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useNotification() {
	return React.useContext(Context);
}

export { NotificationProvider, useNotification };
