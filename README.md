AI 2D-to-3D Lab
Overview

AI 2D-to-3D Lab is a modular pipeline that transforms 2D images or videos into interactive 3D visual content using cutting-edge AI techniques. This project integrates open-source tools and deep learning models to automate the process from visual generation to 3D spatial rendering — ideal for AR/VR applications, game development, simulations, and immersive content creation.
 Features

     AI-powered 2D Image/Video Generation

    Depth Estimation using advanced models (e.g., MiDaS)

    3D Reconstruction via NeRF or Gaussian Splatting

    3D Scene Viewing & Export (for Unity, Unreal, WebGL)

     Easy customization and modular integration

🛠️ Tech Stack

Component	Tool/Model Used
Frontend	HTML/CSS/JavaScript, Three.js
Backend	Node.js / Python Flask (modular)
2D Input	Stable Diffusion / AnimateDiff
Depth Mapping	MiDaS / Marigold
3D Conversion	NeRF (Instant-NGP) / Splatting
Visualization	WebGL, Blender, Unity Bridge

🗂️ Folder Structure

ai-2d-3d-lab/
│
├── frontend/               # Web interface to upload 2D inputs
│   ├── index.html
│   ├── main.js
│   └── styles.css
│
├── backend/                # Python/Node backend to handle AI modules
│   ├── app.py
│   └── routes/
│       ├── depth_estimation.py
│       ├── image_to_3d.py
│       └── nerf_pipeline.py
│
├── models/                 # Pretrained model weights (MiDaS, NeRF, etc.)
│
├── outputs/                # Generated 3D scenes and .glb/.obj files
│
├── utils/                  # Helper scripts
│   └── convert_depth_to_mesh.py
│
├── README.md
└── requirements.txt

⚙️ Installation
📌 Prerequisites

    Python ≥ 3.8 or Node.js ≥ 16.x

    pip, virtualenv (Python) or pnpm (Node)

    GPU recommended for NeRF and depth estimation

🔧 Setup Instructions

# 1. Clone the repository
git clone https://github.com/your-username/ai-2d-3d-lab.git
cd ai-2d-3d-lab

# 2. Set up the Python environment
python -m venv venv
source venv/bin/activate    # or venv\Scripts\activate on Windows

# 3. Install backend dependencies
pip install -r requirements.txt

# 4. (Optional) For NeRF
cd nerf/
# Follow setup for Instant-NGP or your NeRF variant

# 5. Start the server
python backend/app.py

# 6. Open the frontend
open frontend/index.html    # or serve via localhost

How It Works

    Input
    Upload a 2D image or short video (e.g., face, object, landscape).

    Depth Estimation
    The image passes through MiDaS or Marigold, outputting a depth map.

    3D Reconstruction
    Using NeRF or Gaussian Splatting, we create a 3D mesh or volumetric scene.

    Visualization
    The 3D result is rendered in-browser using Three.js, and optionally exported to .glb or .obj.

🧠 Models Used

Model	Role	Source
MiDaS v3.1	Depth estimation	Intel ISL / PyTorch Hub
AnimateDiff	AI image/video animation	HuggingFace Transformers
Instant-NGP	3D NeRF rendering	NVIDIA Research
Marigold	Monocular depth & normals	Meta AI / FAIR

📽️ Example

Upload Image →

Get Depth Map →

See 3D Render →

 Integration Ideas

    VR/AR Scene Generator for Meta Quest, Apple Vision Pro

    Smart Cities: Elevate satellite 2D maps into 3D terrains

    Gaming: Auto-create 3D characters or levels from sketches

    Architecture: Turn floorplans or drawings into walkthroughs

🧰 Troubleshooting

    Model not loading? → Make sure .pt or .ckpt files are in models/.

    Depth output empty? → Ensure correct input resolution and color mode (RGB).

     3D scene distorted? → Check normalization step in convert_depth_to_mesh.py.

✅ To-Do / Future Work

Add camera pose estimation for better NeRF training

GUI dashboard for easier model swapping

Live webcam integration

    Deploy using Docker or on HuggingFace Spaces

📜 License

This project is licensed under the MIT License — free for personal and commercial use with attribution.
👤 Author

Sreejith Nair
AI Engineering Enthusiast | GitHub

<img width="1855" height="930" alt="image" src="https://github.com/user-attachments/assets/9d237e9d-eb68-470f-8284-685864dfd7af" />
<img width="1575" height="785" alt="image" src="https://github.com/user-attachments/assets/e0042929-01f5-493a-9c6e-2c3ce1c3a55e" />
<img width="1632" height="907" alt="image" src="https://github.com/user-attachments/assets/8bab999e-82ce-4f42-b933-2b9e8a1ded6f" />



🙌 Acknowledgments

    OpenAI for foundational models

    Intel & Meta for open-sourcing MiDaS and Marigold

    Nvidia for Instant-NGP

    HuggingFace for model hosting
