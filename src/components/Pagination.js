import React from 'react';

const Pagination = ({ totalPages, activePage, onPageChange }) => {
  return (
    <div class="ui pagination menu aria-label">
      <a class="active item">1</a>
      <div class="disabled item">...</div>
      <a class="item">10</a>
      <a class="item">11</a>
      <a class="item">12</a>
    </div>
  );
};

export default Pagination;
