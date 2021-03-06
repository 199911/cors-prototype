function get(url, withCredentials) {
  $.ajax({
    type: "GET",
    url: url,
    xhrFields: {
      withCredentials: withCredentials
    },
    success: function(data) {
      alert("Success");
    },
    error: function(data) {
      alert("Error");
    }
  });
}


$('#same-origin-no-origin').click(function() {
  get("/access-control-allow-origin/no", false);
});
$('#same-origin-all-origin').click(function() {
  get("/access-control-allow-origin/all", false);
});
$('#same-origin-correct-origin').click(function() {
  get("/access-control-allow-origin/local", false);
});
$('#same-origin-wrong-origin').click(function() {
  get("/access-control-allow-origin/remote", false);
});
$('#same-origin-invalid-origin').click(function() {
  get("/access-control-allow-origin/invalid", false);
});

$('#hardcoded-same-origin-no-origin').click(function() {
  get("//local.example.com/access-control-allow-origin/no", false);
});
$('#hardcoded-same-origin-all-origin').click(function() {
  get("//local.example.com/access-control-allow-origin/all", false);
});
$('#hardcoded-same-origin-correct-origin').click(function() {
  get("//local.example.com/access-control-allow-origin/local", false);
});
$('#hardcoded-same-origin-wrong-origin').click(function() {
  get("//local.example.com/access-control-allow-origin/remote", false);
});
$('#hardcoded-same-origin-invalid-origin').click(function() {
  get("//local.example.com/access-control-allow-origin/invalid", false);
});

