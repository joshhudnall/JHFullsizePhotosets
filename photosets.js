// Resize photosets
var photosetLayouts = [];
$(document).ready(function() {
  $(".html_photoset").each(function(i) {
    var photoset_id = $(this).attr('id').substr(9);
    
    $(this).width("100%").children('iframe').width("100%");
  });

  adjustIFrames();
});

function adjustIFrames() {   
  var iFrames = $('.html_photoset iframe');

  function loopIFrames() {
    // Iterate through all iframes in the page.
    for (var i = 0, j = iFrames.length; i < j; i++) {
      var iFrame = $(iFrames[i]);
      adjustIFrame(iFrame);
    }
  }

  // Check if browser is Safari or Opera.
  if ($.browser.safari || $.browser.opera) {
    // Start timer when loaded.
    $('.html_photoset iframe').load(function() {
      setTimeout(loopIFrames, 0);
    });

    // Safari and Opera need something to force a load.
    for (var i = 0, j = iFrames.length; i < j; i++) {
      var iFrame = $(iFrames[i]);
      var iSource = iFrame.attr('src');
      iFrame.attr('src', '');
      iFrame.attr('src', iSource);
    }
  } else {
    // For other good browsers.
    $('.html_photoset iframe').load(function() {
      adjustIFrame(this);
    });
  }
}

function adjustIFrame(iframe) {
<<<<<<< HEAD
  var layout = $.parseJSON($(iframe).parent().attr('rel'));
=======
  var layout = $.parseJSON($(iframe).closest('.photoset-wrapper').attr('rel'));
>>>>>>> Updated to be more robust
  var gutter = 10;
  
  $(iframe).contents().find('.photoset_row').width("100%");
  var width = $(iframe).contents().find('.photoset_row').width();
  var newiFrameHeight = 0;
  for (i = 0; i < layout.length; i++) {
    var $img = $(iframe).contents().find('.photoset_row').eq(i).children('a').children('img');
    var numPics = layout[i];
    var newWidth = Math.floor((width - ((numPics - 1) * gutter)) / numPics);
    var newHeight = $img.closest('.photoset_row').height() * newWidth / $img.width();
    newiFrameHeight += newHeight;
    
    $img.closest('.photoset_row').height(newHeight+'px');
    $img.width(newWidth+'px');
  }
  $(iframe).height(newiFrameHeight);

  // Replace with high res if available and needed
  var $images = $(iframe).contents().find('.photoset_row').children('a').children('img');
  for (j = 0; j < $images.length; j++) {
    var $curImage = $($images[j]);
    var newSrc = $curImage.parent('a').attr('href');
    if (newSrc != undefined && newSrc != '') $curImage.attr('src', newSrc);
  }
}


