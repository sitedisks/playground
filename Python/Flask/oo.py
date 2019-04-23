from flask import Flask, jsonify

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    }, {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]


@app.route('/todo/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'data': tasks})

@app.route('/todo/api/tasks/<int:task_id>',methods=['GET'])
def get_one_task(task_id):
    return 'Hi task ' + str(task_id)


if __name__ == '__main__':
    app.run(debug=True)
