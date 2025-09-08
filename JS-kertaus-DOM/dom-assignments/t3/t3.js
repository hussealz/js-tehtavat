// BOM-tiedot
const target = document.getElementById('target');

// Browser name and version
let browserName, browserVersion;
if (navigator.userAgentData && navigator.userAgentData.brands) {
  const chrome = navigator.userAgentData.brands.find(brand => brand.brand === 'Google Chrome');
  if (chrome) {
    browserName = 'Google Chrome';
    browserVersion = chrome.version;
  } else {
    browserName = navigator.userAgentData.brands[0].brand;
    browserVersion = navigator.userAgentData.brands[0].version;
  }
} else {
  // Fallback parsing
  const ua = navigator.userAgent;
  if (ua.includes('Chrome')) {
    browserName = 'Google Chrome';
    browserVersion = ua.match(/Chrome\/(\d+)/)?.[1] || 'Unknown';
  } else if (ua.includes('Firefox')) {
    browserName = 'Mozilla Firefox';
    browserVersion = ua.match(/Firefox\/(\d+)/)?.[1] || 'Unknown';
  } else if (ua.includes('Safari')) {
    browserName = 'Safari';
    browserVersion = ua.match(/Version\/(\d+)/)?.[1] || 'Unknown';
  } else {
    browserName = 'Unknown Browser';
    browserVersion = 'Unknown';
  }
}

// Operating system name
let osName;
if (navigator.userAgentData) {
  osName = navigator.userAgentData.platform;
} else {
  const ua = navigator.userAgent;
  if (ua.includes('Windows')) osName = 'Windows';
  else if (ua.includes('Mac')) osName = 'macOS';
  else if (ua.includes('Linux')) osName = 'Linux';
  else if (ua.includes('Android')) osName = 'Android';
  else if (ua.includes('iOS')) osName = 'iOS';
  else osName = 'Unknown OS';
}

// Screen width and height
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

// Available screen space for the browser
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Current date and time with Finnish localization
const now = new Date();
const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
const timeOptions = {
  hour: '2-digit',
  minute: '2-digit'
};

const finnishDate = now.toLocaleDateString('fi-FI', dateOptions);
const finnishTime = now.toLocaleTimeString('fi-FI', timeOptions);

// Lisää tiedot sivulle
target.innerHTML = `
  <p>Browser: ${browserName} ${browserVersion}</p>
  <p>Operating System: ${osName}</p>
  <p>Screen: ${screenWidth} x ${screenHeight}</p>
  <p>Browser Window: ${windowWidth} x ${windowHeight}</p>
  <p>Date: ${finnishDate}</p>
  <p>Time: ${finnishTime}</p>
`;