# The-Paintability-Game
A single-player web-based strategy game where players compete against a bot by interacting with a dynamically updating graph.

**Contributors:**  
Annie Zeng ([link need update](https://github.com/))  
Ethan Zhang ([link need update](https://github.com/))   
Roy Zhao ([GitHub](https://github.com/JiaqiZhao2004))  

## Overview

The **Paintability Game** is a strategic, turn-based two-player game played on a graph, where the players take on the roles of “Good” (Law Enforcement) and “Evil” (Mastermind). The game revolves around preventing or enabling criminal activities at the vertices of the graph.

- **Evil Player:** Chooses criminals (represented by vertices) to commit crimes on every turn.
- **Good Player:** Selects criminals to be jailed on every turn, with the restriction that no two connected criminals can be jailed in the same turn.

The Evil player wins if a criminal successfully commits a crime a set number of times, while Law Enforcement wins if such a number is not reached.

This game has significant ties to graph theory concepts such as list coloring and chromatic numbers. It offers an interactive and engaging way for players to explore these concepts while learning about graph properties.

## Game Mechanics

### Player Actions:
- **Evil Mastermind:** Chooses criminals (vertices) to attempt committing crimes.
- **Law Enforcement:** Selects independent sets of criminals (vertices) to jail, adhering to the graph's constraints.

### Victory Conditions:
- **Evil Player wins** if a criminal successfully commits a crime a set number of times.
- **Good Player wins** if all criminals are jailed before or when this number is reached. If the criminal who reaches this number is jailed at the turn, the Good Player still wins.

### Graph Setup:
Players can either:
- Choose a predefined graph.
- Generate a random graph, with control over certain properties (e.g., number of vertices).

Players can select their role (Good or Evil) or let the system assign one randomly. They also have access to a tutorial to learn the game rules and how the game connects to graph properties like chromatic numbers and list coloring.

## Features

- **Interactive Gameplay:** Players click on graph vertices to make moves.
- **Graph Selection:** Custom or randomly generated graphs.
- **Single-Player Mode:** Play against a bot powered by an algorithm that simulates the Evil or Good player.
- **Tutorial & Instruction:** Learn game mechanics and graph theory concepts as they relate to list coloring and chromatic numbers.

## Architecture

### Backend:
- **Technology:** React, Python
- **Responsibilities:**
  - Store game state, advance turns, and determine winners.
  - Generate and manage graphs (both random and predefined).
  - Implement the bot to play against human players in single-player mode.
- **Testing:**
  - Input game states to verify correct winner declaration.
  - Inspect adjacency matrices to ensure valid random graph generation.
  - Ensure the bot makes legal moves during gameplay.

### Frontend:
- **Technology:** JavaScript (React)
- **Responsibilities:**
  - Visualize the game graph and update game state based on user interactions.
  - Accept user input for generating or selecting graphs (e.g., through adjacency lists).
  - Provide real-time feedback and updates during gameplay.
- **Testing:**
  - Playtest to ensure correct functionality of user inputs and game progress.
  - Validate that the graph rendering matches the provided adjacency matrices.

## Diagram

(Insert diagram here showcasing the interaction between the backend and frontend, as well as an example game graph)
