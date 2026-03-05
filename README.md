# React + TypeScript + Vite

# 📈 Market Overview Dashboard

A modern, responsive React application that tracks daily stock market movers. It displays the top gaining, losing, and most active stocks, complete with dynamic styling and 14-day trend sparklines.

## ✨ Features

- **Real-Time Market Data:** Fetches today's market winners, losers, and active stocks using the Financial Modeling Prep (FMP) API.
- **Global State Management:** Uses React's Context API to fetch data exactly once and share it seamlessly across multiple pages.
- **Smart Rate-Limiting:** Generates randomized 14-day high/low trend data for the table sparklines to bypass premium API access limitations while still demonstrating data visualization skills.
- **Dynamic Styling:** Table rows automatically color-code text and badges (green for positive, red for negative) based on the stock's performance.
- **Client-Side Routing:** Fast, seamless navigation between different market views without page reloads.

## 🛠️ Tech Stack

- **Framework:** React (Bootstrapped with Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Charting:** Recharts
- **API:** Financial Modeling Prep (FMP)
