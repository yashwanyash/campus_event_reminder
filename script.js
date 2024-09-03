document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');

    // Load existing events from localStorage
    const loadEvents = () => {
        const events = JSON.parse(localStorage.getItem('events')) || [];
        eventList.innerHTML = '';
        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `${event.title} - ${new Date(event.date).toLocaleDateString()}`;
            eventList.appendChild(li);
        });
    };

    loadEvents();

    // Add new event
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('eventTitle').value;
        const date = document.getElementById('eventDate').value;

        if (title && date) {
            const events = JSON.parse(localStorage.getItem('events')) || [];
            events.push({ title, date });
            localStorage.setItem('events', JSON.stringify(events));
            loadEvents();

            // Adjusted reminder for testing (e.g., 10 seconds after adding the event)
            const reminderTime = new Date().getTime() + 10 * 1000; // 10 seconds from now
            setTimeout(() => {
                alert(`Reminder: ${title} is happening in 10 seconds!`);
            }, reminderTime - new Date().getTime());
        }

        eventForm.reset();
    });
});
