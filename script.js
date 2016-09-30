var character = "submit"

colorfulElements.hover(function(e) {
  var elementHoveredOver = $(e.target)
  colorNameDisplay.html(elementHoveredOver.attr("id"));
})