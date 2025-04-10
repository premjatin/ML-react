import traceback

def solve_math_question(question: str):
    try:
        # Simulate LLM generating Python code (you'll replace this later)
        if "matrix multiplication" in question.lower():
            code = "import numpy as np\nresult = np.dot([[1, 2], [3, 4]], [[5, 6], [7, 8]])\nresult"
        else:
            # Default: try to evaluate the math expression directly
            code = f"result = {question.strip()}\nresult"

        # Run the generated code
        local_vars = {}
        exec(code, {}, local_vars)
        answer = local_vars["result"]
        return code, str(answer)

    except Exception as e:
        return "ERROR", f"Failed to solve: {traceback.format_exc()}"
