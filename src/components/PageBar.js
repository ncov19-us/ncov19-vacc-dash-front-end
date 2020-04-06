import React, { useState } from 'react';
import { Pagination } from 'semantic-ui-react';

function PageBar({ count, dispatch }) {
  const pageSize = 20;
  const pageCount = Math.ceil(count / pageSize);
  const [activePage, setActivePage] = useState(1);

  // Semantic onPageChange called with SyntheticEvent and all props
  const handleClick = (event, data) => {
    event.preventDefault();

    setActivePage(data.activePage);

    // setUrl(`api/trials?limit=7&page=${data.activePage}`);

    dispatch({ type: 'CHANGE_PAGE', payload: data.activePage });
  };

  return (
    <Pagination
      totalPages={pageCount}
      activePage={activePage}
      onPageChange={handleClick}
      inverted
    />
  );
}

export default PageBar;
