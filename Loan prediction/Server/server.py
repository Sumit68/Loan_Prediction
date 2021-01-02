from flask import Flask,request,jsonify
import util
app = Flask(__name__)

@app.route('/predict_LoanStatus',methods=['POST'])
def predict_LoanStatus():
	Gender = request.form['Gender']
	Married = request.form['Married']
	Dependents = int(request.form['Dependents'])
	Education = request.form['Education']
	Self_Employed = request.form['Self_Employed']
	Credit_History = request.form['Credit_History']
	Property_Area = request.form['Property_Area']
	ApplicantIncome = float(request.form['ApplicantIncome'])
	CoapplicantIncome = float(request.form['CoapplicantIncome'])
	LoanAmount = float(request.form['LoanAmount'])

	response = jsonify({
		'LoanStatus': util.get_LoanStatus(Gender, Married, Dependents, Education, Self_Employed, Credit_History, Property_Area, ApplicantIncome, CoapplicantIncome, LoanAmount)
	})

	response.headers.add('Access-Control-Allow-Origin', '*')

	return response


if __name__ == "__main__":
	print("Starting Server.")
	app.run() 