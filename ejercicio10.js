//Dado el siguiente javascript usa forof y forin para hacer la media del 
//volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let soundsVolumes = 0;
let volumeCount = 0;

for(user of users) {
  for(soundName in user.favoritesSounds) {
    const sound = user.favoritesSounds[soundName];
    if(sound.volume > 0) {
      soundsVolumes += sound.volume;
      volumeCount++;
    }
  }
  }

const volumeAverage = soundsVolumes / volumeCount;

console.log(volumeAverage);