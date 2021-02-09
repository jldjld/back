DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `simplon_groupx_test`.`users`
(`id`,
`name`,
`email`)
VALUES
(1, "John", "john@mail.com");

INSERT INTO `simplon_groupx_test`.`users`
(`id`,
`name`,
`email`)
VALUES
(2, "Jane", "jane@mailbox.fr");

INSERT INTO `simplon_groupx_test`.`users`
(`id`,
`name`,
`email`)
VALUES
(3, "Léon", "leon@leon.com");

