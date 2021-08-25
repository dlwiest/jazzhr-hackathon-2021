import { useStores } from '../../../stores/'

const SettingsController = () => {
	const { settingsStore } = useStores()

    const onToggleDarkMode = () => {
        console.log('changing')
        settingsStore.toggleUseDarkMode()
    }

	return { useDarkMode: settingsStore.useDarkMode, onToggleDarkMode }
}

export default SettingsController