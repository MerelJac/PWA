const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Declare a variable to store the event

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the browser's default install prompt
  deferredPrompt = event; // Store the event for later use

  // Show the "Install" button to let the user know they can install the app
  butInstall.style.display = 'block';
});

// Click event handler for the "Install" button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // If the deferredPrompt is available, prompt the user to install the app
    deferredPrompt.prompt();

    // Wait for the user's choice
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA installation');
    } else {
      console.log('User declined the PWA installation');
    }

    deferredPrompt = null; 
    butInstall.style.display = 'none'; 
  }
});

// Event handler for the "appinstalled" event
window.addEventListener('appinstalled', (event) => {
  console.log('App was installed.');
});
