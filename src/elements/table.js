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

export default function Table({ headers, data }) {
  return (
    <ExtTable>
      <Thead>
        <Tr>
          {headers.map(hdr => (
            <Th key={hdr}>{hdr}</Th>
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
