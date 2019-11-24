const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts',function(error,posts){
   if(err){
    console.log(err);
   }else{
    console.log(posts);
   }
    
});
