function showInfo(info) {
  alert(info);
}

document.getElementById('searchBox').addEventListener('keyup', function () {
  const query = this.value.toLowerCase();
  const animalCards = document.querySelectorAll('.animal-card');
  animalCards.forEach(card => {
    // Combine all text content from the card for search matching
    const cardText = card.textContent.toLowerCase();
    if (cardText.indexOf(query) !== -1) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
