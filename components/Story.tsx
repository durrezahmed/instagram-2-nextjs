function Story({ img, username }: { img: any; username: any }) {
  return (
    <div>
      <img src={img} alt='' />
      <p>{username}</p>
    </div>
  );
}

export default Story;
