from flask import Flask, render_template, jsonify
import mysql.connector
import random

app = Flask(__name__)

# Database connection
def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='your_username',  # Change this to your MySQL username
        password='your_password',  # Change this to your MySQL password
        database='quiz_game'
    )
    return connection

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/questions', methods=['GET'])
def get_questions():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM questions ORDER BY RAND() LIMIT 20;")
    questions = cursor.fetchall()
    cursor.close()
    connection.close()
    return jsonify(questions)

if __name__ == '__main__':
    app.run(debug=True)