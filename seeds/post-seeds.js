const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    contents: 'I love HTML',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    contents: 'I love CSS',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    contents: 'I love JS',
    user_id: 3
  },
  {
    title: 'Nunc purus.',
    contents: 'I love C++',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    contents: 'I love coding',
    user_id: 5
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    contents: 'I love React',
    user_id: 6
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
