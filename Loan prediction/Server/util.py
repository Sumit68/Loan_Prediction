
import pickle
import sklearn
from sklearn import linear_model
import numpy as np

__model = None

def get_LoanStatus(Gender,Married,Dependents,Education,Self_Employed,Credit_History,Property_Area,ApplicantIncome,CoapplicantIncome,LoanAmount):

	x = np.zeros(9)
	if Gender == "male":
		x[0] = 1
	else:
		x[0] = 0
	if Married == "yes":
		x[1] = 1
	else:
		x[1] = 0
	if Education == "graduate":
		x[3] = 0
	else:
		x[3] = 1
	if Self_Employed == "yes":
		x[4] = 1
	else:
		x[4] = 0
	if Property_Area == "urban":
		x[6] = 2
	elif Property_Area == "rural":
		x[6] = 0
	else:
		x[6] = 1

	x[2] = Dependents
	x[5] = Credit_History
	x[7] = np.log(ApplicantIncome+CoapplicantIncome)
	x[8] = np.log(LoanAmount)

	with open("./artifects/Loan_Prediction_model.pickle", 'rb') as f:
		__model = pickle.load(f)

		return __model.predict_proba([x])[0][1]





if __name__ == "__main__":

	print(get_LoanStatus("male", "no", 0, "graduate", "yes", 1, "rural", 4000, 1876, 100))



