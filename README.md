# blog

### 1- Crear una aplicación en JHipster basado en un modelo de clases jdl
### 2- Crear dos test de unidad
1- PostResourse#createPostWithoutBlog()  
Correr con: `./mvnw test -Dtest="PostResourceIT#createPostWithoutBlog"`  
[Archivo](https://github.com/francoo98/isafinal-blog/blob/master/src/test/java/com/jhipster/demo/blog/web/rest/PostResourceIT.java)   
2- BlogResourceIT#createBlogWithInvalidName  
Ejecutar: `./mvnw test -Dtest=BlogResourceIT#createBlogWithInvalidName`  
[Archivo](https://github.com/francoo98/isafinal-blog/blob/master/src/test/java/com/jhipster/demo/blog/web/rest/BlogResourceIT.java)  
