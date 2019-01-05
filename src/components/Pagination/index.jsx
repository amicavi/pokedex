import React, { Component } from "react";

class Pagination extends Component {
  
  getPages = (count, limit, url, current_offset) => {
    const total_pages = Math.ceil(count / limit);
    const partial_url = url  + "?limit=" + limit + "&offset=";
    let page_number = 1;
    let offset = 0;
    let pages = [];

    while (page_number <= total_pages) {
      pages.push({
        url: partial_url + offset,
        page_number: page_number,
        active: offset === current_offset ? "active" : ""
      })
      page_number ++;
      offset = offset + limit;
    }

    return pages;
  }

  render() {
    const { previous, next, current_offset, count, url, limit} = this.props;
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {previous != null && (
            <li>
              <a href={previous} aria-label="Previous" onClick="handleClick">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          )}
          { 
            this.getPages(count, limit, url, current_offset).map(page => (
              <li key={page.page_number}>
                <a href={page.url} className={page.active} onClick="handleClick">
                  {page.page_number}
                </a>
              </li>
            ))
          }
          {next != null && (
            <li>
              <a href={next} aria-label="Next" onClick="handleClick">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
