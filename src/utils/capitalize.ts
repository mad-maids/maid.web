export default function capitalize(str: string): string {
	const head = str[0];
	const tail = str.slice(1);
	return `${head.toUpperCase()}${tail}`;
}
