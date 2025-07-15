// Main navigation function
function openGame(gameName) {
    window.location.href = `games/${gameName}.html`;
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to game cards
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add loading animation
    gameCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Utility function for game pages
function goBack() {
    window.location.href = '../index.html';
}

// Common game utilities
class GameUtils {
    static getRandomColor() {
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#54A0FF'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    static playSound(frequency = 440, duration = 200) {
        if (typeof AudioContext !== 'undefined') {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration / 1000);
            
            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + duration / 1000);
        }
    }
    
    static formatScore(score) {
        return score.toString().padStart(6, '0');
    }
}
