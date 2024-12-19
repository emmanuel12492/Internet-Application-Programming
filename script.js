function navigate(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function bookEvent(eventName) {
    document.getElementById('selected-event').textContent = eventName;
    navigate('page-book-event');
}

function confirmBooking() {
    alert('Event booked successfully!');
    navigate('page-home');
}
