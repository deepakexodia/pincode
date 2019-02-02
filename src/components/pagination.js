import React from 'react'

import './pagination.css'

export default function Pagination({ enabledAlphabets, onClickHandler }) {
  const ALBHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return (
    <ul className="pagination">
      {ALBHABETS.split('').map(alphabet => {
        return enabledAlphabets.includes(alphabet) ? (
          <li key={alphabet}>
            <a
              className="pagination__item"
              //   href={`#${alphabet}`}
              href="#"
              onClick={onClickHandler}
            >
              {alphabet}
            </a>
          </li>
        ) : (
          <li key={alphabet}>
            <a
              className={
                'pagination__item ' +
                `${
                  enabledAlphabets.includes(alphabet)
                    ? ''
                    : 'pagination__item--disabled'
                }`
              }
              onClick={onClickHandler}
            >
              {alphabet}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
