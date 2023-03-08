const booking = {
  count: 5, 
  price: 127.95
};

let total = booking.count * booking.price;
console.log('Precio total de la reserva sin descuento: ', total + '€');

let discount = total > 500 ? total * 0.2 : 0;

if (total > 500 && discount > 0) {
  console.log('Descuento del 20% aplicable a reservas superiores a 500€: ' , discount + '€');
  console.log('Precio total de la reserva con descuento del 20% aplicado: ', total - discount + '€');
}

