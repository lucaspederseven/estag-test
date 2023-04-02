const cards = document.querySelectorAll('#card-overlay');

      cards.forEach(card => {
        const overlay = card.querySelector('.overlay');
        const img = card.querySelector('img');
        const description = card.querySelector('.description');
        
        card.addEventListener('mouseover', () => {
          img.style.display = 'none';
          overlay.style.display = 'flex';
          description.classList.add('hidden');
        });
        
        card.addEventListener('mouseout', () => {
          img.style.display = 'block';
          overlay.style.display = 'none';
          description.classList.remove('hidden');
        });
    
      });