export const AppContextProvider = ({ themeValue, userValue, appConfigValue }) => {
	return (
		<ThemeContext.Provider value={themeValue}>
			<UserDataContext.Provider value={userValue}>
				<AppConfigContext.Provider value={appConfigValue}>
					{children}
				</AppConfigContext.Provider>
			</UserDataContext.Provider>
		</ThemeContext.Provider>
	);
};
