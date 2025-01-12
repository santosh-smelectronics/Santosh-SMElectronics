function updateCountdown() {
    // Target date and time: 1 Feb 2025, midnight
    const targetDate = new Date('2025-01-25T18:00:00Z'); // UTC Time for consistency
    const now = new Date(); // Current time
    const diff = targetDate - now; // Difference in milliseconds

    // If the countdown is complete
    if (diff <= 0) {
      document.getElementById('time-remaining').innerText = "It's 25th Jan 2025 18:00 HRS!";
      clearInterval(interval); // Stop the interval once the date is reached
      return;
    }

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('time-remaining').innerText =
      `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }

  // Call updateCountdown every second
  const interval = setInterval(updateCountdown, 1000);

  // Initialize the countdown immediately
  updateCountdown();