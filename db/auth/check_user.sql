select * from pb_users
where LOWER(email) = LOWER($1);