import { expect } from 'chai';
import User from "../src/classes/User";
import {usersData} from '../src/data/users-test-data';
const userInfo = {usersData};


describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(userInfo.usersData);
  });


    it("Should be a function", () =>  {
      expect(User).to.be.a("function");
    });

    it("Should be an instance of User", () => {
      expect(user).to.be.an.instanceof(User);
    });

    it("Should have a name", () => {
      expect(user.name).to.equal("Saige O'Kon");
    });

    it("Should have an id", () => {
      expect(user.id).to.equal(1);
    });

    it("Should have a pantry", () => {
      expect(user.pantry).to.deep.equal([
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
        {
          "ingredient": 20081,
          "amount": 5
        },
        {
          "ingredient": 11215,
          "amount": 5
        },
        {
          "ingredient": 2047,
          "amount": 6
        },
        {
          "ingredient": 1123,
          "amount": 8
        },
        {
          "ingredient": 11282,
          "amount": 4
        },
        {
          "ingredient": 6172,
          "amount": 2
        },
        {
          "ingredient": 2044,
          "amount": 2
        },
        {
          "ingredient": 2050,
          "amount": 4
        },
        {
          "ingredient": 1032009,
          "amount": 3
        },
        {
          "ingredient": 5114,
          "amount": 3
        },
        {
          "ingredient": 1017,
          "amount": 2
        },
        {
          "ingredient": 18371,
          "amount": 7
        },
        {
          "ingredient": 1001,
          "amount": 6
        },
        {
          "ingredient": 99223,
          "amount": 2
        },
        {
          "ingredient": 1230,
          "amount": 2
        },
        {
          "ingredient": 9152,
          "amount": 4
        },
        {
          "ingredient": 10611282,
          "amount": 2
        },
        {
          "ingredient": 93607,
          "amount": 2
        },
        {
          "ingredient": 14106,
          "amount": 4
        },
        {
          "ingredient": 1077,
          "amount": 4
        },
        {
          "ingredient": 6150,
          "amount": 2
        },
        {
          "ingredient": 1124,
          "amount": 2
        },
        {
          "ingredient": 10011693,
          "amount": 4
        },
        {
          "ingredient": 1102047,
          "amount": 2
        },
        {
          "ingredient": 19206,
          "amount": 2
        },
        {
          "ingredient": 1145,
          "amount": 4
        },
        {
          "ingredient": 1002030,
          "amount": 4
        },
        {
          "ingredient": 12061,
          "amount": 2
        },
        {
          "ingredient": 19335,
          "amount": 4
        },
        {
          "ingredient": 15152,
          "amount": 3
        },
        {
          "ingredient": 9003,
          "amount": 2
        },
        {
          "ingredient": 18372,
          "amount": 3
        },
        {
          "ingredient": 2027,
          "amount": 2
        }
      ]);
    });

    it("Should start off with an empty recipes to cook list", () => {
      expect(user.recipesToCook).to.deep.equal([]);
    });

    it("Should add recipes to a list of recipes to cook", () => {
      const recipesToCookList = {
        id: 595736,
        image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        ingredients: [
          {
            id: 20081,
            quantity: {
              amount: 1.5,
              unit: "c"
            }
          },
          {
            id: 18372,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1123,
            quantity: {
              amount: 1,
              unit: "large"
            }
          },
          {
            id: 19335,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 19206,
            quantity: {
              amount: 3,
              unit: "Tbsp"
            }
          },
          {
            id: 19334,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2047,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1012047,
            quantity: {
              amount: 24,
              unit: "servings"
            }
          },
          {
            id: 10019903,
            quantity: {
              amount: 2,
              unit: "c"
            }
          },
          {
            id: 1145,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2050,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          }
        ],
        instructions: [
          {
            instruction: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            number: 1
          },
          {
            instruction: "Add egg and vanilla and mix until combined.",
            number: 2
          },
          {
            instruction: "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            number: 3
          },
          {
            instruction: "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            number: 4
          },
          {
            instruction: "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            number: 5
          },
          {
            instruction: "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            number: 6
          }
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]};
      user.addRecipesToCook(recipesToCookList);
      expect(user.recipesToCook).to.deep.equal([recipesToCookList]);
    });

    it("Should remove a recipe from the recipes to cook list", () => {
      const recipesToCookList = {
        id: 595736,
        image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        ingredients: [
          {
            id: 20081,
            quantity: {
              amount: 1.5,
              unit: "c"
            }
          },
          {
            id: 18372,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1123,
            quantity: {
              amount: 1,
              unit: "large"
            }
          },
          {
            id: 19335,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 19206,
            quantity: {
              amount: 3,
              unit: "Tbsp"
            }
          },
          {
            id: 19334,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2047,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1012047,
            quantity: {
              amount: 24,
              unit: "servings"
            }
          },
          {
            id: 10019903,
            quantity: {
              amount: 2,
              unit: "c"
            }
          },
          {
            id: 1145,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2050,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          }
        ],
        instructions: [
          {
            instruction: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            number: 1
          },
          {
            instruction: "Add egg and vanilla and mix until combined.",
            number: 2
          },
          {
            instruction: "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            number: 3
          },
          {
            instruction: "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            number: 4
          },
          {
            instruction: "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            number: 5
          },
          {
            instruction: "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            number: 6
          }
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]};

      user.addRecipesToCook(recipesToCookList);
      user.removeRecipesToCook(595736);
      expect(user.recipesToCook).to.deep.equal([]);
    });

    it("Should filter recipes to cook by tag", () => {
      const recipe1 = {
        id: 595736,
        image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        ingredients: [
          {
            id: 20081,
            quantity: {
              amount: 1.5,
              unit: "c"
            }
          },
          {
            id: 18372,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1123,
            quantity: {
              amount: 1,
              unit: "large"
            }
          },
          {
            id: 19335,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 19206,
            quantity: {
              amount: 3,
              unit: "Tbsp"
            }
          },
          {
            id: 19334,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2047,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1012047,
            quantity: {
              amount: 24,
              unit: "servings"
            }
          },
          {
            id: 10019903,
            quantity: {
              amount: 2,
              unit: "c"
            }
          },
          {
            id: 1145,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2050,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          }
        ],
        instructions: [
          {
            instruction: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            number: 1
          },
          {
            instruction: "Add egg and vanilla and mix until combined.",
            number: 2
          },
          {
            instruction: "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            number: 3
          },
          {
            instruction: "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            number: 4
          },
          {
            instruction: "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            number: 5
          },
          {
            instruction: "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            number: 6
          }
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]};
      const recipe2 = {
        "id": 678353,
        "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
        "ingredients": [
          {
            "id": 1009016,
            "quantity": {
              "amount": 1.5,
              "unit": "cups"
            }
          },
          {
            "id": 9003,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 20027,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1002046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 11215,
            "quantity": {
              "amount": 1,
              "unit": "clove"
            }
          },
          {
            "id": 1012046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 19911,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 16112,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 10010062,
            "quantity": {
              "amount": 24,
              "unit": "ounce"
            }
          },
          {
            "id": 1102047,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 16124,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1016168,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
            "number": 1
          }
        ],
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "tags": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ]
      };
      const recipe3 = {
        "id": 412309,
        "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
        "ingredients": [
          {
            "id": 1002030,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 8,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 4582,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 2031,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 5100,
            "quantity": {
              "amount": 1,
              "unit": "pound"
            }
          },
          {
            "id": 2009,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1022020,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 6168,
            "quantity": {
              "amount": 8,
              "unit": "cups"
            }
          },
          {
            "id": 9176,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 2026,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 1.5,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
            "number": 1
          }
        ],
        "name": "Dirty Steve's Original Wing Sauce",
        "tags": [
          "sauce"
        ]
      };
      const recipe4 = {
        "id": 741603,
        "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 18371,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          },
          {
            "id": 9040,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 20011,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 6,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1230,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 19296,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 16098,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 2047,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19335,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Watch how to make this recipe.",
            "number": 1
          },
          {
            "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
            "number": 2
          },
          {
            "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
            "number": 3
          },
          {
            "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
            "number": 4
          },
          {
            "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
            "number": 5
          },
          {
            "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
            "number": 6
          },
          {
            "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
            "number": 7
          }
        ],
        "name": "Elvis Pancakes",
        "tags": [
          "side dish"
        ]
      };

      user.addRecipesToCook(recipe1);
      user.addRecipesToCook(recipe2);
      user.addRecipesToCook(recipe3);
      user.addRecipesToCook(recipe4);
      const filteredRecipesToCook = user.filterRecipesToCookByTag("snack");
      expect(filteredRecipesToCook).to.deep.equal([recipe1]);
    });

    it("Should display message if no recipe tag found", () => {
      const recipe1 = {
        id: 595736,
        image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        ingredients: [
          {
            id: 20081,
            quantity: {
              amount: 1.5,
              unit: "c"
            }
          },
          {
            id: 18372,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1123,
            quantity: {
              amount: 1,
              unit: "large"
            }
          },
          {
            id: 19335,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 19206,
            quantity: {
              amount: 3,
              unit: "Tbsp"
            }
          },
          {
            id: 19334,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2047,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1012047,
            quantity: {
              amount: 24,
              unit: "servings"
            }
          },
          {
            id: 10019903,
            quantity: {
              amount: 2,
              unit: "c"
            }
          },
          {
            id: 1145,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2050,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          }
        ],
        instructions: [
          {
            instruction: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            number: 1
          },
          {
            instruction: "Add egg and vanilla and mix until combined.",
            number: 2
          },
          {
            instruction: "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            number: 3
          },
          {
            instruction: "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            number: 4
          },
          {
            instruction: "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            number: 5
          },
          {
            instruction: "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            number: 6
          }
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]};
      const recipe2 = {
        "id": 678353,
        "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
        "ingredients": [
          {
            "id": 1009016,
            "quantity": {
              "amount": 1.5,
              "unit": "cups"
            }
          },
          {
            "id": 9003,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 20027,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1002046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 11215,
            "quantity": {
              "amount": 1,
              "unit": "clove"
            }
          },
          {
            "id": 1012046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 19911,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 16112,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 10010062,
            "quantity": {
              "amount": 24,
              "unit": "ounce"
            }
          },
          {
            "id": 1102047,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 16124,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1016168,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
            "number": 1
          }
        ],
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "tags": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ]
      };
      const recipe3 = {
        "id": 412309,
        "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
        "ingredients": [
          {
            "id": 1002030,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 8,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 4582,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 2031,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 5100,
            "quantity": {
              "amount": 1,
              "unit": "pound"
            }
          },
          {
            "id": 2009,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1022020,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 6168,
            "quantity": {
              "amount": 8,
              "unit": "cups"
            }
          },
          {
            "id": 9176,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 2026,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 1.5,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
            "number": 1
          }
        ],
        "name": "Dirty Steve's Original Wing Sauce",
        "tags": [
          "sauce"
        ]
      };
      const recipe4 = {
        "id": 741603,
        "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 18371,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          },
          {
            "id": 9040,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 20011,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 6,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1230,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 19296,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 16098,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 2047,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19335,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Watch how to make this recipe.",
            "number": 1
          },
          {
            "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
            "number": 2
          },
          {
            "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
            "number": 3
          },
          {
            "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
            "number": 4
          },
          {
            "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
            "number": 5
          },
          {
            "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
            "number": 6
          },
          {
            "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
            "number": 7
          }
        ],
        "name": "Elvis Pancakes",
        "tags": [
          "side dish"
        ]
      };

      user.addRecipesToCook(recipe1);
      user.addRecipesToCook(recipe2);
      user.addRecipesToCook(recipe3);
      user.addRecipesToCook(recipe4);
      const filteredRecipesToCook = user.filterRecipesToCookByTag("tadpoles");
      expect(filteredRecipesToCook).to.equal(`Sorry, no recipe with tadpoles.`);
    });

    it("Should filter recipes to cook by name", () => {
      const recipe1 = {
        id: 595736,
        image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        ingredients: [
          {
            id: 20081,
            quantity: {
              amount: 1.5,
              unit: "c"
            }
          },
          {
            id: 18372,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1123,
            quantity: {
              amount: 1,
              unit: "large"
            }
          },
          {
            id: 19335,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 19206,
            quantity: {
              amount: 3,
              unit: "Tbsp"
            }
          },
          {
            id: 19334,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2047,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1012047,
            quantity: {
              amount: 24,
              unit: "servings"
            }
          },
          {
            id: 10019903,
            quantity: {
              amount: 2,
              unit: "c"
            }
          },
          {
            id: 1145,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2050,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          }
        ],
        instructions: [
          {
            instruction: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            number: 1
          },
          {
            instruction: "Add egg and vanilla and mix until combined.",
            number: 2
          },
          {
            instruction: "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            number: 3
          },
          {
            instruction: "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            number: 4
          },
          {
            instruction: "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            number: 5
          },
          {
            instruction: "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            number: 6
          }
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]};
      const recipe2 = {
        "id": 678353,
        "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
        "ingredients": [
          {
            "id": 1009016,
            "quantity": {
              "amount": 1.5,
              "unit": "cups"
            }
          },
          {
            "id": 9003,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 20027,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1002046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 11215,
            "quantity": {
              "amount": 1,
              "unit": "clove"
            }
          },
          {
            "id": 1012046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 19911,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 16112,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 10010062,
            "quantity": {
              "amount": 24,
              "unit": "ounce"
            }
          },
          {
            "id": 1102047,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 16124,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1016168,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
            "number": 1
          }
        ],
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "tags": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ]
      };
      const recipe3 = {
        "id": 412309,
        "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
        "ingredients": [
          {
            "id": 1002030,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 8,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 4582,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 2031,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 5100,
            "quantity": {
              "amount": 1,
              "unit": "pound"
            }
          },
          {
            "id": 2009,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1022020,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 6168,
            "quantity": {
              "amount": 8,
              "unit": "cups"
            }
          },
          {
            "id": 9176,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 2026,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 1.5,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
            "number": 1
          }
        ],
        "name": "Dirty Steve's Original Wing Sauce",
        "tags": [
          "sauce"
        ]
      };
      const recipe4 = {
        "id": 741603,
        "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 18371,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          },
          {
            "id": 9040,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 20011,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 6,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1230,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 19296,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 16098,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 2047,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19335,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Watch how to make this recipe.",
            "number": 1
          },
          {
            "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
            "number": 2
          },
          {
            "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
            "number": 3
          },
          {
            "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
            "number": 4
          },
          {
            "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
            "number": 5
          },
          {
            "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
            "number": 6
          },
          {
            "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
            "number": 7
          }
        ],
        "name": "Elvis Pancakes",
        "tags": [
          "side dish"
        ]
      };

      user.addRecipesToCook(recipe1);
      user.addRecipesToCook(recipe2);
      user.addRecipesToCook(recipe3);
      user.addRecipesToCook(recipe4);
      const filteredRecipesToCook = user.filterRecipesToCookByName("Elvis Pancake");
      expect(filteredRecipesToCook).to.deep.equal([recipe4]);
    });

    it("Should display message if no recipe name found", () => {
      const recipe1 = {
        id: 595736,
        image: "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        ingredients: [
          {
            id: 20081,
            quantity: {
              amount: 1.5,
              unit: "c"
            }
          },
          {
            id: 18372,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1123,
            quantity: {
              amount: 1,
              unit: "large"
            }
          },
          {
            id: 19335,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 19206,
            quantity: {
              amount: 3,
              unit: "Tbsp"
            }
          },
          {
            id: 19334,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2047,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          },
          {
            id: 1012047,
            quantity: {
              amount: 24,
              unit: "servings"
            }
          },
          {
            id: 10019903,
            quantity: {
              amount: 2,
              unit: "c"
            }
          },
          {
            id: 1145,
            quantity: {
              amount: 0.5,
              unit: "c"
            }
          },
          {
            id: 2050,
            quantity: {
              amount: 0.5,
              unit: "tsp"
            }
          }
        ],
        instructions: [
          {
            instruction: "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            number: 1
          },
          {
            instruction: "Add egg and vanilla and mix until combined.",
            number: 2
          },
          {
            instruction: "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            number: 3
          },
          {
            instruction: "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
            number: 4
          },
          {
            instruction: "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
            number: 5
          },
          {
            instruction: "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
            number: 6
          }
        ],
        name: "Loaded Chocolate Chip Pudding Cookie Cups",
        tags: [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]};
      const recipe2 = {
        "id": 678353,
        "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
        "ingredients": [
          {
            "id": 1009016,
            "quantity": {
              "amount": 1.5,
              "unit": "cups"
            }
          },
          {
            "id": 9003,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 20027,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1002046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 11215,
            "quantity": {
              "amount": 1,
              "unit": "clove"
            }
          },
          {
            "id": 1012046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 19911,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 16112,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 10010062,
            "quantity": {
              "amount": 24,
              "unit": "ounce"
            }
          },
          {
            "id": 1102047,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 16124,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1016168,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
            "number": 1
          }
        ],
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "tags": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ]
      };
      const recipe3 = {
        "id": 412309,
        "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
        "ingredients": [
          {
            "id": 1002030,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 8,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 4582,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 2031,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 5100,
            "quantity": {
              "amount": 1,
              "unit": "pound"
            }
          },
          {
            "id": 2009,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1022020,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 6168,
            "quantity": {
              "amount": 8,
              "unit": "cups"
            }
          },
          {
            "id": 9176,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 2026,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 1.5,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
            "number": 1
          }
        ],
        "name": "Dirty Steve's Original Wing Sauce",
        "tags": [
          "sauce"
        ]
      };
      const recipe4 = {
        "id": 741603,
        "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 18371,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          },
          {
            "id": 9040,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 20011,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 6,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1230,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 19296,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 16098,
            "quantity": {
              "amount": 12,
              "unit": "servings"
            }
          },
          {
            "id": 2047,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19335,
            "quantity": {
              "amount": 2,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Watch how to make this recipe.",
            "number": 1
          },
          {
            "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
            "number": 2
          },
          {
            "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
            "number": 3
          },
          {
            "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
            "number": 4
          },
          {
            "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
            "number": 5
          },
          {
            "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
            "number": 6
          },
          {
            "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
            "number": 7
          }
        ],
        "name": "Elvis Pancakes",
        "tags": [
          "side dish"
        ]
      };

      user.addRecipesToCook(recipe1);
      user.addRecipesToCook(recipe2);
      user.addRecipesToCook(recipe3);
      user.addRecipesToCook(recipe4);
      const filteredRecipesToCook = user.filterRecipesToCookByName("Dollar");
      expect(filteredRecipesToCook).to.equal(`Sorry, no recipe named Dollar.`);
    });

  });
