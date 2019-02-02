import React from 'react'

import {
  Table as ExtTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from 'react-super-responsive-table'

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './table.css'

// export default function Table({ headers, data }) {
//   return (
//     <ExtTable>
//       <Thead>
//         <Tr>
//           {headers.map(hdr => (
//             <Th key={hdr}>{hdr}</Th>
//           ))}
//         </Tr>
//       </Thead>
//       <Tbody>
//         {data.map((row, index) => (
//           <Tr key={index} className="row">
//             {row.map((cell, index) => (
//               <Td key={index}>{cell}</Td>
//             ))}
//           </Tr>
//         ))}
//       </Tbody>
//     </ExtTable>
//   )
// }

export default class Table extends React.Component {

state = {
  headers: this.props.headers,
    data: this.props.data,
}

componentWillReceiveProps = (nextProps) => {
  this.setState({
    headers: nextProps.headers,
    data: nextProps.data,
  })
}

handleClick = (event) => {
}

  render = () => {
    const {headers, data} = this.props;
    return (
    <ExtTable>
    <Thead>
      <Tr>
        {headers.map(hdr => (
          <Th key={hdr} onClick={this.handleClick}>{hdr}</Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {data.map((row, index) => (
        <Tr key={index} className="row">
          {row.map((cell, index) => (
            <Td key={index}>{cell}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </ExtTable>
    )
  }
}
