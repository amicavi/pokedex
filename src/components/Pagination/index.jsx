import React, { Component } from "react";
import './styles.css';
import constants from '../../utilities/constants.js';


class Pagination extends Component {

  getPages = (count, limit, current_page, current_offset) => {
    const total_pages = Math.ceil(count / limit);
    const page_limit = current_page > 2 ? current_page + 2 : 4;
    let page_number = current_page > 2 ? current_page - 2 : 0;
    let offset = page_number * constants.pagination.limit;
    let pages = [];

    while (page_number <= page_limit && page_limit <= total_pages) {
      pages.push({
        offset: offset,
        page_number: page_number + 1,
        active: page_number === current_page ? "active" : ""
      })
      page_number ++;
      offset = offset + limit;
    }
    return pages;
  }

  render() {
    const { previous, next, current_page, count, limit, onPaginationClick} = this.props;
    const current_offset = current_page * constants.pagination.limit;

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {previous !== null && (
            <li>
              <button className="page" aria-label="Previous" onClick={()=> onPaginationClick(current_offset - limit)}>
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
          )}
          {
            this.getPages(count, limit, current_page, current_offset).map(page => (
              <li key={page.page_number}>
                <button className={"page " + page.active} offset={page.offset} onClick={()=> onPaginationClick(page.offset)}>
                  {page.page_number}
                </button>
              </li>
            ))
          }
          {next && (
            <li>
              <button className="page" aria-label="Next" onClick={()=> onPaginationClick(current_offset + limit)}>
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
