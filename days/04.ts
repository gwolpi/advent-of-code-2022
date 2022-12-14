import '../extension-methods.ts';

const processLines = (input: string): number[][] =>
	input.matchMap(/(\d+)-(\d+),(\d+)-(\d+)/g, (x) => x.slice(1, 5).map(Number));

export const p1 = (input: string): number =>
	processLines(input).count(([min1, max1, min2, max2]) =>
		(min1 >= min2 && max2 >= max1) || (max1 >= max2 && min2 >= min1));

export const p2 = (input: string): number =>
	processLines(input).count(([min1, max1, min2, max2]) =>
		(min1 >= max2 && min2 >= max1) || (max1 >= min2 && max2 >= min1));
