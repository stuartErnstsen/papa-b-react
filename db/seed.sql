create table pb_users (
    user_id serial primary key,
    email varchar(150),
    first_name varchar(50),
    last_name varchar(50),
    hashword varchar(2000),
    is_admin boolean default false
);

-- insert into pb_users (
-- email, first_name, last_name)
-- values (
--     'YOYO@yo.com',
--     'pypypypyp',
--     'owowowow'
-- )

-- select * from pb_users