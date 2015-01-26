Not Supported
-------------
This is a very old script and I'm not even sure if it works anymore. Your mileage may vary. As such, I cannot provide support for its use. You're on your own.


Fullsize Photosets
------------------
Simply drop this script into your blog and photosets will automatically grow to fit the full width of their container object. Degrades gracefully in browsers that don't have JavaScript enabled. Where available, high res images will be used.

Installation
------------

Download the script to your computer, and then use https://www.tumblr.com/themes/upload_static_file to upload it to tumblr and get an asset link.

Then in your theme, add `<script type="text/javascript" src="YOUR_SCRIPT_LINK_HERE"></script>` right before the `</head>` tag in your custom HTML (be sure to replace `YOUR_SCRIPT_LINK_HERE` with the link you got from Tumblr in the previous step).

Then add the following theme code to the immediate parent container that holds the photoset: `rel='{JSPhotosetLayout}'` and give that container a class of `photoset-wrapper`. Every theme is different, but here is an example:
```HTML
  {block:Photoset}
    <!-- Photoset -->
    <div id="post-{PostID}" class="post photoset">
      <a class="icon" href="{Permalink}"></a>
      <div class="body">
        <div class="media">
          <div class="float">                                                                                             
            <div id="media-{PostID}" class="photoset-wrapper" rel='{JSPhotosetLayout}'>
              {Photoset-500}
            </div>
          </div>
        </div>
        {block:Caption}
          <div class="content"> 	 	 	   
              {Caption}
          </div>
        {/block:Caption}
        <!-- End Photoset -->
      </div>
    </div>
  {/block:Photoset}
```
