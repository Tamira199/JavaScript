const checkWordFirst = 'spam';
const checkWordSecond = 'sale';

const checkForSpam = function checkForSpam(message) {
    const lowerMessage = message.toLowerCase();
    return lowerMessage.includes(checkWordFirst) || lowerMessage.includes(checkWordSecond);
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));