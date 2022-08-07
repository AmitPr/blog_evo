export function getActiveSection(path: string): string {
	if (/\/(post|topic)\/.*/.test(path)) {
		return 'blog';
	}
	if (/\/(about)/.test(path)) {
		return 'about';
	}
	if (/\/(contact)/i.test(path)) {
		return 'contact';
	}

	return 'home';
}
