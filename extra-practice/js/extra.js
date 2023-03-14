const booking1 = {count: 3, price: 127.95};
const booking2 = {count: 5, price: 112.95};


// Compara si las dos reservas son iguales:

if (booking1.count == booking2.count && booking1.price == booking2.price) {
  console.log('Las dos reservas son igueales.');
} else {
  console.log('Las dos reservas son diferentes.');
}


// Mostrar la suma del número de noches de las dos reservas:

console.log('El total de noches de las 2 reservas es de', booking1.count + booking2.count + ' noches.');


// Compara las dos reservas para mostrar la de mayor número de noches:

if (booking1.count > booking2.count) {
  console.log('El mayor número de noches lo tiene booking1:', booking1);
} else if (booking1.count < booking2.count) {
  console.log('El mayor número de noches lo tiene booking2:', booking2);
} else {
  console.log('Las dos reservas tienen el mismo número de noches:', booking1, booking2);
}


// Ampliar una noche más a una reserva:

booking1.count++;
console.log('Ampliamos una noche más a booking1:', booking1);


// Para el resto de apartados consideraremos la ampliación de una noche en booking1 realizada en el apartado anterior:

let totalPriceBooking1 = booking1.count * booking1.price;
let totalPriceBooking2 = booking2.count * booking2.price;
let discountBooking1 = totalPriceBooking1 > 500 ? totalPriceBooking1 * 0.20 : 0;
let discountBooking2 = totalPriceBooking2 > 500 ? totalPriceBooking2 * 0.20 : 0;
let totalDiscountedPriceBooking1 = totalPriceBooking1 - discountBooking1;
let totalDiscountedPriceBooking2 = totalPriceBooking2 - discountBooking2;


// Calcular la diferencia de precio total entre las dos reservas (incluidos descuentos):

let priceDifference = Math.abs(totalDiscountedPriceBooking1 - totalDiscountedPriceBooking2);

console.log('La diferencia de precio entre las dos reservas incluidos los descuentos es de:', priceDifference +'€');


// Comprara las dos reservas para mostrar la de mayor precio total (incluidos descuentos):

if (totalDiscountedPriceBooking1 > totalDiscountedPriceBooking2) {
  console.log('La reserva con mayor precio total incluidos descuentos es booking1.', booking1);
} else if (totalDiscountedPriceBooking1 < totalDiscountedPriceBooking2) {
  console.log('La reserva con mayor precio total incluidos descuentos es booking2.', booking2);
} else {
  console.log('Las dos reservas tienen el mismo precio.');
}


// Mostrar el número de reservas a las que se podría aplicar descuento:

let discountedReservations = 0;

if (discountBooking1) discountedReservations++
if (discountBooking2) discountedReservations++
console.log('Número de reservas con descuento es de:', discountedReservations +' reservas.');


// Mostrar "todas con descuento" si las dos reservas tienen descuentos:

if (discountBooking1 && discountBooking2) console.log('"Todas con descuento."');


// Mostrar la suma del precio total con descuento de las dos reservas.

console.log('La suma del precio total de las 2 reservas con descuentos incluidos:', totalDiscountedPriceBooking1 + totalDiscountedPriceBooking2 + '€');



















