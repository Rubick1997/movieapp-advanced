type DateType={
    year:"numeric",
    month:"numeric",
    day:"numeric"
}

export const fullDate = (string:string) => {
	let options:DateType = { year: "numeric", month: "numeric", day: "numeric" };
	return new Date(string).toLocaleDateString([], options);
};
