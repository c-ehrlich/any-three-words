import { useState } from 'react';
import randomWords from 'random-words';
import { Refresh } from 'tabler-icons-react';

const videos = [
  'D7vl1XHfRcc',
  'yVpVtBn5egg',
  'jwq3Uz3H1y8',
  'D_JxqZgUS7E',
  'xqUz76TJ9ZA',
  'LXmg-JFXbMA',
  'TIx-HFBAjhY',
  'wGXBceRwivg',
  'SU14ZpCl7X8',
  'vIcM2U-Nj9o',
  'JB0wJ9n0NRQ',
  'P4CYUruI7J4',
  '2gZ5UPk6RpU',
  'QeSOs9jJHxM',
];

const randomVideo = videos[Math.floor(Math.random() * videos.length)];

function App() {
  const [words, setWords] = useState<string>(
    randomWords({ exactly: 3, join: ' ' })
  );

  function newWords() {
    setWords(randomWords({ exactly: 3, join: ' ' }));
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-2xl font-serif font-bold'>anythreewords</h1>
        <div className='flex flex-col bg-cyan-300 w-80 max-w-full p-1'>
          <div className='flex justify-between items-center'>
            <p className='font-serif text-xs'>your three words:</p>
            <Refresh className='cursor-pointer' size={14} onClick={newWords} />
          </div>
          <div className='m-3 font-serif font-bold text-center'>{words}</div>
        </div>
        <div className='video-responsive flex flex-col items-center w-100'>
          <iframe
            width='300'
            height='200'
            src={`https://www.youtube.com/embed/${randomVideo}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
