var car;

function DrawCar()
{
    car = new Sprite(trackAtlas["CarGray"]);
    car.position.set(CELL, CELL*9);
    carContainer.addChild(car);

    car = new Sprite(trackAtlas["CarOrange"]);
    car.position.set(CELL, CELL*7);
    carContainer.addChild(car);

    carCanvas.render(carContainer);
}
