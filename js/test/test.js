function searchSuggestions(repository, customerQuery) {
  // Write your code here
  let suggestions = [];

  console.log(customerQuery.length);

  for (let i = 0; i <= customerQuery.length; i++) {
    customerQuery[i];
    console.log("^^");
    if (i > 1) {
      let matches = [];
      for (let j = 0; j < repository.length; j++) {
        if (
          customerQuery.substring(0, i) === repository[j].substring(0, i) &&
          matches.length < 3
        ) {
          console.log(repository[j].substring(0, i));
          matches.push(repository[j]);
        }
      }
      suggestions.push(matches);
    }
  }
  console.log(suggestions);
  return suggestions;
}

repository = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
customerQuery = "mouse";

searchSuggestions(repository, customerQuery);
