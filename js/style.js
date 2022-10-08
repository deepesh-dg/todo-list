$(document).ready(function () {

  $(document).on("submit","form#todo-form",function (event) {
      event.preventDefault();

      var toAdd = $("input[name=ListItem]").val();

      if(!toAdd.length == 0){
        // console.log($("form#todo-form").siblings(`ul`));
        if ($("#add-list").siblings('ul').length !== 1) {
          $("#add-list").after(`<ul id="created-list" class="mt-3 m-0" type="none"></ul>`);
        }
        let toAppend = $("<li></li>").append($("<label></label>").text(toAdd))
                  .append($("<input>").attr({
                    "id" : "list-edit",
                    "type" : "hidden",
                    "class" : "form-control",
                    "value" : toAdd,
                  }))
                  .prepend($("<i>").attr({
                    "id" : "list-strike",
                    "class" : "fa fa-circle-thin ",
                  }))
                  .append($(`<div class="update-btn" title="edit">
                  <i class="fas fa-edit h5"></i>
                  </div>`))
                  .append($(`<div class="save-btn" title="update">
                  <i class="fas fa-save h5"></i>
                  </div>`).hide())
                  .append($(`<div class="delete-btn" title="delete">
                  <i class="fas fa-trash-alt h5"></i>
                  </div>`));

        $("ul#created-list").append(toAppend);

        $("input[name=ListItem]").val("");
      }else{
        alert("You Can't add a Empty Task");
      }

  });

  $(document).on( "click", "ul#created-list #list-strike", function(){
    $(this).toggleClass('fa-check-circle').toggleClass('fa-circle-thin');
    $(this).siblings("label").toggleClass("strike");
    // $(this).parent().toggleClass("checked");

  });

  $(document).on( "click", "ul#created-list .delete-btn", function(){
    $(this).parent().fadeOut("slow");
  });

  $(document).on( "click", "ul#created-list .save-btn", function(){
    var toEdit = $(this).siblings("#list-edit").val();

      if(!toEdit.length == 0){
        $(this).siblings("label").text(toEdit);
        $(this).hide();
        $(this).siblings(`div.update-btn`).show();
        $(this).siblings(`#list-edit`).attr("type","hidden");
        $(this).siblings(`label`).css("display","inline-block");
      }else{
        alert("Please Add Something...");
      }
  });

  $(document).on( "click", "ul#created-list .update-btn", function(){
    $(this).hide();
    $(this).siblings(`div.save-btn`).show();
    $(this).siblings(`#list-edit`).attr("type","text");
    $(this).siblings(`label`).css("display","none");
  });

});

