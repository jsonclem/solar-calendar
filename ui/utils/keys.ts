export function handleKeys(event: React.KeyboardEvent, keyList: string[], callback: () => void) {
	if (keyList.includes(event.key)) {
		event.preventDefault();
		callback();
	}
}
