from flask import Flask
from flask import jsonify
from flask import abort
from flask import make_response
#http://www.pythondoc.com/flask-restful/first.html
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
    tmpList = filter(lambda t: t['id'] == task_id, tasks)
    newList = list(tmpList)
    if len(newList) == 0:
        abort(404)
    return jsonify({'data':newList})
  
  
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}),404)

if __name__ == '__main__':
    app.run(debug=True)
