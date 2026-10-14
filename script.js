const container = document.getElementById('catsContainer');

function getAgeText(age) {
  if (age % 100 >= 11 && age % 100 <= 14) {
    return `${age} лет`;
  }

  if (age % 10 === 1) {
    return `${age} год`;
  }

  if (age % 10 >= 2 && age % 10 <= 4) {
    return `${age} года`;
  }

  return `${age} лет`;
}

cats.forEach(cat => {
  const card = document.createElement('article');
  card.className = 'cat';

  const image = document.createElement('img');
  image.src = cat.img_link;
  image.alt = cat.name;
  image.loading = 'lazy';
  image.onerror = () => {
    image.onerror = null;
    image.src = 'cat-placeholder.svg';
  };

  const info = document.createElement('div');
  info.className = 'cat-info';

  const name = document.createElement('h2');
  name.textContent = cat.name;

  const age = document.createElement('p');
  age.textContent = `Возраст: ${getAgeText(cat.age)}`;

  const rating = document.createElement('p');
  rating.textContent = `Рейтинг: ${cat.rate}/10`;

  const description = document.createElement('p');
  description.className = 'description';
  description.textContent = cat.description;

  info.append(name, age, rating, description);

  if (cat.favourite) {
    const favorite = document.createElement('p');
    favorite.className = 'favorite';
    favorite.textContent = 'В избранном';
    info.appendChild(favorite);
  }

  card.append(image, info);
  container.appendChild(card);
});
