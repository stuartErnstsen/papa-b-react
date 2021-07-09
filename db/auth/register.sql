insert into pb_users (
    email,
    first_name,
    last_name,
    hashword
) values (
    $1,
    $2,
    $3,
    $4
)
returning *;