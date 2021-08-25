import { useStores } from 'stores'

interface ReturnProps {
    useDarkMode: boolean
    onToggleDarkMode: () => void
}

const SettingsController = (): ReturnProps => {
	const { settingsStore } = useStores()

    const onToggleDarkMode = () => {
        console.log('changing')
        settingsStore.toggleUseDarkMode()
    }

	return { useDarkMode: settingsStore.useDarkMode, onToggleDarkMode }
}

export default SettingsController