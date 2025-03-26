CREATE TABLE `tasks_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`label` varchar(255) NOT NULL,
	`status` varchar(20) NOT NULL,
	`date` date NOT NULL,
	CONSTRAINT `tasks_table_id` PRIMARY KEY(`id`)
);
