import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'durrez',
    userImg: '/profile.jpg',
    img: '/profile.jpg',
    caption: 'This is a caption',
  },
  {
    id: '123',
    username: 'durrez',
    userImg: '/profile.jpg',
    img: '/profile.jpg',
    caption: 'This is a caption',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
