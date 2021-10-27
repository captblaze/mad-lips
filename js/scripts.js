$(document).ready(function() {
    $("#formOne").submit(function(event) {
      //$(".person1").prepend("greatness");
      let person1 = $("#person1").val();
      let person2 = $("#person2").val();
      let animal = $("#animal").val();
      let exclamation = $("#exclamation").val();
      let verb = $("#verb").val();
      let noun = $("#noun").val();

      $(".person1").text(person1);
      $(".person2").text(person2);
      $(".animal").text(animal);
      $(".exclamation").text(exclamation);
      $(".verb").text(verb);
      $(".noun").text(noun);
  
      $("#story").show();
      event.preventDefault();
    });
  });