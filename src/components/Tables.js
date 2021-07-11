
function Table () {
    return (
        <div className="row mt-3">
         <div className="col-12 ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Valor</th>
                <th scope="col">Açoes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <img alt="img-edit" src="https://img.icons8.com/material-outlined/20/000000/edit--v1.png"/> | 
                  <img alt="img-delete" src="https://img.icons8.com/ios-glyphs/20/000000/delete-forever.png"/>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
         </div>
       </div>
    )
}
export default Table