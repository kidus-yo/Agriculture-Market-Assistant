# AgriVox 🌾🎙️

> **Voice-Driven Agricultural & Predictive Commodity Market Assistant**

AgriVox is an accessible, voice-first market intelligence and direct trading platform designed to empower agricultural communities. By combining low-latency native dialect speech recognition with machine learning price forecasts, AgriVox bridges the information gap for farmers, enabling hands-free access to market trends, weather advisories, and direct buyer connections.

---

## ✨ Key Features

* **🎙️ Low-Latency Native Voice Engine**
  * Interactive voice command interface supporting localized dialects (e.g., Amharic and English).
  * One-tap voice search for current crop prices, weather forecasts, and harvest listings.
  * Suggested prompt chips for instant query guidance.

* **📈 Predictive Commodity Price Forecasting**
  * Real-time and forecasted commodity prices updated hourly across major regional hubs.
  * Machine learning insights including 14-day price projections, demand signals, and trend analysis (e.g., White Teff per quintal).

* **📢 Direct Market Access & Voice Listings**
  * Farmers can list yields simply by speaking (e.g., *"I have 10 Quintals of Teff to sell"*).
  * Eliminates intermediary markups by establishing direct visibility with verified bulk purchasers.

* **🤝 Verified Regional Buyer Matching**
  * Automated matching between regional farmer collectives, unions, and commercial bulk buyers.
  * One-click buyer connection interface with real-time demand highlights.

---

## 🛠️ Tech Stack

### **Frontend**
* **Framework:** React.js (Component-driven UI)
* **Styling:** Modular CSS3 with custom Glassmorphism, CSS Grid, Flexbox, and fluid typography
* **Icons:** SVG vector icons for scaling across devices

### **Voice & AI Architecture (Envisioned / Integrated)**
* **Speech-to-Text (STT):** Low-latency Speech Recognition engine configured for regional dialects
* **Predictive Analytics:** ML regression models for regional commodity price trends

---

## 📁 Project Structure

```text
agrivox/
├── public/
│   └── index.html
├── src/
│   ├── assets/               
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisities
* Node.js(v16.x or higher)
* `npm` or `yarn`

---

## Installation

1. Clone the Repository

```
git clone [https://github.com/kidus-yo/Agriculture-Market-Assistant.git](https://github.com/kidus-yo/Agriculture-Market-Assistant.git)
cd agrivox
```

2. Install Dependencies

```
npm install
```

3. Start The Developer Server

```
npm start
```

---

## 📱 Responsive & Modern UI

AgriVox is designed mobile-first and scales gracefully up to ultra-wide desktop displays.

* **Adaptive Card Grids:** Automatically shift between single-column mobile views and multi-column desktop layouts.

* **Frosted Glass Styling:** Modern glassmorphism card surfaces for high readability and visual depth.

---

## 🗺️ Roadmap & Future Enhancements
* **Offline Voice Processing:** On-device edge AI for voice commands in offline or low-connectivity rural regions.

* **SMS Gateway Integration:** Fallback automated SMS and voice calls for feature phones.

* **Multi-Language Expansion:** Broadening dialect recognition to include additional regional languages.

* **Interactive Price Charts:** Historical trend visuals and interactive demand heatmaps.