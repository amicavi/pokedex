import React, { Component } from "react";
import './styles.css';

class Pagination extends Component {
  
  getPages = (count, limit, current_page) => {
    const total_pages = Math.ceil(count / limit);
    const page_limit = current_page > 2 ? current_page + 2 : 4;
    let page_number = current_page > 2 ? current_page - 2 : 0;
    let offset = current_page > 0 ? (page_number * 50) : 0;
    let pages = [];

    while (page_number <= page_limit && page_limit <= total_pages) {
      pages.push({
        offset: offset,
        page_number: page_number,
        active: page_number === current_page ? "active" : ""
      })
      page_number ++;
      offset = offset + limit;
    }
    console.log(pages);
    return pages;
  }

  render() {
    const { previous, next, current_page, count, limit, onPaginationClick} = this.props;
    console.log("current_page",current_page);

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {previous != null && (
            <li>
              <button className="page" aria-label="Previous" onClick={()=> onPaginationClick(current_page - limit)}>
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
          )}
          { 
            this.getPages(count, limit, current_page).map(page => (
              <li key={page.page_number}>
                <button className={"page " + page.active} onClick={()=> onPaginationClick(page.offset)}>
                  {page.page_number}
                </button>
              </li>
            ))
          }
          {next != null && (
            <li>
              <button className="page" aria-label="Next" onClick={()=> onPaginationClick(current_page + limit)}>
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
