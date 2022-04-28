
class Cat {
    constructor(name,breed,food,sex) {
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}



function createCat() {
    let catName = document.getElementById('cat-name').value;
    let catBreed = document.querySelector('.breed').value;
    let foods = document.getElementsByName('food');
    let sexs = document.getElementsByName('sex');

    let catFood;
        for (let food of foods) {
            if(food.checked){
                catFood = food.value;
        }
    }

    let catSex;

    for (let sex of sexs) {
        if(sex.checked){
            catSex = sex.value;
        }
    }
    
    let myCat = new Cat(catName,catBreed,catFood,catSex);
    console.log(myCat.name);
    console.log(myCat.breed);
    console.log(myCat.food);
    console.log(myCat.sex);

}