function tickets(array, sortedCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];
    let ticketsArr = [];
    array.forEach(element => {
        let [destination, price, status] = element.split('|');
        price = Number(price);
        result.push(new Array(destination, price, status))
    });
    switch (sortedCriteria) {
        case 'destination': result = result.sort((a, b) => a[0].localeCompare(b[0])); break;
        case 'price': result = result.sort((a, b) => a[1] - b[1]); break;
        case 'status': result = result.sort((a, b) => a[2].localeCompare(b[2])); break;
    }
    result.forEach(ticketInfo => {
        let [destination, price, status] = ticketInfo;
        let obj = new Ticket(destination, price, status);
        ticketsArr.push(obj);
    });
    return ticketsArr;
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')