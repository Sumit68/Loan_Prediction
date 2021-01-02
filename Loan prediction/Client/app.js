function GenderValue() { 
            var ele = document.getElementsByName('gender'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                return ele[i].value;
                
            } 
        }

function MarriedValue() { 
            var ele = document.getElementsByName('married'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                return ele[i].value;
                
            } 
        }

function DependentsValue() { 
            var ele = document.getElementsByName('dependents'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                return parseInt(ele[i].value);
                
            } 
        }

function EducationValue() { 
            var ele = document.getElementsByName('education'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                return ele[i].value;
                
            } 
        }

function SelfEmployedValue() { 
            var ele = document.getElementsByName('self-employed'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                return ele[i].value;
                
            } 
        }        

function CreditHistoryValue() { 
            var ele = document.getElementsByName('credit-history'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                return parseFloat(ele[i].value);
                
            } 
        }

function PropertyAreaValue() { 
            var ele = document.getElementsByName('property-area'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                return ele[i].value;
                
            } 
        }
function OnClickPredict(e) {
			e.preventDefault();
			var Gender = GenderValue();
			var Married = MarriedValue();
			var Dependents = DependentsValue();
			var Education = EducationValue();
			var SelfEmployed = SelfEmployedValue();
			var CreditHistory = CreditHistoryValue();
			var PropertyArea = PropertyAreaValue();
			var ApplicantIncome = document.getElementById("inc");
			var CoapplicantIncome = document.getElementById("coinc");
			var LoanAmount = document.getElementById("amt");

			var url = "http://127.0.0.1:5000/predict_LoanStatus";
			$.post(url, {
				Gender: Gender,
				Married: Married,
				Dependents: Dependents,
				Education: Education,
				Self_Employed: SelfEmployed,
				Credit_History: CreditHistory,
				Property_Area: PropertyArea,
				ApplicantIncome: parseFloat(ApplicantIncome.value),
				CoapplicantIncome: parseFloat(CoapplicantIncome.value),
				LoanAmount: parseFloat(LoanAmount.value)
			},function(data, status) {
				var num =  data.LoanStatus*100;
				var n = num.toFixed(2);
				document.getElementById("result").innerHTML = "Chances of Loan getting Approved: "+n+"%";
				console.log(status);
			});
			
} 