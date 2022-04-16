export const toBase64 = str =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

export function sortObjectByField(a, field, sortMode) {
	if (sortMode === 'asc') return a.sort(sortFunction1)
	if (sortMode === 'desc') return a.sort(sortFunction2)
	return a.sort(sortFunction1)

	function sortFunction1(a, b) {
		if (a[field] === b[field]) return 0
		return a[field] < b[field] ? -1 : 1
	}

	function sortFunction2(a, b) {
		if (a[field] === b[field]) return 0
		return a[field] > b[field] ? -1 : 1
	}
}
