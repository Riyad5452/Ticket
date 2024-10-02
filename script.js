let selectedSeats = [];

function nextStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(stepDiv => stepDiv.classList.add('hidden'));
    
    // Show the next step
    document.getElementById('step' + step).classList.remove('hidden');
    
    // If moving to the ticket page, update ticket details
    if (step === 3) {
        document.getElementById('ticketFrom').innerText = document.getElementById('from').value;
        document.getElementById('ticketTo').innerText = document.getElementById('to').value;
        document.getElementById('ticketSeats').innerText = selectedSeats.join(', ');
    }
}

function selectSeat(seat) {
    // Toggle seat selection
    seat.classList.toggle('selected');
    
    let seatNumber = seat.innerText;
    
    if (selectedSeats.includes(seatNumber)) {
        selectedSeats = selectedSeats.filter(s => s !== seatNumber);
    } else {
        selectedSeats.push(seatNumber);
    }
}

function printTicket() {
    window.print(); // Simulate ticket printing
}

// Initialize step 1 as active
document.getElementById('step1').classList.add('active');
