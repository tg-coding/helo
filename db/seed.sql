insert into users
(username, password, profile_pic)
values
('tag', '123', 'https://robohash.org/tg'),
('btg', '456', 'https://robohash.org/btg'),
('jg', '789', 'https://robohash.org/jg');

insert into posts
(title, img, content, author_id)
values
('Post1', 'https://media.farandwide.com/5d/ef/5def5cafcf3243bdab9be14d8427291e.jpeg', 'Content1', 1),
('Post2', 'https://media.farandwide.com/ab/4c/ab4ca961338a496ebdceb776f03bd571.jpeg', 'Content2', 2),
('Post3', 'https://media.farandwide.com/1c/f5/1cf548c4ff4748c59192bb5d1ae35c01.jpeg', 'Content3', 1),
('Post4', 'https://media.farandwide.com/60/73/6073cadcff3c48eea218d100e8788d65.jpeg', 'Content4', 3),
('Post5', 'https://media.farandwide.com/1c/39/1c39aad8457d46f18c6c09828144d7d2.jpeg', 'Content5', 2);
