Live Demo: https://exetermv.vercel.app/  
Started: April 2025

## Overview
A Vue-based single-page application built to practice client-side routing, third-party API integration, and custom UI interactions within a structured frontend architecture.

## Key Features
- Client-side routing with Vue Router  
- Mobile navigation using swipe gestures to trigger route changes  
- Google Maps API integration displaying an interactive location  
- Custom animated cursor with hover and route-based styling  

## Tech Stack
- Vue 3
- Vue Router
- JavaScript
- CSS
- Vite
- Google Maps API

## Architecture & Implementation
- Structured the app as a SPA using Vue Router for navigation and view management  
- Implemented gesture-based navigation by mapping touch input to route transitions  
- Integrated Google Maps API to render a dynamic map component within the UI  
- Built a custom cursor system using requestAnimationFrame and spring-based motion for smooth interaction  

## Notable Technical Challenges
- **Gesture-Based Navigation**  
  Translated touch input into reliable route changes while avoiding accidental navigation.

- **Google Maps Integration**  
  Embedded and configured the Maps API within a Vue component while keeping it isolated from the rest of the UI.

- **Custom Cursor Behavior**  
  Designed a cursor system that reacts to hover state and movement using physics-based animation.

## Performance & Optimization
- Disabled custom cursor on touch/coarse pointer devices  
- Used requestAnimationFrame for smooth, non-blocking cursor updates  
- Scoped map and interaction logic to avoid unnecessary re-renders  

## What I Learned
- Structuring SPAs with Vue Router  
- Integrating third-party APIs into component-based architectures  
- Handling custom input interactions across device types  
