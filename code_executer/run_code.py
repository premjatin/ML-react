import subprocess

def run_code():
    try:
        result = subprocess.run(
            ["python", "execution_script.py"],
            capture_output=True,
            timeout=5,
            text=True
        )
        return result.stdout
    except subprocess.TimeoutExpired:
        return "Error: Execution timed out."
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    output = run_code()
    with open("output.txt", "w") as f:
        f.write(output)
