import React, { Component } from 'react'

export default class Roles extends Component {
    render() {
    
        return (

         
         
           
            <div class="container-fluid">
                                    
                <div class="d-flex justify-content-center">
                  <h1  class="p-5">ROLES</h1>
                </div>

             <div class="align-self-center ">

                  <a href="/personal/crear"  class="btn btn-primary col-md-20 p-2  ">CREAR ROL</a>
                  <a href="/personal/crear"  class="btn btn-primary col-md-20 p-2 m-2">CEDULA</a>
                  <a href="/personal/crear"  class="btn btn-primary col-md-20 p-2 ">NOMBRE</a>

              </div>
                
                
            <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Cedula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Telefono</th>
                <th scope="col">Direccion</th>
                <th scope="col">Correo</th>
                <th scope="col">Contraseña</th>
                <th scope="col">
                <select class="browser-default custom-select">
                  <option selected>Tipo</option>
                  <option value="1">gestor</option>
                  <option value="2">Funcionario</option>
                  <option value="3">Lider estrutura</option>
                  <option value="2">Lider independiente</option>
                </select>
                </th>
                <th scope="col">
                <select class="browser-default custom-select">
                  <option selected>Departamento</option>
                  <option value="1">valle del cauca</option>
                  <option value="2">valle del cauca</option>
                  <option value="3">valle del cauca</option>
                  <option value="2">valle del cauca</option>
                </select>
                </th>
                <th scope="col">
                <select class="browser-default custom-select">
                  <option selected>Municipio</option>
                  <option value="1">cali</option>
                  <option value="2">medellin</option>
                  <option value="3">barranquilla</option>
                  <option value="2">bogota</option>
                </select>
                </th>
                <th scope="col">
                <select class="browser-default custom-select">
                  <option selected>Comuna</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="2">4</option>
                </select>
                </th>
                <th scope="col"></th>
                <th scope="col"></th>
              
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><a href="/roles/edictar/"  class="btn btn-warning glyphicon glyphicon-wrench"></a></td>
                <td><a href="/roles/borrar/opcion/"  class="btn btn-danger glyphicon glyphicon-trash"></a></td>
             
              </tr>
             
            </tbody>
          </table>
          </div>
          
        )
    }
}

