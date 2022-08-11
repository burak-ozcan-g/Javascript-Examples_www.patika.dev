const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
const list_el = document.querySelector("#foods");
const btn_all = document.getElementById("btn_all");
const btn_korea = document.getElementById("btn_korea");
const btn_japan = document.getElementById("btn_japan");
const btn_china = document.getElementById("btn_china");

listFoods(menu);

btn_all.addEventListener('click', function (e) {
  listFoods(menu);
});
btn_korea.addEventListener('click', function (e) {
  var list = []
  list = menu.filter(function (e) {
    return e.category == "Korea"
  })
  listFoods(list);
});
btn_japan.addEventListener('click', function (e) {
  var list = []
  list = menu.filter(function (e) {
    return e.category == "Japan"
  })
  listFoods(list);
});
btn_china.addEventListener('click', function (e) {
  var list = []
  list = menu.filter(function (e) {
    return e.category == "China"
  })
  listFoods(list);
});

function listFoods(list) {
  list_el.innerText = "";
  list.forEach(element => {
    const food_el = document.createElement('div');
    food_el.classList.add('menu-items', 'col-lg-6', 'col-sm-12');

    const food_photo_el = document.createElement('img');
    food_photo_el.classList.add('photo');
    food_photo_el.src = element.img;

    food_el.appendChild(food_photo_el);

    const food_content_el = document.createElement('div');
    food_content_el.classList.add('menu-info');

    const food_title_el = document.createElement('div');
    food_title_el.classList.add('menu-title');

    const food_name_el = document.createElement('h4');
    food_name_el.innerText = element.title;

    food_title_el.appendChild(food_name_el)

    const food_price_el = document.createElement('h4');
    food_price_el.innerText = element.price;

    food_title_el.appendChild(food_price_el)

    const food_text_el = document.createElement('div');
    food_text_el.classList.add('menu-text');
    food_text_el.innerText = element.desc;

    food_content_el.appendChild(food_title_el)

    food_content_el.appendChild(food_text_el)

    food_el.appendChild(food_content_el);

    list_el.appendChild(food_el);
  });
}

