import React, { useState } from "react";
import { Pagination } from "semantic-ui-react";

function PageBar({ count, dispatch }) {
  // this needs to be the same as limit in backend call
  const pageSize = 7;
  const pageCount = Math.ceil(count / pageSize);
  const [activePage, setActivePage] = useState(1);

  // Semantic onPageChange called with SyntheticEvent and all props
  const handleClick = (event, data) => {
    event.preventDefault();

    setActivePage(data.activePage);


    dispatch({ type: "CHANGE_PAGE", payload: data.activePage });
  };

  return (
    <div className="pagination">
      <Pagination
        totalPages={pageCount}
        activePage={activePage}
        onPageChange={handleClick}
        siblingRange={0}
        firstItem={null}
        lastItem={null}
        size="tiny"
        inverted
      />
    </div>
  );
}

export default PageBar;
