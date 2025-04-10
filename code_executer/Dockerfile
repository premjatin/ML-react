FROM python:3.10-slim

WORKDIR /app

# Install common math/data libs
RUN pip install matplotlib numpy pandas scipy scikit-learn sympy

COPY run_code.py .
COPY execution_script.py .

CMD ["python", "run_code.py"]
