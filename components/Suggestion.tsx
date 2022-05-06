function Suggestion({
  img,
  username,
  company,
}: {
  key: any;
  img: any;
  username: any;
  company: any;
}) {
  return (
    <div className='mt-3 flex items-center justify-between'>
      <img className='h-10 w-10 rounded-full border p-[2px]' src={img} alt='' />

      <div className='ml-4 flex-1'>
        <h2 className='text-sm font-semibold'>{username}</h2>
        <h3 className='text-xs text-gray-400'>Works at {company}</h3>
      </div>

      <button className='text-xs font-bold text-blue-400'>Follow</button>
    </div>
  );
}

export default Suggestion;
