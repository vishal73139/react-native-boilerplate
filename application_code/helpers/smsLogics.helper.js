import _ from "lodash";

const fixedPaidMessageType = ["Paid","You've spent","debited","Thank you for using","Accepted your request","Thanks for paying","accepted request"];
const fixedPaidMessageNoHaveConditionType = ["requested","failed","fail","claim","gift"];

const checkPaidStringInMessage = (message) => {
	let changeMessage = message.toLowerCase();
	let splitWithWords = changeMessage.split(" ");
	let checkAllConditions = _.map(fixedPaidMessageType,function(findString){

								 if(findString == 'Paid' || findString == 'debited')
								 { 
								 	let strStatus = _.includes(splitWithWords,findString.toLowerCase());
								 	if(strStatus)
								 	{ 
								 		let notRequiredWords = _.intersection(splitWithWords, fixedPaidMessageNoHaveConditionType);
								 		return (notRequiredWords.length > 0)?false:true;
								 	}	
								 }
								 else
								 {
								 	let strStatus = (changeMessage.match(findString.toLowerCase()) == findString.toLowerCase())?true:false;
								 	if(strStatus)
								 	{ 
								 		let notRequiredWords = _.intersection(splitWithWords, fixedPaidMessageNoHaveConditionType);
								 		return (notRequiredWords.length > 0)?false:true; 
								 	}
								 }
								 
							});

	return _.includes(checkAllConditions,true);
}

export const readPaidMessage = (message) => {
	 return checkPaidStringInMessage(message);
}

export const readMoneyReceivedMessage = (message) => {
	return false;
}

const replaceCommaInPrice = (price) => {
	return price.replace(",","");
}

const fixedPatternOfMoney = ["Rs.","INR","Rs"];
export const findMoneyFromMessage = (message) => {
	let changeMessage = message.toLowerCase();
	let convertArray = changeMessage.split(" "); 
	let amount = 0;
	let checkAllConditions = _.map(fixedPatternOfMoney,function(findString){
								if(amount>0){return 0;}
								//Special Condition for Rs. if amount and rs are together.
								if(findString.toLowerCase() == 'rs.' && amount == 0)
								{
									_.map(convertArray,function(innerData){
										if(amount == 0)
										{
											let checkifconnected = innerData.split('rs.'); 
											if(checkifconnected.length == 2){
												if(replaceCommaInPrice(checkifconnected[1]) > 0) { amount = replaceCommaInPrice(checkifconnected[1]); } 
											}

										}
									})
								}

								if(amount == 0)
								{
									let strStatus = _.includes(convertArray,findString.toLowerCase());
									 if(strStatus)
									 { 
									 	var index = _.findIndex(convertArray,(cd)=>{return cd===findString.toLowerCase()});
									 	if(replaceCommaInPrice(convertArray[index+1]) > 0)
									 	{
									 		amount = replaceCommaInPrice(convertArray[index+1]);
									 	} 
									 }
								}
								

								//Special Condition for INR if amount and INR are together.
								if(findString.toLowerCase() == 'inr' && amount == 0)
								{
									_.map(convertArray,function(innerData){
										if(amount == 0)
										{
											let checkifconnected = innerData.split('inr'); 
											if(checkifconnected.length == 2){
												if(replaceCommaInPrice(checkifconnected[1]) > 0) { amount = replaceCommaInPrice(checkifconnected[1]); } 
											}

										}
									})
								}

								 
								return amount; 
							});
	//console.log('checkAllConditions',checkAllConditions);
	return Number(amount);
}

const staticCompanyNames = ["Paytm","Ola","HDFC","ICICI","SWIGGY","SBI"];
export const findSenderDetails = (senderName) => {
	let changeString = senderName.toLowerCase();
	let changeName = senderName;

	_.map(staticCompanyNames,function(companyNames){
		let checkCount = changeString.split(companyNames.toLowerCase());
		if(checkCount.length > 1){
			changeName = companyNames.toLowerCase();
		}
	})
	return changeName;
}
