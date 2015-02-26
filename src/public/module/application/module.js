qh.setModule("application", {
	app: true,
	require: [
		"section-skills",
		"section-jobs",
		"section-projects"
	],
	controller: [
		"index"
	],
	factory: [
		"navigation",
		"download",
	],
	config: [
		"index"
	],
	directive: [
		"download"
	],
});
