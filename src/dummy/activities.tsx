function activity(id: number): string {
	let activity: string = "";

	switch(id) {
		case 1:
			activity = "Sport";
			break;
		case 2:
			activity = "Art";
			break;
		case 3:
			activity = "Gardening";
			break;
		default:
			activity = "Error";
	}

	return activity;
}

export { activity };