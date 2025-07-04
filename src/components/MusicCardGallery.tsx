
import React from 'react';
import EnhancedMusicCard from './EnhancedMusicCard';

const MusicCardGallery: React.FC = () => {
  const musicMemories = [
    {
      image: '/files/database/images/memory1.jpg',
      title: 'O Rangrez',
      artist: 'Wajid Ali',
      localAudioSrc: '/files/database/songs/song1.mp3'
    },
    {
      image: '/files/database/images/memory2.jpg',
      title: 'Mi Amor',
      artist: 'The Paul',
      localAudioSrc: '/files/database/songs/song2.mp3'
    },
    {
      image: '/files/database/images/memory3.jpg',
      title: 'Finding Her',
      artist: 'Kushagra',
      localAudioSrc: '/files/database/songs/song3.mp3'
    },
    {
      image: '/files/database/images/memory4.jpg',
      title: 'Thum Tak',
      artist: 'A.R. Rahman',
      localAudioSrc: '/files/database/songs/song4.mp3'
    },
    {
      image: '/files/database/images/memory5.jpg',
      title: 'Lofi Lovee',
      artist: 'Ved Sharma',
      localAudioSrc: '/files/database/songs/song5.mp3'
    },
    {
      image: '/files/database/images/memory6.jpg',
      title: 'Jhol',
      artist: 'Mannu',
      localAudioSrc: '/files/database/songs/song6.mp3'
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Memory Music Gallery 🎵
          </h2>
          <p className="text-xl text-gray-700">
            Flip the cards to play our favorite songs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {musicMemories.map((memory, index) => (
            <EnhancedMusicCard
              key={index}
              image={memory.image}
              title={memory.title}
              artist={memory.artist}
              localAudioSrc={memory.localAudioSrc}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Each card holds a special memory with its soundtrack 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicCardGallery;
