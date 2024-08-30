// A $( document ).ready() block.
$(document).ready(function () {

    $("#button-apply").click(function (event) {
        event.preventDefault();

        // Clear old data
        $(".found-element", "#sample-dom").removeClass("found-element");
        $("#resulting-elements").html("");

        // Retrieve the selector
        var selector = $.trim($("#selector").val());
        var context = $.trim($("#context").val());

        // Retrieve the matching elements
        var $set = $(selector, context || "#sample-dom");
        $set.addClass("found-element");

        // Output the results
        $("#jquery-statement").html(
            '$("' +
                selector +
                (context ? ", " + context : "") +
                '").addClass("found-element");'
        );
        $("#resulting-elements-count").text($set.length);
        $set.each(function () {
            $("#resulting-elements").append(
                "<div>" +
                    this.tagName +
                    (this.id ? "#" + this.id : "") +
                    "</div>"
            );
        });
    });
});
