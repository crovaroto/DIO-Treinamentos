const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {  
    const data = await fetch(BASE_URL)
      .then((response) => response.json())
      .catch((e) => console.log(e));

    return data.webpurl;  
};
  
const loadImg = async () => {
  const img = document.getElementsByTagName('img');
  img.src = await getCats();
}


loadImg();

const catBtn = document.getElementById('change-cat');
catBtn.addEventListener('click', loadImg);
