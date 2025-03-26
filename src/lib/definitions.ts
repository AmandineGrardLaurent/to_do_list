type TaskType = {
	id: number;
	label: string;
	date: Date | null;
	// status: "fait" | "à faire";
	status: string;
};

type NewTaskType = {
	label: string;
	date: Date;
};
