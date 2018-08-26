from flask import Flask, make_response, jsonify, request


app = Flask(__name__)
groceries = {}

@app.route("/groceries", methods=["GET"], strict_slashes=False)
def get_groceries():
    return make_response(jsonify(groceries), 200)


@app.route("/groceries", methods=["POST"], strict_slashes=False)
def add_grocery_list_item():
    """
    {
        "item_name": "baked beans",
        "item_quantity": 2
    }
    OR 
    {
        "item_name": "sprite",
        "item_quantity": 4
    }

    {
        "baked beans": 2,
        "sprite": 4
    }
    """
    body = request.get_json() # Return the request body as a dictionary
    groceries[body["item_name"]] = body["item_quantity"]

    return make_response(jsonify(groceries), 201)


@app.route("/groceries", methods=["DELETE"], strict_slashes=False)
def delete_grocery_item():
    """
    {
        "item_name": "sprite"
    }
    """
    body = request.get_json()
    del groceries[body["item_name"]]

    return make_response(jsonify(groceries), 200)