export default function StudentResultContent() {
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
            <strong>My Result</strong>
          </h1>
        </i>
        <table>
          <tbody>
            <tr class='table-header'>
              <th class='table-header table-cell-1'>
                <strong>Subjects</strong>
              </th>
              <th class='table-header'>Teacher</th>
              <th class='table-header'>Grade</th>
            </tr>
            <tr class='table-row-odd'>
              <td class='table-data table-cell-1'>
                <div class='flex'>
                  &ensp;
                  <a href='#DC' class='links'>
                    <strong>Maths</strong>
                  </a>
                </div>
              </td>
              <td class='table-data table-cell'>Mr. Samson Ajulor</td>
              <td class='table-data table-cell'>40</td>
            </tr>
            <tr class='table-row'>
              <td class='table-data table-cell-1'>
                <div class='flex'>
                  &ensp;
                  <a href='#DC' class='links'>
                    <strong>English</strong>
                  </a>
                </div>
              </td>
              <td class='table-data table-cell'>Miss Funmi Oluwaseun</td>
              <td class='table-data table-cell'>67</td>
            </tr>
            <tr class='table-row-odd'>
              <td class='table-data table-cell-1'>
                <div class='flex'>
                  &ensp;
                  <a href='#DC' class='links'>
                    <strong>Science</strong>
                  </a>
                </div>
              </td>
              <td class='table-data table-cell'>Mr Mujeeb Adebowale</td>
              <td class='table-data table-cell'>49</td>
            </tr>
            <tr class='table-row'>
              <td class='table-data table-cell-1'>
                <div class='flex'>
                  &ensp;
                  <a href='#DC' class='links'>
                    <strong>Total</strong>
                  </a>
                </div>
              </td>
              <td class='table-data table-cell'>-</td>
              <td class='table-data table-cell'>1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
