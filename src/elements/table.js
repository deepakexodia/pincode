import React from 'react'

import {
  Table as ExtTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from 'react-super-responsive-table'

import './table.css'

export default function Table({
  headers = ['Post Office Name', 'Pincode', 'Pin Code', 'Pin Code', 'Pin Code'],
  data = [[0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]],
}) {
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
