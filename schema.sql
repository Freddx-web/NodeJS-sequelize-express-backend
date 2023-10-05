
create table users(
    id integer not null auto_increment,
    name varchar(30),
    email varchar(60),
    password varchar(255),
    primary key(id)
);


INSERT INTO `users`(`id`, `name`, `email`, `password`) VALUES (1,'Freddy Lopez','Freddy@gmail.com','fredd123');


