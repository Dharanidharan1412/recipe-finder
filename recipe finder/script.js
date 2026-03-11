// Recipe Database
const recipes = [
    {
        id: 1,
        name: "Chicken Tikka Masala",
        cuisine: "Indian",
        time: 45,
        difficulty: "Medium",
        description: "Creamy and aromatic chicken curry in a rich tomato-based sauce",
        mainIngredients: ["chicken", "tomato", "cream", "yogurt"],
        sideIngredients: ["onion", "garlic", "ginger", "garam masala", "cumin", "coriander"],
        ingredients: ["chicken", "tomato", "onion", "garlic", "ginger", "cream", "yogurt", "garam masala", "cumin", "coriander"],
        instructions: [
            "Marinate chicken pieces in yogurt and spices for 30 minutes",
            "Heat oil in a pan and sauté onions until golden",
            "Add garlic and ginger, cook for 1 minute",
            "Add tomatoes and spices, cook until oil separates",
            "Add marinated chicken and cook until done",
            "Stir in cream and simmer for 10 minutes",
            "Garnish with cilantro and serve with rice or naan"
        ],
        image: "img/Chicken Tikka Masala.webp"
    },
    {
        id: 2,
        name: "Spaghetti Carbonara",
        cuisine: "Italian",
        time: 20,
        difficulty: "Easy",
        description: "Classic Roman pasta with eggs, cheese, and pancetta",
        mainIngredients: ["spaghetti", "eggs", "parmesan", "pancetta"],
        sideIngredients: ["garlic", "black pepper", "salt"],
        ingredients: ["spaghetti", "eggs", "parmesan", "pancetta", "garlic", "black pepper", "salt"],
        instructions: [
            "Cook spaghetti according to package directions",
            "While pasta cooks, fry pancetta until crispy",
            "Beat eggs with grated Parmesan cheese",
            "Drain pasta, reserving 1 cup pasta water",
            "Add hot pasta to pancetta pan",
            "Remove from heat and quickly stir in egg mixture",
            "Add pasta water to achieve creamy consistency",
            "Season with black pepper and serve immediately"
        ],
        image: "img/Spaghetti Carbonara.webp"
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        cuisine: "Chinese",
        time: 25,
        difficulty: "Easy",
        description: "Quick and healthy mixed vegetables with Asian flavors",
        mainIngredients: ["broccoli", "carrot", "bell pepper", "rice"],
        sideIngredients: ["soy sauce", "garlic", "ginger", "sesame oil"],
        ingredients: ["broccoli", "carrot", "bell pepper", "soy sauce", "garlic", "ginger", "sesame oil", "rice"],
        instructions: [
            "Prepare all vegetables by cutting into uniform pieces",
            "Heat wok or large pan over high heat",
            "Add oil and stir-fry garlic and ginger for 30 seconds",
            "Add harder vegetables first (carrots, broccoli)",
            "Stir-fry for 3-4 minutes",
            "Add softer vegetables and soy sauce",
            "Cook for 2-3 more minutes until crisp-tender",
            "Drizzle with sesame oil and serve over rice"
        ],
        image: "img/Vegetable Stir Fry.webp"
    },
    {
        id: 4,
        name: "Chicken Tacos",
        cuisine: "Mexican",
        time: 30,
        difficulty: "Easy",
        description: "Flavorful seasoned chicken in soft tortillas with fresh toppings",
        mainIngredients: ["chicken", "tortillas", "cheese"],
        sideIngredients: ["onion", "tomato", "lettuce", "sour cream", "lime", "cumin", "paprika"],
        ingredients: ["chicken", "tortillas", "onion", "tomato", "lettuce", "cheese", "sour cream", "lime", "cumin", "paprika"],
        instructions: [
            "Season chicken with cumin, paprika, salt, and pepper",
            "Cook chicken in a pan until fully cooked",
            "Let chicken rest, then shred or chop",
            "Warm tortillas in a dry pan or microwave",
            "Fill tortillas with chicken",
            "Top with diced onion, tomato, lettuce, and cheese",
            "Serve with sour cream and lime wedges"
        ],
        image: "img/Chicken Tacos.webp"
    },
    {
        id: 5,
        name: "Margherita Pizza",
        cuisine: "Italian",
        time: 90,
        difficulty: "Medium",
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
        mainIngredients: ["flour", "yeast", "tomato", "mozzarella", "basil"],
        sideIngredients: ["olive oil", "salt", "sugar"],
        ingredients: ["flour", "yeast", "tomato", "mozzarella", "basil", "olive oil", "salt", "sugar"],
        instructions: [
            "Mix flour, yeast, salt, and sugar for dough",
            "Add warm water and olive oil, knead for 10 minutes",
            "Let dough rise for 1 hour",
            "Roll out dough to desired thickness",
            "Spread tomato sauce evenly",
            "Add torn mozzarella pieces",
            "Bake at 475°F for 12-15 minutes",
            "Top with fresh basil before serving"
        ],
        image: "img/Margherita Pizza.webp"
    },
    {
        id: 7,
        name: "Palak Paneer",
        cuisine: "Indian",
        time: 40,
        difficulty: "Medium",
        description: "Creamy spinach curry with soft cottage cheese cubes",
        mainIngredients: ["spinach", "paneer", "cream"],
        sideIngredients: ["onion", "tomato", "garlic", "ginger", "cumin", "coriander", "garam masala"],
        ingredients: ["spinach", "paneer", "onion", "tomato", "garlic", "ginger", "cream", "cumin", "coriander", "garam masala"],
        instructions: [
            "Blanch spinach and blend into smooth puree",
            "Cut paneer into cubes and lightly fry until golden",
            "Sauté onions until translucent",
            "Add ginger-garlic paste and cook for 1 minute",
            "Add tomatoes and spices, cook until thick",
            "Add spinach puree and simmer for 10 minutes",
            "Add paneer cubes and cream",
            "Serve with rice or naan bread"
        ],
        image: "img/palak paneer.webp"
    },
    {
        id: 9,
        name: "Chicken Fried Rice",
        cuisine: "Chinese",
        time: 30,
        difficulty: "Easy",
        description: "Wok-fried rice with chicken and vegetables",
        mainIngredients: ["rice", "chicken", "egg"],
        sideIngredients: ["soy sauce", "vegetables", "garlic", "sesame oil", "green onion"],
        ingredients: ["rice", "chicken", "egg", "soy sauce", "vegetables", "garlic", "sesame oil", "green onion"],
        instructions: [
            "Cook rice and let it cool completely",
            "Cut chicken into small pieces and season",
            "Heat wok with oil and scramble eggs",
            "Remove eggs and set aside",
            "Stir-fry chicken until cooked",
            "Add vegetables and garlic",
            "Add rice and soy sauce, stir-fry for 3 minutes",
            "Mix in eggs and green onions, serve hot"
        ],
        image: "img/Chicken Fried Rice.webp"
    },
    {
        id: 10,
        name: "Egg Bhurji",
        cuisine: "Indian",
        time: 15,
        difficulty: "Easy",
        description: "Spicy scrambled eggs with onions and tomatoes",
        mainIngredients: ["eggs", "onion", "tomato"],
        sideIngredients: ["green chili", "turmeric", "cumin", "coriander", "butter"],
        ingredients: ["eggs", "onion", "tomato", "green chili", "turmeric", "cumin", "coriander", "butter"],
        instructions: [
            "Heat butter in a pan",
            "Sauté chopped onions until soft",
            "Add tomatoes and green chilies, cook until soft",
            "Add spices and cook for 1 minute",
            "Beat eggs and pour into the pan",
            "Scramble gently until cooked but still soft",
            "Garnish with fresh coriander",
            "Serve with toast or paratha"
        ],
        image: "img/Egg Bhurji.webp"
    },
    {
        id: 12,
        name: "Onion Bajji",
        cuisine: "Indian",
        time: 25,
        difficulty: "Easy",
        description: "Crispy fried onion fritters with spices",
        mainIngredients: ["onion", "chickpea flour"],
        sideIngredients: ["rice flour", "chili powder", "turmeric", "carom seeds", "oil"],
        ingredients: ["onion", "chickpea flour", "rice flour", "chili powder", "turmeric", "carom seeds", "oil"],
        instructions: [
            "Slice onions thinly and separate rings",
            "Mix flours and spices with water to make batter",
            "Heat oil for deep frying",
            "Dip onion rings in batter",
            "Fry until golden and crispy",
            "Drain on paper towels",
            "Serve hot with chutney or ketchup"
        ],
        image: "img/Onion Bajji.webp"
    },
    {
        id: 13,
        name: "Cucumber Raita",
        cuisine: "Indian",
        time: 10,
        difficulty: "Easy",
        description: "Cooling yogurt dip with grated cucumber",
        mainIngredients: ["cucumber", "yogurt"],
        sideIngredients: ["mint", "cumin", "salt", "black pepper"],
        ingredients: ["cucumber", "yogurt", "mint", "cumin", "salt", "black pepper"],
        instructions: [
            "Grate cucumber and squeeze out excess water",
            "Whisk yogurt until smooth",
            "Mix cucumber into yogurt",
            "Add chopped mint leaves",
            "Season with roasted cumin powder, salt, and pepper",
            "Chill for 30 minutes before serving",
            "Serve as a side dish with spicy meals"
        ],
        image: "img/Cucumber Raita.webp"
    },
    {
        id: 14,
        name: "Coconut Chutney",
        cuisine: "Indian",
        time: 15,
        difficulty: "Easy",
        description: "Fresh coconut chutney with herbs and spices",
        mainIngredients: ["coconut"],
        sideIngredients: ["green chili", "ginger", "mint", "coriander", "lemon", "salt"],
        ingredients: ["coconut", "green chili", "ginger", "mint", "coriander", "lemon", "salt"],
        instructions: [
            "Grate fresh coconut or use dried coconut",
            "Blend coconut with green chilies and ginger",
            "Add mint and coriander leaves",
            "Blend to a smooth paste",
            "Add lemon juice and salt",
            "Temper with mustard seeds and curry leaves",
            "Serve with dosa, idli, or rice"
        ],
        image: "img/Coconut Chutney.webp"
    },
    {
        id: 15,
        name: "Vegetable Fried Rice",
        cuisine: "Chinese",
        time: 25,
        difficulty: "Easy",
        description: "Colorful fried rice with mixed vegetables",
        mainIngredients: ["rice", "vegetables", "egg"],
        sideIngredients: ["soy sauce", "garlic", "sesame oil", "green onion"],
        ingredients: ["rice", "vegetables", "egg", "soy sauce", "garlic", "sesame oil", "green onion"],
        instructions: [
            "Use day-old rice for best results",
            "Heat wok with oil and scramble eggs",
            "Add garlic and mixed vegetables",
            "Stir-fry for 3-4 minutes",
            "Add rice and break up clumps",
            "Add soy sauce and toss well",
            "Drizzle with sesame oil",
            "Garnish with green onions and serve"
        ],
        image: "img/Vegetable Fried Rice.webp"
    },
    {
        id: 16,
        name: "Chicken Noodle Soup",
        cuisine: "American",
        time: 45,
        difficulty: "Easy",
        description: "Comforting soup with chicken and vegetables",
        mainIngredients: ["chicken", "noodles", "carrot", "celery"],
        sideIngredients: ["onion", "chicken broth", "thyme", "bay leaf"],
        ingredients: ["chicken", "noodles", "carrot", "celery", "onion", "chicken broth", "thyme", "bay leaf"],
        instructions: [
            "Cook chicken in broth until tender",
            "Remove chicken and shred meat",
            "Sauté vegetables in the same pot",
            "Add broth and seasonings",
            "Simmer for 15 minutes",
            "Add noodles and cook until tender",
            "Return chicken to pot",
            "Serve hot with crusty bread"
        ],
        image: "img/Chicken Noodle Soup.webp"
    },
    {
        id: 17,
        name: "Mushroom Risotto",
        cuisine: "Italian",
        time: 40,
        difficulty: "Medium",
        description: "Creamy arborio rice with sautéed mushrooms",
        mainIngredients: ["rice", "mushrooms", "parmesan"],
        sideIngredients: ["onion", "white wine", "butter", "vegetable broth", "garlic"],
        ingredients: ["rice", "mushrooms", "onion", "white wine", "parmesan", "butter", "vegetable broth", "garlic"],
        instructions: [
            "Sauté mushrooms until golden, set aside",
            "Cook onion and garlic in butter",
            "Add rice and toast for 2 minutes",
            "Add wine and stir until absorbed",
            "Add broth one ladle at a time, stirring constantly",
            "Continue for 20 minutes until creamy",
            "Stir in mushrooms and Parmesan",
            "Season and serve immediately"
        ],
        image: "img/Mushroom Risotto.webp"
    },
    {
        id: 18,
        name: "Fish Tacos",
        cuisine: "Mexican",
        time: 25,
        difficulty: "Easy",
        description: "Light and crispy fish tacos with slaw",
        mainIngredients: ["fish", "tortillas", "cabbage"],
        sideIngredients: ["lime", "mayo", "cilantro", "onion", "cumin"],
        ingredients: ["fish", "tortillas", "cabbage", "lime", "mayo", "cilantro", "onion", "cumin"],
        instructions: [
            "Season fish with cumin, salt, and pepper",
            "Pan-fry or grill fish until flaky",
            "Make slaw with cabbage, lime, and mayo",
            "Warm tortillas",
            "Flake fish and fill tortillas",
            "Top with slaw, cilantro, and onion",
            "Serve with lime wedges"
        ],
        image: "img/Fish Tacos.webp"
    },
    {
        id: 20,
        name: "Chicken Curry",
        cuisine: "Indian",
        time: 50,
        difficulty: "Medium",
        description: "Aromatic chicken curry with spices",
        mainIngredients: ["chicken", "tomato", "coconut milk"],
        sideIngredients: ["onion", "garlic", "ginger", "turmeric", "chili powder", "garam masala"],
        ingredients: ["chicken", "onion", "tomato", "garlic", "ginger", "turmeric", "chili powder", "garam masala", "coconut milk"],
        instructions: [
            "Marinate chicken with turmeric and salt",
            "Heat oil and sauté onions until golden",
            "Add ginger-garlic paste and cook for 1 minute",
            "Add tomatoes and spices, cook until thick",
            "Add chicken and cook until browned",
            "Add coconut milk and simmer for 20 minutes",
            "Garnish with cilantro",
            "Serve with rice or roti"
        ],
        image: "img/Chicken Curry.jpg"
    },
    {
        id: 21,
        name: "Pasta Primavera",
        cuisine: "Italian",
        time: 30,
        difficulty: "Easy",
        description: "Fresh pasta with seasonal vegetables",
        mainIngredients: ["pasta", "broccoli", "bell pepper", "zucchini"],
        sideIngredients: ["garlic", "olive oil", "parmesan", "lemon"],
        ingredients: ["pasta", "broccoli", "bell pepper", "zucchini", "garlic", "olive oil", "parmesan", "lemon"],
        instructions: [
            "Cook pasta according to directions",
            "Blanch broccoli for 2 minutes",
            "Sauté garlic in olive oil",
            "Add vegetables and cook until tender-crisp",
            "Add cooked pasta to vegetables",
            "Toss with Parmesan and lemon juice",
            "Season with salt and pepper",
            "Serve immediately"
        ],
        image: "img/Pasta Primavera.webp"
    },
    {
        id: 24,
        name: "Chicken Wings",
        cuisine: "American",
        time: 35,
        difficulty: "Easy",
        description: "Crispy chicken wings with spicy sauce",
        mainIngredients: ["chicken wings", "hot sauce", "butter"],
        sideIngredients: ["garlic powder", "paprika", "salt", "celery", "blue cheese"],
        ingredients: ["chicken wings", "hot sauce", "butter", "garlic powder", "paprika", "salt", "celery", "blue cheese"],
        instructions: [
            "Pat chicken wings dry and season",
            "Bake at 400°F for 25 minutes",
            "Flip and bake for 15 more minutes",
            "Melt butter and mix with hot sauce",
            "Toss wings in sauce",
            "Arrange on platter with celery",
            "Serve with blue cheese dip",
            "Enjoy while hot"
        ],
        image: "img/Chicken Wings.webp"
    },
    {
        id: 25,
        name: "Vegetable Curry",
        cuisine: "Indian",
        time: 35,
        difficulty: "Easy",
        description: "Mixed vegetables in aromatic curry sauce",
        mainIngredients: ["vegetables", "tomato", "coconut milk"],
        sideIngredients: ["onion", "curry powder", "turmeric", "ginger", "garlic"],
        ingredients: ["vegetables", "onion", "tomato", "coconut milk", "curry powder", "turmeric", "ginger", "garlic"],
        instructions: [
            "Cut vegetables into uniform pieces",
            "Sauté onions until soft",
            "Add ginger-garlic paste and spices",
            "Add tomatoes and cook until soft",
            "Add vegetables and coconut milk",
            "Simmer until vegetables are tender",
            "Season with salt and lemon juice",
            "Serve with rice or naan"
        ],
        image: "img/Vegetable Curry.webp"
    },
    {
        id: 26,
        name: "Quick Scrambled Eggs",
        cuisine: "American",
        time: 5,
        difficulty: "Easy",
        description: "Fluffy scrambled eggs cooked in minutes with butter",
        mainIngredients: ["eggs", "butter"],
        sideIngredients: ["salt", "pepper"],
        ingredients: ["eggs", "butter", "salt", "pepper"],
        instructions: [
            "Crack eggs into a bowl and whisk lightly",
            "Heat butter in a non-stick pan over medium heat",
            "Pour in eggs and stir gently with a spatula",
            "Cook for 2-3 minutes until soft curds form",
            "Season with salt and pepper",
            "Serve immediately with toast"
        ],
        image: "img/egg-oats-omelette.jpg"
    },
    {
        id: 26,
        name: "Garlic Bread",
        cuisine: "Italian",
        time: 15,
        difficulty: "Easy",
        description: "Crispy and flavorful garlic bread perfect as a side dish or appetizer",
        mainIngredients: ["bread", "garlic", "butter"],
        sideIngredients: ["parsley", "parmesan", "olive oil", "salt", "pepper"],
        ingredients: ["bread", "garlic", "butter", "parsley", "parmesan", "olive oil", "salt", "pepper"],
        instructions: [
            "Preheat oven to 375°F (190°C)",
            "Mix softened butter with minced garlic",
            "Add chopped parsley and grated parmesan",
            "Slice bread loaf in half lengthwise",
            "Spread garlic butter mixture evenly on bread",
            "Drizzle with olive oil",
            "Bake for 10-12 minutes until golden brown",
            "Cut into slices and serve hot"
        ],
        image: "img/Garlic Bread.jpg"
    },
    {
        id: 27,
        name: "Classic Grilled Cheese",
        cuisine: "American",
        time: 10,
        difficulty: "Easy",
        description: "Golden crispy grilled cheese sandwich with melted cheese",
        mainIngredients: ["bread", "cheese", "butter"],
        sideIngredients: ["tomato", "salt", "pepper"],
        ingredients: ["bread", "cheese", "butter", "tomato", "salt", "pepper"],
        instructions: [
            "Heat a non-stick pan over medium heat",
            "Butter one side of each bread slice",
            "Place cheese between bread slices, buttered sides out",
            "Place sandwich in hot pan",
            "Grill for 3-4 minutes until golden brown",
            "Flip and grill other side for 3-4 minutes",
            "Press down gently with spatula",
            "Serve hot with tomato soup if desired"
        ],
        image: "img/Classic Grilled Cheese.jpg"
    },
    {
        id: 28,
        name: "Simple Pasta Aglio e Olio",
        cuisine: "Italian",
        time: 20,
        difficulty: "Easy",
        description: "Classic Italian pasta with garlic and olive oil - simple yet delicious",
        mainIngredients: ["spaghetti", "garlic", "olive oil"],
        sideIngredients: ["red pepper flakes", "parsley", "salt", "pepper", "lemon"],
        ingredients: ["spaghetti", "garlic", "olive oil", "red pepper flakes", "parsley", "salt", "pepper", "lemon"],
        instructions: [
            "Cook spaghetti according to package directions",
            "Slice garlic thinly",
            "Heat olive oil in a large pan over medium-low heat",
            "Add garlic and red pepper flakes",
            "Cook until garlic is golden but not browned",
            "Add cooked pasta to the pan with some pasta water",
            "Toss well to coat pasta with oil",
            "Add parsley, salt, and pepper",
            "Serve with lemon wedges"
        ],
        image: "img/Simple Pasta Aglio e Olio.jpg"
    },
    {
        id: 29,
        name: "Quick Tomato Soup",
        cuisine: "American",
        time: 15,
        difficulty: "Easy",
        description: "Fast and comforting tomato soup ready in minutes",
        mainIngredients: ["tomato", "cream", "onion"],
        sideIngredients: ["garlic", "basil", "butter", "sugar", "salt", "pepper"],
        ingredients: ["tomato", "cream", "onion", "garlic", "basil", "butter", "sugar", "salt", "pepper"],
        instructions: [
            "Heat butter in a saucepan over medium heat",
            "Sauté chopped onions until soft (3 minutes)",
            "Add minced garlic and cook for 1 minute",
            "Add canned tomatoes with their juice",
            "Add sugar, salt, and pepper",
            "Simmer for 10 minutes",
            "Blend until smooth using an immersion blender",
            "Stir in cream and fresh basil",
            "Serve hot with grilled cheese"
        ],
        image: "img/Quick Tomato Soup.jpg"
    },
    {
        id: 30,
        name: "5-Minute Quesadilla",
        cuisine: "Mexican",
        time: 5,
        difficulty: "Easy",
        description: "Ultra-fast cheesy quesadilla perfect for quick meals",
        mainIngredients: ["tortillas", "cheese"],
        sideIngredients: ["butter", "sour cream", "salsa"],
        ingredients: ["tortillas", "cheese", "butter", "sour cream", "salsa"],
        instructions: [
            "Heat a non-stick pan over medium heat",
            "Place one tortilla in the pan",
            "Sprinkle shredded cheese evenly over tortilla",
            "Top with second tortilla",
            "Cook for 2-3 minutes until bottom is golden",
            "Flip and cook other side for 2-3 minutes",
            "Slide onto cutting board and cut into wedges",
            "Serve hot with sour cream and salsa"
        ],
        image: "img/5-Minute Quesadilla.jpg"
    },
    {
        id: 31,
        name: "Buttered Noodles",
        cuisine: "American",
        time: 15,
        difficulty: "Easy",
        description: "Simple comfort food with buttered noodles and herbs",
        mainIngredients: ["noodles", "butter", "parsley"],
        sideIngredients: ["garlic", "parmesan", "salt", "pepper"],
        ingredients: ["noodles", "butter", "parsley", "garlic", "parmesan", "salt", "pepper"],
        instructions: [
            "Cook noodles according to package directions",
            "Drain noodles well",
            "Return to hot pot",
            "Add butter and stir until melted",
            "Add minced garlic if desired",
            "Season with salt and pepper",
            "Add chopped fresh parsley",
            "Top with grated parmesan cheese",
            "Serve immediately"
        ],
        image: "img/Buttered Noodles.jpg"
    }
];

// Application State
let currentRecipes = [...recipes];
let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
let showFavoritesOnly = false;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const recipesGrid = document.getElementById('recipesGrid');
const recipeModal = document.getElementById('recipeModal');

// Initialize App
function init() {
    displayRecipes(currentRecipes);
    attachEventListeners();
}

// Event Listeners
function attachEventListeners() {
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearBtn');
    const cuisineFilter = document.getElementById('cuisineFilter');
    const sortBy = document.getElementById('sortBy');
    const favoritesOnly = document.getElementById('favoritesOnly');
    const modalClose = document.getElementById('modalClose');
    const favoritesToggle = document.getElementById('favoritesToggle');
    
    searchBtn.addEventListener('click', handleSearch);
    clearBtn.addEventListener('click', handleClear);
    cuisineFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);
    favoritesOnly.addEventListener('change', handleFavoritesToggle);
    favoritesToggle.addEventListener('click', toggleFavorites);
    modalClose.addEventListener('click', closeModal);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Real-time search
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(handleSearch, 300);
    });
}

// Advanced Search Handler with Ingredient Priority Scoring
function handleSearch() {
    showLoading();
    
    setTimeout(() => {
        const query = searchInput.value.toLowerCase().trim();
        
        if (!query) {
            currentRecipes = [...recipes];
        } else {
            const searchTerms = query.split(',').map(term => term.trim()).filter(term => term);
            
            currentRecipes = recipes
                .map(recipe => {
                    let score = 0;
                    let matchedIngredients = [];
                    let matchedMainIngredients = [];
                    let totalRecipeIngredients = [];
                    let totalMainIngredients = recipe.mainIngredients ? recipe.mainIngredients.length : 0;
                    
                    // Combine all recipe ingredients
                    if (recipe.mainIngredients) totalRecipeIngredients = totalRecipeIngredients.concat(recipe.mainIngredients);
                    if (recipe.sideIngredients) totalRecipeIngredients = totalRecipeIngredients.concat(recipe.sideIngredients);
                    
                    // Remove duplicates
                    totalRecipeIngredients = [...new Set(totalRecipeIngredients)];
                    
                    searchTerms.forEach(term => {
                        let foundInRecipe = false;
                        
                        // Check main ingredients (highest priority - 3 points)
                        if (recipe.mainIngredients && recipe.mainIngredients.some(ingredient => 
                            ingredient.toLowerCase().includes(term))) {
                            score += 3;
                            foundInRecipe = true;
                            // Add all matching ingredients from main
                            recipe.mainIngredients.forEach(ingredient => {
                                if (ingredient.toLowerCase().includes(term) && !matchedIngredients.includes(ingredient)) {
                                    matchedIngredients.push(ingredient);
                                    matchedMainIngredients.push(ingredient);
                                }
                            });
                        }
                        // Check recipe name (high priority - 2 points)
                        if (recipe.name.toLowerCase().includes(term)) {
                            score += 2;
                            foundInRecipe = true;
                        }
                        // Check side ingredients (medium priority - 1 point)
                        if (recipe.sideIngredients && recipe.sideIngredients.some(ingredient => 
                            ingredient.toLowerCase().includes(term))) {
                            score += 1;
                            foundInRecipe = true;
                            // Add all matching ingredients from side
                            recipe.sideIngredients.forEach(ingredient => {
                                if (ingredient.toLowerCase().includes(term) && !matchedIngredients.includes(ingredient)) {
                                    matchedIngredients.push(ingredient);
                                }
                            });
                        }
                        // Check description (low priority - 0.5 points)
                        if (recipe.description.toLowerCase().includes(term)) {
                            score += 0.5;
                            foundInRecipe = true;
                        }
                    });
                    
                    // Calculate percentage with main ingredient priority
                    let matchPercentage = 0;
                    if (totalRecipeIngredients.length > 0) {
                        // Main ingredients get 70% weight, side ingredients get 30% weight
                        const mainIngredientScore = totalMainIngredients > 0 ? (matchedMainIngredients.length / totalMainIngredients) * 70 : 0;
                        const sideIngredientScore = (matchedIngredients.length - matchedMainIngredients.length) / Math.max(1, totalRecipeIngredients.length - totalMainIngredients) * 30;
                        matchPercentage = Math.min(100, mainIngredientScore + sideIngredientScore);
                    }
                    
                    return {
                        ...recipe,
                        score,
                        matchPercentage,
                        matchedTerms: matchedIngredients
                    };
                })
                .filter(recipe => recipe.score > 0)
                .sort((a, b) => b.score - a.score);
        }
        
        applyFilters();
        hideLoading();
    }, 500);
}

// Clear Search
function handleClear() {
    searchInput.value = '';
    cuisineFilter.value = '';
    sortBy.value = 'name';
    favoritesOnly.checked = false;
    showFavoritesOnly = false;
    currentRecipes = [...recipes];
    displayRecipes(currentRecipes);
}

// Apply Filters
function applyFilters() {
    let filtered = [...currentRecipes];
    
    // Cuisine filter
    const cuisine = cuisineFilter.value;
    if (cuisine) {
        filtered = filtered.filter(recipe => recipe.cuisine === cuisine);
    }
    
    // Favorites filter
    if (showFavoritesOnly) {
        filtered = filtered.filter(recipe => favorites.includes(recipe.id));
    }
    
    // Sort
    const sort = sortBy.value;
    switch(sort) {
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'time':
            filtered.sort((a, b) => a.time - b.time);
            break;
        case 'difficulty':
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
            break;
    }
    
    displayRecipes(filtered);
}

// Favorites Toggle
function handleFavoritesToggle() {
    showFavoritesOnly = favoritesOnly.checked;
    applyFilters();
}

// Display Recipes with Enhanced Ingredient Display
function displayRecipes(recipesToShow) {
    if (recipesToShow.length === 0) {
        recipesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    recipesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    recipesGrid.innerHTML = recipesToShow.map(recipe => {
        // Determine search accuracy indicator
        let accuracyBadge = '';
        if (recipe.matchPercentage !== undefined) {
            if (recipe.matchPercentage === 100) {
                accuracyBadge = '<span class="accuracy-badge perfect">100% Match</span>';
            } else if (recipe.matchPercentage >= 75) {
                accuracyBadge = '<span class="accuracy-badge high">' + Math.round(recipe.matchPercentage) + '% Match</span>';
            } else if (recipe.matchPercentage >= 50) {
                accuracyBadge = '<span class="accuracy-badge medium">' + Math.round(recipe.matchPercentage) + '% Match</span>';
            } else {
                accuracyBadge = '<span class="accuracy-badge low">' + Math.round(recipe.matchPercentage) + '% Match</span>';
            }
        }
        
        // Format main and side ingredients
        const mainIngredientsList = recipe.mainIngredients ? recipe.mainIngredients.slice(0, 3).join(', ') : '';
        const sideIngredientsList = recipe.sideIngredients ? recipe.sideIngredients.slice(0, 2).join(', ') : '';
        
        return `
            <div class="recipe-card ${recipe.searchScore ? 'has-search-score' : ''}" onclick="showRecipeDetails(${recipe.id})">
                <div class="recipe-image">
                    ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; height: 100%; object-fit: cover;">` : getRecipeEmoji(recipe.name)}
                    ${accuracyBadge}
                </div>
                <div class="recipe-content">
                    <div class="recipe-header">
                        <div>
                            <div class="recipe-title">${recipe.name}</div>
                            <span class="recipe-cuisine">${recipe.cuisine}</span>
                        </div>
                        <button class="favorite-btn ${favorites.includes(recipe.id) ? 'active' : ''}" 
                                onclick="toggleFavorite(event, ${recipe.id})">
                            ${favorites.includes(recipe.id) ? '⭐' : '☆'}
                        </button>
                    </div>
                    <div class="recipe-time">
                        ⏱️ ${recipe.time} mins • ${recipe.difficulty}
                    </div>
                    <div class="recipe-ingredients-enhanced">
                        <div class="ingredient-section">
                            <strong class="ingredient-label">Main:</strong> 
                            <span class="main-ingredients">${mainIngredientsList}</span>
                            ${recipe.mainIngredients && recipe.mainIngredients.length > 3 ? '...' : ''}
                        </div>
                        ${sideIngredientsList ? `
                            <div class="ingredient-section">
                                <strong class="ingredient-label">Side:</strong> 
                                <span class="side-ingredients">${sideIngredientsList}</span>
                                ${recipe.sideIngredients && recipe.sideIngredients.length > 2 ? '...' : ''}
                            </div>
                        ` : ''}
                    </div>
                    <div class="recipe-description">${recipe.description}</div>
                    ${recipe.searchScore ? `
                        <div class="search-score">
                            <strong>Relevance:</strong> 
                            <div class="score-bar">
                                <div class="score-fill" style="width: ${Math.min((recipe.searchScore / (searchInput.value.split(',').length * 3)) * 100, 100)}%"></div>
                            </div>
                            <span class="score-text">${recipe.searchScore.toFixed(1)}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Get Recipe Emoji
function getRecipeEmoji(name) {
    const emojiMap = {
        'chicken': '🍗',
        'pasta': '🍝',
        'pizza': '🍕',
        'burger': '🍔',
        'taco': '🌮',
        'soup': '🍲',
        'salad': '🥗',
        'rice': '🍚',
        'egg': '🥚',
        'vegetable': '🥬',
        'fish': '🐟',
        'beef': '🥩',
        'bread': '🍞'
    };
    
    const lowerName = name.toLowerCase();
    for (const [key, emoji] of Object.entries(emojiMap)) {
        if (lowerName.includes(key)) return emoji;
    }
    return '🍽️';
}

// Toggle Favorite
function toggleFavorite(event, recipeId) {
    event.stopPropagation();
    
    const index = favorites.indexOf(recipeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(recipeId);
    }
    
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    applyFilters();
}

// Show Recipe Details
function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    modalHeader.innerHTML = `
        <div style="display: flex; gap: 20px; align-items: start;">
            <div style="flex: 1;">
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
                <div style="margin-top: 15px;">
                    <span class="recipe-cuisine">${recipe.cuisine}</span>
                    <span style="margin-left: 10px;">⏱️ ${recipe.time} mins</span>
                    <span style="margin-left: 10px;">📊 ${recipe.difficulty}</span>
                </div>
            </div>
            ${recipe.image ? `
                <div style="width: 200px; height: 200px; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow); flex-shrink: 0;">
                    <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            ` : ''}
        </div>
    `;
    
    modalBody.innerHTML = `
        <div class="modal-section">
            <h3>Ingredients</h3>
            <ul class="ingredient-list">
                ${recipe.ingredients.map(ingredient => `
                    <li>${ingredient}</li>
                `).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Instructions</h3>
            <ol class="instruction-list">
                ${recipe.instructions.map(instruction => `
                    <li>${instruction}</li>
                `).join('')}
            </ol>
        </div>
        
        <button class="btn btn-primary" onclick="toggleFavorite(event, ${recipe.id}); showRecipeDetails(${recipe.id});">
            ${favorites.includes(recipe.id) ? '⭐ Remove from Favorites' : '☆ Add to Favorites'}
        </button>
    `;
    
    recipeModal.classList.add('active');
}

// Close Modal
function closeModal() {
    recipeModal.classList.remove('active');
}

// Loading States
function showLoading() {
    loading.classList.add('active');
    recipesGrid.style.display = 'none';
    noResults.style.display = 'none';
}

function hideLoading() {
    loading.classList.remove('active');
}

// Initialize the application
init();

// Add logout functionality
function addLogoutButton() {
    const username = sessionStorage.getItem('username');
    if (username) {
        const header = document.querySelector('header');
        const logoutDiv = document.createElement('div');
        logoutDiv.style.cssText = `
            margin-top: 20px;
            text-align: center;
        `;
        logoutDiv.innerHTML = `
            <p style="color: #ffffff; margin-bottom: 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">Welcome, <strong>${username}</strong>!</p>
            <div class="header-buttons">
                <button class="btn-small" onclick="logout()">
                    🚪 Logout
                </button>
                <a href="home.html" class="btn-small">
                    🏠 Home
                </a>
            </div>
        `;
        header.appendChild(logoutDiv);
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    window.location.href = 'login.html';
}

// Add logout button when page loads
document.addEventListener('DOMContentLoaded', addLogoutButton);
