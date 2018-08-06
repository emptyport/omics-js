function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function responseReceived() {
  alert("Thank you!");
}

function filterProjects() {
  let input = document.getElementById('filterInput');
  let filter = input.value.toUpperCase();
  let cardContainer = document.getElementById('card-container');
  let cards = cardContainer.getElementsByClassName('card');
  
  for (i = 0; i < cards.length; i++) {
    let card = cards[i].getElementsByClassName('card-content')[0];
    let title = card.getElementsByClassName('card-title')[0];
    let subtitle = card.getElementsByClassName('card-subtitle')[0];
    let description = card.getElementsByClassName('card-description')[0];

    if(title.innerHTML.toUpperCase().indexOf(filter) > -1 || subtitle.innerHTML.toUpperCase().indexOf(filter) > -1 || description.innerHTML.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    }
    else {
      cards[i].style.display = "none";
    }
  }
}