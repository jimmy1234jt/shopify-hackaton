let isCardOpen = true;

function toggleCard() {
  const content = document.getElementById('content');
  const toggleIcon = document.getElementById('toggleIcon');

  if (isCardOpen) {
    // content.style.height = '0';
    content.style.display = 'none';
    toggleIcon.innerHTML = `<svg width="41" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#000"/>
    </svg>
    `; // Unicode for right-pointing triangle
  } else {
    content.style.display = 'flex';
    toggleIcon.innerHTML = `<svg width="41" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#000"/>
    </svg>
    `; // Unicode for down-pointing triangle
  }

  isCardOpen = !isCardOpen;
}



let openPanel = null;

function togglePanel(step) {
  const panel = document.querySelector(`.onboarding-step:nth-child(${step}) .panel`);

  if (panel.style.display === 'flex') {
    // Close the panel
    panel.style.display = 'none';
    openPanel = null;
  } else {
    // Close the previously opened panel
    if (openPanel !== null) {
      document.querySelector(`.onboarding-step:nth-child(${openPanel}) .panel`).style.display = 'none';
    }

    // Open the clicked panel
    panel.style.display = 'flex';
    openPanel = step;
  }
}

function closeBanner(){
  const banner = document.getElementById('banner');
  banner.style.display = 'none'
}


let completedSteps = 0;
const totalSteps = 5;

function toggleStep(stepNumber) {
  const content = document.getElementById(`content${stepNumber}`);
  content.style.display = content.style.display === 'none' ? 'flex' : 'none';
}

// Get all elements with the class 'my-element'
var elements = document.querySelectorAll('.my-element');
var currentIndex = -1;

// Function to remove the 'active' class from all elements
function deactivateAll() {
    elements.forEach(function(element) {
        element.classList.remove('active');
        element.style.display = 'none';
    });
}

// Function to set the 'active' class on the next element
function moveNext() {
    deactivateAll(); // Deactivate all elements first

    if (currentIndex < elements.length ) {
        currentIndex++;

        elements[currentIndex].classList.add('active'); // Activate the next element
        elements[currentIndex].style.display = 'flex'; // Set display to flex for the active element
    }
    // If currentIndex is already at the last element, you can choose to do nothing or handle it as needed
}

// Initial activation
moveNext();



function markStep(stepNumber) {
  const checkbox = document.getElementById(`step${stepNumber}`).getElementsByClassName('checkbox')[0];
  const content = document.getElementById(`content${stepNumber}`);
  const nextStepNumber = stepNumber + 1;
  


  // Simulate a delay for loading
  setTimeout(() => {
    if (checkbox.classList.contains('marked')) {
      checkbox.classList.remove('marked');
      checkbox.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
    </svg>
      `;
      completedSteps--;
    } else {
      checkbox.classList.add('marked');
      checkbox.innerHTML = `
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#303030"></circle>
      <path
        d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
        fill="#fff"
      ></path>
    </svg>
      `;
      completedSteps++;
    }
    

    // Update progress bar and label
    updateProgressBar();

    toggleStep(stepNumber)
     
    // Open the next incomplete step after a short delay
    setTimeout(() => {
      const nextContent = document.getElementById(`content${nextStepNumber}`);
      if (nextContent && !checkbox.classList.contains('marked')) {
        nextContent.style.display = 'flex';
      }
    }, 100);
  }, 100);
}

function updateProgressBar() {
  const progress = (completedSteps / totalSteps) * 100;
  document.getElementById('progress').style.width = `${progress}%`;
  document.getElementById('progressLabel').innerText = `${completedSteps} / ${totalSteps} completed`;
}


// drop 

function toggleDropMenu(menuId) {
  var menu = document.getElementById(menuId);
  var allMenus = document.querySelectorAll('.dropmenu');

  // Hide all menus
  allMenus.forEach(function (element) {
      if (element !== menu) {
          element.style.visibility = 'hidden';
      }
  });

  // Toggle the visibility of the selected menu
  if (menu.style.visibility === 'visible') {
      menu.style.visibility = 'hidden';
  } else {
      menu.style.visibility = 'visible';
  }
}
