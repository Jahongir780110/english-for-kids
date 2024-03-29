const imageFilenames = {
  turtle: 'turtle.jpg',
  tired: 'tired.jpg',
  swim: 'swim.jpg',
  surprised: 'surprised.jpg',
  stew: 'stew.jpg',
  squid: 'squid.jpg',
  smile: 'smile.jpg',
  skirt: 'skirt.jpg',
  skip: 'skip.jpg',
  sister: 'sister.jpg',
  sing: 'sing.jpg',
  shoe: 'shoe.jpg',
  shirt: 'shirt.jpg',
  sheep: 'sheep.jpg',
  scared: 'scared.jpg',
  sad: 'sad.jpg',
  run: 'run.jpg',
  ride: 'ride.jpg',
  recipe: 'recipe.jpg',
  rabbit: 'rabbit.jpg',
  point: 'point.jpg',
  play: 'play.jpg',
  pig: 'pig.jpg',
  pet: 'pet.jpg',
  pants: 'pants.jpg',
  open: 'open.jpg',
  mushroom: 'mushroom.jpg',
  mouse: 'mouse.jpg',
  mother: 'mother.jpg',
  lion: 'lion.jpg',
  laugh: 'laugh.jpg',
  jump: 'jump.jpg',
  hug: 'hug.jpg',
  horse: 'horse.jpg',
  happy: 'happy.jpg',
  grandpa: 'grandpa.jpg',
  grandma: 'grandma.jpg',
  giraffe: 'giraffe.jpg',
  garlic: 'garlic.jpg',
  frog: 'frog.jpg',
  Food: 'Food.jpg',
  fly: 'fly.jpg',
  fish1: 'fish1.jpg',
  fish: 'fish.jpg',
  father: 'father.jpg',
  Family: 'Family.jpg',
  fail: 'fail.png',
  excellent: 'excellent.png',
  emotions: 'Emotions.jpg',
  dress: 'dress.jpg',
  draw: 'draw.jpg',
  dolphin: 'dolphin.jpg',
  dog: 'dog.jpg',
  dive: 'dive.jpg',
  dance: 'dance.jpg',
  cry: 'cry.jpg',
  courgette: 'courgette.jpg',
  coat: 'coat.jpg',
  Clothes: 'Clothes.jpg',
  chicken: 'chicken.jpg',
  chick: 'chick.jpg',
  cereal: 'cereal.jpg',
  cat: 'cat.jpg',
  brother: 'brother.jpg',
  boot: 'boot.jpg',
  blouse: 'blouse.jpg',
  bird: 'bird.jpg',
  aubergine: 'aubergine.jpg',
  animalB: 'Animal (set B).jpg',
  animalA: 'Animal (set A).jpg',
  angry: 'angry.jpg',
  actionB: 'Action (set B).jpg',
  actionA: 'Action (set A).jpg',
}

const audioFilenames = {
  turtle: 'turtle.mp3',
  tired: 'tired.mp3',
  swim: 'swim.mp3',
  surprised: 'surprised.mp3',
  stew: 'stew.mp3',
  squid: 'squid.mp3',
  smile: 'smile.mp3',
  skirt: 'skirt.mp3',
  skip: 'skip.mp3',
  sister: 'sister.mp3',
  sing: 'sing.mp3',
  shoe: 'shoe.mp3',
  shirt: 'shirt.mp3',
  sheep: 'sheep.mp3',
  scared: 'scared.mp3',
  sad: 'sad.mp3',
  run: 'run.mp3',
  ride: 'ride.mp3',
  recipe: 'recipe.mp3',
  rabbit: 'rabbit.mp3',
  point: 'point.mp3',
  play: 'play.mp3',
  pig: 'pig.mp3',
  pet: 'pet.mp3',
  pants: 'pants.mp3',
  open: 'open.mp3',
  mushroom: 'mushroom.mp3',
  mouse: 'mouse.mp3',
  mother: 'mother.mp3',
  lion: 'lion.mp3',
  laugh: 'laugh.mp3',
  jump: 'jump.mp3',
  hug: 'hug.mp3',
  horse: 'horse.mp3',
  happy: 'happy.mp3',
  grandpa: 'grandpa.mp3',
  grandma: 'grandma.mp3',
  giraffe: 'giraffe.mp3',
  garlic: 'garlic.mp3',
  family: 'family.mp3',
  frog: 'frog.mp3',
  fly: 'fly.mp3',
  fish: 'fish.mp3',
  father: 'father.mp3',
  dress: 'dress.mp3',
  draw: 'draw.mp3',
  dolphin: 'dolphin.mp3',
  dog: 'dog.mp3',
  dive: 'dive.mp3',
  dance: 'dance.mp3',
  cry: 'cry.mp3',
  courgette: 'courgette.mp3',
  coat: 'coat.mp3',
  chicken: 'chicken.mp3',
  chick: 'chick.mp3',
  cereal: 'cereal.mp3',
  cat: 'cat.mp3',
  brother: 'brother.mp3',
  boot: 'boot.mp3',
  blouse: 'blouse.mp3',
  bird: 'bird.mp3',
  aubergine: 'aubergine.mp3',
  angry: 'angry.mp3',
}

function resolveImagePath(filename) {
  return require(`../img/${filename}`)
}

function resolveAudioPath(filename) {
  return require(`../audio/${filename}`)
}

export const categories = [
  {
    name: 'Action (set A)',
    filename: resolveImagePath(imageFilenames.actionA),
    cards: [
      {
        word: 'cry',
        translation: 'плакать',
        filename: resolveImagePath(imageFilenames.cry),
        audioSrc: resolveAudioPath(audioFilenames.cry),
      },
      {
        word: 'dance',
        translation: 'танцевать',
        filename: resolveImagePath(imageFilenames.dance),
        audioSrc: resolveAudioPath(audioFilenames.dance),
      },
      {
        word: 'dive',
        translation: 'нырять',
        filename: resolveImagePath(imageFilenames.dive),
        audioSrc: resolveAudioPath(audioFilenames.dive),
      },
      {
        word: 'draw',
        translation: 'рисовать',
        filename: resolveImagePath(imageFilenames.draw),
        audioSrc: resolveAudioPath(audioFilenames.draw),
      },
      {
        word: 'fishing',
        translation: 'ловить рыбу',
        filename: resolveImagePath(imageFilenames.fish),
        audioSrc: resolveAudioPath(audioFilenames.fish),
      },
      {
        word: 'fly',
        translation: 'летать',
        filename: resolveImagePath(imageFilenames.fly),
        audioSrc: resolveAudioPath(audioFilenames.fly),
      },
      {
        word: 'hug',
        translation: 'обнимать',
        filename: resolveImagePath(imageFilenames.hug),
        audioSrc: resolveAudioPath(audioFilenames.hug),
      },
      {
        word: 'jump',
        translation: 'прыгать',
        filename: resolveImagePath(imageFilenames.jump),
        audioSrc: resolveAudioPath(audioFilenames.jump),
      },
    ],
  },
  {
    name: 'Action (set B)',
    filename: resolveImagePath(imageFilenames.actionB),
    cards: [
      {
        word: 'open',
        translation: 'открывать',
        filename: resolveImagePath(imageFilenames.open),
        audioSrc: resolveAudioPath(audioFilenames.open),
      },
      {
        word: 'play',
        translation: 'играть',
        filename: resolveImagePath(imageFilenames.play),
        audioSrc: resolveAudioPath(audioFilenames.play),
      },
      {
        word: 'point',
        translation: 'указывать',
        filename: resolveImagePath(imageFilenames.point),
        audioSrc: resolveAudioPath(audioFilenames.point),
      },
      {
        word: 'ride',
        translation: 'ездить',
        filename: resolveImagePath(imageFilenames.ride),
        audioSrc: resolveAudioPath(audioFilenames.ride),
      },
      {
        word: 'run',
        translation: 'бегать',
        filename: resolveImagePath(imageFilenames.run),
        audioSrc: resolveAudioPath(audioFilenames.run),
      },
      {
        word: 'sing',
        translation: 'петь',
        filename: resolveImagePath(imageFilenames.sing),
        audioSrc: resolveAudioPath(audioFilenames.sing),
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        filename: resolveImagePath(imageFilenames.skip),
        audioSrc: resolveAudioPath(audioFilenames.skip),
      },
      {
        word: 'swim',
        translation: 'плавать',
        filename: resolveImagePath(imageFilenames.swim),
        audioSrc: resolveAudioPath(audioFilenames.swim),
      },
    ],
  },
  {
    name: 'Animal (set A)',
    filename: resolveImagePath(imageFilenames.animalA),
    cards: [
      {
        word: 'cat',
        translation: 'кот',
        filename: resolveImagePath(imageFilenames.cat),
        audioSrc: resolveAudioPath(audioFilenames.cat),
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        filename: resolveImagePath(imageFilenames.chick),
        audioSrc: resolveAudioPath(audioFilenames.chick),
      },
      {
        word: 'chicken',
        translation: 'курица',
        filename: resolveImagePath(imageFilenames.chicken),
        audioSrc: resolveAudioPath(audioFilenames.chicken),
      },
      {
        word: 'dog',
        translation: 'собака',
        filename: resolveImagePath(imageFilenames.dog),
        audioSrc: resolveAudioPath(audioFilenames.dog),
      },
      {
        word: 'horse',
        translation: 'лошадь',
        filename: resolveImagePath(imageFilenames.horse),
        audioSrc: resolveAudioPath(audioFilenames.horse),
      },
      {
        word: 'pig',
        translation: 'свинья',
        filename: resolveImagePath(imageFilenames.pig),
        audioSrc: resolveAudioPath(audioFilenames.pig),
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        filename: resolveImagePath(imageFilenames.rabbit),
        audioSrc: resolveAudioPath(audioFilenames.rabbit),
      },
      {
        word: 'sheep',
        translation: 'овца',
        filename: resolveImagePath(imageFilenames.sheep),
        audioSrc: resolveAudioPath(audioFilenames.sheep),
      },
    ],
  },
  {
    name: 'Animal (set B)',
    filename: resolveImagePath(imageFilenames.animalB),
    cards: [
      {
        word: 'bird',
        translation: 'птица',
        filename: resolveImagePath(imageFilenames.bird),
        audioSrc: resolveAudioPath(audioFilenames.bird),
      },
      {
        word: 'fish',
        translation: 'рыба',
        filename: resolveImagePath(imageFilenames.fish1),
        audioSrc: resolveAudioPath(audioFilenames.fish),
      },
      {
        word: 'frog',
        translation: 'жаба',
        filename: resolveImagePath(imageFilenames.frog),
        audioSrc: resolveAudioPath(audioFilenames.frog),
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        filename: resolveImagePath(imageFilenames.giraffe),
        audioSrc: resolveAudioPath(audioFilenames.giraffe),
      },
      {
        word: 'lion',
        translation: 'лев',
        filename: resolveImagePath(imageFilenames.lion),
        audioSrc: resolveAudioPath(audioFilenames.lion),
      },
      {
        word: 'mouse',
        translation: 'мышь',
        filename: resolveImagePath(imageFilenames.mouse),
        audioSrc: resolveAudioPath(audioFilenames.mouse),
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        filename: resolveImagePath(imageFilenames.turtle),
        audioSrc: resolveAudioPath(audioFilenames.turtle),
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        filename: resolveImagePath(imageFilenames.dolphin),
        audioSrc: resolveAudioPath(audioFilenames.dolphin),
      },
    ],
  },
  {
    name: 'Clothes',
    filename: resolveImagePath(imageFilenames.Clothes),
    cards: [
      {
        word: 'skirt',
        translation: 'юбка',
        filename: resolveImagePath(imageFilenames.skirt),
        audioSrc: resolveAudioPath(audioFilenames.skirt),
      },
      {
        word: 'pants',
        translation: 'брюки',
        filename: resolveImagePath(imageFilenames.pants),
        audioSrc: resolveAudioPath(audioFilenames.pants),
      },
      {
        word: 'blouse',
        translation: 'блузка',
        filename: resolveImagePath(imageFilenames.blouse),
        audioSrc: resolveAudioPath(audioFilenames.blouse),
      },
      {
        word: 'dress',
        translation: 'платье',
        filename: resolveImagePath(imageFilenames.dress),
        audioSrc: resolveAudioPath(audioFilenames.dress),
      },
      {
        word: 'boot',
        translation: 'ботинок',
        filename: resolveImagePath(imageFilenames.boot),
        audioSrc: resolveAudioPath(audioFilenames.boot),
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        filename: resolveImagePath(imageFilenames.shirt),
        audioSrc: resolveAudioPath(audioFilenames.shirt),
      },
      {
        word: 'coat',
        translation: 'пальто',
        filename: resolveImagePath(imageFilenames.coat),
        audioSrc: resolveAudioPath(audioFilenames.coat),
      },
      {
        word: 'shoe',
        translation: 'туфли',
        filename: resolveImagePath(imageFilenames.shoe),
        audioSrc: resolveAudioPath(audioFilenames.shoe),
      },
    ],
  },
  {
    name: 'Emotions',
    filename: resolveImagePath(imageFilenames.emotions),
    cards: [
      {
        word: 'sad',
        translation: 'грустный',
        filename: resolveImagePath(imageFilenames.sad),
        audioSrc: resolveAudioPath(audioFilenames.sad),
      },
      {
        word: 'angry',
        translation: 'сердитый',
        filename: resolveImagePath(imageFilenames.angry),
        audioSrc: resolveAudioPath(audioFilenames.angry),
      },
      {
        word: 'happy',
        translation: 'счастливый',
        filename: resolveImagePath(imageFilenames.happy),
        audioSrc: resolveAudioPath(audioFilenames.happy),
      },
      {
        word: 'tired',
        translation: 'уставший',
        filename: resolveImagePath(imageFilenames.tired),
        audioSrc: resolveAudioPath(audioFilenames.tired),
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        filename: resolveImagePath(imageFilenames.surprised),
        audioSrc: resolveAudioPath(audioFilenames.surprised),
      },
      {
        word: 'scared',
        translation: 'испуганный',
        filename: resolveImagePath(imageFilenames.scared),
        audioSrc: resolveAudioPath(audioFilenames.scared),
      },
      {
        word: 'smile',
        translation: 'улыбка',
        filename: resolveImagePath(imageFilenames.smile),
        audioSrc: resolveAudioPath(audioFilenames.smile),
      },
      {
        word: 'laugh',
        translation: 'смех',
        filename: resolveImagePath(imageFilenames.laugh),
        audioSrc: resolveAudioPath(audioFilenames.laugh),
      },
    ],
  },
  {
    name: 'Food',
    filename: resolveImagePath(imageFilenames.Food),
    cards: [
      {
        word: 'squid',
        translation: 'кальмар',
        filename: resolveImagePath(imageFilenames.squid),
        audioSrc: resolveAudioPath(audioFilenames.squid),
      },
      {
        word: 'courgette',
        translation: 'кабачок',
        filename: resolveImagePath(imageFilenames.courgette),
        audioSrc: resolveAudioPath(audioFilenames.courgette),
      },
      {
        word: 'garlic',
        translation: 'чеснок',
        filename: resolveImagePath(imageFilenames.garlic),
        audioSrc: resolveAudioPath(audioFilenames.garlic),
      },
      {
        word: 'mushroom',
        translation: 'гриб',
        filename: resolveImagePath(imageFilenames.mushroom),
        audioSrc: resolveAudioPath(audioFilenames.mushroom),
      },
      {
        word: 'cereal',
        translation: 'зерновой',
        filename: resolveImagePath(imageFilenames.cereal),
        audioSrc: resolveAudioPath(audioFilenames.cereal),
      },
      {
        word: 'aubergine',
        translation: 'баклажан',
        filename: resolveImagePath(imageFilenames.aubergine),
        audioSrc: resolveAudioPath(audioFilenames.aubergine),
      },
      {
        word: 'stew',
        translation: 'тушенка',
        filename: resolveImagePath(imageFilenames.stew),
        audioSrc: resolveAudioPath(audioFilenames.stew),
      },
      {
        word: 'recipe',
        translation: 'рецепт',
        filename: resolveImagePath(imageFilenames.recipe),
        audioSrc: resolveAudioPath(audioFilenames.recipe),
      },
    ],
  },
  {
    name: 'Family',
    filename: resolveImagePath(imageFilenames.Family),
    cards: [
      {
        word: 'family',
        translation: 'семья',
        filename: resolveImagePath(imageFilenames.Family),
        audioSrc: resolveAudioPath(audioFilenames.family),
      },
      {
        word: 'mother',
        translation: 'мать',
        filename: resolveImagePath(imageFilenames.mother),
        audioSrc: resolveAudioPath(audioFilenames.mother),
      },
      {
        word: 'father',
        translation: 'отец',
        filename: resolveImagePath(imageFilenames.father),
        audioSrc: resolveAudioPath(audioFilenames.father),
      },
      {
        word: 'sister',
        translation: 'сестра',
        filename: resolveImagePath(imageFilenames.sister),
        audioSrc: resolveAudioPath(audioFilenames.sister),
      },
      {
        word: 'brother',
        translation: 'брат',
        filename: resolveImagePath(imageFilenames.brother),
        audioSrc: resolveAudioPath(audioFilenames.brother),
      },
      {
        word: 'grandma',
        translation: 'бабушка',
        filename: resolveImagePath(imageFilenames.grandma),
        audioSrc: resolveAudioPath(audioFilenames.grandma),
      },
      {
        word: 'grandpa',
        translation: 'дедушка',
        filename: resolveImagePath(imageFilenames.grandpa),
        audioSrc: resolveAudioPath(audioFilenames.grandpa),
      },
      {
        word: 'pet',
        translation: 'домашнее животное',
        filename: resolveImagePath(imageFilenames.pet),
        audioSrc: resolveAudioPath(audioFilenames.pet),
      },
    ],
  },
]
