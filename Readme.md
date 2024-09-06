# Hardware Details Viewer

## Description

Hardware Details Viewer is a Node.js application built with Express that provides detailed information about your computer's hardware components. This includes real-time data such as CPU clock speed, memory usage, and other critical system metrics.

## Features

- Display CPU clock speed and core information
- Show memory usage and available memory
- Retrieve and present system uptime and other hardware metrics
- Simple and intuitive web interface

## Installation

To set up and run the Hardware Details Viewer, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/hardware-details-viewer.git

## Navigate to the Project Directory
    
    cd hardware-details-viewer

## Install Dependencies
   
   npm install

## Start the Application
   
   npm start

## API Endpoints
   
   ## (1) /api/cpu
      
       Response:

       
  "cpu": {
    "model": "Intel Core i7-9700K",
    "clockSpeed": "3.6 GHz",
    "cores": 8
        }
       


## (2) /api/memory

      Response:
        {
      "memory": {
      "total": "16 GB",
      "used": "8 GB",
      "available": "8 GB"
       }
            }


## Thank you for using Hardware Details Viewer. We hope it helps you keep track of your system's performance!



