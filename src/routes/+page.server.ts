import type { Droid } from "$lib/interfaces";

const isDroid = (obj: any): obj is Droid => {
	const hasName = 'name' in obj;
	const hasManufacturer = 'manufacturer' in obj;
	const hasModel = 'model' in obj;
	const hasClass = 'class' in obj;
	const hasImage = 'image' in obj && typeof obj.image === 'string';
	const hasCategories = 'categories' in obj;
	const hasAffiliation = 'affiliation' in obj;
	return hasName && hasManufacturer && hasModel && hasClass && hasImage && hasCategories && hasAffiliation;

};

const fetchDroids = async () => {
	const res = await fetch('https://apisw.isaac238.dev/individuals/category/droids_by_affiliation');
	const droids = await res.json();
	const filtered: Droid[] = [];
	droids.forEach((droid: Droid) => {
		if (isDroid(droid)) {
			filtered.push(droid as Droid);
		}
	});
	console.log(filtered.length);
	console.log(droids.length);
	return filtered;
};

/** @type {import('./$types').PageServerLoad}*/
export const load = async () => {
	return {
		droids: await fetchDroids(),
	}
};
