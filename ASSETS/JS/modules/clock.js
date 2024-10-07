export default function clock() {
    const app = document.getElementById('App');
    
    // Create elements for time and date
    const clockFace = document.createElement('div');
    const timeDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    
    clockFace.className = 'watchFace';
    timeDiv.className = 'time';
    dateDiv.className = 'date';
  
    // Append them to the watch face and then to the app
    clockFace.appendChild(timeDiv);
    clockFace.appendChild(dateDiv);
    app.appendChild(clockFace);
  
    // Function to format the time
    const formatTime = (date) => {
      return date.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' });
    }
  
    // Function to format the date
    const formatDate = (date) => {
      return date.toLocaleDateString('no-NO', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();
    }
  
    // Update the time and date every second
    const updateTime = () => {
      const now = new Date();
      timeDiv.textContent = formatTime(now);
      dateDiv.textContent = formatDate(now);
    }
  
    // Initial call and set interval to update every second
    updateTime();
    setInterval(updateTime, 1000);
  }
  
  window.onload = clock;