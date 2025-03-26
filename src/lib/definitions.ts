type TaskType = {
	id: number;
	label: string;
	date: Date | null;
	status: "fait" | "à faire";
};

type NewTaskType = {
	label: string;
	date: Date;
};
