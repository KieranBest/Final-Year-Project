FROM python:alpine

WORKDIR /app/
EXPOSE 3001
COPY index.html .
CMD ["python3", "-m", "http.server", "3001"]