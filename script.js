let text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

let dino = "triceratops"
dino = dino.toUpperCase();

text = text.replace("Velociraptor", dino);

console.log(text.substr(0,text.length/2));


