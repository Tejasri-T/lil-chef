# 🍳 Lil chef

A clean, minimal React application that helps users generate recipe ideas based on the ingredients they already have. The app focuses on **simplicity**, **logical ingredient handling**, and **realistic serving sizes**, while maintaining a warm, distraction-free UI.

---

## ✨ Features

* 🧾 **Ingredient Management**

  * Add ingredients one by one
  * View ingredients in a clean, single-container list
  * Remove ingredients easily

* 🤖 **AI-Powered Recipe Suggestions**

  * Generates a recipe based on available ingredients
  * Does **not require all ingredients** to be used
  * Ensures **realistic serving sizes** and ingredient quantities

* 🎨 **Minimal & Calm UI**

  * Warm color palette
  * Reduced visual noise
  * Single-box ingredient list with subtle bullets

* 📱 **Responsive Design**

  * Works well on desktop and mobile

---

## 🛠️ Tech Stack

* **Frontend**: React (Hooks)
* **Styling**: Vanilla CSS with CSS variables
* **AI**: LLM (via system prompt control)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── IngredientList.jsx
│   ├── AddIngredientForm.jsx
│   └── Recipe.jsx
├── App.jsx
├── index.jsx
└── styles.css
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tejasri-T/lil-chef.git
cd lil-chef
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the App

```bash
npm start
```

The app will be available at `http://localhost:3000`

---

## 🧠 How the AI Works

The application sends the ingredient list to the AI along with a **strict system prompt** that enforces:

* Logical ingredient-to-serving ratios
* Realistic serving sizes
* Proper Markdown formatting
* Freedom to omit irrelevant ingredients

### System Prompt Highlights

* Prevents unrealistic outputs (e.g., 2 eggs for 7 servings)
* Forces internal validation before responding
* Produces structured, readable recipes

---

## 🎯 UI Design Decisions

### Ingredient List

* Uses **one container** instead of multiple cards
* Subtle bullet points for clarity
* Minimal dividers to reduce distraction
* Remove buttons styled with low emphasis

### Why Not Individual Cards?

Individual cards were visually distracting and pulled focus away from the main task. A single container improves readability and user comfort.

---

## ♿ Accessibility Considerations

* Semantic HTML (`ul`, `li`, `button`)
* Keyboard-accessible actions
* Preserves native list markers for screen readers

---

## 🔮 Future Improvements

* Ingredient quantity input (e.g., "2 tomatoes")
* Dietary filters (vegetarian, vegan, gluten-free)
* Recipe difficulty & time estimates
* Save favorite recipes
* Export recipe as PDF

---

## 🧪 Known Limitations

* AI output depends on prompt quality
* Requires backend or API key setup for production
* Styling of native select/option elements is browser-limited

---

## 📸 Screenshots

*(Add screenshots here)*

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* React documentation
* OpenAI / LLM tooling
* UI inspiration from calm productivity apps


