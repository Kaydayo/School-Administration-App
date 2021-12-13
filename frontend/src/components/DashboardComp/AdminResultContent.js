export default function AdminResultContent() {
  return (
    <div>
      <div class='main-container'>
        <i>
          <div class='search-container'>
            <form action='#'>
              <input
                type='text'
                placeholder='search student..'
                name='search'
              ></input>
              <button type='submit'>
                <i class='fa fa-search'></i>
              </button>
            </form>
          </div>
          <h1>
            <strong>Student Results</strong>
          </h1>
        </i>
        <table>
          <tbody>
            <tr class='table-header'>
              <th class='table-header table-cell-1'>
                <strong>Name/Subjects</strong>
              </th>
              <th class='table-header'>Maths</th>
              <th class='table-header'>English</th>
              <th class='table-header'>Science</th>
              <th class='table-header'>Total</th>
            </tr>
            <tr class='table-row-odd'>
              <td class='table-data table-cell-1'>
                <div class='flex'>
                  &ensp;
                  <a href='#DC' class='links'>
                    <strong>Samson Ajulor</strong>
                  </a>
                </div>
              </td>
              <td class='table-data table-cell'>50</td>
              <td class='table-data table-cell'>40</td>
              <td class='table-data table-cell'>45</td>
              <td class='table-data table-cell'>49</td>
            </tr>
            <tr class='table-row'>
              <td class='table-data table-cell-1'>
                <div class='flex'>
                  &ensp;
                  <a href='#DC' class='links'>
                    <strong>Funmi Oluwaseun</strong>
                  </a>
                </div>
              </td>
              <td class='table-data table-cell'>56</td>
              <td class='table-data table-cell'>67</td>
              <td class='table-data table-cell'>45</td>
              <td class='table-data table-cell'>49</td>
            </tr>
            <tr class='table-row-odd'>
              <td class='table-data table-cell-1'>
                <div class='flex'>
                  &ensp;
                  <a href='#DC' class='links'>
                    <strong>Mujeeb Adebowale</strong>
                  </a>
                </div>
              </td>
              <td class='table-data table-cell'>45</td>
              <td class='table-data table-cell'>49</td>
              <td class='table-data table-cell'>45</td>
              <td class='table-data table-cell'>49</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
