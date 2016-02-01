function Pokemon(name, level, type) {
  this.name = name;
  this.level = level;
  this.type = type;
  this.outputProperty = function(prop) {
    console.log(this[prop]);
  };
}

var pika = new Pokemon("Pikachu", 3, "electric");
pika.outputProperty("type"); // prints: electric
