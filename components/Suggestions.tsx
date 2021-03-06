import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Suggestion from './Suggestion';

function Suggestions() {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='mb-5 flex justify-between text-sm'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='font-semibold text-gray-600'>See All</button>
      </div>

      {suggestions.map((profile) => (
        <Suggestion
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
          company={profile.company.name}
        />
      ))}
    </div>
  );
}

export default Suggestions;
