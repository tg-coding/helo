select *
from users
join posts on posts.author_id = users.id
where users.id = $1;