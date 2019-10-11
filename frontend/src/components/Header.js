import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
         
          
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
                    <div class="d-flex justify-content-start">
                      <a class="navbar-brand" href="/">CRM</a>
                      <a class="navbar-brand" href="/">Bienvenido </a>
                    </div>
                      
                    <div class=" d-flex justify-content-end" >
                    <ul class="navbar-nav d-flex ">
                      <li class="nav-item ">
                        <a class="nav-link inscritostocar" href="/votantes">Votantes</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/personal">Personal</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/roles">Roles</a>
                      </li>
                        <li class="nav-item ">
                        <a class="nav-link  " href="/contratos">Vínculo laboral</a>
                      </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/divipol">Divipol</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/graficas">Grafica</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/salir">Salir</a>
                      </li>
                    
                    </ul>
                  </div>
         
         
         
       
         </nav>
        )
    }
}

