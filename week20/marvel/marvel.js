let heroesJson = `[{
    "name": "Бэтмен",
    "img": "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/Batman_Jim_Lee.jpg/219px-Batman_Jim_Lee.jpg",
    "universe": "DC Comics",
    "alter": "Брюс Уэйн",
    "activity":"борец с преступностью, филантроп, миллиардер",
    "friends": "Робин,Бэтгерл",
    "superpowers":  "интеллект, обширные познания, знания боевых искусств, ловкость"
},{
    "name": "Супермен",
    "img": "https://vcomicse.ru/wp-content/uploads/2019/02/57988-komiksy-anime-supermen-betmen-nebo-2048x2048.jpg",
    "universe": "DC Comics",
    "alter": "Кларк Кент",
    "activity":"борец за справедливость",
    "friends": "собака Крипто",
    "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
},{
    "name": "Железный человек",
    "img": "https://comicsplanet.ru/wp-content/uploads/2017/10/marvel-comics-comic32.jpg",
    "universe": "Marvel Comics",
    "alter": "Тони Старк",
    "activity":"гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта , широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
},{
    "name": "Человек-паук",
    "img": "https://upload.wikimedia.org/wikipedia/ru/thumb/c/cb/AmazingSpiderMan50.jpg/231px-AmazingSpiderMan50.jpg",
    "universe": "Marvel Comics",
    "alter": "Питер Паркер",
    "activity":"борец за справедливость, студент, фотограф",
    "friends": "Мстители, Фантастическая четверка, Люди Икс",
    "superpowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
},{
    "name": "Капитан Америка",
    "img": "https://upload.wikimedia.org/wikipedia/ru/thumb/4/4d/%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0.jpg/250px-%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0.jpg",
    "universe": "Marvel Comics",
    "alter": "Стивен Роджерс",
    "activity":"супер-солдат",
    "friends": "Мстители",
    "superpowers": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
},{
    "name": "Тор",
    "img": "http://dic.academic.ru/pictures/wiki/files/84/Thor_Marvel_Comics.jpg",
    "universe": "Marvel Comics",
    "alter": "Тор Одинсон",
    "activity":"борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpowers": "все, что может бог, плюс молот Мьелнир"
},{
    "name": "Халк",
    "img": "https://upload.wikimedia.org/wikipedia/ru/c/cc/Hulk_Marvel.jpg",
    "universe": "Marvel Comics",
    "alter": "Брюс Беннер",
    "activity":"супергерой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "superpowers": "сверхчеловеческая сила искорость, выносливость, полет"
},{
    "name": "Чудо-женщина",
    "img": "https://m.buro247.ua/images/2017/04/wonder-woman-1.jpg",
    "universe": "DC Comics",
    "alter": "Диана Принс",
    "activity":"супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "superpowers": "сверхчеловеческая сила искорость, выносливость, полет"
},{
    "name": "Черная вдова",
    "img": "https://w7.pngwing.com/pngs/856/741/png-transparent-scarlett-johansson-black-widow-captain-america-avengers-age-of-ultron-marvel-cinematic-universe-black-widow-comics-cg-artwork-avengers.png",
    "universe": "Marvel Comics",
    "alter": "Наташа Романофф",
    "activity":"супергероиня, шпионка",
    "friends": "Мстители",
    "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков"
},{
    "name": "Дэдпул",
    "img": "https://cs9.pikabu.ru/post_img/big/2016/12/21/10/1482341257136671582.jpg",
    "universe": "Marvel Comics",
    "alter": "Уэйд Уинстон Уилсон",
    "activity":"антигерой, наемник",
    "friends": "частично Мстители, Человек-паук, Росомаха",
    "superpowers": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
}]`

document.addEventListener('DOMContentLoaded',function (event) {
    let heroes = JSON.parse(heroesJson);
    let heroesContent= "";
    for (let hero of heroes) {
        heroesContent += `<div class = "heroCard">
        <h2>${hero.name}</h2>
        <div  class = "heroImg">
        <img src = "${hero.img}">
        </div>
        <p><strong>Вселенная: </strong>${hero.universe}</p>
        <p><strong>Альтер-Эго: </strong>${hero.alter}</p>
        <p><strong>Род деятельности: </strong>${hero.activity}</p>
        <p><strong>Друзья: </strong>${hero.friends}</p>
        <p><strong>Силы: </strong>${hero.superpowers}</p>
        <input class="star" type="text">
        <button type="button" onclick="starMe()">Оценить</button>
        </div>`
    }
    document.querySelector('.galary').innerHTML = heroesContent;
})

function starMe() {
    let star = document.querySelector(".star").ariaValueMax;
    localStorage.setItem('star',star);
}

//"img": "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/Batman_Jim_Lee.jpg/219px-Batman_Jim_Lee.jpg",