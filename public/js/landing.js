(function($) {

    var form = $('#searchDisease');
    var searchTerm = $('#searchInput');
    var resultContainer = $('#resultContainer')

    form.submit(function(event) {
        event.preventDefault();

        st = searchTerm.val();
        if(/^ *$/.test(st))
      {
        $('#error').text("The searchTerm cannot be empty spaces or null").show()
      }
      else{
        resultContainer.empty()
        $('#error').hide()
      var requestConfig = {
        method: 'GET',
        url: `http://localhost:3000/disease/${st}`
        };

         $.ajax(requestConfig).then(function(responseMessage) {
      console.log(responseMessage)
      disease_list=responseMessage

      if(responseMessage.length==0)
      {
        $('#error').text("Sorry No Match Found.Please try again!").show()
      }
      else{
      let html=`<ul>`
      for(i=0;i<disease_list.length;i++)
      {
        html = html + `<li><a id="disease_list" href="http://localhost:3000/disease/diseaseID/${disease_list[i].id}"> ${disease_list[i].diseaseName} </a></li>`;
      }

      html = html + `</ul>`
      resultContainer.append(html);
      resultContainer.show();
    }
    });

    }
    });

})(window.jQuery);