# Bus Stop Animation: Tiruppur OBS to RVSCAS

This project uses Mapbox GL JS to animate a marker on a map, simulating a bus route between Tiruppur OBS and RVSCAS. Each stop on the bus route is represented by coordinates, and the marker moves along the route when a button is clicked.

## Features

- **Interactive Map**: Displays a map using Mapbox GL JS.
- **Bus Route Animation**: A button triggers the movement of a marker between predefined bus stops on the route from Tiruppur OBS to RVSCAS.
- **Custom Route**: The bus stops are hardcoded as GPS coordinates in the array `busStops`.

## Technologies Used

- **HTML5**: The structure of the web page.
- **JavaScript**: Handles the bus stop animation logic.
- **Mapbox GL JS**: Provides the interactive map and marker functionality.

## How It Works

1. **Map Setup**: The project uses Mapbox's streets view to display the map centered on Tiruppur OBS.
2. **Add Marker**: A marker is placed at the first bus stop.
3. **Animation**: Clicking the button moves the marker to the next bus stop every second, simulating the bus movement.

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bus-stop-animation.git
