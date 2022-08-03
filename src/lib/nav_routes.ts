export function getActiveSection(path: string): string {
	if (/\/(post|topic)\/.*/.test(path)) {
		return 'blog';
	}
    return 'home';
}
