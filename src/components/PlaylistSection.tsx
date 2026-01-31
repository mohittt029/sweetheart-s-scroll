import { motion } from 'framer-motion';
import { Music, Heart, ExternalLink, Play } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  note: string;
  spotifyUrl?: string;
}

const PlaylistSection = () => {
  const songs: Song[] = [
    {
      id: 1,
      title: 'Perfect',
      artist: 'Ed Sheeran',
      note: 'Because dancing with you in the kitchen at midnight is my definition of perfect.',
      spotifyUrl: 'https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v',
    },
    {
      id: 2,
      title: 'All of Me',
      artist: 'John Legend',
      note: 'Every curve, every edge, every perfect imperfection — I love all of you.',
      spotifyUrl: 'https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a',
    },
    {
      id: 3,
      title: 'Can\'t Help Falling in Love',
      artist: 'Elvis Presley',
      note: 'Some things are meant to be, and loving you is one of them.',
      spotifyUrl: 'https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC',
    },
    {
      id: 4,
      title: 'At Last',
      artist: 'Etta James',
      note: 'After all the searching, my heart finally found its home in you.',
      spotifyUrl: 'https://open.spotify.com/track/4oJVaFLSnAXKgZVmutGVRY',
    },
    {
      id: 5,
      title: 'Thinking Out Loud',
      artist: 'Ed Sheeran',
      note: 'Growing old with you sounds like the most beautiful adventure.',
      spotifyUrl: 'https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-6 bg-sunset min-h-screen">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center justify-center gap-3">
            Songs That Feel Like Us
            <Music className="w-7 h-7 text-rose" />
          </h2>
          <p className="font-body text-muted-foreground">
            Every song tells our story
          </p>
        </motion.div>

        {/* Playlist */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={song.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-xl p-5 shadow-soft hover:shadow-romantic transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  {/* Play Icon */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose to-coral flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground truncate">
                        {song.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="font-body text-sm text-rose mb-3">{song.artist}</p>
                    <p className="font-body text-sm text-muted-foreground italic leading-relaxed">
                      "{song.note}"
                    </p>
                  </div>
                </div>

                {/* Decorative Heart */}
                <div className="flex justify-end mt-3">
                  <Heart className="w-4 h-4 text-rose/40 fill-rose/40" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlaylistSection;
