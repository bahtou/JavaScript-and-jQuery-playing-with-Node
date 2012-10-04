#NOTES  

##copy & pastes  

***

* 
**Chapter 7** and **8** introduce the fancybox jQuery plugin.  
They each contain a folder labeled **`fancybox`**.  
Copy and paste the folder into the **`_js`** folder.  

* **Chapter 7** has a folder labeled **`example`**.   
Copy and paste the folder into the **`_js`** folder.  
The **`_js`** folder should now contain 3three folders.  

* **Chapter 8** has a folder labeled **`images`** with a single image file: **`arrow.png`**.  
Copy and paste the image file into the **`_image`** folder.


## misc  

---

* **Chapter 9** introduces forms and validation.  
This tool might come inhandy: [html2jade](http://html2jade.aaron-powell.com/)  
Also, in the **`validation.jade`** file pay attention to the **`form(action='...')`**.  
A few extra steps are needed to get this working: **`app.post()`**.

* **Chapter 11** introduces AJAX.  
jQuery's [documentation](http://api.jquery.com/category/ajax/?rdfrom=http%3A%2F%2Fdocs.jquery.com%2Fmw%2Findex.php%3Ftitle%3DAjax%26redirect%3Dno) works wonders.  
A file `login.php` is used for the example AJAX but I created a `login.js` file that takes care of the communication and added a `post` route the response with the desired output.  
 _ _ _ *note the differences between **`$.getJSON`** , **`$.get`**, **`$.ajax`** and **`$.postJSON`**  

* **Chapter 12** had an interesting application with *Google Maps*.  A problem that I ran into was in the `map.jade` file.  I missed spell `append stylesheets` (I had `stylesheet`) and that resulted in the map not displaying.  There were no bugs or anything.