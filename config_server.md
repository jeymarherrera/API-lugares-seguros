# Configuración del servidor Azure Database for PostgreSQL para la BD PostgreSQL 👩‍💻

Para continuar con el desarrollo del proyecto Lugares Seguros fue necesario implemetar un servidor que nos permita acceder a la misma base de datos entre equipo de proyecto. 

Eligimos trabajar con Azure, especificamente el recurso [Azure Database for PostgreSQL](https://learn.microsoft.com/es-ES/azure/postgresql/flexible-server/quickstart-create-server-portal), un servidor que facilita el trabajo, pasando de un entorno local a cloud.

### 📍 Los pasos para configurar el servidor son los siguientes:

1. Crear una cuenta Azure
2. Crear un grupo de recursos en Azure
3. Crear el recurso/servicio Azure Database for PostgreSQL. <br>
[Aquí puedes encontrar más información sobre como realizar la configuración.](https://learn.microsoft.com/es-ES/azure/postgresql/flexible-server/quickstart-create-server-portal)

4. Llenar todos los campos como se muestra en la imagen:

    - En la esquina superior izquierda del portal, seleccione Crear un recurso (+).
    
    ![configuracionBD_1](https://user-images.githubusercontent.com/83784155/220818026-a6afefef-3aa7-42ce-a0dd-64887d99c8aa.jpg)
    
    - Seleccione Bases de datos>Azure Database for PostgreSQL. También puede escribir PostgreSQL en el cuadro de búsqueda para encontrar el servicio.
    - Seleccione Servidor flexible como opción de implementación.
    - Rellene el formulario Datos básicos.
    - Vaya a la pestaña Redes para configurar cómo se quiere conectar al servidor.
    - En Método de conectividad, seleccione Acceso público (direcciones IP permitidas). Si desea otorgar permisos a otro usuarios a la BD, se debe agregar las dirección IP que permita realizar la conexión. 

![configuracionBD_2](https://user-images.githubusercontent.com/83784155/220818144-2a308fd7-08d7-4409-a58c-221566fd98a0.jpg)

**Nota:** Es importante que identifique el nombre del servidor, nombre de usuario y contraseña porque son los datos que va nececitar para configurar pgAdmin.

5. Visualizaremos el panel de la imagen, donde veremos toda la información correspondiente a nuestro servidor. Con ella, podremos conectarnos a pgadmin4. 

![configuracionBD_3](https://user-images.githubusercontent.com/83784155/220818342-b466cfa9-2f76-4d35-bbdb-1cdbbab00c11.jpg)


5. Para acceder al Servidor, lo podemos realizar utilizando pgAdmin. Para ello continuamos con la siguiente configuración:

- En pgadmin4, damos click derecho y seleccionamos register, server.<br>
![configuracionBD_4](https://user-images.githubusercontent.com/83784155/220818564-74b31f98-7173-46f6-92b3-1c6484a66626.jpg)


- Agregamos los datos proporcionados por el servidor de Azure.<br>
![configuracionBD_5](https://user-images.githubusercontent.com/83784155/220819026-17fb394c-95c1-4941-bafa-04535040b7ce.jpg)


![configuracionBD_6](https://user-images.githubusercontent.com/83784155/220819039-26b6f1e4-424f-4264-85c1-59aba37d351a.jpg)

    
![configuracionBD_7](https://user-images.githubusercontent.com/83784155/220819052-d11d3a48-cfdc-4d8a-be1c-9c5f7b87cdb2.jpg)

    

Y nos aparecerá el servidor que hemos creado, donde se muestra la base de datos y tabla con la que se esta trabajando. De esta forma comprobamos que la conección del gestor pgAdmin se crealizó correctamente al servidor. 

![configuracionBD_8](https://user-images.githubusercontent.com/83784155/220819063-9a2dc0da-eb2d-4459-955b-679e950e7c11.jpg)



