FROM python:3.12-slim

# The repo root is bind-mounted at /workspace at runtime (docker-compose.yml).
WORKDIR /workspace

# Keep the requirements file out of the mounted dir so the image build is
# unaffected by the bind mount.
COPY requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt
