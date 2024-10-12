export const Months = Array.from({ length: 12 }, (_, index) => {
	const date = new Date(0, index)
	return date.toLocaleString("default", { month: "long" })
})
