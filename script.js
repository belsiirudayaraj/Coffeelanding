document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your order! We will contact you shortly.');
    this.reset();
});
