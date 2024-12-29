/**
 * Redirects all different Google domains to google.com and appends the `&gl=US` parameter to the URL if not present.
 *
 * The script checks if the current URL matches any Google domain (e.g., google.co.uk, google.fr) and redirects it to google.com.
 * Additionally, it ensures that the URL contains the `&gl=US` parameter to set the geographical location to the United States.
 *
 */
if (window.location.href.match(/https:\/\/www.google\.[a-z]{2,3}(\.[a-z]{2,3})?/)) {
  var url = window.location.href;

  if (url.match(/https:\/\/www.google\.[a-z]{2,3}(\.[a-z]{2,3})?/) && !url.match("google.com/maps")) {
    console.log("Redirecting to google.com...", url);

    window.location.href = url.replace(/https:\/\/www.google\.[a-z]{2,3}(\.[a-z]{2,3})?/, "https://www.google.com") + "&gl=US";
  } else if (url.match("google.com/maps") && !url.includes("&gl=US")) {
    console.log("Adding &gl=US parameter...", url);

    window.location.href = url + "&gl=US";
  }
}
