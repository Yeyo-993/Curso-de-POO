var car = new Car("AW456", new Account("Andres Herrera", "AND1235"))
car.passenger = 4;
car.printDataCar();

var uberX = new UberX("AW456", new Account("Sergio Reinoso", "134453464567"), "Chevrolet", "Spark")
uberX.passenger = 4;
uberX.printDataCar();

var user = new User("Sergio Reinoso", "134453464567", "sergio@platzi.cfd", "AJKFO23****")
user.printDataAccount();