import React from 'react'
function Form(){ 

        return (
            <div className="row mt-3">
                <div className="col-12">
                    <input name="nome" placeholder="Nome" className="form-control"/>
                </div>
                <div className="col-6 mt-3">
                    <input placeholder="quantidade" className="form-control"/>
                </div>
                <div className="col-6 mt-3">
                    <input placeholder="Preço" className="form-control"/>
                </div>
                <div className="col-12 mt-3">
                    <input type="submit" className="btn btn-danger" style={{width:"100%"}} value="Adicionar" />
                </div>
            </div>
        )
    }

export default Form