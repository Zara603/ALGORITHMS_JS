import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var lengthOfLongestSubstring = function(s) {
  let leftWindow = 0;
  let longest = 0;
  let counts = {};

  for (let rightWindow = 0; rightWindow < s.length; ) {
    if (!counts[s[rightWindow]]) {
      counts[s[rightWindow]] = 0;
    }

    counts[s[rightWindow]] += 1;

    if (Object.values(counts).some(element => element > 1)) {
      counts[s[leftWindow]] -= 1;
      leftWindow += 1;
    }

    longest = Math.max(longest, rightWindow - leftWindow + 1);
    rightWindow += 1;
  }

  return longest;
};

console.log(lengthOfLongestSubstring("pwwkew"));
