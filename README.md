📸 Express Image Uploader with Live Preview

A lightweight Node.js application built with Express.js to upload and display images using a modern UI. Uploaded files are stored in a shared Docker volume and served statically through an Express server.

🚀 Features

Upload images through a clean HTML form

View uploaded image instantly after upload

Dockerized with volume support for persistent storage

Auto-sync local changes using Docker Compose develop.watch

NGINX-styled gradient UI with basic CSS animations

Serves static files via /uploads route

🧰 Tech Stack

Node.js

Express.js

express-fileupload

Docker & Docker Compose

HTML/CSS

Nginx (for static file serving)

📂 Project Structure

.
├── Dockerfile
├── docker-compose.yaml
├── index.html
├── server.js
├── package.json
└── uploads/         # created at runtime, mapped via Docker volume

🐳 Getting Started with Docker Compose

Clone the repo

git clone https://github.com/<your-username>/express-image-uploader.git
cd express-image-uploader

Run the app

docker compose up

Visit the App

http://localhost:5000/image-upload

📅 Upload Images

Go to /image-upload

Upload an image file

Instantly see it displayed with a preview

💾 Persistent Volume

Uploaded files are stored in a Docker volume (my-imgs) to persist across container restarts.


👨‍💼 Author

Robel K. Mass. 

DevOps & Cloud EnthusiastGitHub
