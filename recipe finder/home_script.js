// Check if user is logged in
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const username = sessionStorage.getItem('username');
    
    if (isLoggedIn && username) {
        // Show welcome section for logged-in users
        document.getElementById('welcomeSection').style.display = 'block';
        document.getElementById('welcomeUsername').textContent = username;
        
        // Set avatar based on username
        const avatarMap = {
            'admin': '👨‍🍳',
            'user': '👨‍🍳',
            'Guest': '👤'
        };
        document.getElementById('userAvatar').textContent = avatarMap[username] || '👤';
    }
}

// Show feature modal with detailed information
function showFeatureModal(featureType) {
    const modal = document.getElementById('featureModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const features = {
        'smart-search': {
            icon: '🔍',
            title: 'Smart Search',
            content: `
                <p>Our intelligent search system helps you find the perfect recipes based on ingredients you have at home.</p>
                <div class="modal-features">
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🥘</span>
                        <div>
                            <strong>Multi-Ingredient Search</strong><br>
                            Enter multiple ingredients separated by commas to find recipes that use everything you have.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🎯</span>
                        <div>
                            <strong>Relevance Scoring</strong><br>
                            Get recipes ranked by how well they match your ingredients, with main ingredients prioritized.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">⚡</span>
                        <div>
                            <strong>Instant Results</strong><br>
                            Real-time search with instant filtering as you type, making recipe discovery effortless.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🍳</span>
                        <div>
                            <strong>Smart Matching</strong><br>
                            Finds recipes even with partial ingredient matches, helping you use what's available.
                        </div>
                    </div>
                </div>
                <p style="margin-top: 20px;"><strong>Pro Tip:</strong> Try searching for "chicken, tomato, onion" to see how our system finds recipes that use all your ingredients!</p>
            `
        },
        'world-cuisines': {
            icon: '🌍',
            title: 'World Cuisines',
            content: `
                <p>Explore authentic recipes from around the world, bringing international flavors to your kitchen.</p>
                <div class="modal-features">
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🇮🇳</span>
                        <div>
                            <strong>Indian Cuisine</strong><br>
                            Rich curries, aromatic spices, and diverse regional specialties from across India.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🇮🇹</span>
                        <div>
                            <strong>Italian Cuisine</strong><br>
                            Classic pasta dishes, pizzas, and Mediterranean flavors from Italy.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🇨🇳</span>
                        <div>
                            <strong>Chinese Cuisine</strong><br>
                            Stir-fries, dumplings, and traditional dishes from various Chinese regions.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🇲🇽</span>
                        <div>
                            <strong>Mexican Cuisine</strong><br>
                            Tacos, quesadillas, and vibrant flavors from Mexican culinary traditions.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🇺🇸</span>
                        <div>
                            <strong>American Cuisine</strong><br>
                            Comfort foods, grilled classics, and diverse American regional dishes.
                        </div>
                    </div>
                </div>
                <p style="margin-top: 20px;"><strong>Did you know?</strong> Each cuisine includes authentic recipes with traditional cooking methods and ingredient combinations!</p>
            `
        },
        'save-favorites': {
            icon: '⭐',
            title: 'Save Favorites',
            content: `
                <p>Keep track of your most-loved recipes and build your personal cookbook with our favorites system.</p>
                <div class="modal-features">
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">❤️</span>
                        <div>
                            <strong>One-Click Saving</strong><br>
                            Add recipes to your favorites instantly with a single click on any recipe card.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">📚</span>
                        <div>
                            <strong>Personal Collection</strong><br>
                            Build your own cookbook with recipes you love and want to make again.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🏠</span>
                        <div>
                            <strong>Home Screen Access</strong><br>
                            View all your favorites directly from the home page with the "My Favorites" button.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">💾</span>
                        <div>
                            <strong>Automatic Saving</strong><br>
                            Your favorites are saved locally in your browser, so they're always available.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🗂️</span>
                        <div>
                            <strong>Easy Management</strong><br>
                            Remove recipes from favorites anytime to keep your collection organized.
                        </div>
                    </div>
                </div>
                <p style="margin-top: 20px;"><strong>Get Started:</strong> Click the heart icon on any recipe to add it to your favorites!</p>
            `
        },
        'mobile-friendly': {
            icon: '📱',
            title: 'Mobile Friendly',
            content: `
                <p>Enjoy a seamless cooking experience on any device with our fully responsive design.</p>
                <div class="modal-features">
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">📲</span>
                        <div>
                            <strong>Responsive Design</strong><br>
                            Perfect layout adaptation for phones, tablets, and desktops of all sizes.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">👆</span>
                        <div>
                            <strong>Touch Optimized</strong><br>
                            Large buttons and touch-friendly interfaces designed for mobile interaction.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">⚡</span>
                        <div>
                            <strong>Fast Loading</strong><br>
                            Optimized performance ensures quick loading even on mobile connections.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🍳</span>
                        <div>
                            <strong>Kitchen-Friendly</strong><br>
                            Large text and clear layouts make it easy to follow recipes while cooking.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🔄</span>
                        <div>
                            <strong>Cross-Device Sync</strong><br>
                            Start on desktop, continue on mobile - your favorites follow you everywhere.
                        </div>
                    </div>
                </div>
                <p style="margin-top: 20px;"><strong>Cook Anywhere:</strong> Take your recipes to the kitchen on your tablet or phone for the ultimate cooking convenience!</p>
            `
        },
        'easy-filtering': {
            icon: '🎯',
            title: 'Easy Filtering',
            content: `
                <p>Find exactly what you're looking for with our powerful yet simple filtering system.</p>
                <div class="modal-features">
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">⏱️</span>
                        <div>
                            <strong>Time-Based Filtering</strong><br>
                            Filter recipes by cooking time: Quick (under 20 min), Medium (20-40 min), or Long (40+ min).
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">📊</span>
                        <div>
                            <strong>Difficulty Levels</strong><br>
                            Choose from Easy, Medium, or Hard recipes based on your cooking skills and available time.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🌍</span>
                        <div>
                            <strong>Cuisine Filters</strong><br>
                            Focus on specific cuisines like Italian, Indian, Chinese, Mexican, or American.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🔄</span>
                        <div>
                            <strong>Sort Options</strong><br>
                            Sort results by relevance, cooking time, difficulty, or alphabetically.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🎯</span>
                        <div>
                            <strong>Combined Filters</strong><br>
                            Apply multiple filters simultaneously to find the perfect recipe for any occasion.
                        </div>
                    </div>
                </div>
                <p style="margin-top: 20px;"><strong>Smart Tip:</strong> Combine search with filters for ultra-precise recipe discovery!</p>
            `
        },
        'detailed-instructions': {
            icon: '📖',
            title: 'Detailed Instructions',
            content: `
                <p>Follow recipes confidently with our comprehensive, step-by-step cooking instructions.</p>
                <div class="modal-features">
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">📝</span>
                        <div>
                            <strong>Step-by-Step Guide</strong><br>
                            Clear, numbered steps that guide you through the entire cooking process.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🥘</span>
                        <div>
                            <strong>Complete Ingredient Lists</strong><br>
                            Detailed ingredients with quantities and both main and side ingredient categories.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">⏰</span>
                        <div>
                            <strong>Time Information</strong><br>
                            Total cooking time and prep time to help you plan your meal schedule.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">📊</span>
                        <div>
                            <strong>Difficulty Ratings</strong><br>
                            Clear difficulty indicators to match recipes with your skill level.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🍽️</span>
                        <div>
                            <strong>Serving Suggestions</strong><br>
                            Tips on serving, garnishing, and pairing suggestions for complete meals.
                        </div>
                    </div>
                    <div class="modal-feature-item">
                        <span class="modal-feature-icon">🖼️</span>
                        <div>
                            <strong>Visual Reference</strong><br>
                            High-quality images show you what the final dish should look like.
                        </div>
                    </div>
                </div>
                <p style="margin-top: 20px;"><strong>Cooking Success:</strong> Our detailed instructions ensure you can recreate any recipe perfectly, even if you're a beginner!</p>
            `
        }
    };
    
    const feature = features[featureType];
    if (feature) {
        modalIcon.textContent = feature.icon;
        modalTitle.textContent = feature.title;
        modalBody.innerHTML = feature.content;
        modal.classList.add('show');
    }
}

// Close feature modal
function closeFeatureModal() {
    const modal = document.getElementById('featureModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('featureModal');
    if (event.target === modal) {
        closeFeatureModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFeatureModal();
    }
});

function showFavorites() {
    // Check if logged in
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        alert('Please login to view your favorites!');
        window.location.href = 'login.html';
        return;
    }
    
    // Load favorites and display them
    loadFavorites();
    
    // Hide other sections and show favorites
    document.querySelector('.nav-section').style.display = 'none';
    document.querySelector('.features-section').style.display = 'none';
    document.querySelector('.stats-section').style.display = 'none';
    document.getElementById('favoritesSection').style.display = 'block';
}

// Hide favorites and show main content
function hideFavorites() {
    document.getElementById('favoritesSection').style.display = 'none';
    document.querySelector('.nav-section').style.display = 'block';
    document.querySelector('.features-section').style.display = 'block';
    document.querySelector('.stats-section').style.display = 'block';
}

// Load favorites from localStorage and display them
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
    const favoritesGrid = document.getElementById('favoritesGrid');
    const noFavorites = document.getElementById('noFavorites');
    
    if (favorites.length === 0) {
        favoritesGrid.style.display = 'none';
        noFavorites.style.display = 'block';
        return;
    }
    
    // Get recipe data (we need to access recipes from script.js)
    // For now, let's create a simplified version with basic recipe info
    const recipeData = getRecipeData();
    const favoriteRecipes = recipeData.filter(recipe => favorites.includes(recipe.id));
    
    if (favoriteRecipes.length === 0) {
        favoritesGrid.style.display = 'none';
        noFavorites.style.display = 'block';
        return;
    }
    
    favoritesGrid.style.display = 'grid';
    noFavorites.style.display = 'none';
    
    favoritesGrid.innerHTML = favoriteRecipes.map(recipe => `
        <div class="favorite-card">
            <div class="favorite-header">
                <div class="favorite-title">${recipe.name}</div>
                <div class="favorite-cuisine">${recipe.cuisine}</div>
            </div>
            <div class="favorite-details">
                <span>⏱️ ${recipe.time} mins</span>
                <span>📊 ${recipe.difficulty}</span>
            </div>
            <div class="favorite-description">${recipe.description}</div>
            <div class="favorite-actions">
                <button class="favorite-btn view-recipe-btn" onclick="viewRecipe(${recipe.id})">
                    📖 View Recipe
                </button>
                <button class="favorite-btn remove-favorite-btn" onclick="removeFavorite(${recipe.id})">
                    💔 Remove
                </button>
            </div>
        </div>
    `).join('');
}

// Get recipe data (simplified version - in real app this would come from script.js)
function getRecipeData() {
    return [
        {id: 1, name: "Chicken Tikka Masala", cuisine: "Indian", time: 45, difficulty: "Medium", description: "Creamy and aromatic chicken curry in a rich tomato-based sauce"},
        {id: 2, name: "Spaghetti Carbonara", cuisine: "Italian", time: 20, difficulty: "Easy", description: "Classic Roman pasta with eggs, cheese, and pancetta"},
        {id: 3, name: "Vegetable Stir Fry", cuisine: "Chinese", time: 25, difficulty: "Easy", description: "Quick and healthy mixed vegetables with Asian flavors"},
        {id: 4, name: "Chicken Tacos", cuisine: "Mexican", time: 30, difficulty: "Easy", description: "Flavorful seasoned chicken in soft tortillas with fresh toppings"},
        {id: 5, name: "Margherita Pizza", cuisine: "Italian", time: 90, difficulty: "Medium", description: "Classic pizza with fresh mozzarella, tomatoes, and basil"},
        {id: 26, name: "Garlic Bread", cuisine: "Italian", time: 15, difficulty: "Easy", description: "Crispy and flavorful garlic bread perfect as a side dish or appetizer"},
        {id: 27, name: "Classic Grilled Cheese", cuisine: "American", time: 10, difficulty: "Easy", description: "Golden crispy grilled cheese sandwich with melted cheese"},
        {id: 28, name: "Simple Pasta Aglio e Olio", cuisine: "Italian", time: 20, difficulty: "Easy", description: "Classic Italian pasta with garlic and olive oil - simple yet delicious"},
        {id: 29, name: "Quick Tomato Soup", cuisine: "American", time: 15, difficulty: "Easy", description: "Fast and comforting tomato soup ready in minutes"},
        {id: 30, name: "5-Minute Quesadilla", cuisine: "Mexican", time: 5, difficulty: "Easy", description: "Ultra-fast cheesy quesadilla perfect for quick meals"},
        {id: 31, name: "Buttered Noodles", cuisine: "American", time: 15, difficulty: "Easy", description: "Simple comfort food with buttered noodles and herbs"}
    ];
}

// View recipe (redirect to main page)
function viewRecipe(recipeId) {
    window.location.href = `index.html?recipeId=${recipeId}`;
}

// Remove from favorites
function removeFavorite(recipeId) {
    let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
    favorites = favorites.filter(id => id !== recipeId);
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    
    // Reload favorites display
    loadFavorites();
    
    // Show confirmation
    alert('Recipe removed from favorites!');
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    
    // Add animation delays
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelectorAll('.stat-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
});
