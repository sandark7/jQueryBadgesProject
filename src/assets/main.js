$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/1627589.json',
    dataType: 'jsonp',
    success: function(response) {
      var badges = response.courses.completed;
      var $badges = $('#badges');

      badges.forEach(function(item) {
        var $item = $('<div />', { class: 'course' });

        $item.append($('<h3>' + item.title + '</h3>'));
        $item.append($('<img src="' + item.badge + '"/>'));
        $item.append($('<a target="_blank" class="btn btn-primary" href="' + item.url + '">See Course</a>'));
        
        $badges.append($item);
      });
    }
  });

});
