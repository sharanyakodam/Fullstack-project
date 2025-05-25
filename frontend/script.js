const shortlistBtns = document.querySelectorAll('.shortlist-btn');
const toggleFilterBtn = document.getElementById('toggle-shortlisted');
let shortlistedIds = new Set();
let showOnlyShortlisted = false;

shortlistBtns.forEach(btn => {
  const card = btn.closest('.card');
  const id = card.dataset.id;

  btn.addEventListener('click', () => {
    const isShortlisted = shortlistedIds.has(id);
    
    if (isShortlisted) {
      shortlistedIds.delete(id);
      btn.classList.remove('shortlisted');
      btn.textContent = '📌 Shortlist';
    } else {
      shortlistedIds.add(id);
      btn.classList.add('shortlisted');
      btn.textContent = '✅ Shortlisted';
    }

    if (showOnlyShortlisted) {
      updateFilteredCards();
    }
  });
});

toggleFilterBtn.addEventListener('click', () => {
  showOnlyShortlisted = !showOnlyShortlisted;
  toggleFilterBtn.classList.toggle('active');
  updateFilteredCards();
});

function updateFilteredCards() {
  document.querySelectorAll('.card').forEach(card => {
    const id = card.dataset.id;
    if (showOnlyShortlisted) {
      card.style.display = shortlistedIds.has(id) ? 'block' : 'none';
    } else {
      card.style.display = 'block';
    }
  });
}
