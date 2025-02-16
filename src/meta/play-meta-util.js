
import { plays } from './play-meta';

const getAllPlays = () => {
  return plays;
};

const getPlayById = id => {
  return plays.find(play => play.id === id);
};

const getPlaysOnSearch = searchTerm => {
  return plays.filter(play => {
    return (play.name.toLowerCase().includes(searchTerm.toLowerCase())
      || play.description.toLowerCase().includes(searchTerm.toLowerCase()));
  });
}

const getPlaysByTags = tags => {
  return plays.filter(play => {
    return play.tags.includes(tags);
  });
}

const getPlaysByLevel = level => {
  return plays.filter(play => {
    return play.level === level;
  });
}

const getPlaysByCreator = creator => {
  return plays.filter(play => {
    return play.github === creator;
  });
}

const getAllTags = () => {
  const tags = plays.reduce((acc, play) => {
    return acc.concat(play.tags.split(','));
  }, []);

  return Array.from(new Set([...tags]));
}

const getAllCreators = () => {
  const creators = plays.reduce((acc, play) => {
    play.github && acc.push(play.github);
    return acc;
  }, []);

  return Array.from(new Set([...creators]));
}

const getAllLevels = () => {
  const levels = plays.reduce((acc, play) => {
    return acc.concat(play.level);
  }, []);

  return Array.from(new Set([...levels]));
}

const getFeaturedPlays = () => {
  const featuredPlays = plays.filter(play => {
    return play.featured;
  });
  return featuredPlays;
}

export {
  getAllPlays,
  getPlayById,
  getPlaysOnSearch,
  getPlaysByLevel,
  getPlaysByTags,
  getPlaysByCreator,
  getAllTags,
  getAllCreators,
  getAllLevels,
  getFeaturedPlays
};
