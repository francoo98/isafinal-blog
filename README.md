# blog

### 1- Crear una aplicación en JHipster basado en un modelo de clases jdl
### 2- Crear dos test de unidad
1- PostResourse#createPostWithoutBlog()  
Correr con: `./mvnw test -Dtest="PostResourceIT#createPostWithoutBlog"`  
[Archivo](https://github.com/francoo98/isafinal-blog/blob/master/src/test/java/com/jhipster/demo/blog/web/rest/PostResourceIT.java)   
2- BlogResourceIT#createBlogWithInvalidName  
Ejecutar: `./mvnw test -Dtest=BlogResourceIT#createBlogWithInvalidName`  
[Archivo](https://github.com/francoo98/isafinal-blog/blob/master/src/test/java/com/jhipster/demo/blog/web/rest/BlogResourceIT.java)  

### 3- Crear tres tests E2E en Cypress  
Abrir cypress con `./npmw run cypress`  
[Archivo](https://github.com/francoo98/isafinal-blog/blob/93d21345336a907ab47fd7343c53a7f656ac4e85/src/test/javascript/cypress/e2e/final.cy.ts)
### 8- Implementar un servidor de ci-cd
Para ejecutarlo buscar en docker el contenedor de jenkins:  
`docker container ls`  
`docker container start`  
