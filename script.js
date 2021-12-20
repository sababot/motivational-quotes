var quote = document.getElementById('quote');
var count = 50;

var quotes = ["the battle may be ugly, but the peak is beautiful", "good times wouldn't be good times if there were no bad times",
"dont tell me the sky is the limit when there are footsteps on the moon", "don't look watch the clock, do what it does. keep going", 
"well done is better than well said", "the number one skill in life is not giving up",
"stupid ideas come with unexpected experiences", "a winner is a dreamer who never gives up",
"optimism is the one quality more associated with success and happiness than any other", "believe you can and you're halfway there",
"you can't improve if you constantly stay in your comfort zone", "everything you've ever wanted is on the other side of fear"];

for (var i = 0; i < 10000; i++){
	if (count % 50 == 0){
			quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
	}

	count += 1;
}