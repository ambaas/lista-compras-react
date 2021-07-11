import React from 'react'
import Table from './components/Tables'
import Form from './components/Form'

function App(){

    return (
      <div className="container">
           <div className="row">
             <div className="col-12">
                <h1 className="mt-5">
                  Lista de compras
                </h1>
             </div>
           </div>
            <Form/>
            <Table/>
           <div className="row">
             <div className="col-12">
                <h1 className="mt-5">
                  Total: 234
                </h1>
             </div>
           </div>
         </div>
    )

  }


export default App